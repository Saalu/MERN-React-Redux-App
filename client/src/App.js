import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import store from './store'
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal'

 class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className='App'>
        <h3>Keep Calm And Code</h3>
        <ItemModal/>
        <ShoppingList/>
      </div>
      </Provider>
    )
  }
}

export default App
