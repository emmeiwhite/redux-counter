// In this component we are going to place our state, as well as handle user actions.

import React,{Component} from 'react';

import {connect} from 'react-redux';

class Counter extends Component{
    // constructor(props){
    //   super(props);

    //   // this.state = {
    //   //   counter:0
    //   // };
    // }

    decrementHandler = ()=>{
      // Never mutate the state. We'll first get current counter value and save it in a variable and then update our state using the copied state only
      // const counterValue = this.state.counter;

      // this.setState({
      //   counter:counterValue-1
      // })
      this.props.dispatch({type:"DECREMENT"});
      
    }

    incrementHandler = ()=>{
      // Never mutate the state. We'll first get current counter value and save it in a variable and then update our state using the copied state only
      // const counterValue = this.state.counter;

      // this.setState({
      //   counter:counterValue+1
      // })

      this.props.dispatch({type:"INCREMENT"});

    }

    render(){
      return(
        <div>
          <h2>Simple Counter</h2>
            <button className="btn btn-primary action" onClick={this.decrementHandler}>-</button>
            <span className="counter">{this.props.counter}</span>
            <button className="btn btn-primary action" onClick={this.incrementHandler}>+</button>
        </div>
      )
    }
}

// state usually comes with some initial state. The reducer returns it to the store
const mapStateToProps = (state)=>({
    counter:state.counter
})

// // Connecting the React Component with Redux using connect function
// export default connect(mapStateToProps)(Counter); //It is now the connected Component

export default connect(mapStateToProps)(Counter);