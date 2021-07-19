import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Button, Form, Segment, } from 'semantic-ui-react';
import MessageDiv from '../message/MessageBox';
import { motion } from "framer-motion";

const ChatWindow = (props) => {
    let roomName = 'TestChannel'
    const chatSocket = new WebSocket(
        'ws://'
        + window.location.host
        + '/ws/chat/'
        + roomName
        + '/'
    );
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const messagesEndRef = useRef(null)
    const regex = /[a-zA-Z]/;
    const handleMessageSend = () => {
        setMessages([...messages, message])
        setMessage("")

    }
    const handleChange = (e, { value }) => {
        setMessage(value)
    }
    const handleEnterPress = (e) => {
        console.log("message here,", message)
        if (message === "") {
            console.log("TRUE")
        } else {
            if (e.key === 'Enter' && !e.shiftKey && regex.test(message)) {
                handleMessageSend();
            }
        }

    }
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(scrollToBottom, [messages]);
    console.log('MessageBox', <MessageDiv />)
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ backgroundColor: '#3d3c39', padding:'10px' }}>
            <Segment style={{ padding: '10px', height: '100vh' }} inverted>
                <Segment style={{ height: '80%', backgroundColor: '#3d3c39', overflow: 'auto' }}>
                    {messages.map((messageDiv, index) => (
                        <MessageDiv message={messageDiv} key={index}></MessageDiv>
                    ))}
                    <div ref={messagesEndRef} />
                </Segment>
                <Segment inverted>
                    <Form style={{ padding: '10px' }} onSubmit={handleMessageSend}>
                        <Form.TextArea onKeyPress={handleEnterPress} name='message' placeholder='Message' style={{ backgroundColor: '#3d3c39', color: 'white' }} onChange={handleChange} value={message} />
                        <Button style={{ marginTop: '5px' }} floated='right'>Send</Button>
                    </Form>
                </Segment>

            </Segment>

        </motion.div>
    );

}

export default ChatWindow;