import React from 'react'
import Link from 'next/link'
import { useScopedI18n } from '@/app/locales/client'
import PhoneArrow from '@/components/icons/PhoneArrow'
import LocationMarker from '@/components/icons/LocationMarkerIcon'
import BuyIcon from '@/components/icons/BuyIcon'
import LinkIcon from '@/components/link-icon'
import PriceIcon from '@/components/icons/PricesIcon'
import SalesIcon from '@/components/icons/SalesIcon'

const HeaderTop = () => {
  const scopedT = useScopedI18n('headerTop')

  return (
    <div className="flex flex-col py-8 px-6 bg-gray-50 shadow-[0px_4px_20px_0px_rgba(56,124,129,0.10)] text-teal-400">
      <div className="flex justify-between mb-4">
        <LinkIcon href="#" text="navigation.buy">
          <BuyIcon />
        </LinkIcon>
        <LinkIcon href="#" text="navigation.prices">
          <PriceIcon />
        </LinkIcon>
        <LinkIcon href="#" text="navigation.sales">
          <SalesIcon />
        </LinkIcon>
      </div>
      <Link
        className="flex items-end gap-x-[10px] py-[17px] w-full"
        href="tel:+38 099 993 99 23"
      >
        <span className="w-5 h-5">
          <PhoneArrow />
        </span>
        +38 099 993 99 23
      </Link>
      <div className="flex items-center gap-x-[10px]">
        <span className="w-5 h-5">
          <LocationMarker />
        </span>
        {scopedT('address')}
      </div>
    </div>
  )
}

export default HeaderTop
