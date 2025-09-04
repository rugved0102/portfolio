import { Code } from "lucide-react";
import LeetCodeStats from "./LeetCodeStats";

const LeftSidebar = () => {
  return (
    <div className="bg-card rounded-xl p-6 flex flex-col items-center justify-center h-fit">
      {/* LeetCode Section */}
      {/* <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform">
          <Code className="w-8 h-8 text-primary" />
        </div>
        <div>
          <div className="text-foreground text-4xl font-bold text-center">1945</div>
          <div className="text-muted-foreground text-sm font-medium text-center mt-1">LeetCode</div>
        </div>
      </div> */}
      <LeetCodeStats />
    </div>
  );
};

export default LeftSidebar;