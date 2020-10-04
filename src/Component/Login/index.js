import React,{useState,useEffect} from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { Link } from '../../Common';
import { SaveCurrentuser } from '../../utils';
import {styles} from './styles';

function Login({setRoute}){

    const [value , setValue] = useState({username: "",password:''});
    const [users, setUser] = useState('')
    ;
    
    useEffect(() => {
        const user = localStorage.getItem("users")
        setUser(JSON.parse(user))
      }, [value]);
    
    
    const handleSubmit =(event) =>{
        event.preventDefault();
        const isUserPresent = users.find(user => user.username === value.username && user.password === value.password)
        if(isUserPresent){
        SaveCurrentuser(isUserPresent)
        setRoute("chatlist")
        }
        else{
            alert("Invalid username or password!")
        }
        
        }

    return(
        
        <View style={styles.formCotainer}>
            <Text style={styles.formHeader}>Sign In</Text>
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
            <Button title="Submit" style={styles.button} onPress={handleSubmit} />
            <Link style={styles.link} onPress={()=>{setRoute('signup')}}>
                go to signup
            </Link>
            </View>
        </View>
    )
}

export default Login;