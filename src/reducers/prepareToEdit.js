import {INIT_EDIT_TODO} from '../ActionTypes';

const prepareToEdit = (state, action) => {
    switch (action.type) {
        case INIT_EDIT_TODO:
            const newState = [];
            const oldList = [...state.todoList];

            oldList.forEach((item, index)=>{
                if (index === action.id){
                    item.isEditing = true;
                }
                newState.push(item);
            });

            return {
                ...state,
                todoList: newState
            };
            break;
        default:
            return state;
    }
};

export default prepareToEdit;