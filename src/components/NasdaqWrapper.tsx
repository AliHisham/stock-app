import { useState } from "react";
import useLocalStorage from "../utilis/useLocaleStorage";

import WelcomeSplash from "./WelcomeSplash";
import Stocks from "./Stocks";

const NasdaqWrapper = () => {
  const { value } = useLocalStorage("nasdaq-market-name");
  const [name, setFullName] = useState<string>("");

  return (
    <div className="dark:bg-gray-900 bg-white rounded-md w-full p-3 min-h-screen ">
      {value || name ? (
        <Stocks />
      ) : (
        <WelcomeSplash name={name} setFullName={setFullName} />
      )}
    </div>
  );
};

export default NasdaqWrapper;
