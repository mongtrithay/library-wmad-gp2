import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
const BookIssuePage = () => {
  const [bookIssu, setBookIssu] = useState([]);
  const url = "https://wmad-library-backend-six.vercel.app/api/book_issues";
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
      try {
        const respone = await axios.get(url, obj);
        const data = respone.data;
        setBookIssu(data);
      } catch (error) {
        console.error( error);
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
            <th class="px-5 py-5">Member</th>
            <th class="px-5 py-5">Librarian</th>
            <th class="px-5 py-5">Issu Date</th>
            <th class="px-5 py-5">Due Date</th>
            <th class="px-5 py-5">Return Date</th>
            <th class="px-5 py-5">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookIssu.map((data, i) => (
            <tr key={i} className="border-b-2 border-gray-300">
              <td class="px-5 py-5">
                <button class="bg-sky-500 text-center py-1 px-4 text-white rounded-lg">
                  view
                </button>
              </td>
              <td class="px-5 py-5">{data.book.isbn}</td>
              <td class="px-5 py-5">{data.book.title}</td>
              <td class="px-5 py-5">{data.member.fullname}</td>
              <td class="px-5 py-5">{data.processed_by.user_role_name}</td>
              <td class="px-5 py-5">{data.issue_date}</td>
              <td class="px-5 py-5">{data.due_date}</td>
              <td class="px-5 py-5">{data.return_date}</td>
              <td class="px-5 py-5">{data.status.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookIssuePage;
