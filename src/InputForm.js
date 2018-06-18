import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';

class InputForm extends React.Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.handleSubmit=this.handleSubmit.bind(this);
    };
    handleSubmit(e){
        e.preventDefault();
        var inputState ={
            task_id : Date.now(),
            title : this.title.value,
            description :this.description.value,
            date :this.date.value,
            Complete : false
        }
        this.props.addItem(inputState);
        this.title.value ="";
        this.description.value ="";
        this.date.value ="";
        
    };
    render() {

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label  sm={2}>Name</Label>
          <Col sm={10}>
          <Input type="email" name="name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label  sm={2}>Title</Label>
          <Col sm={10}>
          <Input type="textarea" innerRef={el => this.title = el} name="Title" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label  sm={2}>Description</Label>
          <Col sm={10}>
          <Input type="textarea" innerRef={el => this.description = el} name="Description" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label  sm={2}>date</Label>
          <Col sm={10}>
          <Input type="textarea" innerRef={el => this.date = el} name="date" />
          </Col>
        </FormGroup>
       <FormGroup check>
                             
        </FormGroup>
      </Form>
    );
  }
}

export default InputForm;