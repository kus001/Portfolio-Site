
const projects = [
    {
        title: "ESP32 Car + Web Controller",
        description: "Built a remotely controlled robotic platform integrating embedded programming, motor control, and web technologies.",
        image: ["esp32 car.png", "IMG_5940.jpg"],
        tags: ["C/C++", "Robotics", "HTML", "CSS", "JavaScript", "CAD"],
        link: "#",
        github: "#",
    },
    {
        title: "USB Hub",
        description: "Designed and built a fully custom USB hub from scratch, including PCB design, component selection, assembly, and hardware testing to create a functional multi-port USB interface.",
        image: "usb hub.png",
        tags: ["PCB Design", "Hardware Design"],
        link: "#",
        github: "#",        
    },
    {
        title: "This Portfolio Website",
        description: "A website where I will show off my projects and let people know who I am.",
        tags: ["React", "Tailwind CSS", "UI/UX"],
        link: "#",
        github: "#",
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
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> make an impact.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work.
                    </p>
                </div>

                {/* projects grid*/}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div>
                            {/* image */}
                            <div>
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
                                </div>
                            </div>
                    ))}
                </div>
            </div>    
        </section>
    );
};