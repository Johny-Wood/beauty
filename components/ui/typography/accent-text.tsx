import React from 'react'
import clsx from 'clsx'

type Props = {
  color?: string
  opacity?: boolean
  children: string | JSX.Element | JSX.Element[]
}

const AccentText: React.FC<Props> = ({ color, opacity, children }) => {
  return (
    <span className={clsx(color && color, opacity && 'opacity-70')}>
      {children}
    </span>
  )
}

export default AccentText
