import React,{useState,useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import {styles} from './styles'






const Item = ({ dataItem,setUserId}) => {
    return(
    <View key={dataItem.item.id} style={styles.item}>
      <Text style={styles.title} onPress={()=>{setUserId(dataItem.item)}}>{dataItem.item.username}</Text>
    </View>
  )};

function ChatList({setRoute,setUserId}){

    const [loginUser, setLoginUser] = useState('');
    const [userList , setUserList] = useState([]);
    
    useEffect(() => {
        const user = localStorage.getItem("users")
        setUserList(JSON.parse(user))
        const loginUser = localStorage.getItem("currentUser")
        setLoginUser(JSON.parse(loginUser))
      }, []);

      const data = userList.filter(item => item.id !== loginUser.id);


      const renderItem = ({ item , loginUser , setUserId, setRoute}) => (
        <Item dataItem={item} loginUser={loginUser} setUserId={setUserId} setRoute={setRoute}  />
      );

      console.log("code",loginUser);
    
    return (
        <>
        <View style={styles.chatContainer}>
            <Text style={styles.chatHeader}>Chat List</Text>
            <View>
            <FlatList
                data={data}
                renderItem={(item)=>renderItem({item,loginUser,setRoute,setUserId})}
                keyExtractor={item => (item.id)}
            />
            </View>
        </View>
        </>
    )
}

export default ChatList