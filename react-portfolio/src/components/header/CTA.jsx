import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import CV from '../../assets/cv.pdf'
import Web3Modal from 'web3modal'
import { providers } from 'ethers'

function CTA() {
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();

  const getProviderOrSigner = async(needSigner = false)=> {
    try {
      const provider = await web3ModalRef.current.connect();
      const web3Provider = new providers.Web3Provider(provider);
      const {chainId} = await web3Provider.getNetwork();
      if(chainId !== 4){
        window.alert("Change the network to Rinkeby")
        throw new Error("Change the network to Rinkeby")
      }
      if(needSigner) {
        const signer = web3Provider.getSigner();
        return signer;
      }
      return web3Provider
    } catch (err) {
      console.error(err) 
    }
  }
  const connectWallet = async() => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true)
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if(!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: 'rinkeby',
        providerOptions: {},
        disabledInjectedProvider: false,
      });
      //connectWallet();
    }
  }, [walletConnected]);

  const renderButton = () => {
    if(!walletConnected) {
        return (
          <button className='btn btn-primary' onClick={connectWallet}>Connect Wallet</button>
        )
      
    } else {
      return (
        <div className='btn btn-primary'>Wallet Connected</div>
      )

    }
  }
  return (
    <div className='cta'>
        {renderButton()}
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
  )
}

export default CTA