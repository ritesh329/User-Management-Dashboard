// src/pages/UserDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchById = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Error occurred:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchById();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading user details...</p>;
  if (!user) return <p className="text-center mt-10">User not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <button
        onClick={() => navigate('/')}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back
      </button>

      <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold mb-2">Address</h2>
        <p><strong>Street:</strong> {user.address.street}</p>
        <p><strong>Suite:</strong> {user.address.suite}</p>
        <p><strong>City:</strong> {user.address.city}</p>
        <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
        <p>
          <strong>Geo:</strong> Lat {user.address.geo.lat}, Lng {user.address.geo.lng}
        </p>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold mb-2">Company</h2>
        <p><strong>Name:</strong> {user.company.name}</p>
        <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
        <p><strong>BS:</strong> {user.company.bs}</p>
      </div>
    </div>
  );
}

export default UserDetails;
