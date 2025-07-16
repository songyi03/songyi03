import React from "react";
import SummaryTable from "../components/SummaryTable";

export default function ScrapCompletePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">폐차 완료 요약</h1>
      <SummaryTable />
    </main>
  );
}
