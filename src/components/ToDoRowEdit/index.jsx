import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editTodo} from '../../ActionCreators';

class ToDoRowEdit extends Component {

    constructor(props){
        super(props);
        this.handleApplyBtn = this.handleApplyBtn.bind(this);
    }

    render(){
        const {id} = this.props;
        return (
            <div>
                <input type='text' defaultValue={this.props.curState[id].text} ref={(input)=>{this.textInput = input}}/>
                <button onClick={this.handleApplyBtn}>Apply</button>
            </div>
        )
    }

    handleApplyBtn(){
        this.props.handleApply(this.props.id, this.textInput.value)
    }
}

const mapStateToProps = state => {
    return {
        curState: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleApply: (id, value)=>{
            dispatch(editTodo(id, value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoRowEdit);