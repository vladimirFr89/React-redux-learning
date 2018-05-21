import * as action from '../ActionTypes';

export function addTodo (textValue) {
    return {
        type: action.ADD_TODO,
        text: textValue
    }
};

export const delTodo = (index) => {
    return {
        type: action.DELETE_TODO,
        id: index
    }
};

export const prepareToEdit = (index) => {
    return {
        type: action.INIT_EDIT_TODO,
        id: index
    }
};

export const editTodo = (index, value)=> {
    return {
        type: action.EDIT_TODO,
        id: index,
        text: value
    }
};


export const refreshStart = ()=>{
    return {
        type: action.REFRESH_DOING,
        didRefresh: true
    }
};

export const requestData = () => {
    return {
        type: action.REQUEST_SOMETHING,
        isFetch: true,
        didRefresh: false
    }
};

export const receiveData = (someData) => {
    return {
        type: action.RECEIVE_SOMETHING,
        isFetch: false,
        didRefresh: false,
        data: someData
    }
};

export const requestSomeData = () => {
    return dispatch => {
        setTimeout(()=>{
            console.info('Got new some data!!!');
            dispatch(receiveData('olololo!!!!!'));
        }, 3000);

        dispatch(refreshStart());
    }
};