import React, { useContext } from 'react';
import { MetaMaskWalletContext } from '../context/MetaMaskWalletContext';
import { injected } from '../helper/helper';

const Navbar = ({ openModal }) => {
  const { account, active, deactivate } = useContext(MetaMaskWalletContext);
  async function disconnect() {
    try {
      await deactivate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  const handleConnection = () => {
    if (active) {
      disconnect();
    } else {
      openModal();
    }
  };
  return (
    <nav className='lg:px-52 px-6 py-8 bg-[#8b5cf6] relative'>
      <div className='flex justify-between transition-all duration-500 ease-in rounded'>
        <div className='text-white font-bold text-3xl'>LOGO</div>

        <h3 className='text-white font-semibold mr-4'>
          {active ? `Wallet address: ${account}` : ''}
        </h3>
        <button
          type='button'
          className='my-6 lg:my-0 bg-white text-primary-200 font-semibold py-2 px-6 items-center rounded-lg flex justify-center '
          onClick={handleConnection}
        >
          {active ? 'Disconnect' : 'Connect'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
