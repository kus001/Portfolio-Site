import { Button } from "@/components/Button"
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { IoAlertCircleOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

const contactInfo = [
    {
        icon: SiGmail,
        label: "Email",
        value: "ex",
        href: "ex",
    },
    {
        icon: FaPhoneAlt,
        label: "Phone",
        value: "ex",
        href: "ex",
    }
]

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, // form submission successful or not
        message: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: ""});
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables."
                )
            }

            // check if emailjs is working
            console.log({
                serviceId,
                templateId,
                publicKey
            });

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey);

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I will get back to you soon."
            })
            setFormData({name: "", email: "", message: ""})
        } catch (error) {
            console.error("EmailJS error:", error)
            setSubmitStatus({
                type: "error",
                message: 
                    error.text || "Failed to send message. Please try again later."
            });
        } finally {
            setIsLoading(false)
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
                                       value={formData.email}
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
                                       value={formData.message}
                                       onChange={(e) => 
                                        setFormData({ ...formData, message: e.target.value})
                                       }   
                                       className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"/>
                            </div>

                            <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send message
                                        <TbSend className="w-5 h-5"/>
                                    </>
                                )}
                            </Button>

                            {submitStatus.type && (
                                <div 
                                    className=
                                        {`flex items-center gap-3 p-4 rounded-xl 
                                        ${submitStatus.type === "success" ? 
                                        "bg-green-500/10 border border-green-500/20 text-green-400" : 
                                        "bg-red-500/10 border border-red-500/20 text-red-400"}`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <FaRegCircleCheck className="w-5 h-5 flex-shrink-0" />
                                    ) : (
                                        <IoAlertCircleOutline className="w-5 h-5 flex-shrink-0" />
                                    )}
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};