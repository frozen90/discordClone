import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Button, Form, Segment, } from 'semantic-ui-react';
import MessageDiv from '../message/MessageBox';
import { motion } from "framer-motion";

const ChatWindow = (props) => {
    const user = useSelector(state => (state.auth.user))
    const chatRoomName = useSelector(state => (state.rooms.chatRoom.channelName))
    const roomName = useSelector(state => (state.rooms.mainRooms.roomName))
    const [userTyping, showUserTyping] = useState(false)
    const [usersCurrentlyTyping, setUsersCurrentlyTyping] = useState([])
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const messagesEndRef = useRef(null)
    const regex = /[a-zA-Z]/;
    const [chatSocket, setChatSocket] = useState( new WebSocket(
        'ws://'
        + window.location.host
        + '/ws/chat/'
        + roomName
        + '/'
        + chatRoomName
        + '/'
    ))
    chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        if(data.typing){
            showUserTyping(true)
            console.log(usersCurrentlyTyping.indexOf(data.username))
            if(usersCurrentlyTyping.indexOf(data.username) === -1){
                setUsersCurrentlyTyping([...usersCurrentlyTyping, data.username])
            }
            

        }else{
            setMessages([...messages, {message:data.message, username:data.username}]);
            setMessage("");
            showUserTyping(false)
            setUsersCurrentlyTyping([])
        }
    };

    chatSocket.onclose = function(e) {
        console.error('Chat socket closed unexpectedly');
    };
   
    const handleMessageSend = () => {
        chatSocket.send(JSON.stringify({
            'message': message,
            'userName': user.username
        }));
    }
    const handleChange = (e, { value }) => {
        console.log(value)
        setMessage(value)
    }
    const handleEnterPress = (e) => {
        if (message === "") {
            
        } else {
            chatSocket.send(JSON.stringify({
                'typing':true,
                'userName':user.username,
                'message':''
            }));
            if (e.key === 'Enter' && !e.shiftKey && regex.test(message)) {
                console.log("I AM HERE")
                // handleMessageSend();
                chatSocket.send(JSON.stringify({
                    'message': message,
                    'userName': user.username,
                }));
            }
        }

    }
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(scrollToBottom, [messages]);
    useEffect(()=>{
        setChatSocket( new WebSocket(
            'ws://'
            + window.location.host
            + '/ws/chat/'
            + roomName
            + '/'
            + chatRoomName
            + '/'
        ))
    setMessages([])
    },[chatRoomName])
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ backgroundColor: '#3d3c39', padding:'10px' }}>
            <Segment style={{ padding: '10px'}} inverted>
                <Segment className="chatWindow" style={{backgroundColor: '#3d3c39'}}>
                    {messages.map((messageData, index) => (
                        <MessageDiv message={messageData.message} username={messageData.username} key={index}></MessageDiv>
                    ))}
                    <div ref={messagesEndRef} />
                </Segment>
                {userTyping ? <div>Currently typing {usersCurrentlyTyping.map((user,index)=>(user + " "))}</div>:null}
                <Segment inverted>
                    <Form style={{ padding: '10px' }} onSubmit={handleMessageSend}>
                        <Form.TextArea onKeyPress={handleEnterPress} name='#chat-message-input' placeholder='Message' style={{ backgroundColor: '#3d3c39', color: 'white' }} onChange={handleChange} value={message} />
                        <Button style={{ marginTop: '5px' }} floated='right'>Send</Button>
                    </Form>
                </Segment>

            </Segment>

        </motion.div>
    );

}

export default ChatWindow;