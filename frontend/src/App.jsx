import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import RecruiterQuickView from "./sections/RecruiterQuickView";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Education from "./sections/Education";
import WhatIBring from "./sections/WhatIBring";
import Contact from "./sections/Contact";

import Footer from "./components/Footer";

import AdminLogin from "./sections/AdminLogin";
import AdminDashboard from "./sections/AdminDashboard";

import ProtectedRoute from "./components/ProtectedRoute";

function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <RecruiterQuickView />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />

        {/* <Achievements /> */}

        <WhatIBring />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
