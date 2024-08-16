import axios from "axios";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
let currentPage = 1;
const BookCatalogPage = () => {
  const [books, setBooks] = useState([]);
  const url = "https://wmad-library-backend-six.vercel.app/api/books";
  const token = localStorage.getItem("token");
  const obj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      await getBooksWithPagination(currentPage);
    };
    fetchData();
  }, []);
  const getBooksWithPagination = async (page) => {
    console.log("page..", page);
    try {
      const respone = await axios.get(
        `http://localhost:3000/api/books/pagination?page=${page}&pageSize=10`,
        obj
      );
      const data = respone.data;
      setBooks(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" bg-gray-100">
      <h1 className=" my-4 text-3xl font-bold">Book Catalogs</h1>
      <button class="bg-sky-500 my-4 text-white font-bold py-4 px-8 rounded-lg  " >
        <Link to="/book-catalog/new">
        Create
        </Link>
      </button>
      <table className=" my-4 text-left  border-4 border-slate-400 ...">
        <thead>
          <tr className="px-6 py-6 border-b-2 border-gray-300">
            <th className="px-5 py-3">Action</th>
            <th className="px-5 py-3">ISBN</th>
            <th className="px-5 py-3">Title</th>
            <th className="px-5 py-3">Authors</th>
            <th className="px-5 py-3">Publisher</th>
            <th className="px-5 py-3">Genre</th>
            <th className="px-5 py-3">Shelf Location</th>
          </tr>
        </thead>
        <tbody>
          {books.map((data, i) => (
            <tr key={i} className="border-b-2 border-gray-300">
              <td class="px-5 py-5">
                <button class="bg-sky-500 text-center py-1 px-4 text-white rounded-lg">
                  <Link to={`/book-catalog/${data.id}`}>
                  view
                  </Link>
                </button>
              </td>
              <td className="px-5 py-3">{data.isbn}</td>
              <td className="px-5 py-3">{data.title}</td>
              <td className="px-5 py-3">{data.authors}</td>
              <td className="px-5 py-3">{data.publisher}</td>
              <td className="px-5 py-3">{data.genre}</td>
              <td className="px-5 py-3">{data.shelf_location}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className=" flex gap-4 w-full justify-end ">
        <button
          className="border-2 px-4 border-gray-900 rounded "
          onClick={prePage}
        >
          Pre
        </button>
        <form action="" method="post" name="test_fn">
          <h1 className="border-2 px-3 border-gray-400 rounded bg-slate-200 ">
            {currentPage}
          </h1>
        </form>
        <button
          className="border-2 px-3 border-gray-900 mr-9 rounded "
          onClick={nextPage}
        >
          Next
        </button>
      </nav>
    </div>
  );
  function prePage() {
    currentPage -= 1;
    getBooksWithPagination(currentPage);
  }
  async function nextPage() {
    console.log("before next", currentPage);
    currentPage += 1;
    console.log("next", currentPage);
    getBooksWithPagination(currentPage);
  }
};

export default BookCatalogPage;
