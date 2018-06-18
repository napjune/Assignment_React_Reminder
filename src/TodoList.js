
import React, { Component } from 'react';
import {Button,IconButton,AppBar,Toolbar,Typography} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import  ShowInformation from './ShowInformation'
import ListItem from './ListItem'
import SideNavbar from './SideNavbar'
import InputForm from './InputForm'
import './TodoList.css'
import AddForm from './AddForm'

 
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
      inputformhide: false,
      addFormShow :false
    };
    this.addItem=this.addItem.bind(this);
    this.ChangeAddFormState=this.ChangeAddFormState.bind(this);
  
  }
  addItem(newItem){
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem) 
      };
    });
   };


ChangeAddFormState(){
  this.setState({
      addFormShow :!this.state.addFormShow
  });
 
}
  

  

  render() {
    return (
      <div>
        
      <div>
        <Navbar id = "top_bar" light expand="md">
          <NavbarBrand href="/"> Let me capture ur memories </NavbarBrand>
            <Nav className="ml-auto" navbar>
              
              <NavItem>
              <IconButton color="#212121" aria-label="check" onClick={this.ChangeAddFormState}>  
                <AddIcon />
              </IconButton >
            </NavItem>
              </Nav>
        </Navbar>
      </div>
      <AddForm AddFormShow={this.state.addFormShow}
                ChangeFormState={this.ChangeAddFormState}/>
    
      
      <SideNavbar completeItemCount={this.state.completeItemCount}/>
   
      <ShowInformation entries={this.state.items} />
     
    </div>
        
    
    );
  }
}

export default TodoList;
