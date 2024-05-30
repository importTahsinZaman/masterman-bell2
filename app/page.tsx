"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { setAuth } from "../app/actions";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
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
    <main className="flex min-h-screen flex-col items-center p-24 justify-center overflow-hidden">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <Image
          src="https://www.mastermanhsa.org/uploads/1/4/3/6/143625689/editor/seal.png?1674618634"
          alt="mastermanLogo"
          width={300}
          height={300}
          quality={100}
        ></Image>
        <h2 className="text-2xl font-bold mb-6 text-center text-black my-4">
          Masterman Bell
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
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center my-4">
          <a
            target="_blank"
            href={
              "https://docs.google.com/document/d/160SsAJFMDLfQlfl4TCYLV9jvVF5COU3laGlrG-KO3JY/edit"
            }
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-14 rounded focus:outline-none focus:shadow-outline"
          >
            User Manual
          </a>
        </div>
      </div>
      <h1 className="text-gray-400 text-xs">
        Created by Tahsin Zaman & Aryan Patel - Class of 2024
      </h1>
    </main>
  );
}
