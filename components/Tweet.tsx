import React from 'react'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(localizedFormat)
dayjs.extend(relativeTime)

function TweetComp({tweet}) {

  const getAuthor = (author) => {
    const a = author.toBase58()
    return a.slice(0,4) + "..." + a.slice(-4)
  }
  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
    <div className="flex space-x-3">
        <div className="h-10 w-10 rounded-full bg-gray-500" ></div>
        <div>
          <div className="flex items-center space-x-1">
            
            <p className="mr-1 font-bold">@{getAuthor(tweet.account.author)}</p>
            <p className="text-gray-500">{dayjs.unix(tweet.account.timestamp).fromNow()}</p>
            {tweet.account.topic && <p className="text-gray-500">in 
              <span className="text-blue-400"> #{tweet.account.topic}</span></p>}
            
          </div>
          

          <p>{tweet.account.content}</p>
          
        </div>

        

     </div>
     </div>
  )
}

export default TweetComp