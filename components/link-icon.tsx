import { useI18n } from '@/app/locales/client'
import Link from 'next/link'
import React from 'react'

type Props = {
  href: string
  text: string
  children: React.ReactNode
}

const LinkIcon: React.FC<Props> = ({ href, text, children }) => {
  const scopedT = useI18n()

  return (
    <Link className="flex items-end gap-x-[10px]" href={href}>
      <span className="w-[20px] h-[20px]">{children}</span>
      {scopedT(text)}
    </Link>
  )
}

export default LinkIcon
