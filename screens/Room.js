import React, { useState, useCallback, useEffect } from 'react';
import {
  GiftedChat,
  Send,
  InputToolbar,
  Bubble,
} from 'react-native-gifted-chat';
import { StyleSheet, View, TextInput } from 'react-native';
import Header from '../components/Header';
import SendIcon from '../svg/SendIcon';

export default function Room() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <GiftedChat
        textInputStyle={styles.textInput}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  textInput: {
    color: 'black',
    padding: 12,
    borderColor: '#5603AD',
    backgroundColor: 'white',
    borderWidth: 2,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  inputToolbar: {
    padding: 16,
    paddingEnd: 10,
    backgroundColor: '#B6DEFD',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  bubbleLeft: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderBottomLeftRadius: 0,
    padding: 12,
    marginLeft: 52,
  },
  bubbleRight: {
    backgroundColor: '#993AFC',
    borderRadius: 12,
    borderBottomRightRadius: 0,
    padding: 12,
    marginRight: 24,
  },
});
