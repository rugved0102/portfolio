import { Github, Twitter, Mail, Linkedin, FileText } from "lucide-react";
import heroCharacterImage from "@/assets/hero-character.png";
import StyledAchievements from "./StyledAchievements";
import YourNextEmployee from "./YourNextEmployee";

const RightSidebar = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Social Links */}
      <div className="flex justify-between space-x-1">
        {/* GitHub */}
        <a
          href="https://github.com/rugved0102"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-card hover:bg-accent rounded-xl flex items-center justify-center cursor-pointer transition-all hover:scale-105"
        >
          <Github className="w-4 h-4" />
        </a>

        {/* Twitter / X */}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-card hover:bg-accent rounded-xl flex items-center justify-center cursor-pointer transition-all hover:scale-105"
        >
          <Twitter className="w-4 h-4" />
        </a>

        {/* Resume (OneDrive / Google Drive link) */}
        {/* <a
          href="https://onedrive.live.com/your-resume-link"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-card hover:bg-accent rounded-xl flex items-center justify-center cursor-pointer transition-all hover:scale-105"
        >
          <FileText className="w-4 h-4" />
        </a> */}

        {/* Email */}
        <a
          href="mailto:rugvedjunghare@gmail.com"
          className="w-10 h-10 bg-card hover:bg-accent rounded-xl flex items-center justify-center cursor-pointer transition-all hover:scale-105"
        >
          <Mail className="w-4 h-4" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rugved-junghare-80a068262/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-card hover:bg-accent rounded-xl flex items-center justify-center cursor-pointer transition-all hover:scale-105"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>

      {/* Your Next Employee */}
        <YourNextEmployee />

      {/* Tech Stack Summary
      <div className="bg-card rounded-xl p-3">
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Tech Stack
        </h3>
        <div className="space-y-2">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Frontend</p>
            <div className="flex flex-wrap gap-1">
              {["React", "TypeScript", "Next.js", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary text-xs px-2 py-0.5 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Backend</p>
            <div className="flex flex-wrap gap-1">
              {["Node.js", "Python", "Docker", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary text-xs px-2 py-0.5 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Hero Character Image */}
      {/* <div className="rounded-xl overflow-hidden group">
        <img 
          src={heroCharacterImage} 
          alt="Hero Character" 
          className="w-full h-64 object-cover transition-transform group-hover:scale-105"
        />
      </div> */}

      {/* Achievements below tech stack */}
      <div className="mt-4">
        <StyledAchievements />
      </div>
    </div>
  );
};

export default RightSidebar;
