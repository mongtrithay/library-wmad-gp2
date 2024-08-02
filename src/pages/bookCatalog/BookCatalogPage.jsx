import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const BookCatalogPage = () => {
  const [books, setBooks] = useState([]);
  const url = "http://localhost:3000/api/books";
  const token = localStorage.getItem("token") ;
  const obj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respone = await axios.get(url, obj);
        const data = respone.data;
        setBooks(data);
        console.log(data);
      } catch (error) {
        console.error("Data oun bc drink beer", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" bg-gray-100">
      <h1 className=" my-4 text-3xl font-bold">Book Catalogs</h1>
      <button class="bg-sky-500 my-4 text-white font-bold py-4 px-8 rounded-lg ">
        Create
      </button>
      <table class=" my-4 text-left  border-4 border-slate-400 ...">
        <thead>
          <tr class="px-6 py-6 border-b-2 border-gray-300">
            <th class="px-5 py-5">Action</th>
            <th class="px-5 py-5">ISBN</th>
            <th class="px-5 py-5">Title</th>
            <th class="px-5 py-5">Authors</th>
            <th class="px-5 py-5">Publisher</th>
            <th class="px-5 py-5">Genre</th>
            <th class="px-5 py-5">Shelf Location</th>
          </tr>
        </thead>
        <tbody>
          {books.map((data) => (
            <tr className="border-b-2 border-gray-300">
              <td class="px-5 py-5">
                <button class="bg-sky-500 text-center py-1 px-4 text-white rounded-lg">
                  view
                </button>
              </td>
              <td class="px-5 py-5">{data.isbn}</td>
              <td class="px-5 py-5">{data.title}</td>
              <td class="px-5 py-5">{data.authors}</td>
              <td class="px-5 py-5">{data.publisher}</td>
              <td class="px-5 py-5">{data.genre}</td>
              <td class="px-5 py-5">{data.shelf_location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookCatalogPage;
