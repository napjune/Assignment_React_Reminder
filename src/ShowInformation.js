import React from 'react';
import { Container, Modal, ModalHeader, ModalBody, ModalFooter ,ListGroup,ListGroupItem} from 'reactstrap';
import InputForm from './InputForm'
import './ShowInformation.css'
import ListItem from'./ListItem';
import Button from '@material-ui/core/Button';

class ShowInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
     
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.createTasks =this.createTasks.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
    
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }
  createTasks(item){
    if(item.complete===true){
      var complete = "complete";
    } else{
      complete ="not complete"
    }
    return (<div>
      <Button variant="outlined" className ="button_to_List"   
      ><ListItem item={item} openEdit={this.toggleNested}/>
      
      </Button>
      <Modal isOpen={this.state.modal}  >
        <ModalHeader>{item.title}</ModalHeader>
        <ModalBody>
        <ListGroup flush>
          <ListGroupItem >Description:{item.description} </ListGroupItem>
          <ListGroupItem >Date:{item.date} </ListGroupItem>
          <ListGroupItem >Complete:{complete}</ListGroupItem>
          
        </ListGroup>
          <br />  
        </ModalBody>
        <ModalFooter>
        <Button color="success" onClick={this.toggleNested}>Click Edit</Button>
          <Button color="secondary" onClick={this.toggle}>Submit</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
            <ModalHeader>Edit</ModalHeader>
            <ModalBody>
              <InputForm />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
              <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
            </ModalFooter>
          </Modal>
      </div>)
  }
  
  render(){
    var todoEntries = this.props.entries;
    var listItems =todoEntries.map(this.createTasks);
    return(
      <Container className="show_button">
    
    <h1>List</h1>
    {listItems}
    </Container>
    );
  }
 
}

export default ShowInformation;