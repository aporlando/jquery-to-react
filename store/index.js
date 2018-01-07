// The initial state of our store
const initialState = {
    hasCompletedItems: false
};

function setHasCompletedItems(hasCompletedItems = false) {
    return {
        type: 'SET_HAS_COMPLETED_ITEMS',
        hasCompletedItems: true / false
    };
}

function reducer(state = initialState, action) {
    if (action.type = 'SET_HAS_COMPLETED_ITEMS') {
        return { hasCompletedItems: action.hasCompletedItems };
    }
    return state;
}

var store = Redux.createStore(reducer);
