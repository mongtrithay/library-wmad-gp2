import {useState, useEffect} from "react";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { data } from "autoprefixer";
function Cataloginformation(){
    const [bookView, setBookView] = useState ([]);
    const { id } = useParams();
    const url = `https://wmad-library-backend-six.vercel.app/api/books/${id}`;
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
        setBookView(data);
        console.log(data);
      } catch (error) {
        console.error("Data oun bc drink beer", error);
      }
    };
    fetchData();
  }, []);
    return(
        <div className="">
            <div className="text-4xl">
                <h1>Book Cataloginformation</h1>
            </div>
            <div className="flex ">
                <button className="py-4 px-8 bg-stone-400 rounded-xl m-5">Back</button>
                <button className="py-4 px-8 bg-blue-600 rounded-xl m-5">Update</button>
                <button className="py-4 px-8 bg-red-700 rounded-xl m-5">Delate</button>
            </div>
            <div className="">
            <table className="w-full border-collapse bg-slate-50">
                <tr className="border-b-2 h-20">
                    <th className="text-left">ISBN</th>
                    <td>{bookView.isbn}</td>
                </tr>
                <tr className="border-b-2 h-20" >
                    <th className="text-left">Title</th>
                    <td>{bookView.title}</td>
                </tr>
                <tr className="border-b-2 h-20">
                    <th className="text-left">Authors</th>
                    <td>{bookView.authors}</td>
                </tr>
                <tr className="border-b-2 h-20">
                    <th className="text-left">Publication Year</th>
                    <td>{bookView.publication_year}</td>
                </tr>
                <tr className="border-b-2 h-20">
                    <th className="text-left">Edition</th>
                    <td>{bookView.edition}</td>
                </tr>
                <tr className="border-b-2 h-20">
                    <th className="text-left">Genre</th>
                    <td>{bookView.genre}</td>
                </tr>
                <tr className="border-b-2 h-20">
                    <th className="text-left">Language</th>
                    <td >{bookView.language}</td>
                </tr>
                <tr className="border-b-2 h-20">
                    <th className="text-left">Number of Pages</th>
                    <td>{bookView.number_of_pages}</td>
                </tr>
                <tr className="border-b-2 h-20">
                    <th className="text-left">Shelf Location</th>
                    <td>{bookView.shelf_location}</td>
                </tr>
                <tr className="border-b-2 h-20">
                    <th className="text-left">Description</th>
                    <td>{bookView.description}</td>
                </tr>
            </table>
            </div>
        </div>
    )
}
 export default Cataloginformation;