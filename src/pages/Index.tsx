
import React from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Hero } from "../components/sections/Hero";
import { ProductCatalog } from "../components/sections/ProductCatalog";
import { ReservationForm } from "../components/sections/ReservationForm";
import { VirtualTour } from "../components/sections/VirtualTour";
import { Footer } from "../components/layout/Footer";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  // Animation variants for staggered section reveals
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };
  
  return (
    <PageLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        custom={0}
        variants={sectionVariants}
      >
        <Hero />
      </motion.div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        custom={1}
        variants={sectionVariants}
        className="bg-gradient-to-b from-background to-muted/50"
      >
        <ProductCatalog />
      </motion.div>
      
      <motion.div
        initial="hidden"
        animate="visible"
        custom={2}
        variants={sectionVariants}
      >
        <VirtualTour />
      </motion.div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        custom={3}
        variants={sectionVariants}
        className="py-12"
      >
        <ReservationForm />
      </motion.div>
      
      <Footer />
    </PageLayout>
  );
};

export default Index;
