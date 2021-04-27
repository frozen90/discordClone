import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Header, Segment, Divider, } from 'semantic-ui-react';
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
      
            <Segment basic style={{backgroundColor:'#333'}}>
              <motion.div style={{height:'100vh'}} initial={{opacity: 0}} animate={{opacity:1}} >
              <motion.div initial={{x:'-1000px'}} animate={{x:0}} transition={{duration:0.3}}>
                <Grid divided='vertically' centered stackable={true}>
                  <Grid.Row   columns={2} centered>
                    <Grid.Column textAlign='center'>           
                      <StaffTable staff={staffData}/>              
                    </Grid.Column>
                    <Grid.Column >
                    <Header as='h3' inverted>Volume Today </Header>
                        <div>
                          <ShiftStats />
                        </div>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                  <Grid divided='vertically'>
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
              </motion.div>
            </Segment>
       
        
    )
}

export default Dashboard;