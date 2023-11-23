'use client'

import React from 'react'
import { useScopedI18n } from '@/app/locales/client'
import Title from '@/components/ui/typography/title'
import AccentText from '@/components/ui/typography/accent-text'
import CoveredImage from '@/components/ui/covered-image'

import WomenImage from 'public/images/laserResurfacing.jpg'

const AboutService = ({ slug }: { slug: string }) => {
  const scopedServicesT = useScopedI18n('servicesBlock')

  const benefits = scopedServicesT(`${slug}.benefits`).split(';')

  console.log(benefits)

  return (
    <section className="max-w-[1900px] mx-auto flex flex-col md:flex-row py-[32px] md:py-[40px] px-4 md:px-[80px] 3xl:px-[105px]">
      <div className="flex flex-col gap-y-4 md:gap-y-[20px]">
        <div className="flex flex-col gap-y-2 md:gap-y-[10px] 3xl:gap-y-[20px] md:whitespace-nowrap">
          <Title color="text-teal-800">
            <AccentText color="text-teal-800" opacity>
              Кому подходит{' '}
            </AccentText>
            процедура
          </Title>

          <p className="text-xs md:text-lg 3xl:text-2xl text-gray-400 font-extrabold leading-[115.1%]">
            Лазерная шлифовка помогает избавиться:
          </p>
        </div>
        <div>
          <ul className="px-[18px]">
            {benefits.map((item, i) => (
              <li className="relative text-sm 3xl:text-lg text-gray-400 font-semibold before:absolute before:-left-[24px] before:bg-benefits-marker before:bg-cover before:block before:w-[24px] before:h-[24px]">
                {item}
                {i !== benefits.length - 1 ? ';' : ''}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm 3xl:text-lg text-gray-400 font-semibold md:max-w-[410px] 3xl:max-w-[450px]">
            {scopedServicesT(`${slug}.longDesc`)}
          </p>
        </div>
      </div>

      <div className="hidden md:flex justify-end w-full">
        <CoveredImage coverPosition="left" src={WomenImage} alt="women" />
      </div>
    </section>
  )
}

export default AboutService
