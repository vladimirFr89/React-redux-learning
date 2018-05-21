import {EDIT_TODO} from '../ActionTypes'

const editToDo = (state, action) => {
    switch (action.type) {
        case EDIT_TODO:
            const newState = [];
            const oldList = [...state.todoList];

            oldList.forEach((item, index)=>{
                if (index === action.id){
                    item.text = action.text;
                    item.isEditing = false;
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

export default editToDo;