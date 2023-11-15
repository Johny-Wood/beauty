import clsx from 'clsx'
import React, { useState } from 'react'
import ServicesItem from './utils/services-item'
import { useScopedI18n } from '@/app/locales/client'

const ServicesCollapsible = () => {
  const scopedT = useScopedI18n('servicesBlock')
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={clsx(
        'relative pt-6 px-[29px]',
        !isCollapsed && 'pb-12',
        isCollapsed && 'pb-[5rem]',
      )}
    >
      <div
        className={clsx(
          'relative flex flex-wrap justify-center gap-[10px] transition-all',
          !isCollapsed &&
            'max-h-[325px] overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1/2 after:bg-gradient-to-b after:from-transparent after:to-white',
          isCollapsed && 'max-h-full',
        )}
      >
        <ServicesItem>{scopedT('laserEpilation.title')}</ServicesItem>
        <ServicesItem>{scopedT('alexandrite.title')}</ServicesItem>
        <ServicesItem>{scopedT('cosmetologist.title')}</ServicesItem>
        <ServicesItem>{scopedT('correction.title')}</ServicesItem>
        <ServicesItem>{scopedT('darsonval.title')}</ServicesItem>
        <ServicesItem>{scopedT('aikun.title')}</ServicesItem>
        <ServicesItem>{scopedT('hydroFacial.title')}</ServicesItem>
        <ServicesItem>{scopedT('pilates.title')}</ServicesItem>
        <ServicesItem>{scopedT('laserEpilation.title')}</ServicesItem>
        <ServicesItem>{scopedT('alexandrite.title')}</ServicesItem>
        <ServicesItem>{scopedT('cosmetologist.title')}</ServicesItem>
        <ServicesItem>{scopedT('correction.title')}</ServicesItem>
      </div>
      <button
        className={clsx(
          'absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[24px] border-0 p-0',
        )}
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="49.5"
            y="0.5"
            width="49"
            height="49"
            rx="24.5"
            transform="rotate(90 49.5 0.5)"
            fill="#E6FDFF"
          />
          <rect
            x="49.5"
            y="0.5"
            width="49"
            height="49"
            rx="24.5"
            transform="rotate(90 49.5 0.5)"
            stroke="#15CAD6"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.3977 28.6629C25.178 28.8826 24.8219 28.8826 24.6022 28.6629L18.8674 22.928C18.6477 22.7084 18.6477 22.3523 18.8674 22.1326L19.1326 21.8674C19.3522 21.6477 19.7084 21.6477 19.9281 21.8674L25 26.9393L30.0719 21.8674C30.2916 21.6477 30.6477 21.6477 30.8674 21.8674L31.1326 22.1326C31.3522 22.3523 31.3522 22.7084 31.1326 22.928L25.3977 28.6629Z"
            fill="#15CAD6"
          />
        </svg>
      </button>
    </div>
  )
}

export default ServicesCollapsible
