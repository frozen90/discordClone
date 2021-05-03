import React, {useCallback, useDebugValue} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FIND_PRODUCTS} from '../../../actions/types';
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
} from 'semantic-ui-react'

const ProductsSearch = () => {

const dispatch = useDispatch();
const handleFindClick = () =>{
  dispatch({type:FIND_PRODUCTS, data:true})
}
return(
  <Segment placeholder style={{height:'90vh',backgroundColor:'#333'}}>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical inverted>Or</Divider>

      <Grid.Row verticalAlign='middle' style={{backgroundColor:'#333'}}>
        <Grid.Column>
          <Header icon>
            <Icon name='search' inverted/>
            <span style={{color:'white'}}>Find Products</span>
          </Header>
          <Button secondary onClick={handleFindClick}>Find</Button>
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='box' inverted/>
             <span style={{color:'white'}}>Add New Product</span>
          </Header>
          <Button secondary>Create</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
    )
}

export default ProductsSearch;
