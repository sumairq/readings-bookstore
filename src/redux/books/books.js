/* eslint-disable */
import axios from "axios";
// ACTION TYPES
const ADD_BOOK = "bookStore/books/ADD_BOOK";
const REMOVE_BOOK = "bookStore/books/REMOVE_BOOK";
const SET_BOOKS = "bookStore/books/SET_BOOKS";
const url =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/98I1FXZiXJL2rnyFBeM8/books";
// ACTION CREATORS
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

const setBooks = (payload) => ({
  type: SET_BOOKS,
  payload,
});
export const removeBooksFromApi = (id) => async (dispatch) => {
  axios.delete(`${url}/${id}`);
  dispatch(removeBook(id));
};
export const addBooksToApi = (newBook) => async (dispatch) => {
  const { item_id, title, author, category } = newBook;

  const bookForApi = {
    item_id: item_id,
    category: category,
    title: title,
    author: author,
  };

  await axios.post(url, bookForApi);
  dispatch(addBook(bookForApi));
};

export const fetchBooks = () => {
  return async (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const mappedData = Object.entries(data).map(([key, value]) => ({
          item_id: key,
          title: {
            name: value[0].title.name,
            author: value[0].title.author,
          },
          category: value[0].category,
        }));
        console.log(mappedData);
        return dispatch(setBooks(mappedData));
      });
  };
};
// REDUCER

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case SET_BOOKS:
      return [...action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;

// Reducer has to be the default export in this module
// Export individual action creators
