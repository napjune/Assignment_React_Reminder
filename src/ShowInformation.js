import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import './ShowInformation.css'
import ListItem from './ListItem';
import Button from '@material-ui/core/Button';

class ShowInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      showState: [],
      editStata: [],
    };
    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.createTasks = this.createTasks.bind(this);
    this.editParent = this.editParent.bind(this);
    this.editSetup = this.editSetup.bind(this);
    this.showinformation = this.showinformation.bind(this);
    this.toggleNone = this.toggleNone.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      modal: false
    });
  }
  showinformation(state) {
    this.setState({ showState: state }, function () {
      this.toggle();
    });
  }
  editSetup(state) {
    this.setState({ showState: state }, function () {
      this.toggleNested();
    });
  }
  editParent(e) {
    this.props.edit(this.state.showState.task_id, this.title.value, this.description.value, this.date.value);
    this.toggleNested();
  }
  toggleNone() {
    this.setState({
      nestedModal: false,
      Modal: false
    });
  }
  onButton = event => {
    console.log(event.target.id) // <--- the button that was clicked's id
  }
  createTasks(item) {
    if (item.Complete === true) {
      var complete = "completed";
    } else {
      complete = "not completed"
    }

    return (
      <div className="divbox">
        <Button className="button_in_List" variant="outlined" color="secondary"  >
          <ListItem item={item} toggleNone={this.toggleNone} showinformation={this.showinformation}
            editSetup={this.editSetup} updateComplete={this.props.updateComplete} delete={this.props.delete} />
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>{this.state.showState.title}</ModalHeader>
          <ModalBody>
            <ListGroup flush>
              <ListGroupItem >Description:{this.state.showState.description} </ListGroupItem>
              <ListGroupItem >Date:{this.state.showState.date} </ListGroupItem>
              <ListGroupItem >Complete:{complete}</ListGroupItem>
            </ListGroup>
            <br />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggleNested}>Click Edit</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
          <Form onSubmit={this.handleSubmit}>
            <ModalHeader>Edit</ModalHeader>
            <ModalBody>
              <FormGroup row>
                <Label sm={2}>Title</Label>
                <Col sm={10}>
                  <Input type="textarea" defaultValue={this.state.showState.title} innerRef={el => this.title = el} name="Title" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Description</Label>
                <Col sm={10}>
                  <Input type="textarea" defaultValue={this.state.showState.description} innerRef={el => this.description = el} name="Description" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Date</Label>
                <Col sm={10}>
                  <Input type="textarea" defaultValue={this.state.showState.date} innerRef={el => this.date = el} name="date" />
                </Col>
              </FormGroup>
              <FormGroup check>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.editParent} >Submit</Button>
              <Button color="secondary" onClick={this.toggleNested}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>

    )
  }

  render() {
    if (this.props.page === "todo") {
      var todoEntries = this.props.entries;
      var listItems = todoEntries.map(this.createTasks);
      var text = "All TASKS";
    } else {
      todoEntries = this.props.completeItems;
      listItems = todoEntries.map(this.createTasks);
      text = "COMPLETED TASKS";
    }

    return (
      <div className="list_box">
        <h1>{text}</h1>
        {listItems}
      </div>
    );
  }

}

export default ShowInformation;