'use client'

import React from 'react'
import Image from 'next/image'
import { useScopedI18n } from '@/app/locales/client'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import useIsMobile from '../utils/isMobile'
import Button from './button'

type Props = {
  id: string | number
  workExperience: string | number
  photo: StaticImport | string
  specializations: string[]
}

const ExpertCard: React.FC<Props> = ({
  id,
  workExperience,
  photo,
  specializations,
}) => {
  const scopedT = useScopedI18n('experts')
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col items-center pt-1 md:pt-[3px] 3xl:pt-[4px] pb-2 md:pb-[17px] 3xl:pb-[22px] w-[224px] md:w-[250px] 3xl:w-[306px]  bg-[#FFFFFF] rounded-lg">
      <div className="w-[216px] md:w-[244px] 3xl:w-[298px] h-[141px] md:h-[190px] 3xl:h-[250px] mb-2 md:mb-[10px] 3xl:mb-[14px] rounded-lg overflow-hidden">
        <Image
          src={photo}
          alt={scopedT(`experts.${id}.name`)}
          width={216}
          height={141}
          className="h-[141px] md:h-[190px] 3xl:h-[250px] md:w-[244px] 3xl:w-[307px] object-cover object-top"
        />
      </div>
      <div className="flex flex-col px-4 md:px-[15px] 3xl:px-[20px]">
        <div className="mb-1 md:mb-2 3xl:mb-[10px]">
          <p className="text-xs 3xl:text-[16px] text-teal-800 opacity-70 font-medium italic">
            {`${scopedT('experience')} ${workExperience} ${scopedT('years')}`}
          </p>
        </div>
        <div className="mb-2 md:mb-[15px] 3xl:mb-[20px]">
          <h4 className="font-montserrat text-sm md:text-lg 3xl:text-2xl font-semibold text-teal-800">
            {scopedT(`experts.${id}.name`)}
          </h4>
        </div>
        <div className="flex flex-wrap gap-1 md:gap-2 3xl:gap-[10px] mb-2 md:mb-[15px] 3xl:mb-[20px]">
          {specializations.slice(0, isMobile ? 2 : 4).map((item, i) => (
            <Tag key={i}>{scopedT(`experts.${id}.specializations.${i}`)}</Tag>
          ))}
        </div>
        <div className="w-full">
          <Button bgColor="bg-teal-400" color="#FFFFFF">
            {isMobile ? 'Записаться' : 'Записаться на прием'}
          </Button>
        </div>
      </div>
    </div>
  )
}

const Tag = ({ children }) => {
  return (
    <span className="py-1 md:py-[3px] 3xl:py-[4px] px-[10px] md:px-[8px] 3xl:px-[10px] text-xs 3xl:text-[16px] text-gray-400 font-semibold bg-teal-800 bg-opacity-10 border-[#FFFFFF] border-opacity-30 rounded-md">
      {children}
    </span>
  )
}

export default ExpertCard
