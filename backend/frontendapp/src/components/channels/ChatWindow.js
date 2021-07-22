import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Button, Form, Segment, } from 'semantic-ui-react';
import MessageDiv from '../message/MessageBox';
import { motion } from "framer-motion";

const ChatWindow = (props) => {
    const chatRoomName = useSelector(state => (state.rooms.chatRoom.channelName))
    const [chatSocket, setChatSocket] = useState( new WebSocket(
        'ws://'
        + window.location.host
        + '/ws/chat/'
        + chatRoomName
        + '/'
    ))
    chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        setMessages([...messages, data.message]);
        setMessage("");
    };

    chatSocket.onclose = function(e) {
        console.error('Chat socket closed unexpectedly');
    };
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const messagesEndRef = useRef(null)
    const regex = /[a-zA-Z]/;
    const handleMessageSend = () => {
        chatSocket.send(JSON.stringify({
            'message': message
        }));
    }
    const handleChange = (e, { value }) => {
        setMessage(value)
    }
    const handleEnterPress = (e) => {
        if (message === "") {
        } else {
            if (e.key === 'Enter' && !e.shiftKey && regex.test(message)) {
                // handleMessageSend();
                chatSocket.send(JSON.stringify({
                    'message': message
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
            + chatRoomName
            + '/'
        ))
    },[chatRoomName])
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ backgroundColor: '#3d3c39', padding:'10px' }}>
            <Segment style={{ padding: '10px'}} inverted>
                <Segment style={{ minHeight: '70%', maxHeight:'70vh', backgroundColor: '#3d3c39', overflowY: 'scroll' }}>
                    {messages.map((messageDiv, index) => (
                        <MessageDiv message={messageDiv} key={index}></MessageDiv>
                    ))}
                    <div ref={messagesEndRef} />
                </Segment>
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