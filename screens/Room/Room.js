import React, { useState, useCallback, useEffect } from 'react';
import {
  GiftedChat,
  Send,
  InputToolbar,
  Bubble,
} from 'react-native-gifted-chat';
import { View } from 'react-native';
import Header from '../../components/Header/Header';
import SendIcon from '../../svg/SendIcon';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ROOM, SEND_MESSAGE } from '../../queries/queries';
import { styles } from './Room.style';

export default function Room({ route }) {
  const [messages, setMessages] = useState([]);
  const { room } = route.params;
  const roomId = room.id;

  const [sendMessage] = useMutation(SEND_MESSAGE);
  const { loading, error, data } = useQuery(GET_ROOM, {
    variables: {
      roomId,
    },
    pollInterval: 500,
  });

  if (loading) return null;
  if (error) return null;

  useEffect(() => {
    setMessages(
      data.room.messages.map((message) => ({
        ...message,
        text: message.body,
        _id: message.id,
        createdAt: message.insertedAt,
        user: {
          _id: message.user.id,
          name: '',
          avatar: '',
        },
      }))
    );
  }, []);

  async function newMessage(body, roomId) {
    try {
      await sendMessage({ variables: { body: body, roomId: roomId } });
    } catch (e) {
      console.error(e);
    }
  }

  const onSend = useCallback((messages = []) => {
    newMessage(messages[0].text, roomId);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={styles.container}>
      <Header name={data.room.name} />
      <GiftedChat
        textInputStyle={styles.textInput}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: data.room.user.id,
        }}
        placeholder=""
        renderAvatar={null}
        renderSend={(props) => (
          <Send {...props}>
            <SendIcon />
          </Send>
        )}
        alwaysShowSend
        renderInputToolbar={(props) => (
          <InputToolbar {...props} containerStyle={styles.inputToolbar} />
        )}
        minInputToolbarHeight={100}
        // isTyping
        renderBubble={(props) => (
          <Bubble
            {...props}
            wrapperStyle={{
              right: styles.bubbleRight,
              left: styles.bubbleLeft,
            }}
          />
        )}
        renderDay={() => {}}
        renderTime={() => {}}
      />
    </View>
  );
}
