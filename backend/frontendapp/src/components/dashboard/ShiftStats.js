import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import { IconContext } from "react-icons";
import { BsDiamondFill, BsCircleFill } from "react-icons/bs";
export const ShiftStats = () => {
    const [data, setData] = useState([{orders:106,casesPicked:123,openPo:15,activePickers:12}])
    const renderBody = (data) =>{
        return(
            
            <Table.Row key={0} className='tableFont'>
                <Table.Cell textAlign='center'>
                    <IconContext.Provider value={{ color: "orange", style:{width:'18px', height:'18px'}}}>
                        <BsDiamondFill />
                    </IconContext.Provider>{data.orders}
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    <IconContext.Provider value={{ color: "green", style:{width:'18px', height:'18px'}}}>
                        <BsCircleFill />
                    </IconContext.Provider>{data.casesPicked}</Table.Cell>
                <Table.Cell textAlign='center'>
                    <IconContext.Provider value={{ color: "orange", style:{width:'18px', height:'18px'}}}>
                        <BsDiamondFill />
                    </IconContext.Provider>{data.openPo}</Table.Cell>
                <Table.Cell textAlign='center'>
                    <IconContext.Provider value={{ color: "green", style:{width:'18px', height:'18px'}}}>
                        <BsCircleFill />
                    </IconContext.Provider>{data.activePickers}</Table.Cell>
            </Table.Row>
            
        )
    }
    const renderHeader = () =>{
        return (
        <>
            <Table.Row textAlign='left'>
                <Table.HeaderCell colSpan='4'>Volume Today</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell>Orders to Ship</Table.HeaderCell>
                <Table.HeaderCell>Cases picked</Table.HeaderCell>
                <Table.HeaderCell>Open POs</Table.HeaderCell>
                <Table.HeaderCell>Active Pickers</Table.HeaderCell>
            </Table.Row>
        </>
        )
    }
    return(

    <Table textAlign='center' className='greyBorder' inverted tableData={data} renderBodyRow={renderBody} headerRow={renderHeader}>
    </Table>
    )
}

export default ShiftStats;