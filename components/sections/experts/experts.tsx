'use client'

import React from 'react'
import { useScopedI18n } from '@/app/locales/client'

import Title from '@/components/ui/typography/title'
import Slider from '@/components/ui/slider/slider'
import ExpertCard from '@/components/ui/expert-card'
import PriceList from '@/components/price-list'

import Expert0Photo from '/public/images/experts/0.jpg'
import Expert1Photo from '/public/images/experts/1.jpg'
import Expert2Photo from '/public/images/experts/2.jpg'
import Expert3Photo from '/public/images/experts/3.jpg'
import Button from '@/components/ui/button'

const servicesList = [
  {
    id: 0,
    title: 'Прием (осмотр, консультация) дерматолога-косметолога первичный',
    price: 4200,
  },
  {
    id: 1,
    title:
      'Прием (осмотр, консультация) дерматолога-косметолога, главного специалиста, первичный',
    price: 5400,
  },
  {
    id: 2,
    title: 'Прием (осмотр, консультация) дерматолога-косметолога первичный',
    price: 6000,
  },
]

const Experts = () => {
  const scopedT = useScopedI18n('experts')

  return (
    <section className=" bg-gray-50 pt-11 md:pt-[127px] 3xl:pt-[233px]">
      <div className="flex flex-col max-w-[1920px] w-full mx-auto">
        <div className="flex flex-col gap-y-2 md:gap-y-[10px] mb-4 md:mb-[38px] 3xl:mb-[40px]">
          <Title color="text-teal-800" textCenter>
            {scopedT('title')}
          </Title>

          <p className="text-xs md:text-lg 3xl:text-2xl text-gray-400 font-extrabold leading-[115.1%] text-center">
            {scopedT('subtitle')}
          </p>
        </div>

        <div className="flex justify-center w-full pl-4 md:px-[80px] lg:mb-[40px]">
          <Slider
            swiperOptions={{
              spaceBetween: 4,
              slidesPerView: 'auto',
              breakpoints: {
                1280: {
                  spaceBetween: 20,
                },
              },
            }}
            arrows
          >
            <ExpertCard
              id={0}
              photo={Expert0Photo}
              workExperience={19}
              specializations={[
                'трихолог',
                'дерматолог',
                'дерматолог',
                'трихолог',
              ]}
            />
            <ExpertCard
              id={1}
              photo={Expert1Photo}
              workExperience={19}
              specializations={[
                'трихолог',
                'дерматолог',
                'дерматолог',
                'трихолог',
              ]}
            />
            <ExpertCard
              id={2}
              photo={Expert2Photo}
              workExperience={19}
              specializations={[
                'трихолог',
                'дерматолог',
                'дерматолог',
                'трихолог',
              ]}
            />
            <ExpertCard
              id={3}
              photo={Expert3Photo}
              workExperience={19}
              specializations={[
                'трихолог',
                'дерматолог',
                'дерматолог',
                'трихолог',
              ]}
            />
          </Slider>
        </div>

        <div className="hidden lg:block lg:max-w-[1064px] 3xl:max-w-[1286px] lg:w-full lg:mx-auto lg:mb-[20px]">
          <PriceList services={servicesList} />
        </div>

        <div className="hidden lg:flex lg:justify-center">
          <Button
            bgColor="bg-teal-400"
            color="text-[#FFFFFF]"
            width="w-full max-w-[125px] 3xl:max-w-[180px]"
            as="link"
            href="#"
          >
            Весь список
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Experts
