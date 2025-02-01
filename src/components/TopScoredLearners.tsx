import React, { useState } from "react";
import { Learner, learnersData } from "./LearnersData";

const TopScoredLearners = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedLevel, setSelectedLevel] = useState("Beginner");

  const learners: Learner[] = learnersData[selectedYear][selectedLevel];

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-0">
          Top Scores
        </h1>
        <div className="flex space-x-2">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="p-1 bg-white rounded-md text-sm sm:text-base"
          >
            {Object.keys(learnersData).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="p-1 bg-white rounded-md text-sm sm:text-base"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* Learners Cards Section */}
      {/* Adding overflow-y-auto lets users scroll when content is too tall */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-2  overflow-y-auto">
        {learners.map((learner) => (
          <div
            key={learner.rank}
            className={`flex flex-col   items-center justify-center bg-white p-2 rounded-lg shadow-lg ${
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
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mb-2"
            />
            <h3 className=" text-xs font-bold">{learner.name}</h3>
            <p className="text-xs  text-gray-600">{learner.school}</p>
            <p className="text-xs font-bold mt-2">{learner.score}%</p>
            <span className="mt-2 text-white text-xs sm:text-sm font-bold bg-[#584DE2] px-3 py-1 rounded-full">
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
