// src/components/CircularProgress.tsx
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircularProgressProps {
  percentage: number;
  className: string;
  courseName: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  className,
  courseName,
}) => {
  // Set the color based on the percentage
  

    return (
      <div className="flex justify-between items-center border-4 rounded-2xl border-[#584DE2] bg-white p-4 mb-4">
        {/* Course name */}
        <p className="text-[15px] text-lg font-semibold flex-1">{courseName}</p>
        {/* Circular progress circle */}
        <div className="w-16 h-16">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={8}
          />
        </div>
      </div>
    );
};

export default CircularProgress;
