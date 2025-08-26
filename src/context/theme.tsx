import { createContext, useState } from "react";

// 创建要给context
export const ThemeContext = createContext({
  theme: "blue",
  changeTheme: () => {},
});
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("blue");
  const changeTheme = () => {
    setTheme((prev) => (prev === "blue" ? "red" : "blue"));
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
