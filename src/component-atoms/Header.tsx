import { useContext } from "react";
import { ThemeContext } from "../Providers/DarkThemeProvide";
import Switch from "react-switch";
import Logo from "./Logo";

type HeaderProps = {
  handleSearchValue: (value: string) => void;
};

const Header = ({ handleSearchValue }: HeaderProps) => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme, "theme--testing");
  return (
    <div className="sticky top-0 flex justify-center items-center bg-gray-100 dark:bg-gray-800 w-full p-4 rounded-md">
      <div className="absolute left-4">
        <Logo />
      </div>
      <input
        className="rounded-md focus:outline-none p-2"
        onChange={(e) => handleSearchValue(e.target.value)}
        placeholder="write a stock name..."
        type="text"
        name="search"
      />
      <div className="absolute right-4 flex gap-2">
        <span>Dark mode:</span>
        <Switch
          name="dark"
          id="switch"
          onChange={() => {
            setTheme();
          }}
          checked={theme}
        ></Switch>
      </div>
    </div>
  );
};

export default Header;
