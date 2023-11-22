'use client'

import React from 'react'
import { useScopedI18n } from '@/app/locales/client'
import useIsMobile from './utils/isMobile'
import Title from './ui/typography/title'

const Collaborations = () => {
  const scopedCollaborationsT = useScopedI18n('collaborations')
  const isMobile = useIsMobile()

  return (
    <div className="max-w-[960px] mx-auto flex flex-col justify-center gap-y-10 md:gap-y-[53px] md:w-full text-sm md:text-[23px]">
      {isMobile && (
        <>
          <div className="flex justify-center">
            <Title>{scopedCollaborationsT('title')}</Title>
          </div>

          <div className="flex justify-between gap-x-10">
            <div className="text-[#D9D9D9] font-bold">Logotype</div>
            <div className="text-[#D9D9D9] font-bold">Logotype</div>
          </div>

          <div className="flex justify-between gap-x-10">
            <div className="text-[#D9D9D9] font-bold">Logotype</div>
            <div className="text-[#D9D9D9] font-bold">Logotype</div>
          </div>

          <div className="flex justify-between gap-x-10">
            <div className="text-[#D9D9D9] font-bold">Logotype</div>
            <div className="text-[#D9D9D9] font-bold">Logotype</div>
          </div>
        </>
      )}

      {!isMobile && (
        <>
          <div className="flex justify-center mb-[6px]">
            <div className="text-[#D9D9D9] font-bold text-[]">Logotype</div>
          </div>
          <div className="flex justify-between">
            <div className="text-[#D9D9D9] font-bold">Logotype</div>
            <div className="text-[#D9D9D9] font-bold">Logotype</div>
          </div>
          <div className="flex justify-center">
            <Title>{scopedCollaborationsT('title')}</Title>
          </div>
          <div className="flex justify-between mb-[6px]">
            <div className="text-[#D9D9D9] font-bold">Logotype</div>
            <div className="text-[#D9D9D9] font-bold">Logotype</div>
          </div>
          <div className="flex justify-center">
            <div className="text-[#D9D9D9] font-bold">Logotype</div>
          </div>
        </>
      )}
    </div>
  )
}

export default Collaborations
