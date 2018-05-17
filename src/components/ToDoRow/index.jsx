import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DELETE_TODO} from '../../ActionTypes'

const delTodo = (index) => {
    return {
        type: DELETE_TODO,
        id: index
    }
};

class ToDoRow extends Component{
    constructor(props){
        super(props);
        this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
    }
    render(){
        const {id} = this.props;
        return(
            <div>
                <span>{this.props.curState[id]}</span>
                <button onClick={this.handleDeleteBtn}>Delete</button>
            </div>
        )
    }

    handleDeleteBtn() {
        //store.dispatch({ type: 'DECREMENT' });
        this.props.handleDelete(this.props.id);
    }
}

const mapStateToProps = state => {
    return {
        curState: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleDelete: (id) => {
            dispatch(delTodo(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoRow);