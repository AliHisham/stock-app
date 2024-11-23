import Stocks from "./components/Stocks";
import "./App.css";
import DarkLightThemeProvider from "./Providers/DarkThemeProvide";

function App() {
  return (
    <>
      <DarkLightThemeProvider>
        <div className="dark:bg-gray-900 bg-white rounded-md w-full ">
          <Stocks />
        </div>
      </DarkLightThemeProvider>
    </>
  );
}

export default App;
