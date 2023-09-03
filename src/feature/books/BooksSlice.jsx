import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [
      { id: 1, title: "Learn react redux", author: "Zaman" },

      { id: 2, title: "Learn react redux toolkit", author: "Nur" },

      { id: 3, title: "Learn react react", author: "Moon" },
    ],
  },
  reducers: {
    fShowBooks: (state) => state,
    fAddBooks: (state, action) => {
      state.books.push(action.payload);
    },
    fDeleteBooks: (state, action) => {
      state.books = action.payload;
    },
    fUpdateBooks: (state, action) => {
      const { id, title, author } = action.payload;
      const CheckBookList = state.books.filter((book) => book.id === id);
      if (CheckBookList) {
        CheckBookList[0].title = title;
        CheckBookList[0].author = author;
      }
    },
  },
});

export const { fShowBooks, fAddBooks, fDeleteBooks, fUpdateBooks } =
  booksSlice.actions;

export default booksSlice.reducer;
