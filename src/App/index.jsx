import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../ActionCreators';

import ToDoRow from '../components/ToDoRow';

class App extends Component{
    constructor(){
        super();
        this.handleAddBtn = this.handleAddBtn.bind(this);
    }

    render(){
        const {curState} = this.props;
        const listElements = curState.todoList.map((item, index)=>{
            return (
                <li key={index}><ToDoRow id={index}/></li>
            )
        });
        return (
            <div>
                <h2>ToDoApp!</h2>
                <input type='text' placeholder='new todo' ref={(input)=>{this.textInput = input;}}/>
                <button onClick={this.handleAddBtn}>Add</button>
                <ul>
                    {listElements}
                </ul>
            </div>
        )
    }

    handleAddBtn() {
        //store.dispatch({ type: 'INCREMENT' });
        this.props.handleAdd(this.textInput.value);
        this.textInput.value = '';
    }
}

const mapStateToProps = state => {
  return {
      curState: state
  }
};

const mapDispatchToProps = dispatch => {
    return {
        handleAdd: (value)=>{
            dispatch(addTodo(value));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);