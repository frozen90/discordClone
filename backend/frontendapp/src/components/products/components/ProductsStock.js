import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Header, Segment, Divider,Menu, Container, } from 'semantic-ui-react';
import { motion } from 'framer-motion';



export const ProductsStock = () =>{
    
    
    return(
        <motion.div initial={{x:-1000}} animate={{x:0}}>
            Test Div
        </motion.div>
    )
}

export default ProductsStock;