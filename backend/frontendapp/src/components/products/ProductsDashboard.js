import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Header, Segment, Divider,Menu, Container, } from 'semantic-ui-react';
import { motion } from 'framer-motion';



const ProductsDashboard = () =>{
    const dispatch = useDispatch();
    const [activeItem, setActiveItem] = useState('Bio')
    const handleItemClick = (e) =>{
      setActiveItem(e.target.outerText)
    }
    return(
      
        <motion.div style={{backgroundColor:'#333',height:'100%'}} initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} transition={{duration:0.5}}>
       <Grid padded>
        <Grid.Column width={4}>
          <Menu fluid inverted vertical >
            <Menu.Item
              name='bio'
              active={activeItem === 'Bio'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='pics'
              active={activeItem === 'Pics'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='companies'
              active={activeItem === 'Companies'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='links'
              active={activeItem === 'Links'}
              onClick={handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12} style={{height:'90vh'}}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
        </Grid.Column>
      </Grid>
    </motion.div>

       
        
    )
}

export default ProductsDashboard;