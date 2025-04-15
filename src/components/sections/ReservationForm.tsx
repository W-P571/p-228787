import React, { useState } from "react";

export const ReservationForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"order" | "deposit" | "gift">(
    "order",
  );

  return (
    <section className="mt-24 max-md:mt-10">
      <div className="bg-[rgba(255,255,255,0.1)] border self-center w-[672px] max-w-full text-black pt-[27px] pb-[57px] rounded-lg border-[rgba(255,255,255,0.2)] border-solid">
        <div className="flex flex-col items-stretch text-center px-[46px] max-md:max-w-full max-md:px-5">
          <p className="text-sm font-normal leading-5 max-md:max-w-full">
            By submitting, you agree to our terms and consent to phone use per
            the Data Protection Act, 2019 (Kenya).
          </p>
          <h2 className="text-2xl font-semibold leading-none self-center mt-3.5">
            Reserve Your Seedlings
          </h2>
        </div>

        <div className="flex w-[264px] max-w-full items-stretch text-base font-normal whitespace-nowrap ml-[25px] mt-4 max-md:ml-2.5">
          <button
            className={`px-6 py-3 rounded-[6px_6px_0px_0px] max-md:px-5 ${
              activeTab === "order"
                ? "bg-[rgba(0,255,136,1)]"
                : "bg-[rgba(34,34,34,1)]"
            }`}
            onClick={() => setActiveTab("order")}
          >
            Order
          </button>
          <button
            className={`px-6 py-3 rounded-[6px_6px_0px_0px] max-md:pl-5 ${
              activeTab === "deposit"
                ? "bg-[rgba(0,255,136,1)]"
                : "bg-[rgba(34,34,34,1)]"
            }`}
            onClick={() => setActiveTab("deposit")}
          >
            Deposit
          </button>
          <button
            className={`px-6 py-3 rounded-[6px_6px_0px_0px] max-md:px-5 ${
              activeTab === "gift"
                ? "bg-[rgba(0,255,136,1)]"
                : "bg-[rgba(34,34,34,1)]"
            }`}
            onClick={() => setActiveTab("gift")}
          >
            Gift
          </button>
        </div>

        {/* Form content based on active tab */}
        <div className="px-[25px] mt-4 max-md:px-5">
          {activeTab === "order" && (
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 bg-[rgba(34,34,34,1)] border border-[rgba(85,85,85,1)] rounded-md"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-2 bg-[rgba(34,34,34,1)] border border-[rgba(85,85,85,1)] rounded-md"
                  placeholder="07XX XXX XXX"
                />
              </div>
              <div>
                <label htmlFor="seedling" className="block text-sm mb-1">
                  Seedling Type
                </label>
                <select
                  id="seedling"
                  className="w-full p-2 bg-[rgba(34,34,34,1)] border border-[rgba(85,85,85,1)] rounded-md"
                >
                  <option value="">Select a seedling</option>
                  <option value="victoria">Victoria F1</option>
                  <option value="gloria">Gloria F1</option>
                  <option value="pretoria">Pretoria F1</option>
                </select>
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="w-full p-2 bg-[rgba(34,34,34,1)] border border-[rgba(85,85,85,1)] rounded-md"
                  min="1"
                  defaultValue="1"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[rgba(0,255,136,1)] text-black font-medium py-2 rounded-md"
              >
                Place Order
              </button>
            </form>
          )}

          {activeTab === "deposit" && (
            <form className="space-y-4">
              <div>
                <label htmlFor="deposit-name" className="block text-sm mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="deposit-name"
                  className="w-full p-2 bg-[rgba(34,34,34,1)] border border-[rgba(85,85,85,1)] rounded-md"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="deposit-phone" className="block text-sm mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="deposit-phone"
                  className="w-full p-2 bg-[rgba(34,34,34,1)] border border-[rgba(85,85,85,1)] rounded-md"
                  placeholder="07XX XXX XXX"
                />
              </div>
              <div>
                <label htmlFor="deposit-amount" className="block text-sm mb-1">
                  Deposit Amount (KES)
                </label>
                <input
                  type="number"
                  id="deposit-amount"
                  className="w-full p-2 bg-[rgba(34,34,34,1)] border border-[rgba(85,85,85,1)] rounded-md"
                  min="100"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[rgba(0,255,136,1)] text-black font-medium py-2 rounded-md"
              >
                Make Deposit
              </button>
            </form>
          )}

          {activeTab === "gift" && (
            <form className="space-y-4">
              <div>
                <label htmlFor="gift-your-name" className="block text-sm mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="gift-your-name"
                  className="w-full p-2 bg-[rgba(34,34,34,1)] border border-[rgba(85,85,85,1)] rounded-md"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="gift-recipient-name"
                  className="block text-sm mb-1"
                >
                  Recipient's Name
                </label>
                <input
                  type="text"
                  id="gift-recipient-name"
                  className="w-full p-2 bg-[rgba(34,34,34,1)] border border-[rgba(85,85,85,1)] rounded-md"
                  placeholder="Recipient's name"
                />
              </div>
              <div>
                <label
                  htmlFor="gift-recipient-phone"
                  className="block text-sm mb-1"
                >
                  Recipient's Phone
                </label>
                <input
                  type="tel"
                  id="gift-recipient-phone"
                  className="w-full p-2 bg-[rgba(34,34,34,1)] border border-[rgba(85,85,85,1)] rounded-md"
                  placeholder="07XX XXX XXX"
                />
              </div>
              <div>
                <label htmlFor="gift-seedling" className="block text-sm mb-1">
                  Seedling Type
                </label>
                <select
                  id="gift-seedling"
                  className="w-full p-2 bg-[rgba(34,34,34,1)] border border-[rgba(85,85,85,1)] rounded-md"
                >
                  <option value="">Select a seedling</option>
                  <option value="victoria">Victoria F1</option>
                  <option value="gloria">Gloria F1</option>
                  <option value="pretoria">Pretoria F1</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgba(0,255,136,1)] text-black font-medium py-2 rounded-md"
              >
                Send Gift
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
