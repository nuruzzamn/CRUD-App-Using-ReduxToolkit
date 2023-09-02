import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import BooksView from '../feature/books/BooksView'
import AddBooks from '../feature/books/AddBooks'
import Navbar from '../Layout/Navbar'

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path='/' element = { <Home /> } ></Route>
            <Route path='/show-books' element = { <BooksView /> } ></Route>
            <Route path='/add-books' element = { <AddBooks /> } ></Route>
            <Route path='*' element = { <Error /> } ></Route>

        </Routes>
    </BrowserRouter>
  )
}

export default Index