import React, {Component} from 'react';
import {connect} from 'react-redux';

 class App extends Component{
    constructor(){
        super();
        this.handleUpBtn = this.handleUpBtn.bind(this);
        this.handleDownBtn = this.handleDownBtn.bind(this);
    }

    render(){
        return (
            <div>
                <h2>This is react!!</h2>
                <h3>With state is {this.props.curState}</h3>
                <button onClick={this.handleUpBtn}>Up!</button>
                <button onClick={this.handleDownBtn}>Down!</button>
            </div>
        )
    }

    handleUpBtn() {
        //store.dispatch({ type: 'INCREMENT' });
        console.info('up!');
        this.props.handleUp();
    }

    handleDownBtn() {
        //store.dispatch({ type: 'DECREMENT' });
        console.info('down!');
        this.props.handleDown();
    }
}

const mapStateToProps = state => {
  return {
      curState: state
  }
};

const mapDispatchToProps = dispatch => {
    return {
        handleUp: ()=>{
            dispatch({type: 'INCREMENT'});
        },

        handleDown: ()=> {
            dispatch({type: 'DECREMENT'});
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);