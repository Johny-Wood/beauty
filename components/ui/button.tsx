import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

type Props = {
  as?: 'link' | 'button'
  href?: string
  onClick?: () => void
  icon?: string
  bgColor: string
  children: React.ReactNode
}

const Button: React.FC<Props> = ({
  as,
  href,
  onClick,
  icon,
  bgColor,
  children,
}) => {
  const classes = clsx(
    'flex justify-center items-center gap-x-[10px] py-[10px] px-[30px] w-full text-sm text-gray-50 transition-all rounded-md hover:shadow-default',
    `${bgColor}`,
    bgColor === 'bg-teal-800' && 'hover:bg-teal-700',
    bgColor === 'bg-teal-800' && 'active:bg-teal-900',
    bgColor === 'bg-teal-400' && 'hover:bg-teal-300',
    bgColor === 'bg-teal-400' && 'active:bg-teal-500',
    bgColor === 'bg-teal-400' && 'text-[#fff]',
    icon && 'row-gap-[10px]',
  )
  return (
    <>
      {as === 'link' && href ? (
        <Link className={clsx(classes)} href={href}>
          {children}
        </Link>
      ) : (
        <button className={clsx(classes, 'border-0')} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  )
}

export default Button
