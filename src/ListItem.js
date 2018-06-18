import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Glyphicon from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import './ListItem.css'


export default class ListItem extends React.Component {
    constructor(props){
        super(props);
        console.log("item")
        console.log(this.props.item);
        this.openEdit=this.openEdit.bind(this);
      }
      openEdit(){
          this.props.openEdit();
      }
     
  render() {
      var item =this.props.item;
    return (
        <div className="ListItem" xs="6">
     
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0" color="secondary">
        <Label>
                <input type="checkbox"></input>
            </Label>
        </FormGroup>
        <FormGroup className="mb-4 mr-sm-4 mb-sm-0">
       
        <Label  >{item.title}</Label>
            
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label>
                <IconButton mini aria-label="Edit" onClick={this.openEdit}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                </IconButton>
            </Label>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label>
                <IconButton color="secondary" aria-label="Delete"> 
                    <DeleteIcon />
                </IconButton>
            
            </Label>
        </FormGroup>
       
      </Form>
       
        </div>
         
    );
  }
}