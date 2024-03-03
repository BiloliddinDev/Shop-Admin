import { useState } from "react";
import { auth, googoleProvider } from "../../utils/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const SignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      localStorage.setItem("token", `${auth?.currentUser?.getIdToken}`);
      navigate("/");
      toast({
        title: "You are Welcome ✅✅✅",
      });
    } catch (error) {
      toast({
        title: "You cannot Sign In ❌❌❌",
      });
    }
  };

  const SignIngoogole = async () => {
    try {
      await signInWithPopup(auth, googoleProvider);
      localStorage.setItem("token", `${auth?.currentUser?.getIdToken}`);
      navigate("/");
      toast({
        title: "You are Welcome ✅✅✅",
      });
    } catch (error) {
      toast({
        title: "You cannot Sign In ❌❌❌",
      });
    }
  };

  return (
    <div className="h-screen flex flex-col border justify-center items-center">
      <div className="w-[500px] flex flex-col gap-2">
        <h1
          className="text-center text-6xl mb-4 font-extralight
        "
        >
          Happening now
        </h1>
        <Label>Username</Label>
        <Input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email.."
        />
        <Label>Password</Label>
        <Input
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
          className="mb-[30px]"
        />
        <div className="flex justify-center flex-col gap-2">
          <Button size={"lg"} onClick={SignIn}>
            Sign In
          </Button>
          <Button onClick={SignIngoogole}>Sign in with googole.com</Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
