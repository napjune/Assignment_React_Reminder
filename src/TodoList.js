
import React, { Component } from 'react';
import {Button,IconButton,AppBar,Toolbar,Typography} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import  ShowInformation from './ShowInformation'
import ListItem from './ListItem'
import SideNavbar from './SideNavbar'
import InputForm from './InputForm'
import './TodoList.css'

 
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';


class TodoList extends Component {

  constructor(props) {

    super()
    this.state={
      items:[],
      completeItems:[],
      completeItemCount:"0",
      inputformhide: false
    };
    
   
  }

  

  

  render() {
    return (
      <div>
        
      <div>
        <Navbar id = "top_bar" light expand="md">
          <NavbarBrand href="/"> Let me capture ur memories </NavbarBrand>
         
            <Nav className="ml-auto" navbar>
              <NavItem>
              <IconButton color="#212121" aria-label="check">  
                <AddIcon />
              </IconButton >
            </NavItem>
              </Nav>
        </Navbar>
      </div>
    
      
      <SideNavbar completeItemCount={this.state.completeItemCount}/>
      <InputForm/>
      <ShowInformation />
     
    </div>
        
    
    );
  }
}

export default TodoList;
