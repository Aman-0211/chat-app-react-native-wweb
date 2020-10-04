import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { SaveChatsToLocalStorage } from "../../utils";
import {styles} from './styles'



const Item = ({ dataItem , loginUser}) => {
    return(
    <View  style={styles.item}>
        <Text>{dataItem.item.sender === loginUser.id ? "send":'recive'}</Text>
      <Text style={styles.title}>{dataItem.item.message}</Text>
      <Text style={styles.date}>{dataItem.item.date}</Text>
    </View>
  )};



function InBox({ chatId }) {
  const [content, setContent] = useState("");

  const [loginUser, setLoginUser] = useState("");

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const loginUser = localStorage.getItem("currentUser");
    setLoginUser(JSON.parse(loginUser));
  }, []);

  useEffect(() => {
      console.log("I call");
    const chats = localStorage.getItem("chats");
    setChats(chats ? JSON.parse(chats) : []);

  }, [content]);

  const handleSubmit = (e) => {
      e.preventDefault();
    const chatData = {
      message: content,
      senderName:loginUser.username,
      reciverName:chatId.username,
      sender: loginUser.id,
      reciver: chatId.id,
      date: new Date(),
    };



    SaveChatsToLocalStorage(chatData);
    setContent("");
    setChats([...chats, chatData ])
  };

  const renderItem = ({ item , loginUser }) => (
    <Item dataItem={item} loginUser={loginUser}/>
  );

  const messages = chats.filter((item) => item.reciver === loginUser.id  && item.sender === chatId.id );
    console.log("essage",messages);

  return (
    <View
      style={styles.chatContainer}
    >
      <View style={{ flex: 5, backgroundColor: "#ccc" }}>
        <View
          style={styles.chatHeader}
        >
          <Text style={styles.title}>
            {chatId.username}
          </Text>
        </View>
        <View style={{ height: "76vh" }}>
          <FlatList
            data={messages|| chats}
            renderItem={(item)=>renderItem({item,loginUser})}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View
        style={styles.inputContaier}
      >
        <TextInput
          placeholder="Type here!"
          onChangeText={(text) => setContent(text)}
          style={styles.textInput}
        />
        <Button
          title="Send"
          style={styles.sendButton}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

export default InBox;
