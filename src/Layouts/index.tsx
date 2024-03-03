import Navbar from "@/components/shared/navbar";
import Saidbar from "@/components/shared/saidbar";
import { useLocation } from "react-router-dom";

const Layouts = ({ children }: any) => {
  const location = useLocation();

  return (
    <div className="">
      {location.pathname !== "/login" ? (
        <div>
          <Saidbar />
          <Navbar />
        </div>
      ) : (
        <></>
      )}
      <div className="ml-[260px] mt-20">{children}</div>
    </div>
  );
};

export default Layouts;
