import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [Bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingTime] = useState(0);

  const handelbookmark = (blog) => {
    setBookmarked([...Bookmarked, blog]);
    console.log(Bookmarked);
  };

  const handelMarkAsRead = (time, id) => {
    const newTime = readingCount + time;
    setReadingTime(newTime);
    handelRemoveBookmarked(id);
  };
  const handelRemoveBookmarked = (id) => {
    const remingBookmarked = Bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remingBookmarked);
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs
            handelbookmark={handelbookmark}
            handelMarkAsRead={handelMarkAsRead}
          ></Blogs>
        </div>
        <div className="right-container w-[30%] ">
          <h1>Reading Time : {readingCount}</h1>
          <h1>Bookmarked count : {Bookmarked.length}</h1>
          {Bookmarked.map((marked) => (
            <p className="bg-red-600 p-2 shadow m-2 text-2xl text-white">
              {marked.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
