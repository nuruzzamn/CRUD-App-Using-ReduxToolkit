import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const BooksView = () => {

  const books = useSelector((state)=> state.books.books)

  return (
    <div>
      <section className='table-container'>
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
            {books && books.map((book)=>{
              return <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>    
                  <td><button className='btn'>Update</button></td>
                  <td><button className='btn'>Delete</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default BooksView