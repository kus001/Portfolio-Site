import { Button } from "@/components/Button"
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { useState } from "react";

const contactInfo = [
    {
        icon: SiGmail,
        label: "Email",
        value: "kush.asuthar@gmail.com",
        href: "mailto:kush.asuthar@gmail.com",
    },
    {
        icon: FaPhoneAlt,
        label: "Phone",
        value: "+1 (519) 465-2594",
        href: "tel:+15194652594",
    }
]

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

        } catch (err) {

        }
    };

    return (
        <section id='contact' className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Get in{" "}
                        <span className="font-serif italic font-normal text-white">
                            touch
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Have a question, an opportunity, or just want to connect? Feel free to reach out.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto ">
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input id="name" 
                                       type="text" 
                                       required
                                       placeholder="Your name..."
                                       value={formData.name}
                                       onChange={(e) => 
                                        setFormData({ ...formData, name: e.target.value})
                                        }
                                       className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input id="email" 
                                       type="email" 
                                       required
                                       placeholder="your@email.com"
                                       value={formData.name}
                                       onChange={(e) => 
                                        setFormData({ ...formData, email: e.target.value})
                                       }   
                                       className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea 
                                       rows={5}
                                       required
                                       placeholder="Your message..."
                                       value={formData.name}
                                       onChange={(e) => 
                                        setFormData({ ...formData, email: e.target.value})
                                       }   
                                       className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"/>
                            </div>

                            <Button className="w-full" type="submit" size="lg">
                                Send message <TbSend />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};