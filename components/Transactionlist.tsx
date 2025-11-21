"use client";

import Transactioncard from "./Transactioncard";

export default function Transactionlist({ transactions }:any) {
  return (
    <div className="flex flex-col p-5 h-[650px] bg-gray-200 rounded-3xl">

      <h2 className="text-xl font-bold text-center p-5">Transactions</h2>

      <div className="bg-gray-300 grid grid-cols-3 w-full rounded-3xl gap-4 p-3 h-[580px] overflow-y-scroll">
        
        {transactions.length === 0 && (
          <p className="text-center col-span-3">No transactions found.</p>
        )}

        {transactions.map((t:any) => (
          <div key={t.id} className="h-[80px]">
            <Transactioncard
              category={t.category}
              date={t.date}
              amount={t.amount}
              type={t.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
