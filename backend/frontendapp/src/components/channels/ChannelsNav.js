import React, {useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Menu, Input, Icon } from 'semantic-ui-react';
import { motion } from "framer-motion";
import { ENTER_CHAT_ROOM } from '../../actions/types';

const ChannelsNav = (props) => {
    const dispatch = useDispatch();
    const roomName = useSelector(state => (state.rooms.mainRooms.roomName))
    const [textChannels,setTextChannels] = useState([{id:1,name:'Test Text Channel 1'},{id:2,name:'Test Text Channel 2'},{id:3,name:'Test Text Channel 3'}])
    const voiceChannels = [{id:1,name:'Test Voice Channel 1'},{id:2,name:'Test Voice Channel 2'},{id:3,name:'Test Voice Channel 3'}]
    const [activeItem, setActiveItem] = useState('Friends')
    const [showVoiceChannels, setShowVoiceChannels] = useState(false)
    const [showTextChannels, setShowTextChannels] = useState(false)
    const handleItemClick = (e,{name}) => {
        setActiveItem(name)
        dispatch({type:ENTER_CHAT_ROOM, data:name})
    }
    const handleVoiceChannelsClick = () => {
        setShowVoiceChannels(!showVoiceChannels)
    }
    const textChannelsClick = () => {
        setShowTextChannels(!showTextChannels)
    }
    useEffect(()=>{
        // place to fetch text and voice channels for room.
        setTextChannels([{id:1,name:'Test Text Channel 1'+roomName},{id:2,name:'Test Text Channel 2'+roomName},{id:3,name:'Test Text Channel 3'+roomName}])
    },[roomName])
    return (
      <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} exit={{opacity:0}} style={{backgroundColor:'#3d3c39', padding:'10px'}}>
          
        <Menu fluid inverted pointing vertical style={{padding:'10px', height:'100vh'}}>
        <Menu.Header style={{color:'white'}}>{roomName}</Menu.Header>
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
            {textChannels.map((channel, index) => (
                <Menu.Item
                    key={index}
                    name={channel.name}
                    active={activeItem === channel.name}
                    onClick={handleItemClick}
                    >{channel.name}<Icon name='hashtag'/>
                </Menu.Item>))}
                    
            </Menu.Menu>
            </Menu.Item> 
            : null
            
}
            <Menu.Item name='Voice Channels' onClick={handleVoiceChannelsClick} active={activeItem === 'Voice Channels'}>
                <Icon name={ showVoiceChannels ? 'angle down' : 'angle right'}></Icon><Menu.Header>Voice Channels</Menu.Header></Menu.Item>
            { showVoiceChannels ?
                <Menu.Item>
                
                <Menu.Menu>
                {voiceChannels.map((channel, index) => (
                    <Menu.Item
                        key={index}
                        name={channel.name}
                        active={activeItem === channel.name}
                        onClick={handleItemClick}
                        >{channel.name}<Icon name='hashtag'/>
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