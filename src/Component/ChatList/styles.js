import { StyleSheet,  } from 'react-native';

export const styles = StyleSheet.create({
    chatContainer:{
        backgroundColor:"#fff",
        justifyContent:'flex-start',
        shadowColor: '#000',
        minWidth:300,
        minHeight:600,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 2,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 16,
      },
      chatHeader:{
        paddingVertical:14,
        fontSize:18,
        fontFamily:'sans-serif',
          textAlign:'center'
      }
})

