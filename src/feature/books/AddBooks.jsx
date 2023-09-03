import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fAddBooks } from "./BooksSlice";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // const book = useSelector((state) => state.books.books.length);
  const uid = new Date().getTime().toString();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // const addData = { id: book + 1, title, author };
    const addData = { id: uid, title, author };
    dispatch(fAddBooks(addData));

    navigate("/show-books");

    setTitle("");
    setAuthor("");
  };

  return (
    <div className="addBooks">
      <h1>Add new books </h1>
      <form onSubmit={handleSubmit}>
        <div className="text-field">
          <label htmlFor="title"> Title: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>

        <div className="text-field">
          <label htmlFor="author"> Author: </label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            required
          />
        </div>
        <br />
        <button type="submit" className="btn">
          {" "}
          Add new books{" "}
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
