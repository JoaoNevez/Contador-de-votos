import React, { useState } from "react";

export default function App() {
  const [votes, setVotes] = useState({ A: 0, B: 0, C: 0 });

  const totalVotes = votes.A + votes.B + votes.C;

  const vote = (option: "A" | "B" | "C") => {
    setVotes((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  };

  const getPercentage = (count: number) => {
    if (totalVotes === 0) return 0;
    return Math.round((count / totalVotes) * 100);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">📊 Contador de Votos</h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => vote("A")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Votar A
        </button>
        <button
          onClick={() => vote("B")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Votar B
        </button>
        <button
          onClick={() => vote("C")}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Votar C
        </button>
      </div>

      <div className="w-full max-w-md space-y-4">
        {(["A", "B", "C"] as const).map((option) => (
          <div key={option}>
            <p className="mb-1 font-semibold">
              Opção {option}: {votes[option]} votos (
              {getPercentage(votes[option])}%)
            </p>
            <div className="w-full bg-gray-300 rounded h-6">
              <div
                className={`h-6 rounded ${
                  option === "A"
                    ? "bg-blue-500"
                    : option === "B"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${getPercentage(votes[option])}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 font-bold">
        Total de votos: {totalVotes}
      </p>
    </div>
  );
}
