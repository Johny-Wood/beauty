import React from 'react'

type Props = {
  children: React.ReactNode
}

const ServicesItem: React.FC<Props> = ({ children }) => {
  return (
    <div className="py-2 px-[15px] w-fit border border-teal-400 rounded-md text-teal-400 font-medium text-center capitalize md:whitespace-nowrap">
      {children}
    </div>
  )
}

export default ServicesItem
