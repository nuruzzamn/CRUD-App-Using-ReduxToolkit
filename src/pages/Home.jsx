import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const allBooks = useSelector((state) => state.books.books);

  console.log("Home", allBooks);
  return (
    <div>
      <section>
        {allBooks &&
          allBooks.map((book) => {
            return (
              <article key={book.id}>
                <h1>{book.title}</h1>
                <p>{book.author}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Home;
