import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { abi } from '../constants/abi';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Web3 from 'web3';

export const injected = new InjectedConnector();

export default function Home() {
  const [hasMetamask, setHasMetamask] = useState(false);
  const [balance, setBalance] = useState(null);
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      'https://goerli.infura.io/v3/f8cb9f6a3a344ab98e87b6277730e063'
    )
  );

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      setHasMetamask(true);
    }
  }, []);

  const {
    active,
    activate,
    chainId,
    account,
    library: provider,
  } = useWeb3React();

  async function connect() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await activate(injected);
        setHasMetamask(true);
      } catch (e) {
        console.log(e);
      }
    }
  }

  async function getBalanceOfAddress() {
    if (active) {
      const balance = await web3.eth.getBalance(account);
      const balanceToEth = web3.utils.fromWei(balance, 'ether');
      console.log(balanceToEth);
      setBalance(balanceToEth);
    } else {
      console.log('Please install MetaMask');
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-row gap-3">
        {hasMetamask ? (
          active ? (
            <div className="flex flex-row gap-3">
              <div className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                Account: {account}
              </div>
              <div className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                ChainId: {chainId}
              </div>
            </div>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
              onClick={() => connect()}
            >
              Connect
            </button>
          )
        ) : (
          'Please install metamask'
        )}

        {active ? (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            onClick={() => getBalanceOfAddress()}
          >
            {balance ? (
              <div>Balance: {balance} ETH</div>
            ) : (
              <div>GetBalance</div>
            )}
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
