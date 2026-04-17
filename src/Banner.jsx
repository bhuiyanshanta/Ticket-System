import React from "react";

const Banner = ({ tickets }) => {
  // স্ট্যাটাস অনুযায়ী গণনা করার লজিক
  const inProgressCount = tickets.filter(
    (t) => t.priority === "HIGH PRIORITY",
  ).length;

  const resolvedCount = tickets.filter(
    (t) => t.priority !== "HIGH PRIORITY",
  ).length;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* In-Progress High priority */}
      <div
        className="flex-1 rounded-xl p-12 flex flex-col items-center justify-center text-white shadow-lg min-h-50px"
        style={{
          background: "linear-gradient(135deg, #9333ea 0%, #6366f1 100%)",
        }}
      >
        <p className="text-xl font-medium uppercase tracking-wider">
          In-Progress
        </p>
        {/* এখানে এখন ডাইনামিক সংখ্যা দেখাবে */}
        <h2 className="text-7xl font-bold mt-2">{inProgressCount}</h2>
      </div>

      {/* Resolved Banner */}
      <div
        className="flex-1 rounded-xl p-12 flex flex-col items-center justify-center text-white shadow-lg min-h-50px"
        style={{
          background: "linear-gradient(135deg, #22c55e 0%, #10b981 100%)",
        }}
      >
        <p className="text-xl font-medium uppercase tracking-wider">Resolved</p>
        {/* এখানেও ডাইনামিক সংখ্যা */}
        <h2 className="text-7xl font-bold mt-2">{resolvedCount}</h2>
      </div>
    </div>
  );
};

export default Banner;
