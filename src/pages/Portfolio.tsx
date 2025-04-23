import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type LocationState = {
  activeTab?: "projects" | "certificates" | "tech";
};

export default function Portfolio() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("projects");
  
  useEffect(() => {
    const state = location.state as LocationState;
    if (state?.activeTab) {
      setActiveTab(state.activeTab);
      // Clear the state after using it
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const projects = [
    {
      title: "Food Recipe Finder",
      description: "Food Recipe Finder is a user-friendly web app that helps you discover delicious recipes based on ingredients you already have.",
      image: "./images/food.png",
      tech: ["React", "Node.js", "Express", "Axios"],
      github: "#",
      live: "#"
    },
    {
      title: "TRAVEL AND TOUR MANAGEMENT SYSTEM",
      description: "Tourism management simplifies the management process in travelling. It’s fast processing and also it provides immediate results with high-security.",
      image: "./images/tms.jpg",
      tech: ["HTML", "CSS", "PHP"],
      github: "#",
      live: "#"
    },
    {
      title: "CRACK THE CARRIER",
      description: "Crack The Career aims to help students navigate career challenges by providing access to information, guidance, and tools.",
      image: "./images/career.jpg",
      tech: ["HTML", "CSS", "MYSQL"],
      github: "#",
      live: "#"
    },
    {
      title: "MediConnect",
      description: "Connect with healthcare providers, manage appointments, and access your medical records - all in one secure platform.",
      image: "./images/medi.png",
      tech: ["TypeScript", "React", "Tailwind CSS"],
      github: "#",
      live: "#"
    }
  ];

  const certificates = [
    {
      title: "DSA Using JAVA",
      issuer: "Codechef",
      date: "2023",
      image: "./images/crt1.png"
    },
    {
      title: " Python Django",
      issuer: "Infosys Springboard",
      date: "2025",
      image: "./images/crt2.png"
    },
    {
      title: "Fullstack Web Development",
      issuer: "Udemy",
      date: "2025",
      image: "./images/crt.png"
    }
  ];

  const techStack = [
    {
      name: "Frontend",
      technologies: [
        { name: "React", proficiency: 90 },
        { name: "JavaScript", proficiency: 85 },
        { name: "TypeScript", proficiency: 75 },
        { name: "HTML/CSS", proficiency: 95 },
        { name: "Tailwind", proficiency: 90 }
      ]
    },
    {
      name: "Backend",
      technologies: [
        { name: "Node.js", proficiency: 80 },
        { name: "Express", proficiency: 75 },
        { name: "MongoDB", proficiency: 70 },
        { name: "PostgreSQL", proficiency: 65 },
        { name: "REST API", proficiency: 85 }
      ]
    }
  ];

  return (
    <div className="container py-12">
      <SectionTitle 
        title="Portfolio Showcase" 
        subtitle="Explore my journey through projects, certifications, and technical expertise."
        center={true}
      />

      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 space-x-1 rounded-lg bg-secondary">
          <Button
            variant={activeTab === "projects" ? "default" : "ghost"}
            size="sm"
            className={activeTab === "projects" ? "bg-purple-light text-white" : ""}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </Button>
          <Button
            variant={activeTab === "certificates" ? "default" : "ghost"}
            size="sm"
            className={activeTab === "certificates" ? "bg-purple-light text-white" : ""}
            onClick={() => setActiveTab("certificates")}
          >
            Certificates
          </Button>
          <Button
            variant={activeTab === "tech" ? "default" : "ghost"}
            size="sm"
            className={activeTab === "tech" ? "bg-purple-light text-white" : ""}
            onClick={() => setActiveTab("tech")}
          >
            Tech Stack
          </Button>
        </div>
      </div>

      {activeTab === "projects" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} className="overflow-hidden">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-purple-light">{project.title}</h3>
              <p className="mb-4 text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-1" /> GitHub
                  </a>
                </Button>
                <Button size="sm" className="bg-purple-light hover:bg-purple-light/90" asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </Button>
              </div>
            </ProjectCard>
          ))}
        </div>
      )}

      {activeTab === "certificates" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {certificates.map((cert, index) => (
            <ProjectCard key={index} className="overflow-hidden">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-purple-light">{cert.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">{cert.issuer}</span>
                <span className="text-sm text-muted-foreground">{cert.date}</span>
              </div>
            </ProjectCard>
          ))}
        </div>
      )}

      {activeTab === "tech" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {techStack.map((category, index) => (
            <ProjectCard key={index}>
              <h3 className="mb-4 text-xl font-semibold text-purple-light">{category.name}</h3>
              <div className="space-y-4">
                {category.technologies.map((tech, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span>{tech.name}</span>
                      <span>{tech.proficiency}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-purple-light"
                        style={{ width: `${tech.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </ProjectCard>
          ))}
        </div>
      )}
    </div>
  );
}
