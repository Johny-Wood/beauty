import React from 'react'
import Link from 'next/link'

const links = [
  {
    name: 'Terms & Conditions',
    href: '#',
  },
  {
    name: 'Privacy Policy',
    href: '#',
  },
  {
    name: 'Investor Privacy Notice',
    href: '#',
  },
  {
    name: 'Cookies Policy',
    href: '#',
  },
  {
    name: 'design: pogeton',
    href: 'design: pogeton',
  },
]

const FooterBottom = () => {
  return (
    <div className="bg-[#CFCA47]">
      <ul className="max-w-[1920px] w-full mx-auto flex flex-wrap justify-center lg:justify-normal items-center gap-[12px] lg:gap-[36px] py-4 lg:py-[12px] px-6 lg:px-[80px]">
        {links.map((link, i) => {
          if (i === links.length - 2) {
            return (
              <li key={i} className="grow">
                <Link
                  href={link.href}
                  className="text-xs text-teal-800 font-semibold font-montserrat text-center"
                >
                  {link.name}
                </Link>
              </li>
            )
          } else {
            return (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-xs text-teal-800 font-semibold font-montserrat text-center"
                >
                  {link.name}
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default FooterBottom
