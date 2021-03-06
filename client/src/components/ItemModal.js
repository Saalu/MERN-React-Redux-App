import React, { Component } from 'react'
import {Modal, ModalBody, Form, FormGroup, Label, Input, Button, ModalHeader} from 'reactstrap'
import {connect} from 'react-redux'
import {addItem} from '../actions/itemActions'

export class ItemModal extends Component {
    state ={
        name: '',
        modal: false,
        editItem: false
    }

    toggle = () => {
        this.setState({modal: !this.state.modal})
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        const newItem = {
            name: this.state.name
        }
        // add item via addItem action
        this.props.addItem(newItem)
        //close modal
        this.toggle()
    }

    handleEdit = () => {
        this.setState({
            modal:true,
            editItem: true
        })
    }

    render() {
        return (
            <div>
                <Button 
                color='dark' 
                style={{marginTop: '2rem'}} 
                onClick={this.toggle}
               >
                Add Item
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='item'>Item</Label>
                                <Input 
                                  type='text'
                                  name='name'
                                  id='item'
                                  placeholder='Add Shopping item'
                                  onChange={this.onChange}
                                />
                                <Button color='dark' style={{marginTop: '2rem'}} block>
                                    Add Item
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


const mapStateProps = state => ({
    item: state.item
})


export default connect(
    mapStateProps,
    {addItem}
) (ItemModal)
