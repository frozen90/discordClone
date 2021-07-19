import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Container, Button, Checkbox, Form, Message, Segment, Grid, Menu, Label, Input, Icon, Dropdown, TextArea } from 'semantic-ui-react';
import MessageDiv from '../message/MessageBox';
import { motion } from "framer-motion";

const RoomsMenu = (props) => {
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
            <Menu icon='labeled' inverted>
                <Menu.Item
                    name='gamepad'
                    active={activeItem === 'gamepad'}
                    onClick={handleItemClick}
                >
                    <Icon name='gamepad' />
                    <Label color='teal'>1</Label>
                </Menu.Item>

                <Menu.Item
                    name='video camera'
                    active={activeItem === 'video camera'}
                    onClick={handleItemClick}
                >
                    <Icon name='video camera' />
                </Menu.Item>

                <Menu.Item
                    name='video play'
                    active={activeItem === 'video play'}
                    onClick={handleItemClick}
                >
                    <Icon name='video play' />
                </Menu.Item>
            </Menu>
        </motion.div>
    );

}

export default RoomsMenu;