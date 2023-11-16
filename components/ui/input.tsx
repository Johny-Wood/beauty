import clsx from 'clsx'
import React, { HTMLInputTypeAttribute } from 'react'

type Props = {
  type: HTMLInputTypeAttribute
  placeholder: string
  bgColor: string
  border?: boolean
  borderColor: string
  width?: string
}

const Input: React.FC<Props> = ({
  type,
  placeholder,
  border,
  borderColor,
  bgColor,
  width,
}) => {
  const classes = clsx(
    'py-[12px] 3xl:py-[14px] px-[20px] md:px-[15px] 3xl:px-[20px] rounded-xl placeholder-gray-50 placeholder-opacity-50 text-xs leading-normal',
    width && width,
    bgColor && bgColor,
    border && borderColor && `border ${borderColor}`,
  )
  return <input className={classes} type={type} placeholder={placeholder} />
}

export default Input
