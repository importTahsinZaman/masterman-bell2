"use client";

import React, { useState } from "react";

export default function ScheduleForm({ addSchedule }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name != "") {
      addSchedule({ name, timeslots: [] });
      setName("");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Add Schedule</h2>
      <form onSubmit={handleSubmit} className="mb-4 text-black">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Schedule Name"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add
        </button>
      </form>
    </div>
  );
}
