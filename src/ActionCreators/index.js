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