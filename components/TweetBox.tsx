import React, { useState } from 'react'
import {CalendarIcon, EmojiHappyIcon,
        LocationMarkerIcon,
        PhotographIcon,
        SearchCircleIcon,} from '@heroicons/react/outline'

import idl from '../idl.json';
import { useWallet } from '@solana/wallet-adapter-react'
        
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, ProgramAccount, Provider, web3 } from '@project-serum/anchor';
        
        
        
const a = JSON.stringify(idl);
const b = JSON.parse(a);
        
//Program address for twitter smart contract
const programId = new PublicKey('DUxkTsCrXHJKWzuPcT9xta1s3iZma6eXt7KaYvSSgDX1');
const network = web3.clusterApiUrl('devnet');



function TweetBox() {

    const wallet = useWallet();
    const connection = new Connection(network)
    //@ts-ignore
    const provider = new Provider(connection,wallet,Provider.defaultOptions())
    

    const [input, setInput] = useState<String>('');
    const [topic, setTopic] = useState<String>('')
    const [content, setContent] = useState<String>('')


    const sendTweet = async (event: any) => {
        event?.preventDefault()

        if (!wallet.publicKey) {
            alert('Please connect your wallet!')
            return
        }
        const tweet = web3.Keypair.generate()
        try {
            const program = new Program(b, programId, provider)

            await program.rpc.sendTweet(topic, content, {
                accounts: {
                    author: wallet?.publicKey,
                    tweet: tweet.publicKey,
                    systemProgram: web3.SystemProgram.programId,
                },
                signers: [tweet]
            })
            

        } catch (error) {
            console.error("error fetching posts")
        }

        return 
    }
  
    const style = {
        buttonHover: ' h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'
    }
  return (
    <div className="flex space-x-2 p-5"> 
        <img className=" h-14 w-14 rounded-full mt-4" src="https://links.papareact.com/gll" alt="" />

        <div className='flex flex-1 items-center pl-2'>
            <form className=" flex flex-1 flex-col">
                <input  id='content' 
                        type="text" 
                        placeholder="what's going on?" 
                        className='h-24 w-full text-xl outline-none placeholder:text-xl'
                        onChange={event => setContent(event.currentTarget.value)} />
                <input id="topic"
                       type="text" 
                       placeholder="# Topic" 
                       className="h-12 w-2/4 px-4 text-xl outline-none placeholder:text-xl bg-gray-100 rounded-full"
                       onChange={event => setTopic(event.currentTarget.value)}/>
                <div className="flex items-center">
                    
                <div className="flex flex-1 space-x-2 text-blue-300"> 
                    <PhotographIcon className={style.buttonHover} /> 
                    <SearchCircleIcon className={style.buttonHover}/>
                    <EmojiHappyIcon className={style.buttonHover}/> 
                    <CalendarIcon className={style.buttonHover}/>
                    <LocationMarkerIcon className={style.buttonHover}/>
                </div>

                <button className="bg-blue-500 rounded-full px-5 py-2 font-bold text-white"
                        onClick={sendTweet}>Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox