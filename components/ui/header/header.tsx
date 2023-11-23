'use client'

import React from 'react'
import { useScopedI18n } from '@/app/locales/client'
import HeaderTop from './header-top'
import Logo from '../logo'
import MobileMenu from '../mobile-menu'
import useIsMobile from '@/components/utils/isMobile'
import Button from '../button'
import Phone from '@/components/icons/Phone'
import MenuList from '../menu-list'
import LanguageChanger from '@/components/language-changer'

type Props = {}

const Header = (props: Props) => {
  const scopedTButtons = useScopedI18n('buttons')
  const isMobile = useIsMobile()

  return (
    <header className="relative max-w-[1920px] mx-auto w-full shadow-header">
      <div className="flex justify-between md:flex-col px-4 md:px-20 3xl:px-[100px] py-3 md:py-0">
        {isMobile && (
          <>
            <Logo />
            <MobileMenu />
          </>
        )}

        {!isMobile && (
          <>
            {/* <HeaderTop /> */}
            <div className="flex justify-between gap-x-[10px] py-3">
              <Logo width={102} />

              <MenuList />

              <div className="flex gap-y-[10px] md:gap-x-[10px] items-center w-full max-w-[341px] justify-between">
                <div className="max-w-[200px]">
                  <Button bgColor="bg-teal-800" href="#">
                    <Phone />
                    {scopedTButtons('callback')}
                  </Button>
                </div>
                <div className="max-w-[131px]">
                  <Button as="link" bgColor="bg-teal-400" href="#">
                    {scopedTButtons('apointment')}
                  </Button>
                </div>
                <div>
                  <LanguageChanger />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
