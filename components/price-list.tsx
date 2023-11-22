'use client'

import React from 'react'
import { useScopedI18n } from '@/app/locales/client'
import Button from './ui/button'

interface Service {
  id: string | number
  title: string
  price: number
}

type Props = {
  services: Service[]
}

const PriceList: React.FC<Props> = ({ services }) => {
  const scopedT = useScopedI18n('prices')

  return (
    <div className="flex flex-col gap-y-[10px]">
      {services.map((item) => (
        <PriceListItem
          id={item.id}
          title={scopedT(`services.${item.id}.title`)}
          price={item.price}
        />
      ))}
    </div>
  )
}

const PriceListItem: React.FC<Service> = ({ id, title, price }) => {
  const scopedT = useScopedI18n('prices')
  const scopedButtonsT = useScopedI18n('buttons')

  return (
    <div className="flex justify-between items-center py-[15px] pr-[15px] pl-[30px] bg-[#DCEFF1] rounded-[9px] font-montserrat">
      <div className="flex gap-x-[30px] text-teal-800 font-semibold">
        <p className="text-[13px] max-w-[475px]">{title}</p>
        <p className="text-lg">{`${price} ${scopedT('currency')}`}</p>
      </div>
      <div className="max-w-[160px] w-full">
        <Button bgColor="bg-[#E5FDFF]" color="text-teal-400">
          {scopedButtonsT('chooseService')}
        </Button>
      </div>
    </div>
  )
}

export default PriceList
