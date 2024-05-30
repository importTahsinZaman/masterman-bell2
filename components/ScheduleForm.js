"use client";

import React, { useState } from "react";

export default function ScheduleForm({ addSchedule }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      addSchedule({ name, timeslots: [] });
      setName("");
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg my-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Add Schedule
      </h2>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Schedule Name"
          className="border p-2 rounded-lg flex-1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Add
        </button>
      </form>
    </div>
  );
}
