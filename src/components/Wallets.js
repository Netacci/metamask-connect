import React, { useContext } from 'react';
import PhantomLogo from '../assets/phantom.png';
import { Icon } from '@iconify/react';
import { MetaMaskWalletContext } from '../context/MetaMaskWalletContext';
import { injected } from '../helper/helper';

const Wallets = ({ onClose }) => {
  const { active, activate } = useContext(MetaMaskWalletContext);
  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  if (active) {
    onClose();
  }
  const walletList = [
    {
      name: 'Phantom',
      icon: <img src={PhantomLogo} alt='phantom logo' className='w-[30px]' />,
      button: (
        <button className='bg-[#512da8] hover:bg-[#1a1f2e] text-white py-3 px-5 rounded-[4px]'>
          Connect
        </button>
      ),
    },
    {
      name: 'MetaMask',
      icon: <Icon icon='logos:metamask-icon' className='text-2xl' />,
      button: (
        <button
          className='bg-[#512da8] hover:bg-[#1a1f2e] text-white py-3 px-5 rounded-[4px]'
          onClick={connect}
        >
          Connect
        </button>
      ),
    },
  ];

  return (
    <>
      <div className='mt-8'>
        {walletList.map((wallet) => (
          <div
            key={wallet.name}
            className='flex items-center justify-between mb-5 px-4'
          >
            <div className='flex'>
              <span className='mr-3'>{wallet.icon}</span>
              <p> {wallet.name}</p>
            </div>
            <div> {wallet.button}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wallets;
