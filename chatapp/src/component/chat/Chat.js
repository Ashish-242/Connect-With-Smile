import React, { useEffect, useState } from 'react'
// I HAVE TO INCLUDE USESTATE UPPER
import {user} from "../Join/join"
import socketIO from "socket.io-client";
import './chat.css';
import sendLogo from '../../images/send.png';
import Message from "../message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import closeIcon from "../../images/closeIcon.png";
var audio=new Audio('tone.mp3');



let socket;
// const ENDPOINT="https://connect-with-smile.herokuapp.com/";
const ENDPOINT="http://localhost:4500/";

const Chat = () => {
  const [id, setid] = useState("");
    const [messages, setMessages] = useState([])

  const send=async ()=>{
    const message=await document.getElementById('chatInput').value;
    const voice= audio;
    
    
    
     
 
if(message.length>0){
  voice.play();
  socket.emit('message',{message,id});
  
document.getElementById('chatInput').value="";
audio.play();
}

  }
  console.log(messages); 
 
  useEffect(()=>{
     socket=socketIO(ENDPOINT, {transports:['websocket']});
    socket.on("connect",()=>{
      // alert("connected");
      setid(socket.id);
        }) 

        socket.emit('joined', { user })

        socket.on('welcome', (data) => {
    setMessages([...messages, data]);
    console.log(data.user, data.message);
})

socket.on('userJoined', (data) => {
    setMessages([...messages, data]);
    console.log(data.user, data.message);
})

socket.on('leave', (data) => {
    setMessages([...messages, data]);
    console.log(data.user, data.message)
})
        return()=>{
          socket.emit('disconnect');
          socket.off();
          
        }

  },[])
  
  
  useEffect(() => {
    socket.on('sendMessage', (data) => {
        setMessages([...messages, data]);
        console.log(data.user, data.message, data.id);
    })
    return () => {
       socket.off();
    }
}, [messages]);


  
  return ( 
  
    <div className="chatPage">
    <div className="chatContainer">
        <div className="header">
        <h2>C CHAT</h2>
                    <a href="/"> <img src={closeIcon} alt="Close" /></a> 
        </div>
        <ReactScrollToBottom className="chatBox">
                    {messages.map((item, i) => <Message user={item.id ===id ?'':item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                </ReactScrollToBottom>
   
        <div className="inputBox">

        <input onKeyPress={(event)=>event.key ==='Enter' ? send():null } type="text" id="chatInput" />
      
         <button onClick={send}
           className="sendBtn"><img src={sendLogo} alt="Send" /></button>
          
        </div>
    </div>

</div>
  )
}

export default Chat
// onKeyPress={(event) => event.key === 'Enter' ? send() : null}
// onClick={send}