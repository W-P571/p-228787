import React from "react";
import { Twitter, Facebook, Instagram, Phone, MapPin, Mail, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-mbegu-dark border-t border-white/10 pt-12 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">About Mbegu Commercial Partners & Traders</h3>
            <p className="text-white/70 text-sm mb-4">
              Mbegu Commercial Partners & Traders specializes in providing premium hybrid seedlings and comprehensive agricultural solutions to farmers across Kenya, with a focus on quality and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/50 hover:text-mbegu-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-mbegu-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-mbegu-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-mbegu-primary text-sm flex items-center">
                  <ExternalLink className="h-3 w-3 mr-2" />
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-mbegu-primary text-sm flex items-center">
                  <ExternalLink className="h-3 w-3 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-mbegu-primary text-sm flex items-center">
                  <ExternalLink className="h-3 w-3 mr-2" />
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-mbegu-primary text-sm flex items-center">
                  <ExternalLink className="h-3 w-3 mr-2" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-mbegu-primary text-sm flex items-center">
                  <ExternalLink className="h-3 w-3 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-white/70 text-sm">
                <Phone className="h-4 w-4 mr-3 text-mbegu-primary" />
                0721 867 944
              </li>
              <li className="flex items-center text-white/70 text-sm">
                <MapPin className="h-4 w-4 mr-3 text-mbegu-primary" />
                Kabianga, 20-Acres Farm
              </li>
              <li className="flex items-center text-white/70 text-sm">
                <Mail className="h-4 w-4 mr-3 text-mbegu-primary" />
                info@mbegutraders.co.ke
              </li>
            </ul>
          </div>
          
          {/* Partners */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">Our Partners</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/10 rounded-md h-12 flex items-center justify-center">
                <div className="bg-white/70 w-8 h-8 rounded"></div>
              </div>
              <div className="bg-white/10 rounded-md h-12 flex items-center justify-center">
                <div className="bg-white/70 w-8 h-8 rounded"></div>
              </div>
              <div className="bg-white/10 rounded-md h-12 flex items-center justify-center">
                <div className="bg-white/70 w-8 h-8 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Mbegu Commercial Partners & Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
