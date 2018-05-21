import * as actions from '../ActionTypes';

import delToDo from './delToDo';
import prepareToEdit from './prepareToEdit';
import editToDo from './editToDo';
import receiveDataFromAPI from './receiveDataFromAPI';
import doRefresh from './doRefresh';

const initState = {
    didRefresh: false,
    isFetch: false,
    data:'',
    todoList:[]};

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

        case actions.RECEIVE_SOMETHING:
            return receiveDataFromAPI(state, action);
            break;

        case actions.REFRESH_DOING:
            return doRefresh(state, action);
            break;
        default:
            return state;
    }
};

export default todoApp;