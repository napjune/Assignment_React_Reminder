

import React from 'react';

import classnames from 'classnames';
import './SideNavbar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Badge from '@material-ui/core/Badge';



export default class Example extends React.Component {
    constructor(props){
        super(props);
        
    };
    pageToggle(){    
        console.log("haha");
    }
  
  render() {
    return (
       < div   className="sidenav">
        <List component="nav">
          
        <ListItem  button onClick={this.props.pageComplete}>
            <ListItemIcon  >
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Completed" /><Badge  color="secondary"  badgeContent={this.props.completeItemCount}>
            </Badge>
          </ListItem>


          <ListItem className="responsive" button onClick={this.props.pagetodo}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="All" />
           
          </ListItem>
          
        </List>
      </div>
        
    );
  }
}