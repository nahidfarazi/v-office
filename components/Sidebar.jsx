import { Activity, Code2, Coffee, Cog, Gauge, Monitor, Presentation,User2 } from "lucide-react";
import Link from "next/link";
import { Profiler } from "react";

const Sidebar = ({ children }) => {
  return (
    <div className="flex text-black">
      <div className="fixed w-45 h-screen p-4 bg-white flex  flex-col  justify-between">
        <div className="flex gap-4  flex-col items-start ">
          <Link className="w-full" href="/">
            <div className="flex py-1 px-8 font-bold justify-center rounded-md items-center gap-2 text-black bg-violet-700 bg-opacity-30">
              <Profiler size={20} />
              <p className="text-black">V-Office</p>
            </div>
          </Link>
          <span className="border-b-[1px] border-black w-full m-auto"></span>

          <Link className="w-full" href="/">
            <div className="flex py-1 px-6 rounded-md items-center gap-2 text-t-500 hover:bg-indigo-700 hover:bg-opacity-10  duration-300 hover:text-black">
              <Gauge size={20} />
              <p className="text-black">Dashboard</p>
            </div>
          </Link>

          <Link className="w-full" href="/work">
            <div className="flex py-1 px-6 rounded-md items-center gap-2 text-black hover:bg-indigo-700 hover:bg-opacity-10  duration-300 hover:text-black">
              <Code2 size={20} />
              <p className="text-black">Work</p>
            </div>
          </Link>

          <Link className="w-full" href="/meeting">
            <div className="flex py-1 px-6 rounded-md items-center gap-2 text-black hover:bg-indigo-700 hover:bg-opacity-10 duration-300 hover:text-black">
              <Monitor size={20} />
              <p className="text-black">Meeting</p>
            </div>
          </Link>

          <Link className="w-full" href="/employee">
            <div className="flex py-1 px-6 rounded-md items-center gap-2 text-black hover:bg-indigo-700 hover:bg-opacity-10 duration-300 hover:text-black">
              <User2 size={20} />
              <p className="text-black">Employee</p>
            </div>
          </Link>

          <Link className="w-full" href="/activity">
            <div className="flex py-1 px-6 rounded-md items-center gap-2 text-black hover:bg-indigo-700 hover:bg-opacity-10 duration-300 hover:text-black">
              <Activity size={20} />
              <p className="text-black">Activity</p>
            </div>
          </Link>

          <Link className="w-full" href="/break">
            <div className="flex py-1 px-6 rounded-md items-center gap-2 text-black hover:bg-indigo-700 hover:bg-opacity-10 duration-300 hover:text-black">
              <Coffee size={20} />
              <p className="text-black">Break</p>
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-[90px] w-full text-black">{children}</main>
    </div>
  );
};

export default Sidebar;
