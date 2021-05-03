import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Icon, Table, Segment, Search } from 'semantic-ui-react'



export const ProductsTable = () => {
    const [data, setData] = useState([{id:'1'}])
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
                <Table.HeaderCell colSpan='7'>Products</Table.HeaderCell>
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