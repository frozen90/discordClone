import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Header, Segment, Divider,Menu, Container, } from 'semantic-ui-react';
import { AnimatePresence, motion } from 'framer-motion';
import ProductsSearch from './components/ProductsSearch'
import ProductsTable from './components/ProductsTable';


const ProductsDashboard = () =>{
  
    const findProducts = useSelector(state => state.products.findProducts)
  
    return(
      
        <motion.div style={{backgroundColor:'#333',height:'100%'}} initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} transition={{duration:0.5}}>
        {findProducts ?
       <ProductsTable/> : <ProductsSearch/>}
    </motion.div>

       
        
    )
}

export default ProductsDashboard;