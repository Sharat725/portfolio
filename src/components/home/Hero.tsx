
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm rounded-full bg-purple-light/10 text-purple-light">
            <span className="mr-2">Ready to Innovate</span>
          </div>
          
          <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-white">Hello, I'm</span>
          </h1>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-purple-light">Frontend</span>
            <span className="block mt-2">Developer</span>
          </h2>
          
          <p className="max-w-md mb-8 text-lg text-muted-foreground">
            Creating innovative, functional, and user-friendly websites for digital solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-purple-light text-white hover:bg-purple-light/90">
              <Download size={18} className="mr-2" /> Download CV
            </Button>
            <Button variant="outline" asChild>
              <Link to="/portfolio" className="group">
                <Briefcase size={18} className="mr-2" />
                View Projects
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 text-sm rounded-full bg-secondary text-muted-foreground">React</span>
            <span className="px-4 py-2 text-sm rounded-full bg-secondary text-muted-foreground">JavaScript</span>
            <span className="px-4 py-2 text-sm rounded-full bg-secondary text-muted-foreground">Node.js</span>
            <span className="px-4 py-2 text-sm rounded-full bg-secondary text-muted-foreground">Tailwind</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-purple-light/20 to-transparent"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
              alt="Profile"
              className="object-cover w-full h-full rounded-full ring-2 ring-purple-light/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
