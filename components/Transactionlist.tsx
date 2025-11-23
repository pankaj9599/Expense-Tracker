"use client";

import Transactioncard from "./Transactioncard";

export default function Transactionlist({ transactions }: any) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="flex flex-col p-5 h-[650px] bg-gray-200 rounded-3xl">
        <h2 className="text-2xl text-black font-bold text-center p-5">Transactions</h2>
        <p className="text-gray-700 text-center">No transactions found</p>
      </div>
    );
  }

  function groupByDate(transactions: any[]) {
    const groups: Record<string, any[]> = {};

    transactions.forEach((t) => {
      if (!groups[t.date]) {
        groups[t.date] = [];
      }
      groups[t.date].push(t);
    });

    return groups;
  }

  function getLabel(date: string) {
    const today = new Date().toISOString().split("T")[0];

    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = yesterdayDate.toISOString().split("T")[0];

    if (date === today) return "Today";
    if (date === yesterday) return "Yesterday";
    return date;
  }

  const grouped = groupByDate(transactions);
  const sortedDates = Object.keys(grouped).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <div className="flex flex-col p-5 h-[650px] bg-gray-200 rounded-3xl">
      <h2 className="text-2xl text-black font-bold text-center p-5">Transactions</h2>
      <div className="bg-gray-300 w-full rounded-3xl p-5 h-[580px] overflow-y-scroll">
        {sortedDates.map((date) => (
          <div key={date} className="mb-6">
            <h3 className="text-lg font-semibold text-black mb-3">
              {getLabel(date)}
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {grouped[date].map((t) => (
                <Transactioncard
                  key={t.id}
                  category={t.category}
                  date={t.date}
                  amount={t.amount}
                  type={t.type}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
