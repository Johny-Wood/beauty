import clsx from 'clsx'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  as?: 'link' | 'button'
  href?: string
  onClick?: () => void
  icon?: string | StaticImport
  alt?: string
  bgColor: string
  color?: string
  border?: boolean
  borderColor?: string
  width?: string
  children: React.ReactNode
}

const Button: React.FC<Props> = ({
  as,
  href,
  onClick,
  icon,
  alt,
  bgColor,
  color,
  border,
  borderColor,
  width,
  children,
}) => {
  const classes = clsx(
    'flex justify-center items-center gap-x-[10px] md:gap-x-[7px] md:whitespace-nowrap py-[10px] px-[30px] font-semibold text-sm text-gray-50 transition-all rounded-md hover:shadow-default',
    width ? width : 'w-full',
    `${bgColor}`,
    `${color}`,
    border && borderColor && `${borderColor} border-[1px]`,
    bgColor === 'bg-teal-800' && 'hover:bg-teal-700',
    bgColor === 'bg-teal-800' && 'active:bg-teal-900',
    bgColor === 'bg-teal-400' && 'hover:bg-teal-300',
    bgColor === 'bg-teal-400' && 'active:bg-teal-500',
    bgColor === 'bg-teal-400' && 'text-[#fff]',
    bgColor === 'bg-[#FFFFFF]' && 'text-teal-800',
    bgColor === 'bg-[#FFFFFF]' && 'active:bg-gray-100',
    icon && 'row-gap-[10px]',
  )
  return (
    <>
      {as === 'link' && href ? (
        <Link className={clsx(classes)} href={href}>
          {icon && alt && <Image src={icon} alt={alt} />}

          {children}
        </Link>
      ) : (
        <button className={clsx(classes, 'border-0')} onClick={onClick}>
          {icon && alt && <Image src={icon} alt={alt} />}

          {children}
        </button>
      )}
    </>
  )
}

export default Button
