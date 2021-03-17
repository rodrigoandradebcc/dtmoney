import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from 'miragejs'
import Modal from "react-modal";

Modal.setAppElement('#root')

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

const App: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <div className="App">
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />


        <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
          <h2>Cadastrar transação</h2>
        </Modal>

        <GlobalStyle />
      </div>
    </>
  )
}

export default App;