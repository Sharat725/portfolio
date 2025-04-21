
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
      alert("Message sent successfully! This is a demo form.");
    }, 1000);
  };

  return (
    <div className="container py-12">
      <SectionTitle 
        title="Get in Touch" 
        subtitle="Have something to discuss? Send me a message and let's talk."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <ProjectCard className="h-full">
            <h3 className="mb-6 text-xl font-semibold text-purple-light">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-full bg-purple-light/10">
                  <Mail className="text-purple-light" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:contact@example.com" className="hover:text-purple-light">
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-full bg-purple-light/10">
                  <Phone className="text-purple-light" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-purple-light">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-full bg-purple-light/10">
                  <MapPin className="text-purple-light" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>New York City, USA</p>
                </div>
              </div>
            </div>
          </ProjectCard>
        </div>
        
        <div className="md:col-span-2">
          <ProjectCard>
            <h3 className="mb-6 text-xl font-semibold text-purple-light">Send Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Your Name <span className="text-purple-light">*</span>
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="bg-secondary border-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Your Email <span className="text-purple-light">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="bg-secondary border-secondary"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm">
                    Your Message <span className="text-purple-light">*</span>
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    required
                    className="min-h-[150px] bg-secondary border-secondary"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="mt-6 bg-purple-light hover:bg-purple-light/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </ProjectCard>
        </div>
      </div>
      
      <div className="mt-12">
        <ProjectCard>
          <div className="flex items-center mb-6">
            <MessageSquare className="mr-2 text-purple-light" />
            <h3 className="text-xl font-semibold">Comments <span className="text-purple-light">(12)</span></h3>
          </div>
          
          <div className="space-y-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="p-4 rounded-lg bg-secondary">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 mr-3 rounded-full bg-purple-light/20"></div>
                  <div>
                    <h4 className="font-medium">User Name</h4>
                    <p className="text-xs text-muted-foreground">Posted on {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Great work on your portfolio! The projects are impressive and the code quality looks excellent.
                </p>
              </div>
            ))}
          </div>
        </ProjectCard>
      </div>
    </div>
  );
}
