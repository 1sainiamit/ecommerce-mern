import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { ModeToggle } from "./ToggleMode";

export const Navbar = () => {
  return (
    <header className="sticky z-50">
      <div className="mx-auto w-full flex items-center justify-between py-2 px-2">
        <NavLink to="/">
          <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance">
            SAINI.
          </h1>
        </NavLink>

        <nav className="flex space-x-2">
          <NavLink to="/">
            <Button variant="ghost">Home</Button>
          </NavLink>
          <NavLink to="/contact">
            <Button variant="ghost">Contact</Button>
          </NavLink>
          <NavLink to="/profile">
            <Button variant="ghost">Profile</Button>
          </NavLink>
          <NavLink to="/cart">
            <Button variant="ghost">Cart</Button>
          </NavLink>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
