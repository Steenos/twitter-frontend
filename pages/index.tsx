import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import * as web3 from '@solana/web3.js'
import { Wallet } from '@project-serum/anchor'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import idl from '../idl.json';

const Home: NextPage = () => {

  const endpoint = web3.clusterApiUrl('devnet')
  const wallet = new PhantomWalletAdapter()

  return (
    <ConnectionProvider endpoint={endpoint}> 
      <WalletProvider wallets={[wallet]}>
        <WalletModalProvider>
        <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
          <Head>
            <title>Solana Social</title>
        
          </Head>

          <main className="grid grid-cols-9">
       
            <Sidebar />
      
            <Feed />
    
            <Widgets />
          </main>
        </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    
  )
}

export default Home
