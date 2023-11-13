import { useI18n } from '@/app/locales/client'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

type Props = {
  href: string
  text: string
  sep?: boolean
  children: React.ReactNode
}

const LinkIcon: React.FC<Props> = ({ href, text, sep, children }) => {
  const scopedT = useI18n()

  return (
    <Link className={clsx("relative flex items-end gap-x-[10px]", sep && "md:after:absolute md:after:-right-[16px] md:after:top-1/2 md:after:translate-y-[15%] md:after:w-[1.5px] md:after:h-[18px] md:after:bg-orange-500")} href={href}>
      <span className="w-[20px] h-[20px]">{children}</span>
      {scopedT(text)}
    </Link>
  )
}

export default LinkIcon
