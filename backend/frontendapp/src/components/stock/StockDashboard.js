import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Header, Segment, Divider,Menu, Container, } from 'semantic-ui-react';
import { AnimatePresence, motion } from 'framer-motion';


const StockDashboard = () =>{
    return(
      
    <motion.div style={{backgroundColor:'#333',height:'100%'}} initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} transition={{duration:0.5}}>
        <Segment inverted padded style={{height:'100vh',backgroundColor:'#333'}}>
            TEST    
        </Segment>
    </motion.div>

       
        
    )
}

export default StockDashboard;