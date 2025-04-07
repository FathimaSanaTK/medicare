import React from "react";
import { FaQrcode, FaWhatsapp } from "react-icons/fa";

function AdmQrcode() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4 text-green-600">
          <FaWhatsapp size={40} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Hospital WhatsApp QR Code</h2>
        <p className="text-gray-600 mb-6">
          Scan the QR code below to connect yuor hospital's whatsapp number to this website.
        </p>
        <div className="flex justify-center">
          {/* Replace the src below with your actual QR code URL */}
          <img
            src=""
            alt="Hospital WhatsApp QR Code"
            className="w-48 h-48 rounded-lg border"
          />
        </div>
      </div>
    </div>
  );
}

export default AdmQrcode;
