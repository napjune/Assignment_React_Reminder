import React from 'react';
import { Modal,ModalHeader,ModalBody,Button, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';

class InputForm extends React.Component {
    constructor(props){
        super(props);
     
        this.handleSubmit=this.handleSubmit.bind(this);

        console.log(this.props.AddFormShow);
       
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
        <Modal isOpen={this.props.AddFormShow} toggle={this.props.ChangeFormState} >
        <ModalHeader>Edit</ModalHeader>
        <ModalBody>
      <Form onSubmit={this.handleSubmit}>
        
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
         
          <Button type="submit">add</Button>                    
        </FormGroup>
      </Form>
     
      </ModalBody>
      </Modal>
        
    );
  }
}

export default InputForm;