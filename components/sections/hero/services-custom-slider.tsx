'useClient'

import React, { useEffect, useRef, useState } from 'react'
import { useScopedI18n } from '@/app/locales/client'
import clsx from 'clsx'
import ArrowIcon from '@/components/icons/ArrowIcon'
import ServicesItem from './services-item'

const ServicesCustomSlider = () => {
  const scopedT = useScopedI18n('servicesBlock')

  const [isScrollable, setIsScrollable] = useState(false)
  const scrollableContainerRef = useRef(null)

  useEffect(() => {
    if (scrollableContainerRef?.current) {
      if (
        (scrollableContainerRef.current as HTMLDivElement).scrollWidth >
        (scrollableContainerRef.current as HTMLDivElement).offsetWidth
      ) {
        setIsScrollable(true)
      }
    }
  }, [scrollableContainerRef])

  const handleScroll = () => {
    ;(scrollableContainerRef.current as unknown as HTMLDivElement).scrollBy({
      left: 120,
      // top: 0,
      behavior: 'smooth',
    })

    if (scrollableContainerRef.current) {
      if (
        Math.floor(
          (scrollableContainerRef.current as HTMLDivElement).scrollWidth -
            (scrollableContainerRef.current as HTMLDivElement).scrollLeft,
        ) <= (scrollableContainerRef.current as HTMLDivElement).clientWidth
      ) {
        setIsScrollable(false)
      }
    }
  }

  const handleResetScroll = () => {
    ;(
      scrollableContainerRef.current as unknown as HTMLDivElement
    ).scrollLeft = 0
    setIsScrollable(true)
  }

  return (
    <div
      className={clsx(
        'relative w-full',
        isScrollable &&
          'after:absolute after:top-0 after:right-0 after:bottom-0 after:w-[40%]  after:bg-gradient-to-r after:from-transparent after:to-white',
      )}
    >
      <div
        ref={scrollableContainerRef}
        className="flex flex-col gap-y-[10px] overflow-y-auto scrollbar-hide"
      >
        <div className="flex gap-x-[10px]">
          <ServicesItem>{scopedT('laserEpilation')}</ServicesItem>
          <ServicesItem>{scopedT('alexandrite')}</ServicesItem>
          <ServicesItem>{scopedT('cosmetologist')}</ServicesItem>
          <ServicesItem>{scopedT('сorrection')}</ServicesItem>
          <ServicesItem>{scopedT('darsonval')}</ServicesItem>
          <ServicesItem>{scopedT('aikun')}</ServicesItem>
          <ServicesItem>{scopedT('hydroFacial')}</ServicesItem>
          <ServicesItem>{scopedT('pilates')}</ServicesItem>
          <ServicesItem>{scopedT('laserEpilation')}</ServicesItem>
          <ServicesItem>{scopedT('alexandrite')}</ServicesItem>
          <ServicesItem>{scopedT('cosmetologist')}</ServicesItem>
          <ServicesItem>{scopedT('сorrection')}</ServicesItem>
        </div>
        <div className="flex gap-x-[10px]">
          <ServicesItem>{scopedT('laserEpilation')}</ServicesItem>
          <ServicesItem>{scopedT('alexandrite')}</ServicesItem>
          <ServicesItem>{scopedT('cosmetologist')}</ServicesItem>
          <ServicesItem>{scopedT('сorrection')}</ServicesItem>
          <ServicesItem>{scopedT('darsonval')}</ServicesItem>
          <ServicesItem>{scopedT('aikun')}</ServicesItem>
          <ServicesItem>{scopedT('hydroFacial')}</ServicesItem>
          <ServicesItem>{scopedT('pilates')}</ServicesItem>
          <ServicesItem>{scopedT('laserEpilation')}</ServicesItem>
          <ServicesItem>{scopedT('alexandrite')}</ServicesItem>
          <ServicesItem>{scopedT('cosmetologist')}</ServicesItem>
          <ServicesItem>{scopedT('сorrection')}</ServicesItem>
        </div>
      </div>

      <div
        className={clsx(
          'absolute transition-all top-1/2 -translate-y-1/2 -right-5 z-10',
          isScrollable && 'translate-x-1/2',
          !isScrollable && 'translate-x-full',
        )}
      >
        <button
          className={clsx('')}
          onClick={handleScroll}
          onDoubleClick={handleResetScroll}
        >
          <ArrowIcon stroke={!isScrollable ? 'gray' : '#15CAD6'} />
        </button>
      </div>
    </div>
  )
}

export default ServicesCustomSlider
