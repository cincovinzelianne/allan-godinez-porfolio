import { useState } from "react";
import { Mail, Phone, Facebook, Youtube, Instagram, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:allancgodinez@gmail.com" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", href: "tel:09260816065" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "https://www.facebook.com/algochoy/" },
    { icon: <Youtube className="w-5 h-5" />, label: "YouTube", href: "https://www.youtube.com/@allanc.godinez" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://www.instagram.com/algochoy/" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/allancgodinez-bot/Algochoy" },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-darker to-space-dark" />
      
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary text-glow">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-morphism p-8 rounded-lg glow-cyan">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm text-primary mb-2 block">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted border-primary/30 focus:border-primary glow-cyan"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-primary mb-2 block">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted border-primary/30 focus:border-primary glow-cyan"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-primary mb-2 block">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted border-primary/30 focus:border-primary glow-cyan min-h-[120px]"
                  placeholder="Your message..."
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-background font-semibold glow-cyan"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-morphism p-8 rounded-lg glow-purple">
              <h3 className="text-2xl font-bold mb-4 text-primary">Contact Information</h3>
              <div className="space-y-3 text-foreground/80">
                <p><span className="text-secondary font-semibold">Name:</span> Allan C. Godinez</p>
                <p><span className="text-secondary font-semibold">Email:</span> allancgodinez@gmail.com</p>
                <p><span className="text-secondary font-semibold">School Email:</span> godinez.allan@llcc.edu.ph</p>
                <p><span className="text-secondary font-semibold">Phone:</span> 09260816065</p>
              </div>
            </div>

            <div className="glass-morphism p-8 rounded-lg glow-pink">
              <h3 className="text-2xl font-bold mb-4 text-accent">Connect With Me</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent/20 transition-all hover:scale-110 group"
                  >
                    <div className="text-accent group-hover:text-accent group-hover:animate-pulse">
                      {link.icon}
                    </div>
                    <span className="text-xs text-muted-foreground">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
