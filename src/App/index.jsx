import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO
} from '../ActionTypes';

import ToDoRow from '../components/ToDoRow';

const addTodo = (textValue) => {
    return {
        type: ADD_TODO,
        text: textValue
    }
};

class App extends Component{
    constructor(){
        super();
        this.handleAddBtn = this.handleAddBtn.bind(this);
    }

    render(){
        console.info('Current todos state:');
        console.info(this.props.curState);
        const listElements = this.props.curState.map((item, index)=>{
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
        },

        handleDelete: ()=> {
            dispatch(delTodo());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);