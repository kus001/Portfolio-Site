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
                    <span className="text-secondary-foreground text-sm font-medium font-code tracking-widest uppercase animate-fade-in">// Career Journey //</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Experience that <span className="font-serif italic font-normal text-white"> speaks volumes.</span>
                    </h2>

                    {/* experiences description */}
                    <p className="text-muted-foreground font-code animate-fade-in animation-delay-200">
                        A collection of experiences where I learned, built, and led while developing 
                        skills across robotics, embedded systems, engineering, and collaboration.
                    </p>
                </div>

                {/* timeline (got help) */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(0,113,227,0.5)]"/>

                    {/* experience items */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={{animationDelay: `${(idx + 1) * 150}ms`}}>

                                {/* timeline dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-white/5 z-10">
                                    {exp.current && (<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>)} {/* if the experience is current, dot will pulse */}
                                </div>
                                

                                {/* content */}
                                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium font-code">{exp.period}</span>
                                        <h3 className="text-xl font-semibold font-code tracking-wide mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground font-code">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground font-clean mt-4">{exp.description}</p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md-justify-end" : ""}`}>{exp.skills.map((skill, skillIdx) => (
                                            <span className="px-3 py-1 bg-surface text-xs font-medium font-code rounded-full text-muted-foreground border border-border/10 hover:border-primary/35 hover:text-primary transition-all">{skill}</span>
                                        ))}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};