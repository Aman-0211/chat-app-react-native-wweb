import React, { useState , useEffect} from "react";
import { StyleSheet, View } from "react-native";
import { ChatList, Header, Login, SignUp , InBox } from "./Component";






function App(){

  const[ route, setRoute] = useState("signup")
  const [chatId, setUserId] = useState("")
  const [loginUser, setLoginUser] = useState('');

  useEffect(() => {
    const loginUser = localStorage.getItem("currentUser")
    setLoginUser(loginUser ? JSON.parse(loginUser):'')
    setRoute(loginUser ? 'chatlist':'login')
  }, []);

  function router(route){
    switch (route) {
      case 'login':
        return <Login setRoute={setRoute} />
      
      case 'chatlist':
        return (
          <View style={{flexDirection:"row"}}>
            <ChatList setUserId={setUserId} setRoute={setRoute} />
            {chatId && <View style={{alignItems:'flex-start'}}>
            <InBox  chatId={chatId} />
            </View>}
          </View>
        )
      default:
        return <SignUp setRoute={setRoute} />
       
    }
  }
  

    return (
      <View style={styles.app}>
        <Header route={route} setRoute={setRoute} />

        <View style={route === "chatlist" ? {height:"89vh",width:500}:styles.body}>
        
          {router(route)}
        
        </View>
        
      </View>
    );
  
}

const styles = StyleSheet.create({
  app: { 
      flex: 1 ,
      backgroundColor:"#ccc"
  },
  body:{
    flexGrow:1,
    alignItems:"center",
    justifyContent:"center",
    height:"100vh"
  }
});

export default App;
