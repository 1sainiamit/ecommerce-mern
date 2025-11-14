import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router";
import { ShoppingBag } from "lucide-react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/userSlice";

export const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.data.success) {
        dispatch(setUser(null));
        localStorage.removeItem("accessToken");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const redirectLogin = () => {
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b">
      <div className="mx-auto w-full flex items-center justify-between py-2 px-2">
        <NavLink to="/">
          <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance">
            SAINI.
          </h1>
        </NavLink>
        <nav className="flex space-x-4">
          <NavLink to="/">
            <Button variant="ghost">Home</Button>
          </NavLink>
          <NavLink to="/products">
            <Button variant="ghost">Products</Button>
          </NavLink>
          {user && (
            <NavLink to="/profile">
              <Button variant="ghost">Hello, {user.firstName}</Button>
            </NavLink>
          )}
          <NavLink to="/cart">
            <Button variant="ghost">
              <div className="relative">
                <ShoppingBag />
                <span className="rounded-full absolute -top-3 -right-3.5 px-2">
                  0
                </span>
              </div>
            </Button>
          </NavLink>
          {user ? (
            <Button onClick={handleLogout} size="sm" className="text-xs">
              Logout
            </Button>
          ) : (
            <Button onClick={redirectLogin} size="sm" className="text-xs">
              Login
            </Button>
          )}
          <div className="px-2">
            <AnimatedThemeToggler />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
