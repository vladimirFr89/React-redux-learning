import React, {Component} from 'react';
import {connect} from 'react-redux';
import ToDoRowEdit from '../ToDoRowEdit';
import {delTodo, prepareToEdit} from '../../ActionCreators';

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