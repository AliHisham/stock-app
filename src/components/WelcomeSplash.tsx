import { useRef } from "react";
import useLocalStorage from "../utilis/useLocaleStorage";

import Logo from "../component-atoms/Logo";

type WelcomeSplashProps = {
  name: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
};

const WelcomeSplash = ({ setFullName }: WelcomeSplashProps) => {
  const inputName = useRef<HTMLInputElement>(null);
  const { setLocalStorageValue } = useLocalStorage("nasdaq-market-name");

  const handleSave = () => {
    setFullName(inputName.current?.value ? inputName.current?.value : "");
    setLocalStorageValue(
      inputName.current?.value ? inputName.current?.value : ""
    );
  };

  return (
    <div className="dark:bg-gray-800 bg-gray-100 w-[400px] m-auto  flex flex-col gap-4 p-4 rounded-md shadow-md">
      <Logo width={400} height={400} />

      <input
        ref={inputName}
        className="rounded-md focus:outline-none p-2"
        placeholder="enter your name..."
        type="text"
        name="search"
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white rounded-md p-2"
      >
        Enter the Market!!
      </button>
    </div>
  );
};

export default WelcomeSplash;
