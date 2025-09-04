import LeftSidebar from "@/components/LeftSidebar";
import MainContent from "@/components/MainContent";
import RightSidebar from "@/components/RightSidebar";
import GitHubStats from "@/components/GitHubStats";
import AnimeSection from "@/components/AnimeSection";
import StyledAchievements from "@/components/StyledAchievements";
import SpotifyPlayer from "@/components/SpotifyPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="w-full max-w-none mx-auto">
        {/* Main layout grid - full width responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
          {/* Left Column - LeetCode, GitHub Stats, and Anime */}
          <div className="lg:col-span-1 space-y-4 lg:space-y-6">
            <LeftSidebar />
            <GitHubStats />
            <div className="bg-card rounded-xl overflow-hidden">
              <iframe
                title="Spotify Player"
                src="https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC?utm_source=generator&autoplay=1&repeat=1"
                width="100%"
                height="80"
                style={{ border: "none" }} // ✅ removes inner border
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            {/* <AnimeSection /> */}
          </div>

          {/* Main Profile Content */}
          <div className="lg:col-span-3">
            <MainContent />
          </div>

          {/* Right Column - Right sidebar only */}
          <div className="lg:col-span-1">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
