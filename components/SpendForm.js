"use client";

import { useState, useEffect } from "react";
import { runAudit } from "../lib/auditEngine";

export default function SpendForm() {
  const [tool, setTool] = useState("Cursor");
  const [plan, setPlan] = useState("Business");
  const [spend, setSpend] = useState("");
  const [seats, setSeats] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("auditForm");

    if (saved) {
      const data = JSON.parse(saved);
      setTool(data.tool);
      setPlan(data.plan);
      setSpend(data.spend);
      setSeats(data.seats);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "auditForm",
      JSON.stringify({
        tool,
        plan,
        spend,
        seats
      })
    );
  }, [tool, plan, spend, seats]);

  function handleAudit() {
    const tools = [
      {
        name: tool,
        plan,
        spend: Number(spend),
        seats: Number(seats)
      }
    ];

    const auditResult = runAudit(tools);
    setResult(auditResult[0]);
  }

  return (
    <div className="mt-8 border p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">
        Audit Your AI Spend
      </h2>

      <select
        className="border p-2 mb-2 block"
        value={tool}
        onChange={(e) => setTool(e.target.value)}
      >
        <option>Cursor</option>
        <option>ChatGPT</option>
        <option>Claude</option>
        <option>Gemini</option>
      </select>

      <input
        type="text"
        placeholder="Plan"
        className="border p-2 mb-2 block"
        value={plan}
        onChange={(e) => setPlan(e.target.value)}
      />

      <input
        type="number"
        placeholder="Monthly Spend"
        className="border p-2 mb-2 block"
        value={spend}
        onChange={(e) => setSpend(e.target.value)}
      />

      <input
        type="number"
        placeholder="Seats"
        className="border p-2 mb-2 block"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
      />

      <button
        onClick={handleAudit}
        className="bg-blue-600 text-white px-4 py-2"
      >
        Run Audit
      </button>

      {result && (
  <div className="mt-6 border rounded p-4 bg-gray-50">
    <h3 className="text-xl font-bold mb-3">
      Audit Results
    </h3>

    <p className="mb-2">
      <strong>Recommendation:</strong>{" "}
      {result.recommendation}
    </p>

    <p className="mb-2">
      <strong>Monthly Savings:</strong> $
      {result.savings}
    </p>

    <p className="mb-2">
      <strong>Annual Savings:</strong> $
      {result.savings * 12}
    </p>

    <p className="mb-4">
      <strong>Reason:</strong> {result.reason}
    </p>

    {result.savings >= 500 ? (
      <div className="bg-green-100 p-3 rounded">
        <p className="font-semibold">
          High savings opportunity detected.
        </p>
        <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
          Book Credex Consultation
        </button>
      </div>
    ) : result.savings < 100 ? (
      <div className="bg-blue-100 p-3 rounded">
        You’re spending well. No major savings found.
      </div>
    ) : null}
  </div>
)}
    </div>
  );
}