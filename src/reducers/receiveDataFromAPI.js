import {RECEIVE_SOMETHING} from '../ActionTypes';

const receiveDataFromAPI = (state, action) => {
    switch (action.type){
        case RECEIVE_SOMETHING:
            return {
                ...state,
                data: action.data,
                didRefresh: false
            };
        default:
            return state;
    }
};

export default receiveDataFromAPI;