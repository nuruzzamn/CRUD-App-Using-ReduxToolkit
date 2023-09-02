import { configureStore } from "@reduxjs/toolkit";
// import { booksSlice } from "../feature/books/BooksSlice";
import BooksSlice from "../feature/books/BooksSlice";

const store = configureStore({
    reducer : {
        books : BooksSlice
    }
})

export default store