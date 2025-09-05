// import { Briefcase, Star } from "lucide-react";

// const YourNextEmployee = () => {
//   return (
//     <div className="bg-card rounded-xl p-6">
//       <div className="flex items-center space-x-2 mb-4">
//         <Briefcase className="w-5 h-5 text-primary" />
//         <h3 className="text-lg font-semibold text-foreground">Your Next Employee</h3>
//       </div>
      
//       <div className="space-y-4">
//         <div className="flex items-center space-x-2">
//           <Star className="w-4 h-4 text-primary fill-current" />
//           <p className="text-sm text-foreground">Ready to contribute from day one</p>
//         </div>
        
//         <div className="flex items-center space-x-2">
//           <Star className="w-4 h-4 text-primary fill-current" />
//           <p className="text-sm text-foreground">Passionate about clean, efficient code</p>
//         </div>
        
//         <div className="flex items-center space-x-2">
//           <Star className="w-4 h-4 text-primary fill-current" />
//           <p className="text-sm text-foreground">Strong problem-solving mindset</p>
//         </div>
        
//         <div className="flex items-center space-x-2">
//           <Star className="w-4 h-4 text-primary fill-current" />
//           <p className="text-sm text-foreground">Team player with leadership potential</p>
//         </div>
        
//         <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
//           <p className="text-sm text-primary font-medium text-center">
//             "Eager to bring innovation and dedication to your team"
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YourNextEmployee;

import { Briefcase, Star } from "lucide-react";

const YourNextEmployee = () => {
  return (
    <div className="bg-card rounded-xl p-3">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-3">
        <Briefcase className="w-4 h-4 text-primary" />
        <h3 className="text-base font-semibold text-foreground">Your Next Employee</h3>
      </div>

      {/* Highlights */}
      <ul className="text-sm text-foreground space-y-1">
        <li className="flex items-center gap-2">
          <Star className="w-3 h-3 text-primary fill-current" />
          Ready to contribute from day one
        </li>
        <li className="flex items-center gap-2">
          <Star className="w-3 h-3 text-primary fill-current" />
          Passionate about clean, efficient code
        </li>
        <li className="flex items-center gap-2">
          <Star className="w-3 h-3 text-primary fill-current" />
          Strong problem-solving mindset
        </li>
        <li className="flex items-center gap-2">
          <Star className="w-3 h-3 text-primary fill-current" />
          Team player with leadership potential
        </li>
      </ul>

      {/* Compact Tagline */}
      {/* <p className="mt-3 text-xs text-center text-primary font-medium">
        Eager to bring innovation and dedication
      </p> */}
    </div>
  );
};

export default YourNextEmployee;
