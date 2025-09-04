const GitHubStats = () => {
  return (
    <div className="bg-card rounded-xl p-6 text-center space-y-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        GitHub Stats
      </h3>

      {/* Overall Stats + Top Languages */}
      <div className="flex flex-col items-center gap-4">
  <img
    src="https://github-readme-stats.vercel.app/api?username=rugved0102&show_icons=true&theme=tokyonight&cache_seconds=1800&card_width=10"
    alt="GitHub Stats"
    className="rounded-lg shadow-md w-full"
  />

  <img
    src="https://github-readme-stats.vercel.app/api/top-langs/?username=rugved0102&layout=compact&langs_count=6&hide=html,css&theme=tokyonight&cache_seconds=1800&card_width=10"
    alt="Top Languages"
    className="rounded-lg shadow-md w-full"
  />
</div>


      {/* Streak Stats */}
      {/* <div className="flex justify-center mt-6">
        <img
          src="https://github-readme-streak-stats.herokuapp.com?user=rugved0102&theme=tokyonight&date_format=M%20j%5B%2C%20Y%5D"
          alt="GitHub Streak"
          className="rounded-lg shadow-md w-full lg:w-2/3"
        />
      </div> */}
    </div>
  );
};

export default GitHubStats;
