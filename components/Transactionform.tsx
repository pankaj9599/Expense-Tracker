"use client";

import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function AddTransactionPage() {
  const router = useRouter();

  const [type, setType] = useState<"income" | "expense">("expense");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const userid = "123"; // TODO: later replace with logged-in user ID

  const categories = [
    "Food",
    "Travel",
    "Shopping",
    "Bills",
    "Rent",
    "Salary",
    "Investment",
    "Entertainment",
    "Health",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/transactions", {
        userid,
        type,
        amount,
        category,
        date,
        description,
      });

      alert("Transaction added!");
      router.push("/dashboard");
    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">

        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Add Transaction
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* Type Selector */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Type
            </label>
            <select
              className="w-full p-2 border text-gray-500 border-gray-300 rounded"
              value={type}
              onChange={(e) => setType(e.target.value as "income" | "expense")}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Amount
            </label>
            <input
              type="number"
              className="w-full p-2 border text-gray-500 border-gray-300 rounded"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Category
            </label>
            <select
              className="w-full p-2 border text-gray-500 border-gray-300 rounded"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Date
            </label>
            <input
              type="date"
              className="w-full p-2 border text-gray-500 border-gray-300 rounded"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <input
              type="text"
              className="w-full p-2 border text-gray-500 border-gray-300 rounded"
              placeholder="Eg: Lunch at KFC"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded font-medium hover:bg-blue-700"
          >
            Add Transaction
          </button>

        </form>

      </div>

    </div>
  );
}
