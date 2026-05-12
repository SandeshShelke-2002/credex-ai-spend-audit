"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase.js";

export default function LeadCapture() {
  const [email, setEmail] = useState("");

  async function saveLead() {
    const { error } = await supabase
      .from("leads")
      .insert([{ email }]);

      if (error) {
        console.log(error);
        alert(error.message);
        return;
      }

    alert("Lead saved successfully");
    setEmail("");
  }

  return (
    <div className="mt-8">
      <input
        type="email"
        placeholder="Enter email"
        className="border p-2 mr-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={saveLead}
        className="bg-black text-white px-4 py-2"
      >
        Submit
      </button>
    </div>
  );
}