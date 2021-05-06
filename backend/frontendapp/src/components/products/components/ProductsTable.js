import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Icon, Table, Segment, Input, Form, Dropdown, Grid } from 'semantic-ui-react'
import ProductOverview from './ProductOverview';
import { AnimatePresence, motion } from 'framer-motion';



export const ProductsTable = () => {
    const options = [
        { key: 1, text: 'P-Code', value:'P-Code'},
        { key: 2, text: 'Name', value:'Name' },
        { key: 3, text: 'Description', value:'Description'},
        { key: 4, text: 'Group', value:'Group'},
        { key: 5, text: 'Supplier', value:'Supplier'}
      ]
    const [data, setData] = useState([{id:'1'},{id:'2'},{id:'3'},{id:'4'},{id:'5'},{id:'6'},{id:'7'},{id:'8'},{id:'9'},{id:'10'},{id:'11'},{id:'12'},{id:'13'},{id:'14'},{id:'15'},{id:'16'}])
    const [value, setValue] = useState('P-Code')
    const [showTable, setShowTable] = useState('')
    const [showOverview, setShowOverview] = useState(false)
    const [product, setProduct] = useState({})
    const handleChange = (e) =>{
        console.log(e.target.outerText)
        setValue(e.target.outerText)
    }
    const moreInfoHandle = (data) =>{
        setProduct(data)
        setShowOverview(true)
    }
    useEffect(()=>{
        console.log(product)
    },[product])
    const renderBody = (data) =>{
        return(
            
            <Table.Row key={data.id} >
                <Table.Cell className='greyBorder'>Test</Table.Cell>
                <Table.Cell className='greyBorder'>Test</Table.Cell>
                <Table.Cell className='greyBorder'>Test</Table.Cell>
                <Table.Cell className='greyBorder'>Test</Table.Cell>
                <Table.Cell className='greyBorder'>Test</Table.Cell>
                <Table.Cell className='greyBorder'>Test</Table.Cell>
                <Table.Cell className='greyBorder'>Test</Table.Cell>
                <Table.Cell className='greyBorder'><Button onClick={() => moreInfoHandle(data)}>More Info</Button></Table.Cell>
            </Table.Row>
            
        )
    }
    const renderHeader = () =>{
        return (
        <>  
            <Table.Row>
                <Table.HeaderCell colSpan='8' style={{padding:'10px'}}>
                    <h4>Filter Products</h4>
                    <Form inverted style={{width:'100%'}}>
                        <Form.Group >
                            <Form.Dropdown
                                onChange={handleChange}
                                options={options}
                                placeholder='Choose an option'
                                selection
                                value={value}
                            />
                            <Form.Input inverted
                                style={{width:'200px'}}
                                placeholder={value} 
                                />
                            
                        </Form.Group>
                        <Button inverted type='submit'  floated='right'>Search</Button>
                     </Form>   

                </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell colSpan='8'>
                    Products 
                </Table.HeaderCell>
            </Table.Row>
            <Table.Row >
                <Table.HeaderCell className='greyBorder'>P-Code</Table.HeaderCell>
                <Table.HeaderCell className='greyBorder'>Product Name</Table.HeaderCell>
                <Table.HeaderCell className='greyBorder'>Description</Table.HeaderCell>
                <Table.HeaderCell className='greyBorder'>Stock Available</Table.HeaderCell>
                <Table.HeaderCell className='greyBorder'>Stock Level</Table.HeaderCell>
                <Table.HeaderCell className='greyBorder'>Group</Table.HeaderCell>
                <Table.HeaderCell className='greyBorder'>Supplier</Table.HeaderCell>
                <Table.HeaderCell className='greyBorder'></Table.HeaderCell>
            </Table.Row>
        </>
        )
    }
    return(
    <Segment style={{backgroundColor:'#333',height:'auto'}} padded inverted>
        <AnimatePresence exitBeforeEnter>
        <motion.div initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} key={0}>
            <Table className='greyBorder' style={{display:showTable}} inverted tableData={data} renderBodyRow={renderBody} headerRow={renderHeader}>
            </Table>
        </motion.div>
        <motion.div>
            <ProductOverview product={product} showComponent={showOverview} key={1} />
        </motion.div>
        </AnimatePresence>
        
    </Segment>
    )
}

export default ProductsTable;