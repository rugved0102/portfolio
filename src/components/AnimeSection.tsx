import { Heart } from "lucide-react";

const AnimeSection = () => {
  return (
    <div className="bg-card rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Heart className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Anime Lover</h3>
      </div>
      
      <div className="space-y-3">
        <div className="rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop&crop=center"
            alt="Anime artwork"
            className="w-full h-32 object-cover"
          />
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Currently watching: <span className="text-primary font-medium">One Piece</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Favorite genre: Shonen
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimeSection;