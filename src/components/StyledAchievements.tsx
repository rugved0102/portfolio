import { Trophy, Medal, Award, Star, Target, BookOpen } from "lucide-react";

const StyledAchievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-4 h-4" />,
      title: "GSSOC'24 Contributor (Rank 204)",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: <Award className="w-4 h-4" />,
      title: "1st Runner-Up at Zbyte Foundation dApp Hackathon",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <Medal className="w-4 h-4" />,
      title: "7th place at CodeForce Challenge (RCOEM, Nagpur)",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: <Star className="w-4 h-4" />,
      title: "Finalist at SmartEarth'25 International Hackathon",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <div className="bg-card rounded-xl p-4">
      <div className="flex items-center space-x-2 mb-3">
        <Trophy className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">Key Achievements</h3>
      </div>
      
      <div className="space-y-2">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className={`flex items-center space-x-2 p-2 rounded-lg ${achievement.bgColor} hover:scale-[1.02] transition-all duration-200`}
          >
            <div className={`${achievement.color} p-1 rounded`}>
              {achievement.icon}
            </div>
            <p className="text-xs text-foreground leading-relaxed flex-1">
              {achievement.title}
            </p>
          </div>
        ))}
      </div>
      
      {/* Compact summary */}
      <div className="mt-3 pt-2 border-t border-border">
        <div className="flex justify-between text-center">
          <div>
            <div className="text-lg font-bold text-primary">7+</div>
            <div className="text-xs text-muted-foreground">Awards</div>
          </div>
          <div>
            <div className="text-lg font-bold text-primary">3</div>
            <div className="text-xs text-muted-foreground">Publications</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledAchievements;