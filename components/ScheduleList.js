"use client";

import React from "react";

export default function ScheduleList({
  schedules,
  deleteSchedule,
  selectSchedule,
  currentScheduleId,
  currentScheduleToEditId,
  selectScheduleToEdit,
}) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Schedules</h2>
      <ul className="list-disc pl-5">
        {schedules.map((schedule) => (
          <li
            key={schedule.id}
            className={`mb-2 ${
              currentScheduleToEditId === schedule.id ? "font-bold" : ""
            }`}
          >
            <span
              onClick={() => selectScheduleToEdit(schedule.id)}
              className="cursor-pointer"
            >
              {schedule.name}
            </span>
            <button
              onClick={() => deleteSchedule(schedule.id)}
              className="ml-4 text-red-500"
            >
              Delete
            </button>
            {currentScheduleId === schedule.id ? (
              <button disabled className="ml-4 text-green-100">
                Current
              </button>
            ) : (
              <button
                onClick={() => {
                  if (
                    confirm(
                      "Are you sure you want to set the Masterman bell schedule to " +
                        schedule.name +
                        "?"
                    )
                  ) {
                    selectSchedule(schedule.id);
                    selectScheduleToEdit(schedule.id);
                  }
                }}
                className="ml-4 text-green-500"
              >
                Select
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
