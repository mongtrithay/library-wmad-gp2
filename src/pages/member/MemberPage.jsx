import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
const MemberPage = () => {
  const [member, setMember] = useState([]);
  const url = 'http://localhost:3000/api/members';
  const Token =localStorage.getItem('token');
  const Object = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url, Object);
        const data = response.data;
        setMember(data);
        console.log(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="bg-gray-100">
      <h1 className="text-3xl font-bold">Member</h1>
      <button class="bg-blue-500 w-32 py-2 text-white font-medium my-4 text-center rounded-md text-xl">Create</button>
      <table class=" rounded-lg overflow-hidden border-4 border-gray-600 text-left my-4 ">
        <thead>
          <tr class="border-gray-600 font-light bg-neutral-200 not-italic">
            <th class="border border-slate-300 py-5 px-8"><p class="font-medium">Action</p></th>
            <th class="border border-slate-300 py-5 px-8"><p class="font-medium">Member Code</p></th>
            <th class="border border-slate-300 py-5 px-8"><p class="font-medium">Fullname</p></th>
            <th class="border border-slate-300 py-5 px-8"><p class="font-medium">Phone</p></th>
            <th class="border border-slate-300 py-5 px-8"><p class="font-medium">Address</p></th>
            <th class="border border-slate-300 py-5 px-8"><p class="font-medium">Start Date</p></th>
            <th class="border border-slate-300 py-5 px-8"><p class="font-medium">Expiry Date</p></th>
          </tr>
        </thead>
        <tbody>
          {member.map(data => (
            <tr class="border-gray-400 border-2 not-italic">
              <td class="border border-slate-300 py-5 px-8"><button class="font-normal bg-sky-500 py-1 w-24 rounded-md text-white -text-xl" >
                <Link to={`/member/${data.id}`}>
                  view
                </Link>
                </button></td>
              <td class="border border-slate-300 py-5 px-8"><p class="font-normal">{data.member_code}</p></td>
              <td class="border border-slate-300 py-5 px-8"><p class="font-normal">{data.fullname}</p></td>
              <td class="border border-slate-300 py-5 px-8"><p class="font-normal">{data.phone_number}</p></td>
              <td class="border border-slate-300 py-5 px-8"><p class="font-normal">{data.address}</p></td>
              <td class="border border-slate-300 py-5 px-8"><p class="font-normal">{data.start_date}</p></td>
              <td class="border border-slate-300 py-5 px-8"><p class="font-normal">{data.expiry_date}</p></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberPage;
