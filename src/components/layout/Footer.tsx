
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 mt-20 border-t border-border/30">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-xl font-bold text-purple-light">Hulli</div>
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="#" className="text-muted-foreground hover:text-purple-light transition-colors">
              <Github size={20} />
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-purple-light transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-purple-light transition-colors">
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
