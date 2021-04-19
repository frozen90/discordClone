import React, { useDebugValue } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { logout, logoutUser } from '../actions/auth';
import { Redirect} from 'react-router-dom';


const Dashboard = () =>{
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const handleLogout = () =>{
        dispatch(logoutUser());
    }

    return(
        <Sidebar.Pushable as={Segment}>
            <Sidebar
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
                <Header as='h3'>Dashboard</Header>
                
            </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
}

export default Dashboard;