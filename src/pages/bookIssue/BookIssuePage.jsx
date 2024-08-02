import {useState, useEffect} from "react";
import { Axios } from "axios";
import React from "react";
const BookIssuePage = () => {
  const [bookIssu, setBookIssu] = useState([]);
  const url = "";
  const token = localStorage.getItem("token");
  const obj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  }
  useEffect(() =>{
    const issuBook = async () => {
      try {
        const response = await Axios.get(url, obj);
        const data = await response.data;
        setBookIssu(data);
      }
      catch (error){
        console.log("Your code be drink beer",error);
      }
    }
    issuBook();
  }),[];
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Book Issue</h1>
    </div>
  );
};

export default BookIssuePage;
