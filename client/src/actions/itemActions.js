import axios from 'axios'
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM,UPDATE_ITEM, ITEMS_LOADING} from './types'


export const getItems = () => dispatch => {
  dispatch(setItemsLoading())
  axios.get('/api')
  .then(res => dispatch({
      type:GET_ITEMS,
      payload:res.data
  }))
}
 //  =====Working on the Update ====
export const updateItem = (id) => dispatch => {
    axios.patch(`/api/${id}`)
    .then(res =>  dispatch({
        type: UPDATE_ITEM,
        payload: id
    }))
    console.log(id)
    // .catch(err => console.error(err)) 
}

export const deleteItem = id => dispatch => {
    axios.delete(`/api/${id}`)
    .then(res =>  dispatch({
        type: DELETE_ITEM,
        payload: id
    }))
    console.log(id)
}

export const addItem = item => dispatch =>{
   axios.post('/api/save', item)
   .then(res => dispatch({
       type:ADD_ITEM,
       payload: res.data
   }))
}



export const setItemsLoading = () => {
    return{
        type: ITEMS_LOADING,
    }
}