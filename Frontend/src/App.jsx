import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="https://project-manga.vercel.app/" element={<Home />} />
        <Route
          path="https://project-manga.vercel.app/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="https://project-manga.vercel.app/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
