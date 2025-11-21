"use client";

import React from "react";
import Heatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

export default function Expensecalendar({ data }: { data: any[] }) {

  const today = new Date();

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Expense Calendar</h2>

      <Heatmap
        startDate={new Date(today.getFullYear(), today.getMonth() - 3, 1)}
        endDate={today}
        values={data}
        classForValue={(value) => {
          if (!value) return "color-empty";
          if (value.amount > 1500) return "color-high";
          if (value.amount > 500) return "color-medium";
          return "color-low";
        }}
        tooltipDataAttrs={(value) => ({
          "data-tip": value.amount
            ? `${value.date}: ₹${value.amount}`
            : "No expense",
        })}
      />
    </div>
  );
}
