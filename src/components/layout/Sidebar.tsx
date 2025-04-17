
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, Trophy, Gift, TrendingUp, Layers, Sprout, Plant, BarChart2, Settings, Users, Cloud, Map } from "lucide-react";
import { Link } from "react-router-dom";

export const Sidebar: React.FC = () => {
  return (
    <aside className="bg-mbegu-gray h-full md:min-h-screen p-6 sticky top-[68px]">
      {/* Logo */}
      <div className="flex items-center mb-6">
        <div className="bg-mbegu-primary rounded-full w-10 h-10 flex items-center justify-center text-mbegu-dark font-bold text-xl">
          <Sprout className="h-5 w-5 text-mbegu-dark" />
        </div>
        <span className="ml-2 text-white font-medium">MbeguOS</span>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-mbegu-light-gray/70" />
        <Input 
          placeholder="Search agricultural data..." 
          className="pl-10 bg-mbegu-dark/70 border-mbegu-dark/90 text-white placeholder:text-mbegu-light-gray/50 focus-visible:ring-mbegu-primary"
        />
      </div>

      {/* Core OS Modules */}
      <div className="mb-6">
        <p className="text-white/60 uppercase text-xs font-semibold mb-3 px-2">Core Modules</p>
        <div className="space-y-1">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-white/80 hover:text-white hover:bg-white/5">
              <Plant className="h-4 w-4 mr-3 text-mbegu-primary" />
              <span>Seedling Manager</span>
            </Button>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-white/80 hover:text-white hover:bg-white/5">
              <Map className="h-4 w-4 mr-3 text-mbegu-primary" />
              <span>Field Mapping</span>
            </Button>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-white/80 hover:text-white hover:bg-white/5">
              <Cloud className="h-4 w-4 mr-3 text-mbegu-primary" />
              <span>Weather Analytics</span>
            </Button>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-white/80 hover:text-white hover:bg-white/5">
              <BarChart2 className="h-4 w-4 mr-3 text-mbegu-primary" />
              <span>Yield Forecasting</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-5 mb-4">
        <div className="flex items-center text-white mb-3">
          <Trophy className="h-5 w-5 text-mbegu-primary mr-2" />
          <h3 className="font-medium">Farmer Leaderboard</h3>
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

      {/* System Status */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-5 mb-6">
        <div className="flex items-center text-white mb-3">
          <Layers className="h-5 w-5 text-mbegu-primary mr-2" />
          <h3 className="font-medium">System Status</h3>
        </div>
        <div className="mb-2">
          <p className="text-white/80 text-sm">API Health:</p>
          <div className="flex items-center mt-1">
            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
            <span className="text-white/70 text-xs">All systems operational</span>
          </div>
        </div>
        <div>
          <p className="text-white/80 text-sm">Network: <span className="text-white">Strong</span></p>
          <div className="flex items-center mt-1">
            <TrendingUp className="h-4 w-4 text-mbegu-primary mr-1" />
            <span className="text-white/70 text-xs">Last sync: 2 mins ago</span>
          </div>
        </div>
      </div>

      {/* User Access */}
      <Button className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium flex items-center justify-center">
        <Users className="h-4 w-4 mr-2" />
        <span>Access Control Panel</span>
      </Button>
    </aside>
  );
};
