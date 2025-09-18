import React, { useEffect, useState } from "react";
import Button from "./Button";
import "./Navbar.css";
import logo from "../assets/img/LogoLight.png";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // run once to set initial state
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        `fixed left-0 top-0 w-full z-50 transition-transform duration-300 navbar-wrapper ` +
        (scrolled ? "translate-y-0" : "-translate-y-full")
      }
    >
      {/* taller masked backdrop to capture nearby content for a better frosted glass */}
      <div className="navbar-backdrop" />

      <nav className="relative z-10 bg-white/1 border-b border-white/2">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-orbitron font-medium">ShatteringGames</div>
          <img className="size-16" src={logo} alt="" />
          <div className="flex items-center gap-4">
            <Button label="Home" onClick={() => {}} />
            <Button label="Games" onClick={() => {}} />
            <Button label="Contact" onClick={() => {}} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
