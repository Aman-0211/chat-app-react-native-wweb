import React from 'react';
import { Text, View } from 'react-native';
import { Link } from '../../Common/index.js';
import {styles} from './styles.js'


 function Header({route,setRoute}){
    
    return(
        <View style={styles.header}>
            <View style={styles.code}>
                <Text style={styles.title}>Message</Text>
          
            </View>
            {route === 'chatlist' && 
          <View style={styles.linkbutton}>
          <Link style={styles.link} onPress={()=>{localStorage.removeItem('currentUser');setRoute('login')}}>
                Logout
            </Link>
            </View>
            }
        </View>
    )
}

export default Header

