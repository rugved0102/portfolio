import { Play, ExternalLink, Heart, MoreHorizontal } from "lucide-react";

const SpotifyPlayer = () => {
  return (
    <div className="bg-card rounded-xl p-3 flex items-center space-x-3">
      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
        <Play className="w-6 h-6 text-white" fill="currentColor" />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="text-xs text-muted-foreground truncate">PANDEMONIUM - NF | Spotify</div>
        <div className="font-semibold text-sm text-foreground truncate">PANDEMONIUM</div>
        <div className="text-xs text-muted-foreground">NF</div>
      </div>

      <div className="flex space-x-1">
        <Heart className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
        <MoreHorizontal className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
      </div>
    </div>
  );
};

export default SpotifyPlayer;