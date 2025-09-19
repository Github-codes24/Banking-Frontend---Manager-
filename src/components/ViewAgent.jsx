import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaEye, FaTrash, FaPen } from "react-icons/fa";
// import api from "../../api/api"; 
import axios from "axios";
// import { apiAgentUrl } from "../../api/apiRoutes";

function ViewAgent() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [agent, setAgent] = useState(null);
    const [customers, setCustomers] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [pagination, setPagination] = useState({
        total: 0,
        page: 1,
        pages: 0,
    });

    const [search, setSearch] = useState("");

    const fetchCustomers = async () => {
        setLoading(true);
        try {
            let url = `${import.meta.env.VITE_API_URL}/agent/getCoustomer/${id}?page=${page}&limit=${limit}`;
            const params = [];

            if (search.trim())
                params.push(`search=${encodeURIComponent(search.trim())}`);
            //   if (selectedManager) params.push(`managerId=${selectedManager}`);
            //   if (selectedAgent) params.push(`agentId=${selectedAgent}`);
            //   if (startDate) params.push(`fromDate=${startDate}`);
            //   if (endDate) params.push(`toDate=${endDate}`);

            if (params.length > 0) url += `&${params.join("&")}`;

            const res = await axios.get(url);
            setCustomers(res.data?.data || []);
            const Pagination = {
                total: res.data.total,
                page: res.data.page,
                pages: res.data.totalPages
            }
            setPagination(Pagination);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchAgent = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/agent/${id}`);
            setAgent(res.data.data || res.data); // ✅ backend ke response ke hisaab se
        } catch (error) {
            console.error("Error fetching agent data:", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {


        fetchAgent();
        fetchCustomers();
    }, [id]);

   if (loading) {
    return <p className="text-center text-gray-500">Loading customers...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }


    if (!agent) {
        return <p className="text-center text-red-500">Agent not found ❌</p>;
    }

    return (
        <>
            <div className="bg-[#fefaf5] px-3 flex items-center gap-2">
                <button
                    onClick={() => navigate(-1)}
                    className="text-black p-1 border-2 rounded-4xl"
                >
                    <FaArrowLeft />
                </button>
                <h2 className="text-lg font-bold">View Agent</h2>
            </div>

            <div className="flex justify-center items-center flex-col  p-6 mt-6 rounded">
                <div className="p-6 space-y-6 max-w-3xl mx-auto bg-[#fff9f1]">
                    <div className="w-130 flex flex-col text-sm text-gray-700">
                        <div className="flex justify-between items-center mb-4 ">
                            <span className="font-medium">Name :</span>
                            <span className="bg-gray-100 p-1 rounded-sm w-60 block">
                                {agent.name}
                            </span>
                        </div>
                        <div className="flex justify-between items-center mb-4 ">
                            <span className="font-medium">Gender :</span>
                            <span className="bg-gray-100 p-1 rounded-sm w-60 block">
                                {agent.gender}
                            </span>
                        </div>
                        <div className="flex justify-between items-center mb-4 ">
                            <span className="font-medium">Email Address :</span>
                            <span className="bg-gray-100 p-1 rounded-sm w-60 block">
                                {agent.email}
                            </span>
                        </div>
                        <div className="flex justify-between items-center mb-4 ">
                            <span className="font-medium">Contact No. :</span>
                            <span className="bg-gray-100 p-1 rounded-sm w-60 block">
                                {agent.contact}
                            </span>
                        </div>
                        <div className="flex justify-between items-center mb-4 ">
                            <span className="font-medium">Address :</span>
                            <span className="bg-gray-100 p-1 rounded-sm w-60 block">
                                {agent.address}
                            </span>
                        </div>
                        <div className="flex justify-between items-center mb-4 ">
                            <span className="font-medium">Manager :</span>
                            <span className="bg-gray-100 p-1 rounded-sm w-60 block">
                                {agent.managerId?.name || "N/A"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            {/* Table */}
            <div className="bg-white rounded shadow-sm overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 border">Serial No.</th>
                            <th className="px-4 py-2 border">Customer Name</th>
                            <th className="px-4 py-2 border">Email Address</th>
                            <th className="px-4 py-2 border">Contact No.</th>
                            <th className="px-4 py-2 border">Address</th>
                            <th className="px-4 py-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(customers) && customers.length > 0 ? (
                            customers.map((cust, idx) => (
                                <tr key={cust._id} className="odd:bg-white even:bg-yellow-50">
                                    <td className="px-4 py-2 border">
                                        {String((page - 1) * limit + idx + 1).padStart(2, "0")}
                                    </td>
                                    <td className="px-4 py-2 border">{cust.name}</td>
                                    <td className="px-4 py-2 border">
                                        <a
                                            href={`mailto:${cust.email}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {cust.email}
                                        </a>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <a
                                            href={`tel:${cust.contact?.replace(/\s/g, "")}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {cust.contact}
                                        </a>
                                    </td>
                                    <td className="px-4 py-2 border">{cust.address}</td>
                                    <td className="px-4 py-2 border">
                                        <div className="flex gap-2">
                                            <Link
                                                to={`/coustomers/viewdetails/${cust._id}`}
                                                className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded"
                                                title="View"
                                            >
                                                <FaEye size={14} />
                                            </Link>
                                            {/* <Link
                                                to={`/coustomers/View-Edit/${cust._id}`}
                                                className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded"
                                                title="Edit"
                                            >
                                                <FaPen size={14} />
                                            </Link>
                                            <button
                                                onClick={() => confirmDelete(cust._id)}
                                                className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded"
                                                title="Delete"
                                            >
                                                <FaTrash size={14} />
                                            </button> */}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-gray-500">
                                    No customers found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
                <button
                    disabled={page === 1}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Prev
                </button>

                <span>
                    Page {pagination.page} of {pagination.pages}
                </span>

                <button
                    disabled={page === pagination.pages}
                    onClick={() => setPage((prev) => prev + 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>

            {/* Page Size Dropdown */}
            <div className="mt-3">
                <label className="mr-2">Rows per page:</label>
                <select
                    value={limit}
                    onChange={(e) => {
                        setLimit(Number(e.target.value));
                        setPage(1);
                    }}
                    className="border rounded px-2 py-1"
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>

        </>
    );
}

export default ViewAgent;
