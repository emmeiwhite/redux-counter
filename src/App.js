import React, { Component } from 'react';
import './App.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './Counter';

const initialState = {
  counter:0
}

const reducer = (state=initialState,action)=>{
  // console.log(action);
// reducer will set the initial  state of the store

  // return state;

  switch(action.type){
    case "INCREMENT":
      const incrementCounter = state.counter;
        return {
          counter:incrementCounter+1
        }
    case "DECREMENT":
        const decrementCounter = state.counter;
        return {
          counter:decrementCounter-1
        }
    default:
        return state;
  }
}

const store = createStore(reducer);


// The only way to update the state is by passing an action for reducer to decide what to do.
// Note that we never mutate the state in the state directly in the reducer

// store.dispatch({type:"INCREMENT",payload:"play"});
// store.dispatch({type:"DECREMENT",payload:"play"});

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
      </div>
    );
  }
}

export default App;
