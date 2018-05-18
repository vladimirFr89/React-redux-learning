import * as actions from '../ActionTypes';

import delToDo from './delToDo';
import prepareToEdit from './prepareToEdit';
import editToDo from './editToDo';

const initState = {todoList:[]};

const todoApp = (state = initState, action) => {
    switch (action.type) {
        case actions.ADD_TODO:
            return {
                ...state,
                todoList:[
                    ...state.todoList,
                    {
                        text: action.text,
                        isEditing: false
                    }
                ]
            };
            break;

        case actions.DELETE_TODO:
            return delToDo(state, action);
            break;

        case actions.INIT_EDIT_TODO:
            return prepareToEdit(state, action);
            break;

        case actions.EDIT_TODO:
            return editToDo(state, action);
            break;
        default:
            return state;
    }
};

export default todoApp;