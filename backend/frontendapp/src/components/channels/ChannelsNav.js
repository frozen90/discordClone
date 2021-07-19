import React, {useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Menu, Input, Icon } from 'semantic-ui-react';
import { motion } from "framer-motion";

const ChannelsNav = (props) => {
    let roomName = 'TestChannel'
    const chatSocket = new WebSocket(
        'ws://'
        + window.location.host
        + '/ws/chat/'
        + roomName
        + '/'
    );

    const [activeItem, setActiveItem] = useState('gamepad')
    const [showVoiceChannels, setShowVoiceChannels] = useState(false)
    const [showTextChannels, setShowTextChannels] = useState(false)
    const handleItemClick = (e,{name}) => {
        setActiveItem(name)
    }
    const handleVoiceChannelsClick = () => {
        setShowVoiceChannels(!showVoiceChannels)
    }
    const textChannelsClick = () => {
        setShowTextChannels(!showTextChannels)
    }
    
    return (
      <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} exit={{opacity:0}} style={{backgroundColor:'#3d3c39', padding:'10px'}}>
          
        <Menu fluid inverted pointing vertical style={{padding:'10px', height:'100vh'}}>
        <Menu.Header style={{color:'white'}}>Channel Name</Menu.Header>
            <Menu.Item>
                <Input placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
                name='Friends'
                active={activeItem === 'Friends'}
                onClick={handleItemClick}
            />
            <Menu.Item name='Text Channels' onClick={textChannelsClick} active={activeItem === 'Text Channels'}>
                <Icon name={ showTextChannels ? 'angle down' : 'angle right'}></Icon><Menu.Header>Text Channels</Menu.Header></Menu.Item>
            { showTextChannels ?
            <Menu.Item>
                
            <Menu.Menu>
                <Menu.Item
                    name='Text Channel'
                    active={activeItem === 'Text Channel'}
                    onClick={handleItemClick}
                    >Test channel 1<Icon name='hashtag'/>
                </Menu.Item>
                    <Menu.Item
                    name="Text Channel 1"
                    active={activeItem === 'Text Channel 1'}
                    onClick={handleItemClick}
                    >Test channel 2<Icon name='hashtag'/>
                </Menu.Item>
                    
            </Menu.Menu>
            </Menu.Item> 
            : null
            
}
            <Menu.Item name='Voice Channels' onClick={handleVoiceChannelsClick} active={activeItem === 'Voice Channels'}>
                <Icon name={ showVoiceChannels ? 'angle down' : 'angle right'}></Icon><Menu.Header>Voice Channels</Menu.Header></Menu.Item>
            { showVoiceChannels ?
                <Menu.Item>
                
                <Menu.Menu>
                    <Menu.Item
                    name='Voice Channel'
                    active={activeItem === 'Voice Channel'}
                    onClick={handleItemClick}
                    >Test channel 1<Icon name='volume up'/></Menu.Item>
                    <Menu.Item
                    name="Voice Channel 1"
                    active={activeItem === 'Voice Channel 1'}
                    onClick={handleItemClick}
                    >Test channel 2<Icon name='volume up'/></Menu.Item>
                    
                </Menu.Menu>
            </Menu.Item> 
            : null
            
}
        </Menu>               
    </motion.div>
    );
  
}

export default ChannelsNav;