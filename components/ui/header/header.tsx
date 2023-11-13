'use client'

import React from 'react'
import HeaderTop from './header-top'
import Logo from '../logo'
import MobileMenu from '../mobile-menu'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="relative">
      <div className="flex justify-between px-4 py-3">
        {/* !Mobile */}
        {/* <HeaderTop /> */}
        <Logo />
        <MobileMenu />
      </div>
      </header>
  )
}

export default Header
