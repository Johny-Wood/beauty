'use client'

import React from 'react'
import { useScopedI18n } from '@/app/locales/client'
import Title from '../../ui/typography/title'
import AccentText from '../../ui/typography/accent-text'
import Accordion from '../../ui/accordion'
import LaserRemovalIcon from '../../icons/LaserRemoval'
import ServicesList from './services-list'
import ConsultationForm from '@/components/consultation-form'

const Services = () => {
  const scopedT = useScopedI18n('servicesBlock')

  return (
    <section className="py-[26px] bg-gray-50">
      <div className="bg bg-teal-400">
        <div className="relative max-w-[1920px] mx-auto bg-hero-pattern-desktop bg-no-repeat bg-right-top bg-cover">
          <div className="absolute max-w-[1900px] w-full h-[26px] left-0 right-0 -top-[7px] bg-orange-500 rounded-[8px] rotate-[-177.31deg] md:rotate-[-178.31deg] 2xl:rotate-[-179.31deg]" />
          <div className="absolute max-w-[1900px] w-full h-[26px] right-0 -bottom-[7px] bg-orange-500 rounded-[8px] rotate-[-177.31deg] md:rotate-[-178.31deg] 2xl:rotate-[-179.31deg]" />

          <div className="relative bg-teal-400 z-10">
            <div className="flex flex-col pt-16 pb-[88px] px-4">
              <div className="flex justify-center mb-5 md:mb-10 3xl:mb-[80px]">
                <Title
                  color="text-[#FFFFFF]"
                  textCenter
                  maxWidth="max-w-[254px] md:max-w-[493px] 3xl:max-w-[651px]"
                >
                  <AccentText opacity>
                    {scopedT('section.titleAccent')}
                  </AccentText>

                  {scopedT('section.title')}
                </Title>
              </div>

              <div className="mb-[80px]">
                <ServicesList />
              </div>

              <div className="3xl:max-w-[1276px] md:max-w-[1027px] w-full mx-auto">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
