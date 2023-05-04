import * as constants from './constants'

const initial_state = null

function TickerReducer(state, action) {
    if (typeof state === 'undefined') {
        state = initial_state
    }
    if (action.type === constants.SAVE_TICKER) {
        return [...action.payload]
    } else {
        return state
    }
}

export default TickerReducer
