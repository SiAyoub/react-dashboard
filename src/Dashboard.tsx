import { useState } from "react";
import SidebarList from "./components/SidebarList";
import { addDays } from "date-fns";
import Graph from "./components/Graph";
import DatePicker from "./components/DatePicker";
import ClassProgress from "./components/ClassProgress";
import TopScoredLearners from "./components/TopScoredLearners";
import Chart from "./components/chart";
import {
  FaBook,
  FaBookOpen,
  FaCalendar,
  FaExpand,
  FaSchool,
  FaUserGraduate,
} from "react-icons/fa";

const Dashboard: React.FC = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="min-h-screen bg-indigo-900">
      <div className="flex flex-col p-4 md:flex-row">
        {/* Sidebar */}
        <div className="w:full md:w-[320px] min-h-screen p-4  border-4 rounded-2xl border-[#584DE2] bg-white">
          <img
            src="https://i.imgur.com/06DCzDw.png"
            className="w-[109px] h-[80px] max-w-[290px] mx-auto rounded-2xl p-4 mt-[7px]"
            alt="Header Image"
          />
          <div className="flex flex-col items-center mt-[51px] space-y-4">
            <div className="flex items-center space-x-4 bg-custom-color p-4 rounded-xl border border-[#584DE2] w-full">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt="Profile"
                className="w-10 h-10 rounded-full border"
              />
              <div>
                <h3 className="font-bold text-white">Mr. Mondher</h3>
                <p className="text-white">Prof</p>
              </div>
            </div>
            <input
              type="text"
              placeholder="🔍 Rechercher"
              className="w-full h-12 rounded-lg bg-gray-200 px-4"
            />
            <div className="w-full">
              <SidebarList
                items={[
                  { name: "Classes", icon: "📚" },
                  { name: "Jeux", icon: "🎮" },
                  { name: "Cours", icon: "📘" },
                  { name: "Statistiques", icon: "📊" },
                ]}
                onItemClick={(item) => {
                  console.log(item);
                }}
              />
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 p-4 min-h-screen border-4 rounded-2xl border-[#584DE2] bg-white mx-4 sm:mx-6 md:mx-[25px]">
          <div className=" flex flex-row justify-between md:mt-[45px] md:ml-[20px]">
            <h1 className=" mt-8 text-2xl sm:text-3xl md:text-[54px] font-fredoka font-medium text-[#4C4949]">
              Statistiques
            </h1>
            <div>
              <div className="text-4xl text-[#4C4949] p-4">
                <FaExpand />
              </div>
            </div>
          </div>

          <div className="flex flex-col p-6 ml-4 mt-[40px] border-[2px] rounded-2xl border-[#584DE2] min-h-screen bg-[#E8E7ED]">
            {/* Cards */}
            <div className="flex  justify- gap-[22px]">
              <div className="bg-white h-[112px] w-[16.77vw] rounded-xl shadow-md border">
                <div className="flex h-full">
                  <div className="w-3 h-full bg-[#40E0D0] rounded-l-2xl"></div>
                  <div className="text-4xl text-[#40E0D0] p-8">
                    <FaSchool />
                  </div>
                  <div className="w-1 h-[px] bg-[#b3b3b3] mt-4 mb-4"></div>{" "}
                  {/* Vertical bar */}
                  <div className="flex flex-col items-start pl-4 text-lg">
                    <div className="p-4">Classes</div>
                    <div className="mt-1 ml-6">6</div>{" "}
                  </div>
                </div>
              </div>

              <div className="bg-white h-[112px] w-[23vw]  rounded-xl shadow-md border">
                <div className="flex h-full">
                  <div className="w-3 h-full bg-[#FFA500] rounded-l-2xl"></div>
                  <div className="text-4xl text-[#FFA500] p-8">
                    <FaUserGraduate />
                  </div>
                  <div className="w-1 h-[px] bg-[#b3b3b3] mt-4 mb-4"></div>{" "}
                  {/* Vertical bar */}
                  <div className="flex flex-col items-start pl-4 text-lg">
                    <div className="p-4">Eleves</div>
                    <div className="mt-1 ml-6">100</div>{" "}
                  </div>
                  <div className=" w-[119px] h-[80px] mt-5 ml-12 bg-[#FFA500] rounded-2xl border">
                    <div className="p-2 font-fredoka text-slate-50">
                      Activite Totale
                    </div>
                    <div className="ml-14 font-fredoka text-slate-50">45%</div>{" "}
                  </div>
                </div>
              </div>
              <div className="bg-white h-[112px] w-[28.6vw] border-4 rounded-2xl border-[#584DE2] shadow-md p-4 flex flex-col items-center justify-center">
                <div className="flex space-x-4 text-indigo-500">
                  {/* First section with the open book icon and number */}
                  <div className="flex items-center">
                    <div className="text-4xl text-[#584DE2] ">
                      <FaBookOpen />
                    </div>
                    <span className="ml-2">2</span>
                  </div>

                  {/* Vertical bar divider */}
                  <div className="w-[3px] h-8 bg-[#584DE2] mx-4"></div>

                  {/* Second section with the users icon and number */}
                  <div className="flex items-center">
                    <div className="text-4xl text-[#584DE2] ">
                      <FaCalendar />
                    </div>
                    <span className="ml-2">2</span>
                  </div>

                  {/* Vertical bar divider */}
                  <div className="w-[3px] h-8 bg-[#584DE2] mx-4"></div>

                  {/* Third section with the calendar icon and number */}
                  <div className="flex items-center">
                    <div className="text-4xl text-[#584DE2] ">
                      <FaBook />
                    </div>
                    <span className="ml-2">4</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom divs */}
            <div className="flex flex-col lg:flex-row gap-[22px] mt-6">
              {/* Black div (Progress Section) */}
              <div className=" flex h-[631px] bg-white rounded-xl shadow-md border w-[16.77vw]  p-4">
                <ClassProgress />
              </div>

              {/* Grey div (Charts Section) */}
              <div className="w-[23vw]  flex flex-col  ">
                {/* Chart 1 */}
                <div className="bg-white h-[315px] rounded-t-[6px] shadow p-4">
                  <h3 className="text-black text-lg mb-2">Chart 1</h3>
                  <DatePicker state={state} setState={setState} />
                </div>

                {/* Chart 2 */}
                <div className="bg-[#4A4585] mt- rounded-b-[6px] h-[308px]  shadow p-4">
                  <Chart />
                </div>
              </div>
              {/* Chart 3 */}
              <div className="w-[28.6vw] flex flex-col gap-4">
                <div className=" h-[295px] mt-3 bg-[#584DE2] rounded-lg shadow p-4">
                  <Graph
                    startDate={state[0].startDate}
                    endDate={state[0].endDate}
                  />
                </div>

                {/* Chart 4 */}
                <div className=" bg-[#5C54BD] h-[305px] rounded-lg shadow p-4">
                  <div className="">
                    <TopScoredLearners />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
