import { useContext } from "react";
import { ThemeContext } from "../Providers/DarkThemeProvide";
import Switch from "react-switch";
import Logo from "./Logo";

type HeaderProps = {
  handleSearchValue: (value: string) => void;
};

const Header = ({ handleSearchValue }: HeaderProps) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="md:sticky gap-4  md:top-0  flex justify-center items-center flex-col md:flex-row bg-gray-100 dark:bg-gray-800 w-full p-4 rounded-md">
      <div className="md:absolute md:left-4">
        <Logo width={100} height={100} />
      </div>
      <input
        className="rounded-md focus:outline-none p-2"
        onChange={(e) => handleSearchValue(e.target.value)}
        placeholder="write a stock name..."
        type="text"
        name="search"
      />
      <div className="md:absolute md:right-4 flex gap-2">
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
