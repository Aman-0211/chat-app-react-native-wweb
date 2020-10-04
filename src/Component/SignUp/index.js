import React,{useState} from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { Link } from '../../Common';
import {  SaveDataToLocalStorage } from '../../utils';
import {styles} from './styles';


function SignUp({setRoute}){

    const [value , setValue] = useState({username: "",password: "",conformPassword:""});


const handleSubmit =(event) =>{
    event.preventDefault();
    const { username, password , conformPassword } = value;

    if (password !== conformPassword) {
        alert("Passwords don't match");
    }else if(username.length === 0 || password.length === 0){
        alert("fields cannot be empty!");
    } else {
        const randomNum = Math.ceil(Math.random() * 10000);
        const userData = {
       
        username,
        password,
        id: randomNum,
        group:"chat"
        }
        
        SaveDataToLocalStorage(userData)
        setRoute("login")
    }
    
   
    }

    return(
        
        <View style={styles.formCotainer}>
            <Text style={styles.formHeader}>Sign Up</Text>
            <View style={styles.innerContainer} >
            <TextInput
                placeholder="Username!"
                onChangeText={text => setValue({...value,username:text})}
                defaultValue={value.username}
                style={styles.textInput}
            />
            <TextInput
                placeholder="Password!"
                secureTextEntry={true}
                onChangeText={text => setValue({...value,password:text})}
                defaultValue={value.password}
                style={styles.textInput}
            />
            <TextInput
                placeholder="Conform Password!"
                secureTextEntry={true}
                onChangeText={text => setValue({...value,conformPassword:text})}
                defaultValue={value.conformPassword}
                style={styles.textInput}
            />
            <Button title="Signup" style={styles.button} onPress={handleSubmit} />
            <Link style={styles.link} onPress={()=>{setRoute('login')}}>
                go to signin
            </Link>
            </View>
        </View>
    )
}

export default SignUp;