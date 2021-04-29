import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Header, Segment, Divider, Container, } from 'semantic-ui-react';
import { motion } from 'framer-motion';



const ProductsDashboard = () =>{
    const dispatch = useDispatch();
    
    return(
      
              <motion.div style={{backgroundColor:'#333',height:'100%'}} initial={{x:'-1000px'}} animate={{x:0}} transition={{duration:0.3}}>
               
                </motion.div>

       
        
    )
}

export default ProductsDashboard;