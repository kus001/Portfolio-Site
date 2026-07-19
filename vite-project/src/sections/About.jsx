import { IoMdInfinite } from "react-icons/io";
import { CiLink } from "react-icons/ci";
import { GoTools } from "react-icons/go";
import { MdOutlineGroups3 } from "react-icons/md";

const highlights = [
    {
        icon: IoMdInfinite,
        title: "Adaptability",
        description: "Learning new skills quickly and taking on challenges outside my comfort zone.",
    },
    {
        icon: CiLink,
        title: "Multidisciplinary Engineering",
        description: "Combining software, electronics, and mechanical design to build complete projects."
    },
    {
        icon: GoTools,
        title: "Problem Solving",
        description: "Debugging problems, testing ideas, and improving designs through interaction."
    },
    {
        icon: MdOutlineGroups3,
        title: "Communication",
        description: "Breaking down complex ideas and helping others understand how things work."
    }
]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* left column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium font-code tracking-widest uppercase">// About Me //</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-white"> one component at a time.</span>
                        </h2>

                        {/* about me text */}
                        <div className="space-y-4 text-muted-foreground font-clean animate-fade-in animation-delay-200">
                            <p>
                                I am an aspiring engineer who enjoys turning ideas into things I can actually
                                build, test, and improve. Whether it's designing electronics for a robotics project, 
                                programming a microcontroller, or creating software to solve a problem, I love the 
                                process of figuring out how different pieces come together to create something useful.
                            </p>
                            <p>
                                My interests lie somewhere in the middle of robotics, embedded systems, and 
                                software engineering. Through robotics, EV engineering, and personal projects, I
                                have learned that engineering is rarely about getting everything right the first time;
                                it is about experimenting, debugging, and continuously improving. I enjoy taking on
                                challenges that push me outside my comfort zone and learning whatever skills are needed 
                                to bring an idea to life.
                            </p>
                            <p>
                                Beyond building projects, I enjoy sharing what I learn with others through teachings,
                                collaboration, and leadership in my school's robotics community. I'm always looking for 
                                opportunities to learn, create, and contribute to projects that have a real-world impact.
                            </p>
                        </div>
                    </div>
      
                    {/* right column highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold font-clean tracking-wider mb-2">{item.title}</h3>
                                <p className="text-sm font-clean text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};