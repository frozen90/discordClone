import React, {useEffect, useState, useRef } from 'react';
import { Segment, Comment, Icon } from 'semantic-ui-react';
import { motion } from "framer-motion";

const MessageDiv = ({message, username}) => {
    const [date, setDate] = useState(new Date())
    const today = new Date()
    return (
      <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} exit={{opacity:0}} style={{backgroundColor:'#3d3c39',marginTop:'5px'}}>
        <Segment style={{ border:'none', boxShadow:'none'}} inverted>
        <Comment.Group size='massive' >
          <Comment>
            <Comment.Content>
            <Comment.Avatar src="../../static/img/avatarDef.svg" style={{height:'40px', width:'40px',marginRight:'5px', marginBottom:'10px', color:'white'}}/>
                <Comment.Author as='a'  style={{color:'white'}}>{username}</Comment.Author>
                <Comment.Metadata  style={{color:'white'}}>
                <div>{date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear() ? 'Today at ' + date.toLocaleTimeString() :  date.toLocaleString()} </div>
              </Comment.Metadata >
                <Comment.Text  style={{color:'white', marginLeft:'45px', width:'65vw'}}>{message}</Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
        </Segment>
      </motion.div>
    );
  
}

export default MessageDiv;