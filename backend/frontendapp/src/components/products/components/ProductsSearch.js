import React from 'react'
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
} from 'semantic-ui-react'

const ProductsSearch = () => (
  <Segment placeholder style={{height:'90vh',backgroundColor:'#333'}}>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical inverted>Or</Divider>

      <Grid.Row verticalAlign='middle' style={{backgroundColor:'#333'}}>
        <Grid.Column>
          <Header icon>
            <Icon name='search' inverted/>
            <span style={{color:'white'}}>Find Products Details</span>
          </Header>

          <Search placeholder='Search Products...' />
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='box' inverted/>
             <span style={{color:'white'}}>Add New Product</span>
          </Header>
          <Button primary>Create</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default ProductsSearch;
