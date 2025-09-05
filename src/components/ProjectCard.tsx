import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string; // live project
  repo?: string; // GitHub repo
}

const ProjectCard = ({
  title,
  description,
  image,
  url,
  repo,
}: ProjectCardProps) => {
  return (
    <div className="bg-project-card hover:bg-project-card-hover rounded-xl p-4 transition-all duration-300 group">
      {/* Title and Icons */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="flex space-x-2">
          {repo && (
            <span
              title="View GitHub Repo"
              onClick={() => window.open(repo, "_blank")}
              className="cursor-pointer"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </span>
          )}

          {url && (
            <span
              title="Visit Project"
              onClick={() => window.open(url, "_blank")}
              className="cursor-pointer"
            >
              <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-snug mb-3">
        {description}
      </p>

      {/* Project Image */}
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
