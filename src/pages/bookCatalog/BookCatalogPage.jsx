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
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = books.slice(firstIndex, lastIndex);
  const npage = Math.ceil(books.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
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
          {records.map((data) => (
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
      <nav>
        <ul >
          <li>
            <a href="#" onClick={prePage}>Prev</a>
          </li>
          {
            numbers.map((n, i) =>(
              <li className={`page-item ${currentPage === n ? `active` : ''}`} key={i}>
                <a href="#" onClick={() => changePage(n)}>{n}</a>
              </li>
            ))
          }
          <li>
            <a href="#" onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  )
  function prePage () {
    if(currentPage !== 1){
      setCurrentPage(currentPage -1)
    }

  }
  function changePage (id) {
    setCurrentPage(id)

  }
  function nextPage (){
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
  }
};

export default BookCatalogPage;
