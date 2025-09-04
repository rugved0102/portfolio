const LeetCodeStats = () => {
  return (
    <div className="bg-card rounded-xl  flex flex-col items-center text-center space-y-3 shadow-md hover:shadow-lg transition">
      {/* Logo (clickable) */}
      <a
        href="https://leetcode.com/u/rugved0102/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode"
          className="w-12 h-12 hover:scale-110 transition-transform"
        />
      </a>

      {/* Stats */}
      <div className="flex items-baseline space-x-2">
        <div className="text-foreground text-xl font-bold">1546</div>
        <div className="text-muted-foreground text-sm">All-Time Best</div>
      </div>

      <div className="flex items-baseline space-x-2">
        <div className="text-foreground text-lg font-semibold">400+</div>
        <div className="text-muted-foreground text-sm">Questions Solved</div>
      </div>
    </div>
  );
};

export default LeetCodeStats;
