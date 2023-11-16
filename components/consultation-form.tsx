import React from 'react'
import Input from './ui/input'
import Button from './ui/button'

const ConsultationForm = () => {
  return (
    <form className="flex flex-wrap gap-2 md:items-baseline">
      <span className="w-full md:max-w-[363px] 3xl:max-w-[480px]">
        <Input
          bgColor="bg-teal-200"
          border
          borderColor="border-[#B2F3F8]"
          type="text"
          placeholder="Ваше имя"
          width={'w-full md:max-w-[363px] 3xl:max-w-[480px]'}
        />
      </span>
      <span className="mb-[6px] w-full md:max-w-[363px] 3xl:max-w-[480px]">
        <Input
          bgColor="bg-teal-200"
          border
          borderColor="border-[#B2F3F8]"
          type="tel"
          placeholder="Номер телефона"
          width={'w-full md:max-w-[363px] 3xl:max-w-[480px]'}
        />
      </span>

      {/* <span className="flex w-full md:justify-end"> */}
      <Button
        bgColor="bg-[#FFFFFF]"
        color="text-teal-800"
        width="w-full md:max-w-[224px] 3xl:max-w-[296px]"
      >
        Получить консультацию
      </Button>
      {/* </span> */}
    </form>
  )
}

export default ConsultationForm
