import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

/**
 * com o combineReducers é feito a inserção 
 * do array que esta no BooksReducer
 */
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
})

export default rootReducer;
