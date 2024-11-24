import "./App.css";
import DarkLightThemeProvider from "./Providers/DarkThemeProvide";

import NasdaqWrapper from "./components/NasdaqWrapper";

function App() {
  return (
    <>
      <DarkLightThemeProvider>
        <NasdaqWrapper />
      </DarkLightThemeProvider>
    </>
  );
}

export default App;
