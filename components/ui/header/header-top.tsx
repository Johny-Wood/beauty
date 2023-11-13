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
    <div className="flex flex-col md:flex-row md:gap-x-[35px] py-8 px-6 bg-gray-50 shadow-[0px_4px_20px_0px_rgba(56,124,129,0.10)] text-teal-400">
      <div className="flex justify-between md:gap-x-8 mb-4">
        <LinkIcon href="#" text="navigation.buy" sep>
          <BuyIcon />
        </LinkIcon>
        <LinkIcon href="#" text="navigation.prices" sep>
          <PriceIcon />
        </LinkIcon>
        <LinkIcon href="#" text="navigation.sales">
          <SalesIcon />
        </LinkIcon>
      </div>
      <Link
        className="relative flex items-end gap-x-[10px] py-[17px] w-full md:justify-end md:after:absolute md:after:-right-[16px] md:after:top-1/2 md:after:-translate-y-[32%] md:after:w-[1.5px] md:after:h-[18px] md:after:bg-orange-500"
        href="tel:+38 099 993 99 23"
      >
        <span className="w-5 h-5">
          <PhoneArrow />
        </span>
        +38 099 993 99 23
      </Link>
      <div className="flex items-center gap-x-[10px] md:whitespace-nowrap md:overflow-x-auto">
        <span className="w-5 h-5">
          <LocationMarker />
        </span>
        {scopedT('address')}
      </div>
    </div>
  )
}

export default HeaderTop
