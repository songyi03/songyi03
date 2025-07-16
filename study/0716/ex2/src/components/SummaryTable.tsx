import React from "react";
import { completedData } from "../data/completedData";

export default function SummaryTable() {
  return (
    <table className="table-auto border w-full text-left">
      <thead>
        <tr>
          <th className="border px-4 py-2">사용자</th>
          <th className="border px-4 py-2">차량</th>
          <th className="border px-4 py-2">날짜</th>
        </tr>
      </thead>
      <tbody>
        {completedData.map((item, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{item.user}</td>
            <td className="border px-4 py-2">{item.car}</td>
            <td className="border px-4 py-2">{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}