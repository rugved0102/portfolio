const GitHubStats = () => {
  return (
    <div className="bg-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Mani Yadla's GitHub Stats</h3>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Total Stars Earned:</span>
          <span className="text-foreground font-medium">64</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Total Commits (2025):</span>
          <span className="text-foreground font-medium">754</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Total PRs:</span>
          <span className="text-foreground font-medium">99</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Total Issues:</span>
          <span className="text-foreground font-medium">77</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Contributed to (last year):</span>
          <span className="text-foreground font-medium">35</span>
        </div>
      </div>

      {/* Grade Circle */}
      <div className="flex justify-center mt-6">
        <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">A-</span>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;