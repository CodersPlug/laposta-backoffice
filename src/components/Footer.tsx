import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-background border-t border-gray-200 dark:border-dark-border py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-dark-foreground/80 text-sm">
          <span>Desarrollado por AgentcLabs</span>
          <span>•</span>
          <span>v1.0.0</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;