'use client'

import React from 'react'
import Link from 'next/link'
import { useScopedI18n } from '@/app/locales/client'

const links = [
  {
    name: "main",
    href: "/",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "reviews",
    href: "reviews",
  },
  {
    name: "experts",
    href: "experts"
  }
]

const MenuList = () => {
  const scopedT = useScopedI18n("navigation")

  return (
    <ul className='flex flex-col items-center gap-y-8'>
      {links.map((item) => (
        <li>
          <Link href={item.href}>{scopedT(item.name)}</Link>
        </li>
      ))
      }
    </ul>
  )
}

export default MenuList
