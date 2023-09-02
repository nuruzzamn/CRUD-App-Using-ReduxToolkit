import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [
      { id: 1, 
        title: "Learn react redux", 
        author: "Zaman" },

      { id: 2, 
        title: "Learn react redux toolkit", 
        author: "Nur" },
    ],
  },
  reducers: {
    fShowBooks : (state) => state ,
    fAddBooks : (state, action) =>{
        state.books.push(action.payload )
    }
  },
});

export const {fShowBooks, fAddBooks} = booksSlice.actions

export default booksSlice.reducer
