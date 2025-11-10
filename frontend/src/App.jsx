import React from "react";
import { Route, Routes } from "react-router";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import HomePage from "./pages";
import DashboardPage from "./components/Dashboard";
import VerifyEmailSent from "./pages/verifyEmail";
import ProfilePage from "./pages/profile";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/verify" element={<VerifyEmailSent />} />
      <Route path="/" element={<DashboardPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default App;
