import React from "react";

function Card({ user, onClick }) {
  return (
    <div
      onClick={() => onClick(user.id)}
      className="bg-white rounded-xl shadow-md p-5 cursor-pointer hover:shadow-lg hover:scale-105 transform transition duration-200"
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{user.name}</h2>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Email:</span> {user.email}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Phone:</span> {user.phone}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Company:</span> {user.company?.name || user.company}
      </p>
    </div>
  );
}

export default Card;
