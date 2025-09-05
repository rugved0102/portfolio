import ProjectCard from "./ProjectCard";
import SpotifyPlayer from "./SpotifyPlayer";
import YourNextEmployee from "./YourNextEmployee";
import StyledAchievements from "./StyledAchievements";
import { Button } from "@/components/ui/button";
import bobProjectImage from "@/assets/bob-project.png";
import Project1Img from "@/assets/project1.png";
import Project3Img from "@/assets/project3.jpg";
import ussopProjectImage from "@/assets/ussop-project.png";
import sakhiProjectImage from "@/assets/sakhi-project.png";
import ProfileImage from "./ProfileImage";

const MainContent = () => {
  const projects = [
    {
      title: "Welth",
      description: "AI Finance Management Platform, a full-stack web application",
      image: Project1Img,
      url: "https://welth-ai-finance-platform-sigma.vercel.app/",
      repo: "https://github.com/rugved0102/welth-AI-Finance-Platform",
    },
    {
      title: "Todo WebApp",
      description: "using Context API and persistent data storage with localStorage",
      image: ussopProjectImage,
      url: "https://rugved0102.github.io/Todo-Context-LocalStorage-webapp/",
      repo: "https://github.com/rugved0102/Todo-Context-LocalStorage-webapp",
    },
    {
      title: "MegaBlog",
      description: "blogging platform built with React.js, Vite, and Appwrite",
      image: Project3Img,
      url: "https://github.com/rugved0102/blog-website",
      // repo: "https://blog-website-penflow.netlify.app/",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Row: Profile Info */}
      {/* <div className="flex items-center justify-between"> */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div className="flex items-center space-x-4">
          {/* <img
            src="public\rugved_img.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          /> */}
          <ProfileImage/>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Rugved Junghare
            </h1>
            {/* <p className="text-muted-foreground">@rugved_junghare_</p> */}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/16n_LLX0yjEVAIP3cn5CPVKMVpnjM7xyv/view?usp=sharing",
                "_blank"
              )
            }
          >
            Resume
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              window.open(
                "https://almondine-ricotta-11a.notion.site/Rugved-Junghare-Proof-of-Work-264f35f91b5b806bbfb9c13ab032c391",
                "_blank"
              )
            }
          >
            I'm Feeling Lucky
          </Button>
        </div>
      </div>

      {/* Bio */}
      <p className="text-lg text-foreground leading-relaxed">
        {/* SWE <span className="text-primary">@Google</span> Building cool things
        on Web2, Web3, and beyond. Member{" "}
        <span className="text-primary">@SuperteamIN</span> */}
        Your Next Developer – Passionate About Building Scalable Solutions
      </p>

      {/* Projects Grid - 3 cards in a row */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
              repo={project.repo}
            />
          ))}
        </div>
      </div>

      {/* Tech Stack Summary */}
      <div className="bg-card rounded-xl p-1 sm:p-3">
        <h1 className="text-xl font-semibold text-foreground mb-4 text-center">
          Tech Stack
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Languages & Web Technologies */}
          <div>
            <p className="text-lg font-medium text-muted-foreground mb-2 pl-2">
              {" "}
              Languages & Web Technologies
            </p>
            <div className="flex flex-wrap gap-1">
              {[
                "Java",
                "JavaScript",
                // "TypeScript",
                // "Rust",
                // "Solidity",
                // "ReactJS",
                // "NextJS",
                // "Remix",
                "TailwindCSS",
                // "Socket.io",
                "Vite",
                "HTML",
                "CSS",
                // "Foundry",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary text-xs px-2 py-0.5 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Tools */}
          <div>
            <p className="text-lg font-medium text-muted-foreground mb-2 pl-1">
              Backend & Tools
            </p>
            <div className="flex flex-wrap gap-1">
              {[
                "NodeJS",
                "Express.js",
                "JWT",
                "Git",
                "GitHub",
                "Docker",
                // "Nginx",
                // "Kubernetes",
                // "Redis",
                "GitHub Actions",
                // "Google Cloud",
                // "AWS",
                "AppWrite",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary text-xs px-2 py-0.5 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Databases & Design */}
          <div>
            <p className="text-lg font-medium text-muted-foreground mb-2 pl-1">
              Databases & Design
            </p>
            <div className="flex flex-wrap gap-1">
              {[
                "PostgreSQL",
                // "MongoDB",
                "MySQL",
                "Prisma",
                "Figma",
                "Canva",
              ].map((tech) => (
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
      </div>

      {/* Bottom Section: Your Next Employee, Skills & Spotify, and Achievements */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  
      </div> */}
      <footer className="bg-card rounded-xl text-center p-4 text-xs sm:text-sm text-muted-foreground">
        © {new Date().getFullYear()} Rugved Junghare · Built with ❤️ using React
        & Tailwind
      </footer>
    </div>
  );
};

export default MainContent;
