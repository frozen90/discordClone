import React, { useDebugValue, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Header, Icon, Image, Menu, Segment, Sidebar, Divider, Button } from 'semantic-ui-react';
import { logout, logoutUser } from '../actions/auth';
import { Redirect} from 'react-router-dom';
import { motion } from 'framer-motion';
import { loadStaff } from '../actions/staff';
import StaffTable from './staff/StaffTable';


const Dashboard = () =>{
    const dispatch = useDispatch();
    const [staffData, setStaffData] = useState([])
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const initialStaff = useSelector(state => state.staff.staffData.rows)
    const handleLogout = () =>{
        dispatch(logoutUser());
    }
    useEffect(()=>{
      dispatch(loadStaff());  
    },[])
    useEffect(()=>{
      setStaffData(initialStaff)
    },[initialStaff])
    return(
      <motion.div initial={{opacity: 1}} animate={{opacity:1}} exit={{x:-1000}}>
        <Sidebar.Pushable as={Segment}>
            <Sidebar
            className='sidebarMenu'
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
            >
            <Menu.Item as='a' onClick={handleLogout}>
                Logout
            </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
            <Segment basic>
              <Grid divided='vertically'>
                <Grid.Row color='blue' style={{height:'50vh'}}  columns={2}>
                  <Grid.Column textAlign='center'>
                    <StaffTable staff={staffData}/>
                  </Grid.Column>
                  <Grid.Column textAlign='center'>
                    <Header as='h3'>Stats </Header>
                  </Grid.Column>
                  </Grid.Row>
              </Grid>
                <Grid divided='vertically'>
                  <Grid.Row color='blue' style={{height:'50vh'}} verticalAlign='middle' columns={2}>
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
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        </motion.div>
    )
}

export default Dashboard;