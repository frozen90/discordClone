import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Menu, Input, Icon, Dropdown } from 'semantic-ui-react';
import { motion } from "framer-motion";
import { ENTER_CHAT_ROOM } from '../../actions/types';

const ChannelsNav = (props) => {
    const dispatch = useDispatch();
    const roomName = useSelector(state => (state.rooms.mainRooms.roomName))
    const [friendsList, setFriendsList] = useState([])
    const [textChannels, setTextChannels] = useState([{ id: 1, name: 'general' }])
    const [voiceChannels, setVoiceChannels] = useState([{ id: 1, name: 'General' }])
    const [activeItem, setActiveItem] = useState('general')
    const [showVoiceChannels, setShowVoiceChannels] = useState(false)
    const [showTextChannels, setShowTextChannels] = useState(false)
    const [showFriendsPanel, setShowFriendsPanel] = useState(false)
    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
        dispatch({ type: ENTER_CHAT_ROOM, data: name })
    }
    const handleVoiceChannelsClick = () => {
        setShowVoiceChannels(!showVoiceChannels)
    }
    const textChannelsClick = () => {
        setShowTextChannels(!showTextChannels)
    }
    const handleFriendsClick = () => {
        setShowFriendsPanel(!showFriendsPanel)
    }
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ backgroundColor: '#3d3c39', padding: '10px', minHeight: '70%' }}>

            <Menu fluid inverted pointing vertical style={{padding:'15px'}}>
                <Menu.Header style={{ color: 'white', padding:'5px',borderBottom:'5px'}}>{roomName.toUpperCase()}</Menu.Header>
                <Menu.Item name='Friends' onClick={handleFriendsClick} active={activeItem === 'Friends'}>
                    <Icon name={showFriendsPanel ? 'angle down' : 'angle right'}></Icon><Menu.Header>Friends</Menu.Header></Menu.Item>
                {showFriendsPanel ?
                    <Menu.Item>
                    {friendsList.length > 0 ?
                        <Menu.Menu>
                            {friendsList.map((channel, index) => (
                                <Menu.Item
                                    key={index}
                                    name={channel.name}
                                    active={activeItem === channel.name}
                                    onClick={handleItemClick}
                                >{channel.name}<Icon name='hashtag' />
                                </Menu.Item>))}

                        </Menu.Menu>
                                        
                    :'No friends please add'}
                    </Menu.Item>
                    : null

                }
                <Menu.Item name='Text Channels' onClick={textChannelsClick} active={activeItem === 'Text Channels'}>
                    <Icon name={showTextChannels ? 'angle down' : 'angle right'}></Icon><Menu.Header>Text Channels</Menu.Header></Menu.Item>
                {showTextChannels ?
                    <Menu.Item>

                        <Menu.Menu>
                            {textChannels.map((channel, index) => (
                                <Menu.Item
                                    key={index}
                                    name={channel.name}
                                    active={activeItem === channel.name}
                                    onClick={handleItemClick}
                                >{channel.name}<Icon name='hashtag' />
                                </Menu.Item>))}

                        </Menu.Menu>
                    </Menu.Item>
                    : null

                }
                <Menu.Item name='Voice Channels' onClick={handleVoiceChannelsClick} active={activeItem === 'Voice Channels'}>
                    <Icon name={showVoiceChannels ? 'angle down' : 'angle right'}></Icon><Menu.Header>Voice Channels</Menu.Header></Menu.Item>
                {showVoiceChannels ?
                    <Menu.Item>

                        <Menu.Menu>
                            {voiceChannels.map((channel, index) => (
                                <Menu.Item
                                    key={index}
                                    name={channel.name}
                                    active={activeItem === channel.name}
                                    onClick={handleItemClick}
                                >{channel.name}<Icon name='hashtag' />
                                </Menu.Item>))}

                        </Menu.Menu>
                    </Menu.Item>
                    : null

                }
            </Menu>
        </motion.div>
    );

}

export default ChannelsNav;