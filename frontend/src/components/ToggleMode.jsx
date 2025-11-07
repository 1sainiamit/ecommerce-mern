import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import { Toggle } from "./ui/toggle";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer text-xl transition-transform hover:scale-110 select-none"
    >
      <Toggle className="text-md"> {theme === "dark" ? "☀️" : "🌙"}</Toggle>
    </div>
  );
}
