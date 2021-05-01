import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Header, Segment, Divider,Menu, Container, } from 'semantic-ui-react';
import { motion } from 'framer-motion';
import ProductsDetails from './components/ProductsDetails';
import ProductsGoodsIn from './components/ProductsGoodsIn';
import ProductsStock from './components/ProductsStock';
import ProductsStatistics from './components/ProductsStatistics';


const ProductsDashboard = () =>{
    const dispatch = useDispatch();
    const [activeItem, setActiveItem] = useState('Details')
    const [activeComponent, setActiveComponent] = useState(<ProductsDetails/>)
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
       <Grid padded>
        <Grid.Column width={4}>
          <Menu fluid inverted vertical >
            <Menu.Item
              name='Details'
              active={activeItem === 'Details'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Stock'
              active={activeItem === 'Stock'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Goods In'
              active={activeItem === 'Goods In'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Statistics'
              active={activeItem === 'Statistics'}
              onClick={handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12} style={{height:'90vh',backgroundColor:'#333'}}>
          <Segment inverted>
              {activeComponent}
          </Segment>
        </Grid.Column>
      </Grid>
    </motion.div>

       
        
    )
}

export default ProductsDashboard;