import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://project-manga-frontend.vercel.app//book");
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
          Welcome to the world of{" "}
          <span className="text-blue-500">premium manga</span>
        </h1>
        <p className="mt-12">
          Step into the realm of premium manga, where captivating stories await
          your discovery. Embrace a world where every page is a gateway to
          unforgettable adventures.
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
