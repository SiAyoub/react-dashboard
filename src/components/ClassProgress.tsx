// src/components/ClassProgress.tsx
import React, { useState, useEffect } from "react";
import CircularProgress from "./CircularProgress";

// Dummy data for classes with completion percentages
const initialCourses = [
  { name: "Beginner ReactJS", completion: 75 },
  { name: "Advanced CSS", completion: 10 },
  { name: "Node.js for Beginners", completion: 20 },
  { name: "Python for Data Science", completion: 40 },
  { name: "Full Stack Web Development", completion: 40 },
  { name: "Machine Learning Basics", completion: 60 },
  { name: "DevOps Essentials", completion: 7 },
];


const ClassProgress: React.FC = () => {
  const [courses, setCourses] = useState(initialCourses);

  // Simulate dynamic data update (e.g., fetching or a data change)
useEffect(() => {
  const interval = setInterval(() => {
    setCourses((prevCourses) =>
      prevCourses.map((course) => {
        // Randomly decide to increase or decrease
        const change = Math.floor(Math.random() * 10) - 5; // Random value between -5 and +5
        const newCompletion = Math.max(
          0,
          Math.min(course.completion + change, 100)
        ); // Ensure value stays within 0-100
        return {
          ...course,
          completion: newCompletion,
        };
      })
    );
  }, 1000); // Update every second

  return () => clearInterval(interval); // Cleanup interval
}, []);


  return (
    <div className="h-[600px] w-full overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-[#584DE2] scrollbar-track-gray-200 scrollbar-thumb-rounded">
      {courses.map((course, index) => (
        <CircularProgress
          key={index}
          percentage={course.completion}
          courseName={course.name}
          className={""}
        />
      ))}
    </div>
  );
};

export default ClassProgress;
