'use client'

import React, { ReactNode, Children, useCallback, useState } from 'react'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { Swiper as SwiperClass } from 'swiper/types'
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
  arrowsBottom?: boolean
  arrowsMdOutside?: boolean
  className?: string
  children: string | JSX.Element | JSX.Element[] | ReactNode
}

const Slider: React.FC<Props> = ({
  swiperOptions,
  arrows,
  arrowsBottom,
  arrowsMdOutside,
  className,
  children,
}) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>()

  const slides = Children.toArray(children)

  const handlePrevious = useCallback(() => {
    console.log(swiperRef)
    swiperRef?.slidePrev()
    console.log('swipe prev')
  }, [swiperRef])

  const handleNext = useCallback(() => {
    swiperRef?.slideNext()
    console.log('swipe next')
  }, [swiperRef])

  return (
    <>
      {!arrowsMdOutside && (
        <Swiper
          className={clsx(
            'custom-swiper',
            className && className,
            arrows && '!pb-[56px]',
            arrows && !arrowsBottom && 'lg:!pb-0 lg:!px-[129px]',
            arrows && arrowsBottom && 'lg:!pb-20',
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
            <div
              className={clsx(
                'absolute z-10 bottom-0 flex items-center justify-center gap-x-2 w-full',
                !arrowsBottom &&
                  'lg:bottom-1/2 lg:-translate-y-1/2 lg:left-0 lg:right-0 lg:justify-between',
                arrowsBottom && 'lg:left-[108px] lg:bottom-0 lg:justify-normal',
              )}
            >
              <ArrowPrev />
              <ArrowNext />
            </div>
          )}
        </Swiper>
      )}

      {arrowsMdOutside && (
        <>
          <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 left-0">
            <ArrowPrev onClick={handlePrevious} />
          </div>
          <Swiper
            onSwiper={setSwiperRef}
            className={clsx(
              'custom-swiper',
              arrows && '!pb-[56px]',
              // xl:!px-[129px]
              arrows && !arrowsBottom && 'xl:!pb-0',
              arrows && arrowsBottom && 'xl:!pb-20',
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
              <div
                className={clsx(
                  'absolute z-10 bottom-0 flex items-center justify-center gap-x-2 w-full',
                  !arrowsBottom &&
                    !arrowsMdOutside &&
                    'lg:bottom-1/2 lg:-translate-y-1/2 lg:left-0 lg:right-0 lg:justify-between',
                  arrowsBottom &&
                    !arrowsMdOutside &&
                    'lg:left-[108px] lg:bottom-0 lg:justify-normal',
                  arrowsMdOutside && 'xl:hidden',
                )}
              >
                <ArrowPrev />
                <ArrowNext />
              </div>
            )}
          </Swiper>
          <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 right-0">
            <ArrowNext onClick={handleNext} />
          </div>
        </>
      )}
    </>
  )
}

const ArrowNext = ({ onClick }: { onClick?: () => void }) => {
  const isMobile = useIsMobile()

  return (
    <>
      {!onClick && (
        <button className="swiper-button-next flex justify-center items-center py-[14px] px-[22px] rounded-full border border-teal-400">
          {isMobile && <SliderArrowMibileIcon />}

          {!isMobile && <SliderArrowIcon />}
        </button>
      )}

      {onClick && (
        <button
          onClick={onClick}
          className="swiper-button-next flex justify-center items-center py-[14px] px-[22px] rounded-full border border-teal-400"
        >
          {isMobile && <SliderArrowMibileIcon />}

          {!isMobile && <SliderArrowIcon />}
        </button>
      )}
    </>
  )
}

const ArrowPrev = ({ onClick }: { onClick?: () => void }) => {
  const isMobile = useIsMobile()

  return (
    <>
      {!onClick && (
        <button className="swiper-button-prev flex justify-center items-center py-[14px] px-[22px] rounded-full border border-teal-400 rotate-180">
          {isMobile && <SliderArrowMibileIcon />}

          {!isMobile && <SliderArrowIcon />}
        </button>
      )}

      {onClick && (
        <button
          onClick={onClick}
          className="swiper-button-prev flex justify-center items-center py-[14px] px-[22px] rounded-full border border-teal-400 rotate-180"
        >
          {isMobile && <SliderArrowMibileIcon />}

          {!isMobile && <SliderArrowIcon />}
        </button>
      )}
    </>
  )
}

export default Slider
