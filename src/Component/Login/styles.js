import { StyleSheet,  } from 'react-native';


export const styles = StyleSheet.create({
    formCotainer:{ 
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        shadowColor: '#000',
        width:300,
        height:300,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    formHeader:{
        fontSize:20,
         padding:20,
         fontFamily:'sans-serif'   
    },
    innerContainer:{
        padding:20 ,
        justifyContent:"center",
        alignContent:"center"
    },
    textInput:{ 
        height: 40,
         borderColor: '#000',
         borderWidth: 1,
         paddingHorizontal:8,
         marginVertical:8,
         fontFamily:'sans-serif',
         borderRadius:5   
     },
     button:{
         color:'#283E4A',
         marginVertical:10,
         fontFamily:'sans-serif',
     },

     link:{
        color:'#283E4A',
        textAlign:'center',
        paddingVertical:16
    }



})