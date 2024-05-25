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
    <div>
      <h2 className="text-xl font-bold mb-2">Timeslots for {schedule.name}</h2>
      <ul className="list-disc pl-5 mb-4">
        {schedule.timeslots.map((slot, index) => (
          <li key={index} className="mb-2">
            {slot}
            <button
              onClick={() => deleteTimeSlot(index)}
              className="ml-4 text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="text-black">
        <input
          type="time"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          id="time"
          name="time"
          className="border p-2 mr-2"
          required
        />
        <button onClick={addTimeSlot} className="bg-blue-500 text-white p-2">
          Add
        </button>
      </div>
    </div>
  );
}
