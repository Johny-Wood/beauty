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
              <li className="text-sm 3xl:text-lg text-gray-400 font-semibold list-disc marker:text-gray-400">
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

      {/* <div className="flex flex-col gap-y-[80px] max-w-[847px] w-full min-w-[100px] shrink-1"> */}
      {/*   <div className="flex flex-col self-center gap-y-2 max-w-[648px] text-center"> */}
      {/*     <h1 className="text-lg font-extrabold text-orange-500 uppercase"> */}
      {/*       SYSTEM BEAUTY CONCEPT */}
      {/*     </h1> */}
      {/*     <h2 className="text-[45px] font-extrabold text-teal-800 max-w-[615px]"> */}
      {/*       {scopedServicesT(`${service.slug}.title`)} */}
      {/*     </h2> */}
      {/*   </div> */}

      {/* <div> */}
      {/*   <p className="max-w-[455px] text-lg text-gray-400 font-extrabold"> */}
      {/*     {scopedT('desc')} */}
      {/*   </p> */}
      {/* </div> */}

      {/* //   <div className="flex flex-col gap-y-[20px]"> */}
      {/* //   </div> */}
      {/* // </div> */}
    </section>
  )
}

export default AboutService
