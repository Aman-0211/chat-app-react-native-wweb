import { StyleSheet,  } from 'react-native';

export const styles = StyleSheet.create({
    chatContainer:{
            flex: 1,
            alignItems: "stretch",
            paddingBottom:20,
            position:'relative'
    },
    item: {
        backgroundColor: '#43677a',
        padding: 20,
        marginVertical: 2,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 16,
        padding: 10, 
        textAlign: "center",
        color:"#FFF"
      },
      chatHeader:{
        fontSize:18,
        fontFamily:'sans-serif',
          textAlign:'center',
          width:500,
            backgroundColor: "#283E4A",
            borderWidth: 1,
            borderColor: "#000",
          
      },
      textInput:{
        height: 40,
        width: 300,
        borderColor: "#000",
        borderWidth: 1,
        fontFamily: "sans-serif",
        paddingHorizontal: 16,
        marginHorizontal: 16,
        borderRadius: 5,
      },
      inputContaier:{
        flexDirection: "row",
        
        justifyContent: "space-around",
        alignItems: "stretch",
        flex: 0.5,
        maxWidth: 500,
        zIndex:1000,
        bottom:20
        
      },
      sendButton:{
        height: 40,
        width: 300,
        borderColor: "#000",
        borderWidth: 1,
        fontFamily: "sans-serif",
        paddingHorizontal: 16,
        marginRight: 16,
        borderRadius: 5,
      },
      date:{
          fontSize:14,
          textAlign:"right"
      }
})

