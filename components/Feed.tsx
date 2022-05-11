import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import TweetBox from './TweetBox'
//import * as web3 from '@solana/web3.js'
import idl from '../idl.json';
import { useWallet, useConnection,useAnchorWallet, AnchorWallet } from '@solana/wallet-adapter-react'

import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, ProgramAccount, Provider, web3 } from '@project-serum/anchor';
import TweetComponent from './Tweet'


const a = JSON.stringify(idl);
const b = JSON.parse(a);

//Program address for twitter smart contract
const programId = new PublicKey('DUxkTsCrXHJKWzuPcT9xta1s3iZma6eXt7KaYvSSgDX1');
const network = web3.clusterApiUrl('devnet');

function Feed() {

    const [tweets, setTweets] = React.useState([])

    const wallet = useAnchorWallet();
    const connection = new Connection(network)
    //@ts-ignore
    const provider = new Provider(connection,wallet,Provider.defaultOptions())
    
    
   
    

    const fetchTweets = async () => {
        try {
            const program = new Program(b, programId, provider)
            const tweets = await program.account.tweet.all()
            setTweets(tweets)

        } catch (error) {
            console.error("error fetching posts")
        }

        return tweets
    }
    
    React.useEffect(() => {
        //@ts-ignore
        fetchTweets()
        
    },[])
  
   
  return (
    <div className="col-span-7 lg:col-span-5">
        <div className="flex items-center justify-between">
            <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
            <RefreshIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer
            text-blue-300 transition-all duration-500 ease-out
            hover:rotate-180 active:scale-125" />
        </div>

        {/* TweetBox */}
        <div>
            <TweetBox />
        </div>
        <div>
            {
               tweets?.map(tweet => (
                   <TweetComponent tweet={tweet}/>
               ))
           } 
         
        </div>
        
    </div>
  )
}

export default Feed