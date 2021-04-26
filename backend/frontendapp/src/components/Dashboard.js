import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Header, Segment, Divider, } from 'semantic-ui-react';
import { motion } from 'framer-motion';
import { loadStaff } from '../actions/staff';


//Dashboard components
import StaffTable from './staff/StaffTable';
import ShiftStats from './dashboard/ShiftStats';


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
      <motion.div initial={{opacity: 0}} animate={{opacity:1}} style={{backgroundColor:'#333'}}>
            <Segment basic>
              <Grid divided='vertically' centered>
                <Grid.Row  style={{height:'50vh'}}  columns={2} centered>
                  <Grid.Column textAlign='center'>
                    <motion.div initial={{x:'-1000px'}} animate={{x:0}} transition={{duration:0.3}}>
                    <StaffTable staff={staffData}/>
                    </motion.div>
                  </Grid.Column>
                  <Grid.Column>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <ShiftStats />
                    </div>
                  </Grid.Column>
                  </Grid.Row>
              </Grid>
                <Grid divided='vertically'>
                  <Grid.Row  style={{height:'50vh'}} verticalAlign='middle' columns={2}>
                    <Grid.Column>
                      <Header as='h3' textAlign='center'>Live </Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Header as='h3' textAlign='center'>Stats </Header>
                    </Grid.Column>
                    
                  </Grid.Row>
                  
              </Grid>
              <Divider vertical></Divider>
              <Divider horizontal></Divider>
            </Segment>
       
        </motion.div>
    )
}

export default Dashboard;