import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function CreateMember() {
  const [fullname, setFullname] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [startdate, setStartdate] = useState("");
  const [expirydate, setExpirydate] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 
  const Token = localStorage.getItem("token");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate to not submit if user did not input any value
    if (!fullname || !dateofbirth || !startdate || !expirydate || !address || !phone || !email) {
      alert("Please fill in all fields.");
      return;
    }

    // Fetch POST data to save to the database
    const memberData = { 
      fullname,
      date_of_birth: dateofbirth, 
      start_date: startdate, 
      expiry_date: expirydate,
      address,
      phone,
      email
    };

    console.log("memberData", memberData);
    try {
      const response = await fetch('http://localhost:3000/api/members/${id}', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`,
        },
        body: JSON.stringify(memberData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to save data: ${errorData.message || response.statusText}`);
      }

      const data = await response.json();
      console.log("Member saved successfully", data);
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };

  const handleCancel = () => {
    navigate("/information"); 
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">New Member</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-96">
        <label className="text-lg font-bold">Fullname</label>
        <input
          type="text"
          className="mt-2 py-3 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
          name="fullname"
          placeholder="Fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <label className="text-lg font-bold">Date Of Birth</label>
        <input
          type="date"
          className="mt-2 py-3 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
          name="dateofbirth"
          placeholder="Date Of Birth"
          value={dateofbirth}
          onChange={(e) => setDateofbirth(e.target.value)}
        />
        <label className="text-lg font-bold">Start Date</label>
        <input
          name="startdate"
          type="date"
          className="mt-2 py-3 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
          placeholder="Start Date"
          value={startdate}
          onChange={(e) => setStartdate(e.target.value)}
        />
        <label className="text-lg font-bold">Expiry Date</label>
        <input
          name="expirydate"
          type="date"
          className="mt-2 py-3 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
          placeholder="Expiry Date"
          value={expirydate}
          onChange={(e) => setExpirydate(e.target.value)}
        />
        <label className="text-lg font-bold">Address</label>
        <input
          type="text"
          className="mt-2 py-3 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
          name="address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label className="text-lg font-bold">Phone Number</label>
        <input
          type="tel"
          className="mt-2 py-3 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
          name="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label className="text-lg font-bold">Email</label>
        <input
          type="email"
          className="mt-2 py-3 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="">
          <button type="button" onClick={handleCancel} className="mb-4 h-12 bg-zinc-400 w-28 text-1xl text-white mr-5 rounded-lg">Cancel</button>
          <button type="submit" className="mb-4 h-12 bg-sky-500 w-24 text-1xl text-white rounded-lg">Save</button>
        </div>
      </form>
    </div>
  );
}

export default CreateMember;


