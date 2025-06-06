import React, { useEffect, useState } from "react";
import Blog from "../Blog/blog";

const Blogs = ({ handelbookmark, handelMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  });
  console.log(blogs);
  return (
    <div>
      <h2 className="text-3xl">Total : {blogs.length}</h2>
      <div className="all-blogs grid grid-cols-2">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handelbookmark={handelbookmark}
            handelMarkAsRead={handelMarkAsRead}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
