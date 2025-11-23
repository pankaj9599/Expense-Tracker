"use client";

import { useState,useEffect } from "react";
import TransactionForm from "@/components/Transactionform";
import Navbar from "@/components/Navbar";
import Transactionlist from "@/components/Transactionlist";
import Expensecalendar from "@/components/Expensecalender"
import api from "@/lib/api";
export default function TransactionsPage() {
  const [showForm, setShowForm] = useState(false);
  const [transactions,settransactions]=useState([]);
 const heatmapData = [
  { date: "2025-01-01", amount: 205550 },
  { date: "2025-01-02", amount: 1500 },
];


 useEffect(()=>{
  // fetch transactions form api and settransactions
  const userdata=localStorage.getItem("user");
  if(!userdata) return;
  const user=JSON.parse(userdata);

  const userid=user.id;
  api
     .get(`/transactions/${userid}`)
     .then((res)=>settransactions(res.data))
     .catch((err)=>console.error("error fetching transactions:",err))
 })

  return (
    <div className="min-h-screen bg-gray-100">
      {/* top  */}
      <div className="relative p-6">

        {/* Navbar  */}
        <div className="p-4">
          <Navbar />
        </div>

        {/* Close Button */}
        <div className="flex justify-end m-5 ">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white  mr-5   w-[100px] rounded-xl h-13 hover:bg-indigo-700 transition-shadow"
          >
          {showForm ? "Close" : "Add Transaction"}
        </button>
          </div>

        {/* Transactionlist and calender view */}
        <div className="flex gap-10">
          <div className="w-2/3">
            <Transactionlist  transactions={transactions} />
          </div>
          <div className="w-1/3 bg-white rounded-xl shadow p-4">
          <Expensecalendar data={heatmapData} />

          </div>
        </div>
        {showForm && (
            <div className="fixed flex items-center justify-center  z-50 inset-0  bg-op">

              <div className="absolute inset-0 backdrop-blur-sm bg-black/20" onClick={()=>setShowForm(false)}></div>
              <div className="relative z-50 bg-white p-6 rounded-xl  shadow-lg w-[450px]">
            <TransactionForm  closeForm={()=>setShowForm(false) }/>
            </div>
            </div>
            
          )}
      </div>
    </div>
  );
}
