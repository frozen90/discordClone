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
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ backgroundColor: '#3d3c39' }}>
            <RoomsMenu/>
            <Grid style={{minHeight:'100vh'}} stackable>
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