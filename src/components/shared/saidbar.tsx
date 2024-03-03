import { SidberLink } from "@/constants";
import { NavLink } from "react-router-dom";
import { Separator } from "../ui/separator";

const Saidbar = () => {
  return (
    <div className="w-[260px] bg-slate-100 dark:bg-slate-900 h-screen fixed top-0 left-0 z-20 border pt-[80px]">
      <div className="mt-8 ml-3 flex flex-col w-full gap-3">
        {SidberLink.map((e) => (
          <div className="w-[240px]">
            <NavLink
              className={
                "flex w-[240px] items-center justify-self-end gap-4 opacity-80 hover:opacity-100 p-2 text-black dark:text-white"
              }
              to={e.path}
            >
              <p className="text-2xl">{e.icon}</p>
              {<h3 className="text-1xl font-mono">{e.name}</h3>}
            </NavLink>
            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saidbar;
