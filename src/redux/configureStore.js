import { combineReducers, createStore } from 'redux';

import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducers = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,

});

const store = createStore(
  reducers,
  {},
);

export default store;
