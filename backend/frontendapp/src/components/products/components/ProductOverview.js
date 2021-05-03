import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Header, Segment, Divider,Menu, Container, } from 'semantic-ui-react';
import { AnimatePresence, motion } from 'framer-motion';
import ProductsDetails from './ProductsDetails';
import ProductsGoodsIn from './ProductsGoodsIn';
import ProductsStock from './ProductsStock';
import ProductsStatistics from './ProductsStatistics';


const ProductOverview = ({product}) =>{
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
            <AnimatePresence exitBeforeEnter>
              {activeComponent}
            </AnimatePresence>              
          </Segment>
        </Grid.Column>
      </Grid> 

       
        
    )
}

export default ProductOverview;