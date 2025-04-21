
import { ReactNode } from 'react';

type ProjectCardProps = {
  children: ReactNode;
  className?: string;
};

export default function ProjectCard({ children, className = '' }: ProjectCardProps) {
  return (
    <div className={`rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 p-6 transition-all hover:border-purple-light/50 ${className}`}>
      {children}
    </div>
  );
}
