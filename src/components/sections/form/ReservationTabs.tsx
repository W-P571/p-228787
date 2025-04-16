
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { ShoppingBag, Gift, CreditCard } from "lucide-react";

interface ReservationTabsProps {
  defaultValue: string;
  children: React.ReactNode;
}

export const ReservationTabs: React.FC<ReservationTabsProps> = ({ 
  defaultValue,
  children
}) => {
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      <TabsList className="grid grid-cols-3 rounded-none bg-white/5">
        <TabsTrigger 
          value="order"
          className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Order
        </TabsTrigger>
        <TabsTrigger 
          value="deposit"
          className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
        >
          <CreditCard className="h-4 w-4 mr-2" />
          Deposit
        </TabsTrigger>
        <TabsTrigger 
          value="gift"
          className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
        >
          <Gift className="h-4 w-4 mr-2" />
          Gift
        </TabsTrigger>
      </TabsList>
      
      {children}
    </Tabs>
  );
};
