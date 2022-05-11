import React, {SVGProps} from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: String
    
}
export default function SidebarRow({Icon, title}: Props) {
  return (
    <div className="flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100
    transition-all duration-200 group cursor-pointer"> 
        <Icon className="h-6 w-6" />
        <p className="group-hover:text-blue-300 hidden md:inline-flex">{title}</p>
    </div>
  )
}

