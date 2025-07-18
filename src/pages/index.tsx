import { useState } from "react";

export default function HomePage() {
  const [name, setName] = useState("");
  const [headline, setHeadline] = useState("");
  const [bio, setBio] = useState("");

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center p-6 space-y-12">
      <div className="max-w-xl w-full space-y-8">
        <h1 className="text-3xl font-bold text-center">👋 Welcome to Bitasmbl</h1>
        <form className="space-y-6 bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-gray-800">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-400">
              Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              className="w-full px-4 py-2 rounded-lg bg-[#111] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="headline" className="text-sm font-medium text-gray-400">
              Headline
            </label>
            <input
              id="headline"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="Frontend Developer at XYZ"
              className="w-full px-4 py-2 rounded-lg bg-[#111] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="bio" className="text-sm font-medium text-gray-400">
              Short Bio
            </label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us something about yourself..."
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-[#111] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </form>

        <div className="bg-[#111] border border-gray-700 p-6 rounded-2xl shadow-lg space-y-4">
          <h2 className="text-xl font-semibold">🔍 Live Preview</h2>
          <p>
            <span className="font-semibold text-gray-400">Name:</span>{" "}
            {name || <em className="text-gray-600">Not entered</em>}
          </p>
          <p>
            <span className="font-semibold text-gray-400">Headline:</span>{" "}
            {headline || <em className="text-gray-600">Not entered</em>}
          </p>
          <p>
            <span className="font-semibold text-gray-400">Bio:</span>{" "}
            {bio || <em className="text-gray-600">Not entered</em>}
          </p>
        </div>
      </div>
    </main>
  );
}
