import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "../../utils/firebase";
import { ModeToggle } from "../stayle";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-no-background.svg";

const Navbar = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 w-full fixed top-0 z-40 flex items-center justify-between p-4 px-6 border">
      <div className="flex items-center gap-6">
        <Link to={"/"}>
          <img src={Logo} width={120} alt="" />
        </Link>
        <Button variant={"outline"} size={"icon"}>
          <i className="fa-solid fa-bars"></i>
        </Button>
      </div>
      <div className="flex items-center gap-6">
        <ModeToggle />
        <Avatar>
          <AvatarImage src={`${auth?.currentUser?.photoURL}`} />
          <AvatarFallback>{`${auth.currentUser?.displayName}`}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
