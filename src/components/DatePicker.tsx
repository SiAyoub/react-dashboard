import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Utility to format dates
const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

// Utility to generate calendar days
const generateCalendarDays = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days: (Date | null)[] = [];

  const startingDay = firstDay.getDay();
  for (let i = 0; i < startingDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push(new Date(year, month, i));
  }

  return days;
};

interface DatePickerProps {
  state: {
    startDate: Date;
    endDate: Date;
    key: string;
  }[];
  setState: React.Dispatch<
    React.SetStateAction<
      {
        startDate: Date;
        endDate: Date;
        key: string;
      }[]
    >
  >;
}

const DatePicker: React.FC<DatePickerProps> = ({ state, setState }) => {
  const [displayMonth, setDisplayMonth] = useState(new Date());
  const [selectingStart, setSelectingStart] = useState(true);

  const currentSelection = state[0];

  const handleDateClick = (day: Date) => {
    setState([
      {
        ...currentSelection,
        [selectingStart ? "startDate" : "endDate"]: day,
        key: "selection",
      },
    ]);

    setSelectingStart(!selectingStart);
  };

  const changeMonth = (offset: number) => {
    const newMonth = new Date(displayMonth);
    newMonth.setMonth(newMonth.getMonth() + offset);
    setDisplayMonth(newMonth);
  };

  const calendarDays = generateCalendarDays(displayMonth);

  return (
    <div className="bg-white rounded-xl  w-full h-full p-0">
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => changeMonth(-1)}
          className="p-1 hover:bg-gray-100 rounded-full transition"
        >
          <ChevronLeft
            size={20}
            className="text-white  bg-[#695EFF] border rounded-2xl"
          />
        </button>
        <div className="text-sm font-medium text-gray-800">
          {displayMonth.toLocaleString("default", { month: "long" })}{" "}
          {displayMonth.getFullYear()}
        </div>
        <button
          onClick={() => changeMonth(1)}
          className="p-1 hover:bg-gray-100 rounded-full transition"
        >
          <ChevronRight
            size={20}
            className="text-white  bg-[#695EFF] border rounded-2xl"
          />
        </button>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 text-center text-xs  text-gray-500 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="font-semibold text-white bg-[#695EFF] border rounded-2xl"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => (
          <button
            key={index}
            onClick={() => day && handleDateClick(day)}
            disabled={!day}
            className={`
              ${!day ? "opacity-0" : ""}
              ${
                day &&
                currentSelection.startDate &&
                day.toDateString() === currentSelection.startDate.toDateString()
                  ? "bg-[#32CD32] text-white"
                  : ""
              }
              ${
                day &&
                currentSelection.endDate &&
                day.toDateString() === currentSelection.endDate.toDateString()
                  ? "bg-[#32CD32] text-white"
                  : ""
              }
              ${
                day &&
                currentSelection.startDate &&
                currentSelection.endDate &&
                day > currentSelection.startDate &&
                day < currentSelection.endDate
                  ? "bg-[#A2E2A2]"
                  : ""
              }
              p-1.5 hover:bg-blue-50 rounded-lg text-center text-sm transition
              focus:outline-none focus:ring-2 focus:ring-[#584DE2]
            `}
          >
            {day ? day.getDate() : ""}
          </button>
        ))}
      </div>

      {/* Selected Date Display */}
      <div className="mt-4 text-center border-t border-gray-200 pt-3">
        <div className="text-xs text-gray-600 mb-1">
          Start:{" "}
          <span className="font-medium">
            {currentSelection.startDate
              ? formatDate(currentSelection.startDate)
              : "Not selected"}
          </span>
        </div>
        <div className="text-xs text-gray-600">
          End:{" "}
          <span className="font-medium">
            {currentSelection.endDate
              ? formatDate(currentSelection.endDate)
              : "Not selected"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
