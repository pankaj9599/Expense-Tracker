"use client";

import { useState } from "react";
import TransactionForm from "@/components/Transactionform";
import Navbar from "@/components/Navbar";

export default function TransactionsPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative p-6">

        {/* Floating Add / Close Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg absolute top-2 right-4 z-50"
        >
          {showForm ? "Close" : "Add"}
        </button>

        {/* Transaction Form */}
        {showForm && (
          <div className="mt-16 z-10 relative">
            <TransactionForm />
          </div>
        )}

      </div>
    </div>
  );
}
