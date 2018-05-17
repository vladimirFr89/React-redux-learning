import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DELETE_TODO, INIT_EDIT_TODO} from '../../ActionTypes'
import ToDoRowEdit from '../ToDoRowEdit';

const delTodo = (index) => {
    return {
        type: DELETE_TODO,
        id: index
    }
};

const prepareToEdit = (index) => {
    return {
        type: INIT_EDIT_TODO,
        id: index
    }
};

class ToDoRow extends Component{
    constructor(props){
        super(props);
        this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
        this.handleEditBtn = this.handleEditBtn.bind(this);
    }
    render(){
        const {id} = this.props;
        const element = this.props.curState[id].isEditing ?
            <ToDoRowEdit id={id}/>:
            <span>{this.props.curState[id].text}</span>;

        return(
            <div>
                {element}
                <button onClick={this.handleEditBtn}>Edit</button>
                <button onClick={this.handleDeleteBtn}>Delete</button>
            </div>
        )
    }

    handleDeleteBtn() {
        //store.dispatch({ type: 'DECREMENT' });
        this.props.handleDelete(this.props.id);
    }

    handleEditBtn() {
        this.props.handlePrepareEdit(this.props.id)
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
        },

        handlePrepareEdit: (id) => {
            dispatch(prepareToEdit(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoRow);