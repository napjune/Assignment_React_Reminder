import React from 'react';
import {Form, FormGroup, Label} from 'reactstrap';
import {IconButton, ListItemSecondaryAction} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './ListItem.css'


export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.openEdit = this.openEdit.bind(this);
        this.UpdateCompleteStatus = this.UpdateCompleteStatus.bind(this);
        this.delete = this.delete.bind(this);
    }
    openEdit() {
        this.props.openEdit();
    }

    UpdateCompleteStatus(e) {
        this.props.updateComplete(e.target.value, e.target.checked);
        this.props.toggleNone();
        e.stopPropagation();
    }

    delete(e, task_id) {
        e.stopPropagation();
        this.props.delete(task_id);
        this.props.toggleNone();
    }
    //   onClick={()=>this.props.showinformation(item)}

    render() {
        var item = this.props.item;
        return (



            <Form inline className="widthmax" onClick={() => this.props.showinformation(item)}>
                <FormGroup className="FormGroup" color="secondary" >
                    <Label>
                        <input defaultChecked={item.Complete} onClick={this.UpdateCompleteStatus} value={item.task_id} type="checkbox"></input>
                    </Label>
                </FormGroup>
                <FormGroup className="FormGroup" >
                    <Label  >{item.title}</Label>
                </FormGroup>
                <ListItemSecondaryAction className="EditButton">
                    <IconButton mini aria-label="Edit" onClick={() => this.props.editSetup(item)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                        </svg>
                    </IconButton>
                    <IconButton color="secondary" aria-label="Delete" onClick={(e) => this.delete(e, item.task_id)} >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>

            </Form>



        );
    }
}
