import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Web3Modal from 'web3modal'
import { Contract, providers } from 'ethers'
import { EARLYSUPPORTER_CONTRACT_ADDRESS, abi } from './constant'

function CTA() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [numOfSupporters, setNumOfSupporters] = useState(0);
  const [joinedEarlySupporter, setJoinedEarlySupporters] = useState(false);
  const [loading, setLoading] = useState(false);
  const web3ModalRef = useRef();

  const getProviderOrSigner = async(needSigner = false)=> {
      const provider = await web3ModalRef.current.connect();
      const web3Provider = new providers.Web3Provider(provider);
      const {chainId} = await web3Provider.getNetwork();
      if(chainId !== 1){
        window.alert("Change network to Eth mainnet")
        throw new Error("Change network to Eth mainnet")
      }
      if(needSigner) {
        const signer = web3Provider.getSigner();
        return signer;
      }
      return web3Provider
    } ;

    const addAddressToSupporters = async () => {
      try {
        const signer = await getProviderOrSigner(true);
        const earlySupporterContract = new Contract(
          EARLYSUPPORTER_CONTRACT_ADDRESS,
          abi,
          signer
        );
        const tx = await earlySupporterContract.addAddressToSupportList();
        setLoading(true);
        await tx.wait();
        setLoading(false);
        await getNumberOfSupporters();
        setJoinedEarlySupporters(true);
      } catch (err) {
        console.error(err)
      }
    }


  const getNumberOfSupporters = async () => {
    try {
      const provider = await getProviderOrSigner();
      const earlySupporterContract = new Contract(
        EARLYSUPPORTER_CONTRACT_ADDRESS,
        abi,
        provider
      );
      const _numOfSupporters = await earlySupporterContract.numOfSupporters()
      setNumOfSupporters(_numOfSupporters);

    } catch (err) {
      console.error(err)
    }
  }
  
  const checkIfAddressIsSupporter = async () => {
    try{
      const signer = getProviderOrSigner(true);
      const earlySupporterContract = new Contract(
        EARLYSUPPORTER_CONTRACT_ADDRESS,
        abi,
        signer
      );
      const address = await signer.getAddress();
      const _joinedEarlySupporter = await earlySupporterContract.supportersAddress(
        address
        
      );
      setJoinedEarlySupporters(_joinedEarlySupporter)
    } catch(err) {
      console.error(err)
    }
  }
  const connectWallet = async() => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);

      checkIfAddressIsSupporter();
      getNumberOfSupporters();
    } catch(err) {
      console.error(err)
    }
  }

  const renderButton = () => {
    if(walletConnected){
      if(joinedEarlySupporter) {
        return (
          <div className='btn btn-primary'>
            You're a supporter!
          </div>
        )
      } else if (loading) {
        return <button className='btn btn-primary'>Loading...</button>;
      }
       else {
        return (
          <button onClick={addAddressToSupporters} className='btn btn-primary'>Be an early supporter!</button>
        );
      }
    } else {
      return(
        <button onClick={connectWallet} className='btn btn-primary'>Connect your wallet</button>
      );
    }
  };

  useEffect(() => {
    if(!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: 'rinkeby',
        providerOptions: {},
        disabledInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);


  return (
    <div className='cta'>
        {renderButton()}
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
  )
}

export default CTA