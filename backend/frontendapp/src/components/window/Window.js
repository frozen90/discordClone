import React, {useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Container, Button, Checkbox, Form, Message, Segment, Grid, Menu, Label, Input, Icon, Dropdown } from 'semantic-ui-react';

import { motion } from "framer-motion";

const Window = (props) => {
    const [activeItem, setActiveItem] = useState('gamepad')
    const [activeTab, setActiveTab] = useState('')
    const handleItemClick = (e,{name}) =>{
        setActiveItem(name)
    }
    const handleVoiceChannelsClick = (e,{name}) =>{
        if(activeTab === 'Voice Channels'){
            setActiveTab('')
        }else{
            setActiveTab(name)
        }
    }
    return (
      <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} exit={{opacity:0}} style={{backgroundColor:'#3d3c39'}}>
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
            <Grid>
                <Grid.Column width={4}>
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
                        <Menu.Item>
                            <Menu.Header>Text Channels</Menu.Header>

                            <Menu.Menu>
                            <Menu.Item
                                name='Text Channel 1'
                                active={activeItem === 'Text Channel 1'}
                                onClick={handleItemClick}
                                >Test channel 1<Icon name='hashtag'/></Menu.Item>
                                <Menu.Item
                                name="Text Channel"
                                active={activeItem === 'Text Channel'}
                                onClick={handleItemClick}
                                >Test channel 2<Icon name='hashtag'/></Menu.Item>
                            </Menu.Menu>
                        </Menu.Item>
                        <Menu.Item name='Voice Channels' onClick={handleVoiceChannelsClick} active={activeItem === 'Voice Channels'}>
                            <Icon name={ activeTab === 'Voice Channels' ? 'angle down' : 'angle right'}></Icon><Menu.Header>Voice Channels</Menu.Header></Menu.Item>
                        { activeTab === 'Voice Channels' ?
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
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <Segment style={{padding:'10px', height:'100vh'}} inverted>
                        This is an stretched grid column. This segment will always match the
                        tab height
                    </Segment>
                </Grid.Column>
            </Grid>
      </motion.div>
    );
  
}

export default Window;