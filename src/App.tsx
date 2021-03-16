import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

const App: React.FC = () => (
  <>
    <div className="App">
      <Header />
      <Dashboard />
      <GlobalStyle />
    </div>
  </>
);

export default App;