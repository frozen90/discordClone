import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Header, Segment, Divider, Container, } from 'semantic-ui-react';
import { motion } from 'framer-motion';
import { loadStaff } from '../actions/staff';


//Dashboard components
import StaffTable from './staff/StaffTable';
import ShiftStats from './dashboard/ShiftStats';
import PickHistoryBar from './dashboard/PickHistoryBar';


const Dashboard = () =>{
    const dispatch = useDispatch();
    const [staffData, setStaffData] = useState([])
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const initialStaff = useSelector(state => state.staff.staffData.rows)
    useEffect(()=>{
      dispatch(loadStaff());  
    },[])
    useEffect(()=>{
      setStaffData(initialStaff)
    },[initialStaff])
    return(
      
              <motion.div style={{backgroundColor:'#333',height:'100%'}} initial={{x:'-1000px'}} animate={{x:0}} transition={{duration:0.3}}>
                <Grid padded columns='equal' stackable={true} style={{backgroundColor:'#333'}}>
                    <Grid.Column>           
                      <StaffTable staff={staffData}/>              
                    </Grid.Column>
                    <Grid.Column>
                          <ShiftStats />
                    </Grid.Column>
                </Grid>
                  <Grid padded columns='equal' stackable={true}  style={{backgroundColor:'#333'}}>
                    <Grid.Row   verticalAlign='middle' columns={2}>
                      <Grid.Column>
                        <PickHistoryBar />
                      </Grid.Column>
                      <Grid.Column>
                        <Header as='h3' textAlign='center'>Stats </Header>
                      </Grid.Column>
                      
                    </Grid.Row>
                  </Grid>
                </motion.div>

       
        
    )
}

export default Dashboard;