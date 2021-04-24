import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'

export const StaffTable = ({staff}) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        console.log(staff)
        if(staff != undefined){
            setData(staff)
        }
    }, [staff])
    const renderBody = (data) =>{
        return(
            
            <Table.Row key={data.id}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell >{data.secondName}</Table.Cell>
                <Table.Cell>{data.live}</Table.Cell>
            </Table.Row>
            
        )
    }
    const renderHeader = () =>{
        return (
        <>
            <Table.Row>
                <Table.HeaderCell colSpan='3'>Users</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Live</Table.HeaderCell>
            </Table.Row>
        </>
        )
    }
    useEffect(()=>{
        console.log(staff)
    },[staff])
    return(

    <Table tableData={data} renderBodyRow={renderBody} headerRow={renderHeader}>
    </Table>
    )
}

export default StaffTable;