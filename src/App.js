import React, { useEffect, useState } from 'react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';
import { MetaMaskWalletProvider } from './context/MetaMaskWalletContext';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const getLibrary = (provider) => {
    return new Web3(provider);
  };

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetaMaskWalletProvider>
          <Navbar openModal={() => setModalOpen(true)} />
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </MetaMaskWalletProvider>
      </Web3ReactProvider>
    </>
  );
};

export default App;
