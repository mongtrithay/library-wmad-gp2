import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const BookCatalogPage = () => {
  const [books, setBooks] = useState([]);
  const url = "http://localhost:3000/api/books";
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
      await getBooksWithPagination(1);
    };
    fetchData();
  }, []);

  

  function getValue(event) {
    event.preventDefault();
    let currentPage = Number(document.getElementById("page").value);
    console.log(currentPage);
    getBooksWithPagination(currentPage);
    

  }

  const getBooksWithPagination = async (page) => {
    try {
      const respone = await axios.get(
        `http://localhost:3000/api/books/pagination?page=${page}&pageSize=4`,
        obj
      );
      const data = respone.data;
      console.log("--", data);

      setBooks(data.data);
    } catch (error) {
      console.error("Data oun bc drink beer", error);
    }
  };

  return (
    <div className=" bg-gray-100">
      <h1 className=" my-4 text-3xl font-bold">Book Catalogs</h1>
      <button className="bg-sky-500 my-4 text-white font-bold py-4 px-8 rounded-lg ">
        Create
      </button>
      <table className=" my-4 text-left  border-4 border-slate-400 ...">
        <thead>
          <tr className="px-6 py-6 border-b-2 border-gray-300">
            <th className="px-5 py-5">Action</th>
            <th className="px-5 py-5">ISBN</th>
            <th className="px-5 py-5">Title</th>
            <th className="px-5 py-5">Authors</th>
            <th className="px-5 py-5">Publisher</th>
            <th className="px-5 py-5">Genre</th>
            <th className="px-5 py-5">Shelf Location</th>
          </tr>
        </thead>
        <tbody>
          {books.map((data, i) => (
            <tr key={i} className="border-b-2 border-gray-300">
              <td className="px-5 py-5">
                <button className="bg-sky-500 text-center py-1 px-4 text-white rounded-lg">
                  view
                </button>
              </td>
              <td className="px-5 py-5">{data.isbn}</td>
              <td className="px-5 py-5">{data.title}</td>
              <td className="px-5 py-5">{data.authors}</td>
              <td className="px-5 py-5">{data.publisher}</td>
              <td className="px-5 py-5">{data.genre}</td>
              <td className="px-5 py-5">{data.shelf_location}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <input type="number" name="submit" id="page" />
      <button type="onSubmit" onClick={getValue}>
        submit
      </button>
    </div>
  );
};

export default BookCatalogPage;
