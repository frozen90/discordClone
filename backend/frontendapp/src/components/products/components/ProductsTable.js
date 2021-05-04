import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Icon, Table, Segment, Input, Form, Dropdown, Grid } from 'semantic-ui-react'



export const ProductsTable = () => {
    const options = [
        { key: 1, text: 'P-Code', value:'P-Code'},
        { key: 2, text: 'Name', value:'Name' },
        { key: 3, text: 'Description', value:'Description'},
        { key: 4, text: 'Group', value:'Group'},
        { key: 5, text: 'Supplier', value:'Supplier'}
      ]
    const [data, setData] = useState([{id:'1'}])
    const [value, setValue] = useState('P-Code')
    const handleChange = (e) =>{
        console.log(e.target.outerText)
        setValue(e.target.outerText)
    }
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
            </Table.Row>
            
        )
    }
    const renderHeader = () =>{
        return (
        <>  
            <Table.Row>
                <Table.HeaderCell colSpan='7' style={{padding:'10px'}}>
                    Filter Products
                    <Form inverted style={{width:'100%'}}>
                        <Form.Group>
                            <Form.Dropdown
                                width={2}
                                onChange={handleChange}
                                options={options}
                                placeholder='Choose an option'
                                selection
                                value={value}
                            />
                            <Form.Input inverted
                                placeholder={value} 
                                width={2}
                                />
                            
                        </Form.Group>
                        <Button inverted type='submit'  floated='right'>Search</Button>
                     </Form>   

                </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell colSpan='7'>
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
            </Table.Row>
        </>
        )
    }
    return(
    <Segment style={{backgroundColor:'#333',height:'100%'}} padded inverted>
        <Table className='greyBorder' inverted tableData={data} renderBodyRow={renderBody} headerRow={renderHeader}>
        </Table>
    </Segment>
    )
}

export default ProductsTable;