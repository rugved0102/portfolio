import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const ProjectCard = ({ title, description, image, url }: ProjectCardProps) => {
  return (
    <div className="bg-project-card hover:bg-project-card-hover rounded-xl p-4 transition-all duration-300 group cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-snug">{description}</p>
        </div>
        <div className="flex space-x-2 ml-2">
          <Github className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
          <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
        </div>
      </div>
      <div className="rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ProjectCard;