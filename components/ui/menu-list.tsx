'use client'

import React from 'react'
import Link from 'next/link'
import { useScopedI18n } from '@/app/locales/client'

const links = [
  {
    name: 'main',
    href: '/',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'reviews',
    href: 'reviews',
  },
  {
    name: 'experts',
    href: 'experts',
  },
]

const MenuList = () => {
  const scopedT = useScopedI18n('navigation')

  return (
    <ul className="flex flex-col md:flex-row md:justify-between items-center gap-y-8 md:w-full md:max-w-[410px]">
      {links.map((item) => (
        <li>
          <Link
            href={item.href}
            className="text-sm 3xl:text-lg text-teal-800 font-semibold font-montserrat"
          >
            {scopedT(item.name)}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MenuList
