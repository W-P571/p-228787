import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="bg-[rgba(51,51,51,1)] text-black font-normal w-full pt-4 pb-[259px] px-4 max-md:pb-[100px]">
      <div className="bg-[rgba(217,217,217,1)] flex w-20 shrink-0 h-20" />

      <div className="bg-[rgba(34,34,34,1)] border text-base text-[rgba(153,153,153,1)] whitespace-nowrap mt-4 pt-3 pb-[19px] px-3 rounded-md border-[rgba(85,85,85,1)] border-solid max-md:pr-5">
        Search...
      </div>

      <div className="bg-[rgba(255,255,255,0.1)] border text-sm whitespace-nowrap leading-none mt-16 pt-6 pb-[98px] px-[25px] rounded-lg border-[rgba(255,255,255,0.2)] border-solid max-md:mt-10 max-md:pb-[110px] max-md:px-5">
        Leaderboard
      </div>

      <div className="bg-[rgba(255,255,255,0.1)] border flex flex-col mt-[7px] p-[25px] rounded-lg border-[rgba(255,255,255,0.2)] border-solid max-md:px-5">
        <div className="text-sm leading-none">Rewards</div>
        <div className="text-xs leading-none">Referral Points:</div>
      </div>

      <button className="bg-[rgba(0,255,136,1)] text-base font-medium text-center w-full mt-4 px-[35px] py-2 rounded-md max-md:px-5">
        Sign In with Google
      </button>
    </aside>
  );
};
