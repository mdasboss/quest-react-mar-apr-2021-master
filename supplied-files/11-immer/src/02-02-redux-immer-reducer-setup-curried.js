// NOte: produce is also the default export (apart form being a named export)
import produce from 'immer';

// wrap up the reducer code in a produce callback
const reducer = ( state, action ) => produce(state, draft => {
    // make change to draft
};