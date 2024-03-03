import { Route, Routes } from "react-router-dom";
import Auth from "./components/shared/auth";
import Home from "./Page/home";
import ProtectedRoute from "./auth";
import { Toaster } from "@/components/ui/toaster";
import Layouts from "./Layouts";

function App() {
  return (
    <>
      <Layouts>
        <Toaster />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Auth />} />
        </Routes>
      </Layouts>
    </>
  );
}

export default App;
