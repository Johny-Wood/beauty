'use client'

import React, { ReactNode, Children } from 'react'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import './index.css'
import 'swiper/css'
import SliderArrowMibileIcon from '@/components/icons/SliderArrowMobileIcon'
import SliderArrowIcon from '@/components/icons/SliderArrowIcon'
import useIsMobile from '@/components/utils/isMobile'
import clsx from 'clsx'

type Props = {
  swiperOptions?: SwiperProps
  arrows?: boolean
  children: string | JSX.Element | JSX.Element[] | ReactNode
}

const Slider: React.FC<Props> = ({ swiperOptions, arrows, children }) => {
  const slides = Children.toArray(children)

  return (
    <Swiper
      className={clsx(
        'custom-swiper',
        arrows && '!pb-[56px] lg:!pb-0 lg:!px-[129px]',
      )}
      modules={[Navigation]}
      navigation={
        arrows
          ? {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          : undefined
      }
      {...swiperOptions}
    >
      {Children.map(slides, (slide, i) => (
        <SwiperSlide>{slide}</SwiperSlide>
      ))}
      {arrows && (
        <div className="absolute z-10 bottom-0 lg:bottom-1/2 lg:-translate-y-1/2 lg:left-0 lg:right-0 flex items-center justify-center lg:justify-between gap-x-2 w-full">
          <ArrowPrev />
          <ArrowNext />
        </div>
      )}
    </Swiper>
  )
}

const ArrowNext = () => {
  const isMobile = useIsMobile()

  return (
    <button className="swiper-button-next flex justify-center items-center py-[14px] px-[22px] rounded-full border border-teal-400">
      {isMobile && <SliderArrowMibileIcon />}

      {!isMobile && <SliderArrowIcon />}
    </button>
  )
}

const ArrowPrev = () => {
  const isMobile = useIsMobile()

  return (
    <button className="swiper-button-prev flex justify-center items-center py-[14px] px-[22px] rounded-full border border-teal-400 rotate-180">
      {isMobile && <SliderArrowMibileIcon />}

      {!isMobile && <SliderArrowIcon />}
    </button>
  )
}

export default Slider
