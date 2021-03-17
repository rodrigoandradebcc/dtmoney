import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          types: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

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