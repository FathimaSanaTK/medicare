import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useLocation } from "react-router-dom";

const ServiceCard = ({ item }) => {
  const { name, description, bgColor, textColor } = item;
  const location = useLocation();
    const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div
      className={`p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105`}
      style={{ backgroundColor: bgColor || "#f8f9fa", color: textColor || "#333" }}
    >
      <h2 className="text-xl font-bold mb-3">{name}</h2>
      <p className="text-sm mb-4">{description}</p>

      {/* Action Buttons */}
      {isAdminPage &&
      <div className="flex items-center gap-4">
        <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          <MdEdit size={18} />
        </button>
        <button className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
          <FaTrashAlt size={16} />
        </button>
      </div>
}
    </div>
  );
};

export default ServiceCard;
