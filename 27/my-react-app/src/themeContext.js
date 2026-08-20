import { createContext } from "react";

export const themes = {
  dark: {
    name: "dark",
    color: "dark",
    background: "#3e413c",
  },
  white: {
    name: "white",
    color: "white",
    background: "#e4e2e0",
  },
};

export const ThemeContext = createContext();
