import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type Props = {
  as?: 'button' | 'link'
  href?: string
  tel?: boolean
  border?: boolean
  borderColor?: string
  bgColor: string
  children: React.ReactNode
}

const IconButton: React.FC<Props> = ({
  border,
  borderColor,
  bgColor,
  children,
  as,
  href,
  tel,
}) => {
  const classes = clsx(
    'flex justify-center items-center p-3 rounded-[10px] transition-all hover:shadow-default',
    `${bgColor}`,
    border && borderColor && `border ${borderColor}`,
    bgColor === 'bg-teal-600' && 'hover:bg-teal-700',
    bgColor === 'bg-teal-600' && 'active:bg-teal-900',
    bgColor === 'bg-teal-400' && 'hover:bg-teal-300',
    bgColor === 'bg-teal-400' && 'active:bg-teal-500',
    bgColor === 'bg-[#FFFFFF]' && 'active:bg-gray-100',
  )
  return (
    <>
      {as && href && as === 'link' && (
        <>
          <Link className={classes} href={`${tel ? `tel:${href}` : `${href}`}`}>
            {children}
          </Link>
        </>
      )}

      {!href && (
        <>
          <button className={classes}>{children}</button>
        </>
      )}
    </>
  )
}

export default IconButton
