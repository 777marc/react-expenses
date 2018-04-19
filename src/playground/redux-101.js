import { createStore } from 'redux';

const incrementCount = ( { incrementBy = 1 } = {} ) => ({ 
    type: 'INCREMENT',
    incrementBy 
});

const decrementCount = ( { decrementBy = 1 } = {} ) => ({ 
    type: 'DECREMENT',
    decrementBy 
});

const setCount = ( { count = 0 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducer
const countReducer = (state = { count: 0 }, action) => {

    switch(action.type) {
        case 'INCREMENT' : 
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return { count: state.count + incrementBy };
            break;
        case 'DECREMENT' :
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return { count: state.count - decrementBy };
            break;
        case 'SET' :
            return { count: action.count };
            break;
        case 'RESET' :
            return { count: 0 };
            break;
        default:
            return state;
    }

};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount( { incrementBy: 11 }));

store.dispatch(setCount({ count: 5 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 8 }));

