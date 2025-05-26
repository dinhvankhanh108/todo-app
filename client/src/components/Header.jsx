import React from "react";
import { ThemeToggle } from "./ui/theme-toggle";

const Header = () => {  return (
    <header className="sticky top-0 z-10 w-full border-b border-gray-200/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="text-lg font-bold">Tasks App</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 