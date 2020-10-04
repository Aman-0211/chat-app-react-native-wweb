

 let users = []  
export const  SaveDataToLocalStorage = (data) =>
{     
   
    users.push(data);
    let receiveddata = JSON.stringify(users);
    alert(receiveddata,"q");
    localStorage.setItem('users', receiveddata);

}


export const  SaveChatsToLocalStorage = (data) =>{ 
    let chatsList = JSON.parse(localStorage.getItem("chats") || "[]" ); 
    chatsList.push(data);
    let receiveddata = JSON.stringify(chatsList);
    alert(receiveddata,"q");
    localStorage.setItem('chats', receiveddata);

}

export const  SaveCurrentuser = (data) =>{     
   
    
    let currentUser = JSON.stringify(data);
    alert(currentUser,"q");
    localStorage.setItem('currentUser', currentUser);

}


