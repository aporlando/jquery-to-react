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
