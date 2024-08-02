// import React, { useState } from 'react';
// import TextBox from "../../components/TextBox";
// function CreateMemberPage (){
//     const [fullname, setfullname] = useState([]);
//     const [dateofbirth, setdateofbirth] = useState([]);
//     const [startdate, setstartdate] = useState([]);
//     const [expirydate, setexpirydate] = useState([]);

//   return (
//     <div>
//       <h1 className="text-4xl font-bold mb-4">New Member</h1>
//       <form action="">
//       <TextBox name="Fullname " placeholder="Fullname" value={fullname} onChange={e=> setfullname(e.fullname.value)}/>
//       <TextBox name ="Date of Birth" placeholder="Date of Birth"/>
//       <TextBox name="Start Date" placeholder="Start Date"/>
//       <TextBox name="Expiry date" placeholder="Expiry date"/>
//         <div >
//         <button type="cancel" className="mb-4 h-12 bg-zinc-400 w-28  text-1xl text-white  mr-5 rounded-lg">Cancel</button>
//         <button type="save" className="mb-4 h-12 bg-sky-500 w-24  text-1xl text-white rounded-lg">Save</button>
//         </div>
//       </form> 
//     </div>
    
//   );
// };

// export default CreateMemberPage;



import React, { useState } from 'react';
import TextBox from "../../components/TextBox";

function CreateMemberPage() {
    const [member, setMember] = useState({
        fullname: "",
        date_of_birth: "",
        start_date: "",
        expiry_date: "",
       
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMember(prevMember => ({
            ...prevMember,
            [name]: value
        }));
    };

    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">New Member</h1>
            <form action="">
                <TextBox name="fullname" placeholder="Fullname" value={member.fullname} onChange={handleChange} />
                <TextBox name="date_of_birth" placeholder="Date of Birth" value={member.date_of_birth} onChange={handleChange} />
                <TextBox name="start_date" placeholder="Start Date" value={member.start_date} onChange={handleChange} />
                <TextBox name="expiry_date" placeholder="Expiry Date" value={member.expiry_date} onChange={handleChange} />
                <div>
                    <button type="button" className="mb-4 h-12 bg-zinc-400 w-28 text-1xl text-white mr-5 rounded-lg">Cancel</button>
                    <button type="submit" className="mb-4 h-12 bg-sky-500 w-24 text-1xl text-white rounded-lg">Save</button>
                </div>
            </form>
        </div>
    );
};

export default CreateMemberPage;
