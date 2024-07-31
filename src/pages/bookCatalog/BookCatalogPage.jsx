import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const BookCatalogPage = () => {
  const [books, setBooks] = useState([]);
  const url = 'http://localhost:3000/api/books';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTcyMjQxMDIyMCwiZXhwIjoxNzIyNDQ2MjIwfQ.U775eAQT3Y33RkRrKP3mcMJf62WDpiWLEqTNoZo-C34';
  const obj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try{
        const respone = await axios.get(url, obj);
      const data = respone.data;
      setBooks(data)
      console.log(data);
      }catch(error){
        console.error('Data oun bc drink beer',error);
      }
    }
    fetchData();
    }, []);
  return (
    <div className=" bg-gray-100">
      <h1 className=" my-4 text-3xl font-bold">Book Catalogs</h1>
      <button class="bg-sky-500 my-4 text-white font-bold py-4 px-8 rounded-lg ">Create</button>
      <table class="border-separate  my-4 text-left rounded-lg border-spacing-4 border-4 border-slate-400 ...">
        <thead>
          <tr class="border-b-2 border-gray-600">
            <th class="">Action</th>
            <th class="">ISBN</th>
            <th class="">Title</th>
            <th class="">Authors</th>
            <th class="">Publisher</th>
            <th class="">Genre</th>
            <th class="">Shelf Location</th>
          </tr>
        </thead>
        <tbody>
            {books.map(data => (
              <tr>
              <td class="bg-sky-500 text-center py-1 px-8 text-white rounded-lg">view</td>
              <td class="">{data.isbn}</td>
              <td class="">{data.title}</td>
              <td class="">{data.authors}</td>
              <td class="">{data.publisher}</td>
              <td class="">{data.genre}</td>
              <td class="">{data.shelf_location}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookCatalogPage;
