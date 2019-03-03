import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import RecipeBox from './components/recipeBox'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RecipeBox/>
      </Provider>
    )
  }
}

export default App;
