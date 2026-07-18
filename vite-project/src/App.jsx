import { useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";


// had to get help from AI, could not figure out how to change the website from just being a single page where you scroll down, to having the buttons in the navbar actually lead to different pages.

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
    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      p-6
      bg-gradient-to-t
      from-[#09203f]
      to-[#537895]
    ">

      <div className="
        w-full
        max-w-6xl
        rounded-3xl
        glass
        overflow-hidden
      ">

        <Navbar setActiveSection={setActiveSection}/>

        <main className="
          p-8
          transition-all
          duration-500
        ">
          {sections[activeSection]}
        </main>

      </div>

    </div>
  );
}

export default App;