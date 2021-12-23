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
import {
  GET_ROOM,
  SEND_MESSAGE,
  MESSAGE_ADDED,
  TYPING_USER_SUBSCRIPTION,
  TYPING_USER_MUTATION,
} from '../../queries/queries';
import { styles } from './Room.style';
import TypingIndicator from '../../components/TypingIndicator/TypingIndicator';
import debounce from 'lodash.debounce';

export default function Room({ route }) {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const { room } = route.params;
  const roomId = room.id;

  const {
    data: subscriptionData,
    loading: subscriptionLoading,
    error: subscriptionError,
  } = useSubscription(MESSAGE_ADDED, {
    variables: { roomId },
  });

  const {
    data: typingUserSubscriptionData,
    loading: typingUserSubscriptionLoading,
    error: typingUserSubscriptionError,
  } = useSubscription(TYPING_USER_SUBSCRIPTION, {
    variables: { roomId },
  });

  const [typingUser] = useMutation(TYPING_USER_MUTATION);
  const [sendMessage] = useMutation(SEND_MESSAGE);
  const { loading, error, data, refetch } = useQuery(GET_ROOM, {
    variables: {
      roomId,
    },
  });

  useEffect(() => {
    if (
      !typingUserSubscriptionLoading &&
      !typingUserSubscriptionError &&
      typingUserSubscriptionData
    ) {
      if (typingUserSubscriptionData.typingUser.id !== data.room.user.id) {
        setIsTyping(true);
        debouncedHandleChange();
      }
    }
  }, [typingUserSubscriptionData]);

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
    setIsTyping(false);
  };

  const debouncedHandleChange = useMemo(() => debounce(handleChange, 300), []);

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
        }}
        renderChatFooter={() => <TypingIndicator isTyping={isTyping} />}
      />
    </View>
  );
}
