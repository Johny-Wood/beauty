'use client'

import React from 'react'
import { useScopedI18n } from '@/app/locales/client'

import useIsMobile from '@/components/utils/isMobile'
import ServicesCollapsible from './serviсes-collapsible'
import ServicesCustomSlider from './services-custom-slider'
import ContactsBlock from '@/components/contacts-block'
import CoveredImage from '@/components/ui/covered-image'

import WomenImage from '/public/images/women.jpg'

const Hero = () => {
  const scopedT = useScopedI18n('hero')
  const isMobile = useIsMobile()

  return (
    <section className="bg-hero-pattern md:bg-hero-pattern-desktop md:bg-bottom md:bg-cover md:bg-no-repeat">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center md:gap-x-[50px] pt-[48px]  md:pt-[22px] md:pb-[55px] md:px-[80px] 3xl:px-[100px]">
        {!isMobile && (
          <>
            <div className="flex flex-col gap-y-[30px] max-w-[847px] w-full min-w-[100px] shrink-1">
              <div className="flex flex-col gap-y-2 max-w-[648px]">
                <h1 className="text-lg font-extrabold text-orange-500 uppercase">
                  SYSTEM BEAUTY CONCEPT
                </h1>
                <h2 className="text-[45px] font-extrabold text-teal-800 max-w-[615px]">
                  {scopedT('callToAction')}
                </h2>
              </div>

              <div>
                <p className="max-w-[455px] text-lg text-gray-400 font-extrabold">
                  {scopedT('desc')}
                </p>
              </div>

              <div className="flex flex-col gap-y-[20px]">
                <ServicesCustomSlider />
                <ContactsBlock />
              </div>
            </div>
            <div className="flex justify-end w-full">
              <CoveredImage coverPosition="left" src={WomenImage} alt="women" />
            </div>
          </>
        )}

        {isMobile && (
          <>
            <div className="flex flex-col items-center py-12 ">
              <h1 className="mb-[5px] text-sm/3 font-extrabold text-orange-500 uppercase">
                SYSTEM BEAUTY CONCEPT
              </h1>
              <h2 className="text-[28px] font-extrabold text-teal-800 text-center max-w-[280px]">
                {scopedT('callToAction')}
              </h2>
            </div>

            <div>
              <CoveredImage src={WomenImage} alt="women" coverPosition="top" />
            </div>

            <div>
              <ContactsBlock />
            </div>

            <div>
              <ServicesCollapsible />
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Hero
