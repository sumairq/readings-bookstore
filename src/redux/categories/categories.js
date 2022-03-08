/* eslint-disable */
// ACTION TYPES

// ACTION CREATORS

// REDUCER

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter(state.id = !action.id);
    default:
      return state;
  }
};

export default reducer;

// Reducer has to be the default export in this module
// Export individual action creators
