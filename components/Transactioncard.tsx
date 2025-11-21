import React from "react";

interface Props {
  category: string;
  amount: number;
  date: string;
  type: "income" | "expense";
}

function TransactionCard({ category, amount, date, type }: Props) {
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-xl p-4 w-full max-w-lg hover:shadow-indigo-400 transition">

      {/* Left Side */}
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-gray-800">{category}</span>
        <span className="text-sm text-gray-500">{date}</span>
      </div>

      {/* Right Side */}
      <div className="text-right">
        <span
          className={`text-lg font-bold ${
            type === "expense" ? "text-red-500" : "text-green-600"
          }`}
        >
          {type === "expense" ? "-" : "+"}${amount}
        </span>
        <div
          className={`text-xs font-medium ${
            type === "expense" ? "text-red-400" : "text-green-500"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
      </div>

    </div>
  );
}

export default TransactionCard;
