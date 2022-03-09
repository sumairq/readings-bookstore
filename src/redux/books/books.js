/* eslint-disable */
// ACTION TYPES
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
// ACTION CREATORS
export const addBook = payload => ({
    type: ADD_BOOK,
    payload
})

export const removeBook = id => ({
    type: REMOVE_BOOK,
    payload: {
        id
    }
})
// REDUCER

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;

// Reducer has to be the default export in this module
// Export individual action creators
