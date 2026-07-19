import profile1 from "@/assets/profile1.png";
import profile2 from "@/assets/profile2.png";
import profile4 from "@/assets/profilepic4.png";
import { Button } from "@/components/Button";
import { GoChevronRight } from "react-icons/go";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFileAlt } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { IoChevronDownOutline } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";

const skills = [
    "Python",
    "C/C++",
    "React",
    "Tailwind CSS",
    "PCB Design",
    "CAD",
];

const profilePics = [
    profile1,
    profile2,
    profile4,
]

const randomProfile = profilePics[Math.floor(Math.random() * profilePics.length)] // Math.floor() takes out any decimal points and makes sure that valid, whole # indexes are used 

export const Hero = ({ setActiveSection }) => {
    return (
        // background
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* Floating dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full filter blur-[0.5px] opacity-20"
                        style={{
                            backgroundColor: "#e2e8f0", 
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* left column */}
                    <div className="space-y-6">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/> 
                                Student · Waterloo Collegiate Institute
                            </span>
                        </div>

                        {/* headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Kush <span className="text-primary glow-text">Suthar</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation animation-delay-200">
                                Engineering things that make life a little more interesting.
                            </p>
                        </div>

                        {/* social links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Find me: </span>
                            {[
                                {icon: FaGithub, href: "https://github.com/kus001"},
                                {icon: FaLinkedinIn, href: "#"},
                                {icon: FaInstagram, href: "https://www.instagram.com/kus.sutharr"},
                                {icon: FaFileAlt, label: "Resume", onClick : () => window.open("/Resume - Kush Suthar.png", "_blank")}
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} onClick={social.onClick} className="p-4 rounded-full glass hover:bg-primary/10 hover:bg-primary/20 transition-all duration-300">
                                    {<social.icon className="w-4.5 h-4.5"/>}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* right column */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* profile pic */}
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src={randomProfile} alt="Kush Suthar" className="w-full aspect-[4/5] object-cover object-center rounded-2xl scale-95"/>

                                {/* floating badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float ">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                        <span className="text-sm font-medium">Available for work</span>
                                    </div>
                                </div>
                                {/* stats badge */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-2xl font-bold text-primary">4+</div>
                                    <div className="text-xs text-muted-foreground">Years Exp.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* skills */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
                    <div className="relative overflow-hidden">
                        {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"/>
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"/> */}
                        <div className="flex animate-marquee">{[...skills, ...skills, ...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                            </div>
                        ))}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};