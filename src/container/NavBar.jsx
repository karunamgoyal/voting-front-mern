import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from '../store/actions'
import {Navbar, NavItem} from 'react-materialize'
const NavBar = ({auth,logout}) => (
    <Fragment>
    <Navbar alignLinks="left" className='blue'> 
        {/*<ul id="nav-mobile" className='left hide-on-med-and-down'>*/}
            <NavItem><Link to='/'>Home</Link></NavItem>
            {auth.isAuthenticated && <NavItem><Link to='/register'>Register</Link></NavItem>}
            <NavItem><Link to='/login'>Login</Link></NavItem>
            {auth.isAuthenticated &&   <NavItem><Link to='/poll/new'>Create Poll</Link></NavItem>}
            {auth.isAuthenticated &&  <NavItem><a  href="/" onClick={logout}> Logout</a></NavItem>}
       {/*</ul>*/}
       {auth.isAuthenticated && (<NavItem><p >Logged in as {auth.user.username}</p></NavItem>)}
    </Navbar>
    </Fragment>
    );

export default connect(store => ({ auth: store.auth }),{logout})(NavBar);