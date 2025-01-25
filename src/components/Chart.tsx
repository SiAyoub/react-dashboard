import { FaSchool, FaChalkboardTeacher } from "react-icons/fa";

const Chart: React.FC = () => {
  const randomNames = ["Alice Johnson", "Bob Smith"];

  return (
    <div className="w-full h-full p-6 bg-gray-900 rounded-lg shadow-lg">
      <div className="flex justify-center gap-16 mb-8">
        <div className="flex items-center gap-2 text-4xl text-white shadow-xl p-2 rounded-full">
          <FaSchool />
        </div>
        <div className="flex items-center gap-2 text-4xl text-white shadow-xl p-2 rounded-full">
          <FaChalkboardTeacher />
        </div>
      </div>

      <div className="flex flex-col gap-2 ml-9 mt-4 ">
        {randomNames.map((name, index) => (
          <div
            key={index}
            className="flex items-center gap-6 mb-2 bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={`https://i.pravatar.cc/150?img=${28 + index}`}
              alt={`Image ${index + 1}`}
              className="w-8 h-8 rounded-full object-cover mb-2 border-4 border-[#e2c44d] shadow-md"
            />
            <p className="text-white font-semibold text-sm">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
