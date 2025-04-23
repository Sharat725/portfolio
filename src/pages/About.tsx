
import SectionTitle from "@/components/ui/SectionTitle";
import { FileText, Monitor, Server, Code } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API", "GraphQL"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Jest"]
    }
  ];

  return (
    <div className="container py-12">
      <SectionTitle 
        title="About Me" 
        subtitle="Professional developer focused on creating engaging digital experiences"
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <img 
            src="./images/profile.jpeg" 
            alt="Profile" 
            className="object-cover w-full h-64 rounded-lg md:h-80"
          />
        </div>
        
        <div className="md:col-span-2">
          <h3 className="mb-4 text-2xl font-semibold">My Background</h3>
          
          <p className="mb-4 text-muted-foreground">
          I'm a frontend developer who loves building websites and web apps that are easy to use and look great on all devices. I enjoy working with tools like HTML, CSS, and JavaScript to create clean and interactive user interfaces.
          </p>
          
          <p className="mb-6 text-muted-foreground">
          I started learning web development 1.5 years ago, and since then, I've worked on different kinds of projects—from simple websites to more advanced web apps. I'm always curious about new technologies and enjoy learning ways to make my work better.


          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <FileText className="w-5 h-5 mr-2 text-purple-light" />
              <span>B.Tech in Computer Science and Engineering</span>
            </div>
            <div className="flex items-center">
              <Monitor className="w-5 h-5 mr-2 text-purple-light" />
              <span>Frontend Specialist</span>
            </div>
            <div className="flex items-center">
              <Server className="w-5 h-5 mr-2 text-purple-light" />
              <span>Backend Knowledge</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-8 text-2xl font-semibold">My Skills</h3>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skills.map((skill, index) => (
            <ProjectCard key={index}>
              <h4 className="mb-4 text-lg font-medium text-purple-light">{skill.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
}
