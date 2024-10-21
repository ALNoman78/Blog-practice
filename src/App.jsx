import { useState } from 'react';
import './App.css'
import Blog_Data from './Components/Blog-Data/Blog_Data'
import Bookmark from './Components/BookMarks/Bookmark'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks , setBookmarks] = useState([]);
  const [readingTime , setReadingTime] = useState(0)

  const handleTime = (time) => {
    setReadingTime(readingTime + time)
  }

  const handlerBookmark = bookmark => {
    const newBookmarks = [...bookmarks , bookmark]
    setBookmarks(newBookmarks)
  }
  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blog_Data handlerBookmark = {handlerBookmark} handleTime = {handleTime}></Blog_Data>
        <Bookmark bookmarks ={bookmarks} readingTime = {readingTime}></Bookmark>
      </main>
    </>
  )
}
export default App
