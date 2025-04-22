
import React from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "Can I see the seedlings before ordering?",
      answer:
        "Yes! We encourage you to visit our partner Shamba Input to inspect the seedlings before making a payment. This way, you can be assured of the quality you're getting.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery is guaranteed within 25 days from the preorder or booking date. We ensure that all seedlings are properly prepared and in optimal condition before shipping.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept M-Pesa and bank transfers for convenience. Payment details will be provided after you place your order. We also offer installment payment plans for large orders.",
    },
    {
      question: "Do you offer planting guidance?",
      answer:
        "Yes, we provide detailed planting instructions with every order. Additionally, our agricultural experts offer free consultation to ensure your seedlings thrive after planting.",
    },
    {
      question: "What if my seedlings arrive damaged?",
      answer:
        "We offer a 100% quality guarantee. If your seedlings arrive damaged, simply notify us within 24 hours with photos of the damage, and we'll replace them at no extra cost.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-mbegu-card border border-white/10 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-mbegu-primary hover:no-underline text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
