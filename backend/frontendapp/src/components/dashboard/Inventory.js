import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import { IconContext } from "react-icons";
import { BsDiamondFill, BsCircleFill } from "react-icons/bs";
import { Doughnut } from 'react-chartjs-2';


export const Inventory = () => {
    const chartData = {
        labels: ['Bakery(12)', 'Diary(10)', 'Vegetables(20)', 'Meat(5)', 'Confections(2)', 'Ready Meals(3)'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 10, 20, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    const [data, setData] = useState([
        {category:'Bakery',description:'Crownfield CornFlakes',productCode:123456789,stock:12},
        {category:'Bakery',description:'Crownfield CornFlakes',productCode:123456789,stock:15},
        {category:'Bakery',description:'Crownfield CornFlakes',productCode:123456789,stock:17},
        {category:'Bakery',description:'Crownfield CornFlakes',productCode:123456789,stock:20},
        {category:'Bakery',description:'Crownfield CornFlakes',productCode:123456789,stock:25},

    ])
    const renderBody = (data) =>{
        return(
            
            <Table.Row >
                <Table.Cell>{data.category}</Table.Cell>
                <Table.Cell>{data.description}</Table.Cell>
                <Table.Cell>{data.productCode}</Table.Cell>
                <Table.Cell>{data.stock}</Table.Cell>
            </Table.Row>
            
        )
    }
    const renderHeader = () =>{
        return (
        <>
            <Table.Row textAlign='left'>
                <Table.HeaderCell colSpan='4'>Inventory</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Product</Table.HeaderCell>
                <Table.HeaderCell>P-Code</Table.HeaderCell>
                <Table.HeaderCell>In Stock</Table.HeaderCell>
            </Table.Row>
        </>
        )
    }
    return(
        <div>
        <Table className='greyBorder' inverted tableData={data} renderBodyRow={renderBody} headerRow={renderHeader}>
        </Table>
          <Doughnut height={120} options={{maintainAspectRatio:true,legend:{position:'left',labels:{
            fontColor:'white',
            fontSize: 16,
            boxWidth: 50,
          }}
          }} data={chartData} />
        </div>
    )
}

export default Inventory;