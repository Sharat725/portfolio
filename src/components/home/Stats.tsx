
import { Briefcase, User, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../ui/ProjectCard';

export default function Stats() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "TOTAL PROJECTS",
      value: "6",
      icon: <Briefcase className="w-8 h-8" />,
      description: "Innovative web solutions crafted",
      onClick: () => navigate('/portfolio', { state: { activeTab: 'projects' } })
    },
    {
      title: "CERTIFICATES",
      value: "4",
      icon: <User className="w-8 h-8" />,
      description: "Beginner skills validated",
      onClick: () => navigate('/portfolio', { state: { activeTab: 'certificates' } })
    },
    {
      title: "YEARS OF EXPERIENCE",
      value: "1.5",
      icon: <Globe className="w-8 h-8" />,
      description: "Continuous learning journey"
    }
  ];

  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <ProjectCard 
              key={index} 
              className={`flex flex-col items-center p-8 ${stat.onClick ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
              onClick={stat.onClick}
            >
              <div className="p-4 mb-4 rounded-full bg-purple-light/10">
                {stat.icon}
              </div>
              <h3 className="mt-2 text-5xl font-bold text-purple-light">{stat.value}</h3>
              <p className="mt-2 text-xs font-semibold tracking-wider text-center uppercase">
                {stat.title}
              </p>
              <p className="mt-2 text-sm text-center text-muted-foreground">{stat.description}</p>
            </ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
}
