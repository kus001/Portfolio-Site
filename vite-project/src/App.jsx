import { useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";

function App() {

  const [activeSection, setActiveSection] = useState("home");

  const sections = {
    home: <Hero />,
    about: <About />,
    projects: <Projects />,
    experience: <Experience />,
    contact: <Contact />
  };

  return (
    <div className="min-h-screen overflow-hidden">

      <Navbar setActiveSection={setActiveSection}/>

      <main className="
        max-w-6xl
        mx-auto
        mt-10
        p-8
        rounded-3xl
        glass
        transition-all
      ">
        {sections[activeSection]}
      </main>

    </div>
  );
}

export default App;