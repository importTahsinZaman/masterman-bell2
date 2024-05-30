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
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Schedules</h2>
      <ul className="space-y-3">
        {schedules.map((schedule) => (
          <li
            key={schedule.id}
            className={`cursor-pointer p-3 rounded-lg border ${
              currentScheduleToEditId === schedule.id
                ? "border-blue-500"
                : "border-gray-200"
            } flex items-center justify-between`}
            onClick={() => selectScheduleToEdit(schedule.id)}
          >
            <span className="text-lg font-medium text-gray-700 hover:text-gray-900 flex-1">
              {schedule.name}
            </span>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => deleteSchedule(schedule.id)}
                className="text-red-500 hover:text-red-700 transition-colors duration-200 ml-4"
              >
                Delete
              </button>
              {currentScheduleId === schedule.id ? (
                <button disabled className="text-green-500 cursor-not-allowed">
                  Current
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (
                      confirm(
                        `Are you sure you want to set the Masterman bell schedule to ${schedule.name}?`
                      )
                    ) {
                      selectSchedule(schedule.id);
                      selectScheduleToEdit(schedule.id);
                    }
                  }}
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                >
                  Select
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
