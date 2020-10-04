
import { StyleSheet,  } from 'react-native';
export const styles = StyleSheet.create({
    
    
    header: {
      backgroundColor:"#283E4A",
      flex:1,
      justifyContent: 'center',
    alignItems:'center',
    flexDirection:"row"
    },
    title: {
      fontWeight: "bold",
      fontSize: "1.5rem",
      marginVertical: "1em",
      justifyContent:"center",
      color:"#FFF"
    },
    text: {
      lineHeight: "1.5em",
      fontSize: "1.125rem",
      marginVertical: "1em",
      textAlign: "center",
      alignItems:"center"
    },
    link: {
        position:'absolute',
        right:0,
        justifyContent:"flex-end",
        zIndex:1000
    },
    code: {
        flexDirection:"row", justifyContent:'space-between' 
    },
    linkbutton:{
        position:"absolute",
        alignItems:'center',
        right:10
    }
  });