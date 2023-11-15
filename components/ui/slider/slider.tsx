import React, { ReactNode, Children } from 'react'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import './index.css'
import 'swiper/css'

type Props = {
  swiperOptions?: SwiperProps
  children: string | JSX.Element | JSX.Element[] | ReactNode
}

const Slider: React.FC<Props> = ({ swiperOptions, children }) => {
  const slides = Children.toArray(children)

  return (
    <Swiper className="custom-swiper" {...swiperOptions}>
      {Children.map(slides, (slide, i) => (
        <SwiperSlide>{slide}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
