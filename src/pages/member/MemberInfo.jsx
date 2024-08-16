import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MemberInfo = () => {
    const { id } = useParams();
    const [memberInfo, setMemberInfo] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const url = `https://wmad-library-backend-six.vercel.app/api/members/${id}`;
    const token = localStorage.getItem('token');
    const obj = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, obj);
                const data = response.data;
                setMemberInfo(response.data);
                console.log(data);
            } catch (error) {
                console.log('Error fetching Data', error);
            }
        }
        fetchData();
    }, []);
    async function DeleteMember(){
        const userConfirm = window.confirm("Do you want to delete?");
        if(userConfirm){
            try {
                await axios.delete(url, obj);
                navigate("/member");
        } catch (error) {
            setError(error.message)
        }
        }
    };
    if (error) {
        return <div>Error: {error}</div>
    }
    return (
        <div className="bg-gray-100">
            <h1 className="text-3xl font-bold">Member Information</h1>
            <div className="w-auto py-6 flex gap-3">
                <Link to="/member/" class="bg-gray-400 py-2 w-24 rounded-lg text-white text-xl text-center">Back</Link>
                <button class="bg-blue-400 py-2 w-28 rounded-lg text-white text-xl">Update</button>
                <button onClick={DeleteMember} class="bg-red-400 py-2 w-28 rounded-lg text-white text-xl">Delete</button>
            </div>

            <table class="min-w-full bg-white text-left">
                <tbody>
                    <tr class="hover:bg-gray-50 border-collapse">
                        <th class="py-4 px-4 border-b border-gray-300">Member Code</th>
                        <td class="py-4 border-b border-gray-300">{memberInfo.member_code}</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                        <th class="py-4 px-4 border-b border-gray-300">Full name</th>
                        <td class="py-4  border-b border-gray-300">{memberInfo.fullname}</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                        <th class="py-4 px-4 border-b border-gray-300">Date of Birth</th>
                        <td class="py-4 border-b border-gray-300">{memberInfo.date_of_birth}</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                        <th class="py-4 px-4 border-b border-gray-300">Email</th>
                        <td class="py-4 border-b border-gray-300">{memberInfo.email}</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                        <th class="py-4 px-4 border-b border-gray-300">Phone</th>
                        <td class="py-4 border-b border-gray-300">{memberInfo.phone_number}</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                        <th class="py-4 px-4 border-b border-gray-300">Address</th>
                        <td class="py-4 border-b border-gray-300">{memberInfo.address}</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                        <th class="py-4 px-4 border-b border-gray-300">Start Date</th>
                        <td class="py-4 border-b border-gray-300">{memberInfo.start_date}</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                        <th class="py-4 px-4 border-b border-gray-300">Expiry Date</th>
                        <td class="py-4  border-b border-gray-300">{memberInfo.expiry_date}</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                        <th class="py-4 px-4 border-b border-gray-300">Status</th>
                        <td class="py-4 border-b border-gray-300 text-blue-700 font-bold">{memberInfo?.is_active ? 'Active' : 'Inactive'}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
export default MemberInfo;