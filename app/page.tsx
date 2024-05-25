"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { setAuth } from "../app/actions";

export default function Home() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    if (password == process.env.NEXT_PUBLIC_SITE_PASSWORD) {
      console.log("YIPPEE");
      setAuth();
      router.push("/manage_schedules");
    } else {
      console.log("damn");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24 justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Masterman Bell Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
