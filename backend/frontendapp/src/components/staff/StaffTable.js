import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import { HiStatusOnline, HiStatusOffline } from "react-icons/hi";
import { IconContext } from "react-icons";
import { AnimatePresence, motion } from 'framer-motion';
import {AnimatedOnline} from '../layout/AnimatedOnline';
export const StaffTable = ({staff}) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        if(staff != undefined){
            setData(staff)
        }
    }, [staff])
    const renderBody = (data) =>{
        return(
            
            <Table.Row key={data.id}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell >{data.secondName}</Table.Cell>
                <Table.Cell>{data.live === true ?
                                <AnimatedOnline/>
                                : 
                                <IconContext.Provider value={{ color: "red", style:{width:'25px', height:'25px'}}}>
                                    <div><HiStatusOffline /></div>
                                </IconContext.Provider> }</Table.Cell>
            </Table.Row>
            
        )
    }
    const renderHeader = () =>{
        return (
        <>
            <Table.Row>
                <Table.HeaderCell colSpan='3'>Staff Members</Table.HeaderCell>
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

    <Table className='blueBorder' inverted tableData={data} renderBodyRow={renderBody} headerRow={renderHeader}>
    </Table>
    )
}

export default StaffTable;