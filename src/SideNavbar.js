

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
  
  render() {
    return (
       < div className="sidenav">
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Complete" /><Badge  color="secondary" badgeContent={this.props.completeItemCount}>
            </Badge>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="List" />
           
          </ListItem>
          
        </List>
      </div>
        
    );
  }
}