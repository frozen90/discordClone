import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Container, Button, Checkbox, Form, Message, Segment, Grid, Menu, Label, Input, Icon, Dropdown, TextArea } from 'semantic-ui-react';
import MessageDiv from '../message/MessageBox';
import { motion } from "framer-motion";
import ChatWindow from '../channels/ChatWindow';
import ChannelsNav from '../channels/ChannelsNav';
import RoomsMenu from '../rooms/RoomsMenu';

const MainWindow = (props) => {
    let roomName = 'TestChannel'
    const chatSocket = new WebSocket(
        'ws://'
        + window.location.host
        + '/ws/chat/'
        + roomName
        + '/'
    );

    console.log(chatSocket)
    const [activeItem, setActiveItem] = useState('gamepad')
    const [showVoiceChannels, setShowVoiceChannels] = useState(false)
    const [showTextChannels, setShowTextChannels] = useState(false)
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const messagesEndRef = useRef(null)
    const regex = /[a-zA-Z]/;
    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
    }
    const handleVoiceChannelsClick = () => {
        setShowVoiceChannels(!showVoiceChannels)
    }
    const textChannelsClick = () => {
        setShowTextChannels(!showTextChannels)
    }
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
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ backgroundColor: '#3d3c39' }}>
            <RoomsMenu/>
            <Grid>
                <Grid.Column width={4}>
                    <ChannelsNav/>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <ChatWindow/>
                </Grid.Column>
            </Grid>
        </motion.div>
    );

}

export default MainWindow;