import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionProvider } from './TransactionsContext';

import { GlobalStyle } from "./styles/global";


Modal.setAppElement('#root');

export function App() {

  // usando estado em um componente superior para mandar os dados para um componente filho
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);



  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    </TransactionProvider>

  );
}