'use client'

import React from 'react'
import { useScopedI18n } from '@/app/locales/client'
import useIsMobile from '@/components/utils/isMobile'
import CoveredImage from '@/components/ui/covered-image'
import Title from '@/components/ui/typography/title'
import Form from './form'

import WomenImage from '/public/images/woman-hydrated-skin.jpg'

const Callback = () => {
  const scopedT = useScopedI18n('callback')

  const isMobile = useIsMobile()

  return (
    <section className="lg:bg-[#DCEFF1] lg:bg-callback-bg lg:bg-no-repeat lg:bg-cover lg:bg-left-top">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-[80px]">
        <div className="bg-gray-50 lg:order-1 lg:-mt-[70px] lg:mb-[70px] lg:max-w-[680px] lg:w-full lg:max-h-[645px] lg:h-full">
          <CoveredImage
            coverPosition={isMobile ? 'top' : 'left'}
            src={WomenImage}
            alt={'women hydrated skin'}
          />
        </div>

        <div className="relative z-10 md:z-0 -mt-[10px] md:mt-0 px-4 md:px-0 3xl:px-[100px] pt-[48px] md:pt-[85px] 3xl:pt-[90px] pb-[38px] md:pb-[85px] 3xl:pb-[69px] rounded-t-xl bg-[#DCEFF1] lg:bg-none lg:bg-transparent bg-callback-mobile-bg bg-no-repeat bg-cover bg-right-top">
          <div className="flex flex-col gap-y-2 md:gap-y-[10px] mb-4 md:mb-[38px] 3xl:mb-[40px]">
            <Title color="text-teal-800" textCenter textProps="lg:text-left">
              {scopedT('title')}
            </Title>

            <p className="lg:max-w-[377px] 3xl:max-w-[503px] text-xs md:text-lg 3xl:text-2xl text-gray-400 font-extrabold leading-[115.1%] text-center lg:text-left">
              {scopedT('subtitle')}
            </p>
          </div>

          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Callback
