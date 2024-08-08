import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
let currentPage = 1;
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

  

  const getCuleme = 10;
  const npg = Math.ceil(books.length/ getCuleme);

  useEffect(() => {
    const fetchData = async () => {
      await getBooksWithPagination(currentPage);
    };
    fetchData();
  }, []);

  // let getNumberPage = 1 ; 

  const getBooksWithPagination = async (page) => {
    console.log("page..", page)
    try {
      const respone = await axios.get(
        `http://localhost:3000/api/books/pagination?page=${page}&pageSize=${getCuleme}`,
        obj
      );
      const data = respone.data;
      console.log("--", data);

      // currentPage = data.currentPage;
      // console.log(data);
      
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
              <td className="px-5 py-3">
                <button className="bg-sky-500 text-center py-1 px-4 text-white rounded-lg">
                  view
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
      <button onClick={prePage}>
        Pre
      </button>
      <form action="" method="post" name="test_fn">
        <h1>1</h1>        
      </form>
      <button onClick={nextPage}>
        Next
      </button>
    </div>
  );
  function prePage (){
    currentPage -= 1;
    getBooksWithPagination(currentPage);
    // if(getBooksWithPagination !== 1){

    //   setGetNumberPage(getNumberPage - 1)
    //   getBooksWithPagination(getNumberPage);
    // }
  }
  async function nextPage (){
    console.log("before next", currentPage);
    currentPage += 1;
    console.log("next", currentPage);
    getBooksWithPagination(currentPage);
    // if(getBooksWithPagination !== npg){
      
    //   setGetNumberPage(getNumberPage +1)
    //   getBooksWithPagination(getNumberPage);
    // }
  }
};

export default BookCatalogPage;
