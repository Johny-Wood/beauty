import React, { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  textCenter?: boolean
  color?: string
  maxWidth?: string
  children: string | JSX.Element | JSX.Element[] | ReactNode
}

const Title: React.FC<Props> = ({ textCenter, color, maxWidth, children }) => {
  return (
    <div
      className={clsx(
        maxWidth && maxWidth,
        textCenter && 'text-center',
        color ? color : 'text-teal-900',
      )}
    >
      <h3 className="text-xl md:text-[35px] 3xl:text-[50px] font-extrabold leading-[115.1%]">
        {children}
      </h3>
    </div>
  )
}

export default Title
