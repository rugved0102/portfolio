const TechStack = () => {
  const languages = [
    "JavaScript", "TypeScript", "Rust", "Solidity", "ReactJS", "NextJS", 
    "Remix", "TailwindCSS", "Socket.io", "Vite", "Foundry"
  ];

  const backend = [
    "NodeJS", "Express.js", "JWT", "Git", "GitHub", "Docker", "Nginx",
    "Kubernetes", "Redis", "GitHub Actions", "Google Cloud", "AWS", "AppWrite"
  ];

  const databases = [
    "PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "Figma", "Canva"
  ];

  const TechBadge = ({ tech }: { tech: string }) => (
    <span className="bg-secondary hover:bg-accent text-sm px-3 py-1 rounded-full cursor-pointer transition-colors">
      {tech}
    </span>
  );

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-foreground">Tech Stack</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">Languages & Web Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">Backend & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {backend.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">Databases & Design</h3>
          <div className="flex flex-wrap gap-2">
            {databases.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;