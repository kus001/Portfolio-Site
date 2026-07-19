import { LuMoveUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
        {
        title: "Custom EV PCB",
        description: "Designing a custom PCB for EV monitoring with GPS tracking, speed measurement and embedded control.",
        tags: ["PCB Design", "Hardware Design", "Embedded Systems"],
        image: "#",
        link: "#",
        github: "#",
        progress: 2,
        status: "building",
    },
    {
        title: "This Portfolio Website",
        description: "A website where I will show off my projects and let people know who I am.",
        tags: ["React", "Tailwind CSS","Vite", "UI/UX"],
        link: "#",
        github: "#", 
        progress: 6,
        status: "building",
    },
    {
        title: "ESP32 Car + Web Controller",
        description: "Built an RC car from scratch that is controlled via a custom app hosted on the ESP32's server.",
        image: ["esp32 car.png", "IMG_5940.jpg"],
        tags: ["C/C++", "Robotics", "Webdev", "CAD"],
        link: "https://docs.google.com/document/d/13kPvpQyWogPpfZdzw-zhv5D13WLjuKJg6q-XV9teAcQ/edit?tab=t.0",
        github: "https://github.com/kus001/TEJ3MI-Robotics-Summative",
        progress: 10,
        status: "completed",
    },
    {
        title: "ESP32 car with a robotic arm",
        description: "Built off of the ESP32 car, with an added 5-joint robotic arm and being controlled by a Bluetooth controller.",
        image: "",
        tags: ["C/C++", "Robotics", "CAD"],
        link: "https://docs.google.com/document/d/1fr0gebTkqTvOU0qW7BXbmSLKvKvnd_P4/edit",
        github: "https://github.com/kus001/TEJ3MI-Culminating-Task/tree/main",
        progress: 10,
        status: "completed",
    },
    {
        title: "USB Hub",
        description: "Designed and built a fully custom USB hub.",
        image: "usb hub.png",
        tags: ["PCB Design", "Hardware Design"],
        link: "#",
        github: "#",
        progress: 10,
        status: "completed",
    }
]

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* bg glow (got help) */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            <div className="container mx-auto px-6 relative z-10">

                {/* section header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium font-code tracking-widest uppercase animate-fade-in">// Featured Work //</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> make an impact.</span>
                    </h2>
                    <p className="text-muted-foreground font-code animate-fade-in animation-delay-200">
                        A selection of my recent work.
                    </p>
                </div>

                {/* projects grid*/}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay: `${(idx + 1) * 100}ms` }}>
                            {/* image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>

                                {/* overlay links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {/* <a href={project.link} className="p-3 glass rounded-full hover:text-primary-foreground transition-all">
                                        <LuMoveUpRight className="w-5 h-5"/>
                                    </a> */}
                                    <a href={project.github} className="p-3 glass rounded-full hover:text-primary-foreground transition-all">
                                        <FaGithub className="w-5 h-5"/>
                                    </a>
                                </div>
                            </div>

                            {/* content */}
                            <div className="p-6 space-y-3">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors font-code">{project.title}</h3>
                                    <LuMoveUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>

                                <p className="text-muted-foreground font-clean text-sm">{project.description}</p>

                                {/* current projects */}
                                {project.status !== "completed" && (
                                    <div className="mt-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                                            <span className="text-sm text-primary font-bold font-code">
                                                Currently Building
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* progress bar */}
                                {project.status !== "completed" && (
                                    <div className="space-y-2 py-1">
                                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                            progress
                                        </p>

                                        <div className="flex gap-2 w-full">
                                            {[...Array(10)].map((block, blockIdx) => (
                                                <div key={blockIdx} className={`flex-1 h-3 rounded-sm transition-all duration-500 animate-fade-in animation-delay-100 ${
                                                    blockIdx < project.progress
                                                    ? "bg-primary"
                                                    : "border border-border bg-transparent"
                                                }`}/>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span className="px-3 py-1.5 rounded-full bg-surface text-xs font-medium font-code tracking-wider border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* look at all projects */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        View all projects
                        <LuMoveUpRight className="w-5 h-5"/>
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};