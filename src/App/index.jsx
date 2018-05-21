import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTodo, requestSomeData} from '../ActionCreators';

import ToDoRow from '../components/ToDoRow';

class App extends Component{
    constructor(){
        super();
        this.handleAddBtn = this.handleAddBtn.bind(this);
        this.handleGetSomeDataFromBtn = this.handleGetSomeDataFromBtn.bind(this);
    }

    render(){
        const {curState} = this.props;
        const listElements = curState.todoList.map((item, index)=>{
            return (
                <li key={index}><ToDoRow id={index}/></li>
            )
        });

        const waitElement = curState.didRefresh && <span>Please, wait...</span>;
        return (
            <div>
                <h2>ToDoApp!</h2>
                <input type='text' placeholder='new todo' ref={(input)=>{this.textInput = input;}}/>
                <button onClick={this.handleAddBtn}>Add</button>
                <ul>
                    {listElements}
                </ul>
                <div>
                    <button onClick={this.handleGetSomeDataFromBtn} disabled={curState.didRefresh}>GetSomeDataFrom</button>
                </div>
                {waitElement}
                <div>
                    <p>{curState.data}</p>
                </div>
            </div>
        )
    }

    handleAddBtn() {
        //store.dispatch({ type: 'INCREMENT' });
        this.props.handleAdd(this.textInput.value);
        this.textInput.value = '';
    }

    handleGetSomeDataFromBtn(){
        console.info('Do get some data from');
        this.props.handleGetSomeDataFrom();
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

        handleGetSomeDataFrom: () => {
            dispatch(requestSomeData());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);