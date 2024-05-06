import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className="items-center justify-center text-center">
        <h1 className="mt-28 text-2xl font-semibold md:text-4xl">
          Hi hello <span className="text-blue-500">vanakam</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio
          et quidem aliquam nisi ipsa quisquam laborum tempore dignissimos quam
          veritatis pariatur odit sint provident debitis inventore possimus, nam
          vitae.
        </p>
        <Link to="/">
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
