
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { TabsContent } from "../ui/tabs";
import { ReservationTabs } from "./form/ReservationTabs";
import { OrderForm } from "./form/OrderForm";
import { DepositForm } from "./form/DepositForm";
import { GiftForm } from "./form/GiftForm";

export const ReservationForm: React.FC = () => {
  const seedlings = [
    { value: "victoria", label: "Victoria F1" },
    { value: "gloria", label: "Gloria F1" },
    { value: "pretoria", label: "Pretoria F1" },
    { value: "baraka", label: "Baraka F1" },
    { value: "ansal", label: "Ansal (Tomato)" },
    { value: "terminator", label: "Terminator F1" },
    { value: "managu", label: "Managu" },
    { value: "tausi", label: "Sukumawiki Tausi F1" },
    { value: "spiner", label: "Sukumawiki Spiner F1" },
  ];
  
  return (
    <Card className="bg-mbegu-card border-white/10 max-w-3xl mx-auto overflow-hidden">
      <CardHeader className="text-center bg-gradient-to-r from-mbegu-gray to-mbegu-dark/80 border-b border-white/10">
        <CardDescription className="text-white/70 text-sm">
          By submitting, you agree to our terms and consent to phone use per the Data Protection Act, 2019 (Kenya).
        </CardDescription>
        <CardTitle className="text-white text-2xl font-display">
          Reserve Your Seedlings
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        <ReservationTabs defaultValue="order">
          <TabsContent value="order" className="p-6 space-y-4">
            <OrderForm seedlings={seedlings} />
          </TabsContent>
          
          <TabsContent value="deposit" className="p-6 space-y-4">
            <DepositForm />
          </TabsContent>
          
          <TabsContent value="gift" className="p-6 space-y-4">
            <GiftForm seedlings={seedlings} />
          </TabsContent>
        </ReservationTabs>
      </CardContent>
    </Card>
  );
};
