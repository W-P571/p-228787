
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, Trophy, Gift, TrendingUp } from "lucide-react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="bg-mbegu-gray h-full md:min-h-screen p-6 sticky top-[68px]">
      {/* Logo */}
      <div className="flex items-center mb-6">
        <div className="bg-mbegu-primary rounded-full w-10 h-10 flex items-center justify-center text-mbegu-dark font-bold text-xl">M</div>
        <span className="ml-2 text-white font-medium">Mbegu</span>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-mbegu-light-gray/70" />
        <Input 
          placeholder="Search products..." 
          className="pl-10 bg-mbegu-dark/70 border-mbegu-dark/90 text-white placeholder:text-mbegu-light-gray/50 focus-visible:ring-mbegu-primary"
        />
      </div>

      {/* Leaderboard */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-5 mb-4">
        <div className="flex items-center text-white mb-3">
          <Trophy className="h-5 w-5 text-mbegu-primary mr-2" />
          <h3 className="font-medium">Leaderboard</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-white/80 text-sm">1. John D.</span>
            <span className="text-mbegu-primary text-sm font-medium">235 pts</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/80 text-sm">2. Mary W.</span>
            <span className="text-mbegu-primary text-sm font-medium">198 pts</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/80 text-sm">3. Alex P.</span>
            <span className="text-mbegu-primary text-sm font-medium">147 pts</span>
          </div>
        </div>
      </div>

      {/* Rewards */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-5 mb-6">
        <div className="flex items-center text-white mb-3">
          <Gift className="h-5 w-5 text-mbegu-primary mr-2" />
          <h3 className="font-medium">Rewards</h3>
        </div>
        <div className="mb-2">
          <p className="text-white/80 text-sm">Referral Points:</p>
          <div className="flex items-center">
            <div className="h-2 bg-mbegu-dark rounded-full w-full mt-1 overflow-hidden">
              <div className="h-full bg-mbegu-primary w-3/5 rounded-full"></div>
            </div>
            <span className="ml-2 text-mbegu-primary font-medium">64</span>
          </div>
        </div>
        <div>
          <p className="text-white/80 text-sm">Next Reward: <span className="text-white">10% Off</span></p>
          <div className="flex items-center mt-1">
            <TrendingUp className="h-4 w-4 text-mbegu-primary mr-1" />
            <span className="text-white/70 text-xs">36 points to go</span>
          </div>
        </div>
      </div>

      {/* Sign In */}
      <Button className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium">
        Sign In with Google
      </Button>
    </aside>
  );
};
