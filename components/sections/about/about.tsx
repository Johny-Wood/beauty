'use client'

import React from 'react'
import { useScopedI18n } from '@/app/locales/client'
import useIsMobile from '../../utils/isMobile'

import VideoPlayer from '../../ui/video-player/video-player'
import Title from '../../ui/typography/title'
import AccentText from '../../ui/typography/accent-text'
import CoveredCard from '../../ui/covered-card'
import Slider from '../../ui/slider/slider'
import Button from '../../ui/button'
import Collaborations from '../../collaborations'

const About = () => {
  const scopedT = useScopedI18n('about')
  const scopedServicesT = useScopedI18n('servicesBlock')
  const scopedButtonsT = useScopedI18n('buttons')

  const isMobile = useIsMobile()

  return (
    <section className="flex flex-col items-center py-[40px] md:py-[60px] md:gap-y-[62px] 3xl:gap-y-[80px]  bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-4 md:px-[100px] flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-x-[60px] mb-4 pt-[20px] bg-about-mobile-bg bg-[center_-43px] md:bg-none bg-no-repeat md:w-full">
        <div className="flex flex-col items-start gap-y-2 md:order-1">
          <Title
            color="text-teal-800"
            maxWidth="max-w-[493px] 3xl:max-w-[651px]"
          >
            <AccentText opacity>{scopedT('titleAccent')}</AccentText>

            {scopedT('title')}
          </Title>
          <p className="text-xs md:text-lg 3xl:text-2xl text-gray-400 font-extrabold leading-[115.1%]">
            {scopedT('subtitle')}
          </p>
        </div>

        <div className="md:relative md:max-w-[694px] 3xl:max-w-[850px] w-full h-[220px] md:h-[318px] 3xl:h-[420px] md:after:absolute md:after:top-0 md:after:right-0 lg:after:h-full md:after:h-[105%] md:after:translate-x-[62%] md:after:-translate-y-[5%] lg:after:translate-x-[65%] 3xl:after:translate-x-[72%] md:after:bg-about-bg 3xl:after:bg-about-3xl-bg md:after:bg-no-repeat md:after:w-full 3xl:after:bg-[length:auto]">
          <VideoPlayer
            url="https://vimeo.com/243556536"
            width="100%"
            height="100%"
            light="/images/video-preview.png"
            controls
            playsinline
          />
        </div>
      </div>
      {/* md:pl-[100px] */}
      <div className="flex justify-center max-w-[1920px] w-full h-full mb-6 pl-4 md:pl-0">
        <Slider
          swiperOptions={{
            spaceBetween: 20,
            slidesPerView: 'auto',
          }}
          className="md:!pl-[100px] md:!ml-0"
        >
          <CoveredCard
            coverPosition="bottom"
            title={scopedServicesT('hairCut.title')}
            desc={scopedServicesT('hairCut.desc')}
            icon="/images/hair.jpg"
            alt={scopedServicesT('hairCut.title')}
          />
          <CoveredCard
            coverPosition="bottom"
            title={scopedServicesT('aikun.title')}
            desc={scopedServicesT('aikun.desc')}
            icon="/images/hair.jpg"
            alt={scopedServicesT('aikun.title')}
          />
          <CoveredCard
            coverPosition="bottom"
            title={scopedServicesT('cleanFace.title')}
            desc={scopedServicesT('cleanFace.desc')}
            icon="/images/hair.jpg"
            alt={scopedServicesT('cleanFace.title')}
          />
          <CoveredCard
            coverPosition="bottom"
            title={scopedServicesT('massage.title')}
            desc={scopedServicesT('massage.desc')}
            icon="/images/hair.jpg"
            alt={scopedServicesT('massage.title')}
          />
        </Slider>
      </div>

      <div className="px-4 md:px-[100px] flex flex-col gap-y-2 w-full md:flex-row md:justify-center gap-x-[10px] mb-[60px]">
        <Button
          width="w-full md:w-fit"
          bgColor="bg-[#E5FDFF]"
          color="text-teal-400"
          border
          borderColor="border-teal-400"
        >
          {scopedButtonsT('allServices')}
        </Button>
        <Button width="w-full md:w-fit" bgColor="bg-[rgba(21,202,214,90)]">
          {scopedButtonsT('discuss')}
        </Button>
      </div>

      <div className="md:w-full">
        <Collaborations />
      </div>
    </section>
  )
}

export default About
