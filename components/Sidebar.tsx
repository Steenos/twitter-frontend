import React from 'react'
import SidebarRow from './SidebarRow'
import {BellIcon,
        HashtagIcon,
        BookmarkIcon,
        CollectionIcon,
        DotsCircleHorizontalIcon,
        MailIcon,
        UserIcon,
        HomeIcon,} from '@heroicons/react/outline'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'


function Sidebar() {
  return (
    <div className="col-span-2 items-center px-4
    md:items-start">
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={BellIcon} title="Notifications"/>
        <SidebarRow Icon={MailIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={CollectionIcon} title="Lists"/>
        <WalletMultiButton className=" bg-indigo-500 flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100
    transition-all duration-200 group"/>
    </div>
  )
}

export default Sidebar