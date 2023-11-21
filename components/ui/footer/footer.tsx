'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useScopedI18n } from '@/app/locales/client'
import Logo from '../logo'
import Button from '../button'
import Map from '../Map/map'

import Phone from '@/components/icons/Phone'
import IconButton from '../icon-button'
import TelegramIcon from '@/components/icons/TelegramIcon'
import InstagramIcon from '@/components/icons/Instagram'
import MapImage from '/public/images/map.jpg'
import FooterBottom from './footer-bottom'

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
    name: 'prices',
    href: 'prices',
  },
  {
    name: 'buy',
    href: 'buy',
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

const Footer = () => {
  const scopedT = useScopedI18n('footer')
  const scopedNavigationT = useScopedI18n('navigation')
  const scopedButtonsT = useScopedI18n('buttons')
  const scopedHeaderTopT = useScopedI18n('headerTop')

  return (
    <footer className="flex flex-col text-teal-800">
      <div className="flex flex-col lg:flex-row p-4 md:py-[40px] md:px-[80px]">
        <div className="mb-[24px] lg:mb-0 md:mr-[82px]">
          <Logo />
        </div>

        <div className="flex flex-col mb-[48px] lg:mb-0 md:grow">
          <div className="mb-4 3xl:mb-[20px]">
            <h5 className="text-[16px] lg:text-lg 3xl:text-2xl text-teal-800 font-extrabold">
              {scopedT('navigation')}
            </h5>
          </div>

          <nav className="mb-4 lg:mb-[30px]">
            <ul className="flex flex-wrap gap-4 lg:flex-col md:flex-nowrap">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-xs text-teal-800 font-semibold font-montserrat"
                  >
                    {scopedNavigationT(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col lg:flex-row gap-y-4 md:gap-x-[10px]">
            <Button
              bgColor="bg-teal-800"
              width="lg:max-w-[243px] 3xl:max-w-[320px]"
            >
              <Phone />
              {scopedButtonsT('getConsultation')}
            </Button>

            <div className="flex justify-center gap-x-2">
              <IconButton
                as="link"
                bgColor="bg-transparent"
                border
                borderColor="border-teal-800"
                tel
                href="#"
              >
                <TelegramIcon fill="#387C81" />
              </IconButton>

              <IconButton
                as="link"
                bgColor="bg-transparent"
                border
                borderColor="border-teal-800"
                tel
                href="#"
              >
                <InstagramIcon fill="#387C81" />
              </IconButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-2">
            <h5 className="text-[16px] lg:text-lg 3xl:text-2xl text-teal-800 font-extrabold">
              {scopedT('map')}
            </h5>
          </div>

          <div className="mb-4">
            <p className="text-xs text-teal-400 font-extrabold">
              {scopedHeaderTopT('address')}
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden min-h-[240px] lg:min-h-[182px] 3xl:max-h-[240px] h-full lg:min-w-[520px] 3xl:min-w-[630px]">
            <Map />
          </div>
        </div>
      </div>

      <FooterBottom />
    </footer>
  )
}

export default Footer
