import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Header, Segment, Divider,Menu, Container, } from 'semantic-ui-react';
import { motion } from 'framer-motion';



export const ProductsDetails = () =>{
    
    
    return(
        <motion.div initial={{scale:0}} animate={{scale:1}} exit={{x:-1000}}>
            Test Div
        </motion.div>
    )
}

export default ProductsDetails;