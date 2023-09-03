import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fUpdateBooks } from "./BooksSlice";

const UpdateBooks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fUpdateBooks({ id, title, author }));

    navigate("/show-books");
  };

  return (
    <div className="addBooks">
      <h1>Update Books Data</h1>
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
          Update Books Info{" "}
        </button>
      </form>
    </div>
  );
};

export default UpdateBooks;
