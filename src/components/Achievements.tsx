import { Trophy } from "lucide-react";

const Achievements = () => {
  const achievements = [
    "GSSOC'24 Contributor (Rank 204)",
    "1st Runner-Up at Zbyte Foundation dApp Hackathon",
    "7th place at CodeForce Challenge (RCOEM, Nagpur)",
    "Finalist at SmartEarth'25 International Hackathon",
    "Finalist at HackWars'24 (Chandigarh University)",
    "Nominated for Best Project Award in 4th semester",
    "3 Research Publication in reputed journal"
  ];

  return (
    <div className="bg-card rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Trophy className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Achievements</h3>
      </div>
      
      <div className="space-y-2">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start space-x-2">
            <span className="text-primary text-xs mt-1">•</span>
            <p className="text-sm text-foreground leading-relaxed">{achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;