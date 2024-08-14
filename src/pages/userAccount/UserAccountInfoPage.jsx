import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserAccInfo = () => {
  const [information, setInformation] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `http://localhost:3000/api/user_accounts/${id}`;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setInformation(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInfo();
  }, [id, url, token]);

  if (!information) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex gap-5 mb-4">
        <button
          onClick={() => navigate(-1)}
          className="text-1xl font-bold bg-gray-600 rounded-md mt-8 px-7 text-white"
        >
          Back
        </button>
        <button className="text-1xl font-bold bg-blue-600 rounded-md mt-8 px-5 text-white">
          Update
        </button>
        <button
          onClick={(e) => {
            const deleteUrl = `http://localhost:3000/api/user_accounts/${id}`;
            const deleteInfo = async () => {
              try {
                const response = await fetch(deleteUrl, {
                  method: "DELETE",
                  headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                });
                navigate("/list-account");
                const data = await response.json();
                console.log(data);
              } catch (error) {
                console.error(error);
              }
            };
            deleteInfo();
          }}
          className="text-1xl font-bold bg-red-600 rounded-md mt-8 py-3 px-5 text-white"
        >
          Delete
        </button>
      </div>
      <table className="w-full bg-white rounded-lg shadow-md">
        <tbody>
          <tr className="border-b">
            <th className="text-left p-4 w-1/3">Username</th>
            <td className="p-4">{information.username}</td>
          </tr>
          <tr className="border-b">
            <th className="text-left p-4 w-1/3">Email</th>
            <td className="p-4">{information.email}</td>
          </tr>
          <tr className="border-b">
            <th className="text-left p-4 w-1/3">Role</th>
            <td className="p-4">{information.user_role.user_role_name}</td>
          </tr>
          <tr className="border-b">
            <th className="text-left p-4 w-1/3">Is Active?</th>
            <td className="p-4">{information.is_active ? "Yes" : "No"}</td>
          </tr>
          <tr className="border-b">
            <th className="text-left p-4 w-1/3">Is Activated?</th>
            <td className="p-4">{information.is_activated ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserAccInfo;
