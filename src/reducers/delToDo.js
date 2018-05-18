import {DELETE_TODO} from '../ActionTypes';

const delToDo = (state, action)=>{
    switch (action.type) {
        case DELETE_TODO:
            const newState = [];
            const oldList = [...state.todoList];

            oldList.forEach((item, index) => {
                if (index!== action.id) {
                    newState.push(item);
                }
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

export default delToDo;