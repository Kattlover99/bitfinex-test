import * as constants from './constants'

const initial_state = {
    bids: {}
    , asks: {}
    , psnap: {}
    , mcnt: 0
}
function OrderBookReducer(state, action) {
    if (typeof state === 'undefined') {
        state = initial_state
    }
    if (action.type === constants.SAVE_BOOK) {
        return { ...action.payload }
    } else {
        return state
    }
}

export default OrderBookReducer
