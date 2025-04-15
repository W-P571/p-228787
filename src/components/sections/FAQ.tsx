import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[rgba(255,255,255,0.1)] border text-black mt-4 mx-4 rounded-lg border-[rgba(255,255,255,0.2)] border-solid max-md:max-w-full max-md:mr-2.5">
      <button
        className="w-full text-left px-[25px] py-[25px] flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-medium leading-[1.4]">{question}</span>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen ? (
        <div className="text-base font-normal px-[25px] pb-[26px] max-md:px-5">
          {answer}
        </div>
      ) : (
        <div className="text-base font-normal pt-[27px] pb-[26px] px-[25px] max-md:px-5">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "Can I see the seedlings before ordering?",
      answer:
        "Yes! Visit our partner Shamba Input to inspect seedlings before payment.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery is guaranteed After 25 days from the preorder or booking date.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept M-Pesa and bank transfers. Details provided after placing order.",
    },
    {
      question: "Do you offer planting guidance?",
      answer:
        "Yes, we provide detailed planting instructions with every order and offer free consultation.",
    },
    {
      question: "What if my seedlings arrive damaged?",
      answer:
        "We offer a 100% quality guarantee. If your seedlings arrive damaged, we'll replace them at no extra cost.",
    },
  ];

  return (
    <section className="mt-[97px] max-md:mt-10">
      <h2 className="text-black text-3xl font-semibold leading-[1.2] text-center">
        Frequently Asked Questions
      </h2>

      <div className="mt-8">
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};
