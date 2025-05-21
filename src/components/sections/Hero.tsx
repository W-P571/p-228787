
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Globe, Shield } from "lucide-react";
import { Button } from "../ui/button";
import { WelcomeBanner } from "../ui/welcome-banner";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const textOptions = [
    "premium seeds",
    "farming tools",
    "growth solutions",
    "agricultural tech"
  ];
  
  React.useEffect(() => {
    const fullText = textOptions[currentTextIndex];
    
    if (typedText === fullText) {
      const timeout = setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % textOptions.length);
        setTypedText("");
      }, 2000);
      return () => clearTimeout(timeout);
    }
    
    const timeout = setTimeout(() => {
      setTypedText(fullText.substring(0, typedText.length + 1));
    }, 100);
    
    return () => clearTimeout(timeout);
  }, [typedText, currentTextIndex]);
  
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const features = [
    {
      icon: <Leaf className="h-6 w-6 text-primary" />,
      title: "Quality Seeds",
      description: "Premium hybrid varieties for optimal yield"
    },
    {
      icon: <Globe className="h-6 w-6 text-secondary" />,
      title: "Global Sourcing",
      description: "The best agricultural products from around the world"
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Verified Quality",
      description: "Every product tested for performance and reliability"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {showBanner && (
        <div className="container mx-auto px-4">
          <WelcomeBanner onDismiss={() => setShowBanner(false)} />
        </div>
      )}
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemAnimation}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Land With Our{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            variants={itemAnimation}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Join thousands of satisfied farmers who've increased their yields by up to 45% 
            with Mbegu's scientifically-proven agricultural solutions.
          </motion.p>
          
          <motion.div variants={itemAnimation} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-medium"
              asChild
            >
              <Link to="/inventory">
                Explore Catalog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/20 hover:bg-primary/5 px-8 font-medium"
              asChild
            >
              <Link to="/analytics">
                View Market Trends
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ y: -5 }}
              className="bg-card hover:bg-card/80 p-6 rounded-xl border border-border/50 hover:border-primary/20 hover:shadow-md hover-lift"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};
