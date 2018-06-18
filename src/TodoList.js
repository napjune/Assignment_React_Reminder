
import React, { Component } from 'react';
import {Button,IconButton,AppBar,Toolbar,Typography} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import  ShowInformation from './ShowInformation'
import ListItem from './ListItem'
import SideNavbar from './SideNavbar'
import InputForm from './InputForm'
import './TodoList.css'
import AddForm from './AddForm'
import SimpleStorage from "react-simple-storage";
 
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
      addFormShow :false,
      page :"todo"
    };
    this.addItem=this.addItem.bind(this);
    this.ChangeAddFormState=this.ChangeAddFormState.bind(this);
    this.updateComplete=this.updateComplete.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.editItem=this.editItem.bind(this);
    this.pagetodo=this.pagetodo.bind(this);
    this.pageComplete=this.pageComplete.bind(this);
  }
  updateComplete(id,value){
    console.log(value)
    let newState = this.state.items.slice(); //copy the array
    for (const s of newState) {
      if(Number(s["task_id"])===Number(id)){
        s["Complete"]=value;
      }
    }
    var completeItems = newState.filter(function(item){
      return (item.Complete=== true)
    });

    this.setState({
      items : newState,
      completeItems :completeItems,
      completeItemCount : completeItems.length
    });
    console.log(this.state.completeItemCount)
    console.log(completeItems)
  }

  editItem(task_id,title,description,date){
    console.log("haha");
    let newState = this.state.items.slice() //copy the array
    for (const s of newState) {
      console.log(s);
      if(Number(s["task_id"])===Number(task_id)){
        s["title"]=title;
        s["desciption"]=description;
        s["date"]=date;
      }
    }
    this.setState({
      items : newState
    });
  }
  addItem(newItem){
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem) 
      };
    });
   };
  
   deleteItem(task_id){
    console.log(task_id);
    var filteredItems = this.state.items.filter(function(item){
      return (item.task_id !==task_id)
    });
    var completeItems =filteredItems.filter(function(item){
      return (item.Complete=== true)
    });

    this.setState({
      items : filteredItems,
      completeItems :completeItems,
      completeItemCount : completeItems.length
    });
    console.log(filteredItems);
  }

ChangeAddFormState(){
  this.setState({
      addFormShow :!this.state.addFormShow
  });
 
}
pageComplete(){
  console.log("haha");
  this.setState({
      page :"complete"
  });
 
}
pagetodo(){
  console.log("haha");
  this.setState({
      page :"todo"
  });
 
}
  

  

  render() {
    return (
      <div>
         <SimpleStorage parent={this}/>
      <div>
        <Navbar id = "top_bar" light expand="md">
          <NavbarBrand href="/"> Reminders </NavbarBrand>
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
                ChangeFormState={this.ChangeAddFormState}
                addItem={this.addItem}/>
    
      
      <SideNavbar completeItemCount={this.state.completeItemCount}
                  pageComplete={this.pageComplete}
                  pagetodo={this.pagetodo}/>
   
      <ShowInformation entries={this.state.items}
                      updateComplete={this.updateComplete}
                      delete={this.deleteItem}
                      edit={this.editItem}
                      page ={this.state.page}
                      completeItems={this.state.completeItems}/>
     
    </div>
        
    
    );
  }
}

export default TodoList;
