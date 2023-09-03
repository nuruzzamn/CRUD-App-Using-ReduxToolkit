import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fDeleteBooks } from "./BooksSlice";
import { Link } from "react-router-dom";

const BooksView = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const filterDelete = books.filter((book) => book.id !== id);
    dispatch(fDeleteBooks(filterDelete));
  };

  return (
    <div>
      <section className="table-container">
        <h1>List of Books</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>AUTHOR NAME</th>
              <th colSpan="2">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {books &&
              books.map((book) => {
                const { id, title, author } = book;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                      <Link to="/update-books" state={{ id, title, author }}>
                        <button className="btn">Update</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => handleDelete(book.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default BooksView;
