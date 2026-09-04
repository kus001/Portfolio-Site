import { useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { randomBackground } from "@/styles/backgrounds";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = {
    home: <Hero setActiveSection={setActiveSection} />,
    about: <About />,
    projects: <Projects />,
    experience: <Experience />,
    contact: <Contact />
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${randomBackground}`}>
      <div className="w-full max-w-6xl h-[80vh] rounded-3xl glass overflow-hidden flex flex-col">
        <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />

        <main className="p-8 overflow-y-auto flex-1">
          {sections[activeSection]}
        </main>
      </div>
    </div>
  );
}

export default App;