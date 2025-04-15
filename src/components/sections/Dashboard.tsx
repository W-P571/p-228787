import React from "react";

export const Dashboard: React.FC = () => {
  const isSignedIn = false; // This would be determined by your auth state

  return (
    <section className="mt-24 max-md:mt-10">
      <div className="bg-[rgba(255,255,255,0.1)] border self-center flex w-[672px] max-w-full flex-col text-black font-normal pl-[25px] pr-20 py-[25px] rounded-lg border-[rgba(255,255,255,0.2)] border-solid max-md:px-5">
        <h2 className="text-2xl font-semibold leading-none">Your Dashboard</h2>

        {isSignedIn ? (
          <>
            <div className="text-base mt-4">
              Victoria F1 Remaining:{" "}
              <span className="font-medium">25 seedlings</span>
            </div>
            <div className="text-base">
              Wallet Balance: <span className="font-medium">KES 2,500</span>
            </div>
            <h3 className="text-xl leading-[1.4] mt-4">Order Summary</h3>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between">
                <span>Order #12345</span>
                <span>Victoria F1 (50)</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-[rgba(0,255,136,1)]">Processing</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Date:</span>
                <span>May 15, 2023</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-base mt-4">
              Victoria F1 Remaining:{" "}
              <span className="italic">Sign in to view</span>
            </div>
            <div className="text-base">
              Wallet Balance: <span className="italic">Sign in to view</span>
            </div>
            <h3 className="text-xl leading-[1.4] mt-4">Order Summary</h3>
            <div className="text-sm leading-none mt-2">
              Sign in to view your order details.
            </div>
            <button className="bg-[rgba(0,255,136,1)] text-black font-medium mt-4 py-2 px-4 rounded-md self-start">
              Sign In
            </button>
          </>
        )}
      </div>
    </section>
  );
};
