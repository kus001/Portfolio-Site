import { Button } from "@/components/Button";
import { GoChevronRight } from "react-icons/go";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

export const Hero = () => {
    return (
        // background
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img 
                    src="/hero-bg.jpg" 
                    alt="Hero image" 
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
            </div>

            {/* Floating dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
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
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/> 
                                Highschool Student · Waterloo Collegiate Institute
                            </span>
                        </div>

                        {/* headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                experiences with
                                <br />
                                <span className="font-serif italic font-normal text-white"> 
                                    precision.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation animation-delay-200">
                                Hi, I am Kush Suthar, a student at Waterloo Collegiate Institute and an aspiring Mechatronics Engineer.
                                I enjoy building things that move, think, and solve problems. My work spans 
                                embedded systems, robotics, electronics, and software development.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me <GoChevronRight className="w-5 h-5"/>
                            </Button>
                            <AnimatedBorderButton />
                        </div>

                        {/* social links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow Me: </span>
                            {[
                                {icon: FaGithub, href: "https://github.com/kus001"},
                                {icon: FaLinkedinIn, href: "#"},
                                {icon: FaInstagram, href: "https://www.instagram.com/kus.sutharr"},
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} className="p-5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    {<social.icon className="w-5 h-5"/>}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* right column */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* profile pic */}
                        <div className="relative max-w-md mx-auto">
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="/IMG_5940.jpg" alt="Kush Suthar" className="w-full aspect-[4/5] object-cover rounded-2xl"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};