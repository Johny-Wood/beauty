import React from 'react'
import Button from './ui/button'
import { useScopedI18n } from '@/app/locales/client'
import IconButton from './ui/icon-button'
import Phone from './icons/Phone'
import Link from 'next/link'
import TelegramIcon from './icons/TelegramIcon'
import InstagramIcon from './icons/Instagram'

const ContactsBlock = () => {
  const scopedT = useScopedI18n('contactsBlock')

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-y-4 md:gap-x-2 p-4 md:p-[15px] bg-teal-800 bg-contacts-pattern bg-no-repeat bg-cover bg-[40px_bottom] md:rounded-xl">
      <div className="md:max-w-[202px]">
        <Button bgColor="bg-[#FFFFFF]">{scopedT('apointment')}</Button>
      </div>
      <div className="flex justify-between md:flex-grow">
        <div className="flex gap-x-2">
          <IconButton
            as="link"
            bgColor="bg-teal-600"
            tel
            href="+38 099 993 99 23"
          >
            <Phone />
          </IconButton>
          <div className="flex flex-col">
            <p className="text-xs text-teal-400 font-medium">
              {scopedT('callUs')}
            </p>
            <Link className="text-[#FFFFFF]" href="tel:+38 099 993 99 23">
              +38 099 993 99 23
            </Link>
          </div>
        </div>

        <div className="flex gap-x-1 md:gap-x-2">
          <IconButton
            as="link"
            href="#"
            bgColor="bg-[rgb(255,255,255)]/10"
            border
            borderColor="border-[#ffffff]"
          >
            <TelegramIcon />
          </IconButton>

          <IconButton
            as="link"
            href="#"
            bgColor="bg-[rgb(255,255,255)]/10"
            border
            borderColor="border-[#ffffff]"
          >
            <InstagramIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default ContactsBlock
