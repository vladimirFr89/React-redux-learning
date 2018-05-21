import {REFRESH_DOING} from '../ActionTypes';

const doRefresh = (state, action) => {
    switch (action.type){
        case REFRESH_DOING:
            return {
                ...state,
                didRefresh: action.didRefresh
            };

        default:
            return state;
    }
};

export default doRefresh;