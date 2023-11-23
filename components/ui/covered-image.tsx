import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
  src: string | StaticImageData
  coverPosition: 'top' | 'left' | 'right'
  alt: string
  mobile: boolean
}

const CoveredImage: React.FC<Props> = ({ src, alt, coverPosition, mobile }) => {
  return (
    <div
      className={clsx(
        'relative h-full w-full min-h-[312px] z-10 after:absolute after:h-[94%] after:w-full after:-z-1 after:rounded-lg after:bg-orange-500',
        !mobile && 'md:max-w[650px]',
        coverPosition === 'top' &&
          'after:top-0 after:-translate-y-[10px] after:-rotate-3 mt-[35px] min-w-[459px]',
        coverPosition === 'left' &&
          !mobile &&
          'after:top-0 after:translate-y-[30px] after:-translate-x-[18px] after:-rotate-3 after:w-[97%] ml-10 md:max-w-[632px]',
        coverPosition === 'left' &&
          mobile &&
          'after:top-0 after:translate-y-[30px] after:-translate-x-[18px] after:-rotate-3 after:w-[97%] ml-10 lg:max-w-[632px]',
      )}
    >
      <Image src={src} alt={alt} className="h-full w-full md:rounded-[8px]" />
    </div>
  )
}

export default CoveredImage
