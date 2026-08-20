import { useContext } from "react";
import { ThemeContext, themes } from "../themeContext";

const ChangeButtonColor = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme.name === "dark" ? themes.white : themes.dark);
  };

  return (
    <button className="theme-toggle" onClick={handleClick}>
      Change style
    </button>
  );
};

export default ChangeButtonColor;
