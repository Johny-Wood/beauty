'use client'

import React from 'react'
import { useScopedI18n } from '@/app/locales/client'
import Title from '@/components/ui/typography/title'
import Slider from '@/components/ui/slider/slider'
import VideoPlayer from '@/components/ui/video-player/video-player'
import useIsMobile from '@/components/utils/isMobile'

const Reviews = () => {
  const scopedT = useScopedI18n('reviews')

  const isMobile = useIsMobile()

  return (
    <section className="flex flex-col bg-gray-50 pt-11 md:pt-[127px] 3xl:pt-[233px]">
      <div className="max-w-[1920px] w-full mx-auto flex flex-col items-center gap-y-2 md:gap-y-[10px] mb-4 md:mb-[38px] 3xl:mb-[40px]">
        <Title
          color="text-teal-800"
          textCenter
          maxWidth="max-w-[298px] md:max-w-full"
        >
          {scopedT('title')}
        </Title>

        <p className="text-xs md:text-lg 3xl:text-2xl text-gray-400 font-extrabold leading-[115.1%] text-center">
          {scopedT('subtitle')}
        </p>
      </div>
      <div className="flex justify-center w-full pl-4 md:pl-[80px] lg:mb-[110px]">
        <Slider
          arrows
          arrowsBottom
          swiperOptions={{
            spaceBetween: 12,
            slidesPerView: 'auto',
            breakpoints: {
              1280: {
                spaceBetween: 20,
              },
            },
          }}
        >
          <div className="w-[248px] md:w-[315px] 3xl:w-[415px] h-[372px] md:h-[472px] 3xl:h-[622px]">
            <VideoPlayer
              url="https://vimeo.com/243556536"
              light="/images/reviewPlaceholder.jpg"
              controls
              width="100%"
              height="100%"
              playsinline
            />
          </div>
          <div className="w-[248px] md:w-[315px] 3xl:w-[415px] h-[372px] md:h-[472px] 3xl:h-[622px]">
            <VideoPlayer
              url="https://vimeo.com/243556536"
              light="/images/reviewPlaceholder.jpg"
              controls
              width="100%"
              height="100%"
              playsinline
            />
          </div>
          <div className="w-[248px] md:w-[315px] 3xl:w-[415px] h-[372px] md:h-[472px] 3xl:h-[622px]">
            <VideoPlayer
              url="https://vimeo.com/243556536"
              light="/images/reviewPlaceholder.jpg"
              controls
              width="100%"
              height="100%"
              playsinline
            />
          </div>
          <div className="w-[248px] md:w-[315px] 3xl:w-[415px] h-[372px] md:h-[472px] 3xl:h-[622px]">
            <VideoPlayer
              url="https://vimeo.com/243556536"
              light="/images/reviewPlaceholder.jpg"
              controls
              width="100%"
              height="100%"
              playsinline
            />
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Reviews
