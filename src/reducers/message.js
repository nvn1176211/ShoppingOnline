import * as types from './../constants/actionTypes';
import * as messages from './../constants/message';

const initialState = messages.MMS_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default: return state;
    }
}


export default message;