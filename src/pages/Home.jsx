import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();

          const localUsers = JSON.parse(localStorage.getItem("users")) || [];

    
        const allUsers = [...data, ...localUsers];

        setUsers(allUsers);
      
      } catch (error) {
        console.error("Error fetching users:", error);
        
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserClick = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        User Management Dashboard
      </h1>
 
       {/* Button at right corner */}
    <div className="flex justify-end mb-6">
      <button
        onClick={() => navigate('/add')}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add User
      </button>
    </div>
      
      <div className="max-w-3xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-500 col-span-full">Loading users...</p>
        ) : filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <Card key={user.id} user={user} onClick={handleUserClick} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No users found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
