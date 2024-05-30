"use client";
import React, { useState } from "react";

export default function TimeSlotList({ schedule, updateSchedule }) {
  const [timeSlot, setTimeSlot] = useState("");

  const addTimeSlot = () => {
    if (timeSlot !== "") {
      const updatedSchedule = {
        ...schedule,
        timeslots: [...schedule.timeslots, timeSlot],
      };
      updateSchedule(schedule.id, updatedSchedule);
      setTimeSlot("");
    }
  };

  const deleteTimeSlot = (index) => {
    const updatedSchedule = {
      ...schedule,
      timeslots: schedule.timeslots.filter((_, i) => i !== index),
    };
    updateSchedule(schedule.id, updatedSchedule);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Timeslots for {schedule.name}
      </h2>
      <ul className="space-y-3 mb-4">
        {schedule.timeslots.map((slot, index) => (
          <li
            key={index}
            className="p-3 rounded-lg border border-gray-200 flex items-center justify-between"
          >
            <span className="text-lg font-medium text-gray-700">{slot}</span>
            <button
              onClick={() => deleteTimeSlot(index)}
              className="text-red-500 hover:text-red-700 transition-colors duration-200"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-2">
        <input
          type="time"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          id="time"
          name="time"
          className="border p-2 rounded-lg"
          required
        />
        <button
          onClick={addTimeSlot}
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Add
        </button>
      </div>
    </div>
  );
}
