import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getItems, deleteItem, updateItem} from '../actions/itemActions'
import PropTypes from 'prop-types'

 class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems()
    }
    
    onDelete = (id)  => {
        this.props.deleteItem(id)
    }
    // onUpdate = (id)  => {
    //     // this.props.deleteItem(id)
    //     this.props.updateItem(id)
    // }
    render() {
        const {items} = this.props.item
        return (
            <div className="container d-flex justify-content-center">
               <div className="col-md-6  mt-5">
                 {
                     items.map(({_id, name}) => (
                     <ul className="list-group" key={_id}>
                         <li className="list-group-item d-flex 
                        justify-content-between 
                        align-items-center">{name}
                     <div>
                
                       <span className="btn btn-success btn-sm mx-2 "
                       >
                        <i className="fas fa-pen"></i>
                       </span>
                       
                       <span className="btn btn-danger btn-sm mx-2 "
                       onClick={this.onDelete.bind(this, _id)}
                       >
                        <i className="fas fa-trash"></i>
                       </span>
                     </div>
                     </li>
                    </ul>
                     ))
                 }
                
            </div>
            
            </div>

        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    deleteItem:PropTypes.func.isRequired,
}

const mapStateProps = (state) => {
    return{
        item: state.item
    }
}

export default connect(mapStateProps, {getItems, deleteItem, updateItem}) (ShoppingList)
