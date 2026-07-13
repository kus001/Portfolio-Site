const experiences = [
    {
        period: "Mid-2025 – Present",
        role: "Robotics Executive",
        company: "Waterloo Collegiate Institute",
        description: "Leading electronics initiatives, creating hardware lessons, and helping organize MechMania, WRDSB's largest robotics competition.",
        skills: ["Leadership", "Teaching", "Project Management", "Communication"],
        current: true,
    },
    {
        period: "2025 – Present",
        role: "Hardware & Electrical Engineer",
        company: "Waterloo Collegiate Institute",
        description: "Contributing to the engineering and manufacturing team by designing, prototyping, and building hardware for the school's electric vehicle.",
        skills: ["PCB Design", "Hardware Design", "Manufacturing", "Collaboration", "Prototyping"],
        current: true,
    },
    {
        period: "July 2025",
        role: "Co-op Student",
        company: "Waterloo Wellington Flight Centre",
        description: "Worked alongside licensed aircraft maintenance engineers, gaining hands-on experience with aircraft maintenance, teamwork, and professional engineering practices.",
        skills: ["Mechanical Systems", "Teamwork", "Safety", "Problem Solving"],
        current: false,
    },
    {
        period: "2023 – Present",
        role: "Club Member",
        company: "Waterloo Collegiate Institute",
        description: "Built robotics projects while developing skills in embedded systems, programming, electronics, and mechanical design.",
        skills: ["C/C++", "Robotics", "Embedded Systems", "Collaboration", "CAD"],
        current: true,
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>

            <div className="container mx-auto px-6 relative z-10">
                {/* section header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Experience that <span className="font-serif italic font-normal text-white"> speaks volumes.</span>
                    </h2>

                    {/* experiences description */}
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A collection of experiences where I learned, built, and led while developing 
                        skills across robotics, embedded systems, engineering, and collaboration.
                    </p>
                </div>
            </div>
        </section>
    )
};