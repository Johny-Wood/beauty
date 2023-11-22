'use client'

import React from 'react'
import { useScopedI18n } from '@/app/locales/client'
import Input from '@/components/ui/input'
import Button from '@/components/ui/button'

const Form = () => {
  const scopedButtonsT = useScopedI18n('buttons')

  return (
    <form className="flex flex-col gap-y-4 md:gap-y-[20px] max-w-full lg:max-w-[413px] 3xl:max-w-[525px] w-full">
      <span className="flex flex-col gap-y-2 md:gap-y-[10px]">
        <Input
          type="tel"
          // width="max-w-full lg:max-w-[413px] 3xl:max-w-[525px] w-full"
          bgColor="bg-[#BBDCDF]"
          border
          borderColor="border-[#FFFFFF]"
          placeholder="Ваше имя"
        />
        <Input
          type="text"
          // width="max-w-full lg:max-w-[413px] 3xl:max-w-[525px] w-full"
          bgColor="bg-[#BBDCDF]"
          border
          borderColor="border-[#FFFFFF]"
          placeholder="Номер телефона"
        />
        <Input
          type="text"
          // width="max-w-full lg:max-w-[413px] 3xl:max-w-[525px] w-full"
          bgColor="bg-[#BBDCDF]"
          border
          borderColor="border-[#FFFFFF]"
          placeholder="Что вас интересует?"
        />
      </span>

      <Button
        bgColor="bg-[#FFFFFF]"
        color="text-teal-800"
        // width="lg:max-w-[413px] 3xl:max-w-[525px]"
      >
        {scopedButtonsT('getConsultation')}
      </Button>

      <span className="flex justify-center lg:w-[413px] w-full">
        <p className="text-xs text-teal-800 font-montserrat font-semibold text-center lg:max-w-[349px]">
          By clicking Sign Up you're confirming that you agree with our Terms
          and Conditions.
        </p>
      </span>
    </form>
  )
}

export default Form
