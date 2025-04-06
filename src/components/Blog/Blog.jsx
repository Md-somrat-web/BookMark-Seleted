import React from "react";
import { FaBookmark } from "react-icons/fa6";

const blog = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="author flex justify-around items-center">
            <h3>{blog.author}</h3>
            <img className="w-16" src={blog.author_img} alt="" />
            <FaBookmark />
          </div>
          <h2 className="card-title">{blog.title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          {
            <div className="flex">
              {blog.hashtags.map((has) => (
                <p>{has}</p>
              ))}
            </div>
          }
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
