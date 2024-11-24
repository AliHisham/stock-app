import useLocalStorage from "../utilis/useLocaleStorage";
const ToolBar = () => {
  const { value } = useLocalStorage("nasdaq-market-name");
  return (
    <div className="fixed bottom-0 left-0 w-full dark:bg-gray-800 bg-gray-100 dark:text-white p-4 flex justify-end  z-50">
      <div> user: {value}</div>
    </div>
  );
};

export default ToolBar;
