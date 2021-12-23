import React, { useState, useCallback, useEffect, useMemo } from 'react';
import {
  GiftedChat,
  Send,
  InputToolbar,
  Bubble,
} from 'react-native-gifted-chat';
import { View, Text } from 'react-native';
import Header from '../../components/Header/Header';
import SendIcon from '../../svg/SendIcon';
import { useQuery, useMutation, useSubscription } from '@apollo/client';
import { GET_ROOM } from '../../gql/queries';
import { MESSAGE_ADDED_SUBSCRIPTION } from '../../gql/subscriptions';
import {
  SEND_MESSAGE_MUTATION,
  TYPING_USER_MUTATION,
} from '../../gql/mutations';
import { styles } from './Room.style';
import TypingIndicator from '../../components/TypingIndicator/TypingIndicator';
import debounce from 'lodash.debounce';

export default function Room({ route }) {
  const [messages, setMessages] = useState([]);
  const [border, setBorder] = useState(false);
  const [typingUser] = useMutation(TYPING_USER_MUTATION);
  const [sendMessage] = useMutation(SEND_MESSAGE_MUTATION);

  const { room } = route.params;
  const roomId = room.id;

  const {
    data: subscriptionData,
    loading: subscriptionLoading,
    error: subscriptionError,
  } = useSubscription(MESSAGE_ADDED_SUBSCRIPTION, {
    variables: { roomId },
  });

  const { loading, error, data, refetch } = useQuery(GET_ROOM, {
    variables: {
      roomId,
    },
  });

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
  }, [data]);

  useEffect(() => {
    if (!subscriptionLoading && !subscriptionError && subscriptionData) {
      refetch();
    }
  }, [subscriptionData]);

  useEffect(() => {
    refetch();
  }, []);

  async function newMessage(body, roomId) {
    try {
      await sendMessage({ variables: { body: body, roomId: roomId } });
    } catch (e) {
      console.error(e);
    }
  }

  async function startTyping(roomId) {
    try {
      await typingUser({ variables: { roomId: roomId } });
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

  const handleChange = async () => {
    setBorder(false);
  };

  const debouncedHandleChange = useMemo(() => debounce(handleChange, 400), []);

  useEffect(() => {
    return () => {
      debouncedHandleChange.cancel();
    };
  }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error</Text>;

  return (
    <View style={styles.container}>
      <Header name={data.room.name} />
      <GiftedChat
        textInputStyle={[
          styles.textInput,
          {
            borderWidth: border ? 2 : 0,
          },
        ]}
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
        minInputToolbarHeight={70}
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
        onInputTextChanged={() => {
          startTyping(roomId);
          setBorder(true);
          debouncedHandleChange();
        }}
        renderFooter={() => (
          <TypingIndicator roomId={roomId} userId={data.room.user.id} />
        )}
      />
    </View>
  );
}
