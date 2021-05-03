import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Header, Segment, Divider,Menu, Container, } from 'semantic-ui-react';
import { AnimatePresence, motion } from 'framer-motion';
import ProductsDetails from './components/ProductsDetails';
import ProductsGoodsIn from './components/ProductsGoodsIn';
import ProductsStock from './components/ProductsStock';
import ProductsStatistics from './components/ProductsStatistics';
import ProductsSearch from './components/ProductsSearch'
import ProductOverview from './components/ProductOverview';
import ProductsTable from './components/ProductsTable';


const ProductsDashboard = () =>{
    const dispatch = useDispatch();
    const [activeItem, setActiveItem] = useState('Details')
    const [activeComponent, setActiveComponent] = useState(<ProductsDetails/>)
    const [product, setProduct] = useState(null)
    const findProducts = useSelector(state => state.products.findProducts)
    const handleItemClick = (e) =>{
      setActiveItem(e.target.outerText)
      if(e.target.outerText === 'Details'){
        setActiveComponent(<ProductsDetails/>)
      }else if(e.target.outerText === 'Stock'){
        setActiveComponent(<ProductsStock/>)
      }else if(e.target.outerText === 'Goods In'){
        setActiveComponent(<ProductsGoodsIn/>)
      }else if(e.target.outerText === 'Statistics'){
        setActiveComponent(<ProductsStatistics/>)
      }  
      }
    return(
      
        <motion.div style={{backgroundColor:'#333',height:'100%'}} initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} transition={{duration:0.5}}>
        {findProducts ?
       <ProductsTable/> : <ProductsSearch/>}
    </motion.div>

       
        
    )
}

export default ProductsDashboard;