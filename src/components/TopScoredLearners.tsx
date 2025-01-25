import React, { useState } from "react";
import { Learner, learnersData } from "./learnersData";

const TopScoredLearners = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedLevel, setSelectedLevel] = useState("Beginner");

  const learners: Learner[] = learnersData[selectedYear][selectedLevel];

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center mb-2">
        {" "}
        {/* Adjusted margin */}
        <h1 className="text-white font-bold">Top Scores</h1>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="p-1 bg-white rounded-md"
        >
          {Object.keys(learnersData).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="flex space-x-4 w-full h-full">
        {learners.map((learner) => (
          <div
            key={learner.rank}
            className={`w-full h-full flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg ${
              learner.rank === 1
                ? "bg-green-200"
                : learner.rank === 2
                ? "bg-blue-200"
                : "bg-yellow-200"
            }`}
          >
            <img
              src={learner.image}
              alt={learner.name}
              className="w-16 h-16 rounded-full object-cover mb-2"
            />
            <h3 className="text-lg font-bold">{learner.name}</h3>
            <p className="text-sm text-gray-600">{learner.school}</p>
            <p className="text-xl font-bold mt-2">{learner.score}%</p>
            <span className="mt-2 text-white text-sm font-bold bg-[#584DE2] px-3 py-1 rounded-full">
              {learner.rank === 1
                ? "1er"
                : learner.rank === 2
                ? "2ème"
                : "3ème"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopScoredLearners;
