'use client'

import { useState, useRef, useEffect } from 'react'
import Button from '../ui/button'
import clsx from 'clsx'

type AccordionpProps = {
  children: React.ReactNode
  tag?: string
  title: string
  icon?: React.ReactNode
  link?: string
  href?: string
  active?: boolean
}

export default function Accordion({
  children,
  tag = 'li',
  title,
  icon,
  link,
  href,
  active = false,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
  const accordion = useRef<HTMLDivElement>(null)
  const Component = tag as keyof JSX.IntrinsicElements

  useEffect(() => {
    setAccordionOpen(active)
  }, [accordion])

  return (
    <Component
      className={clsx(
        !accordionOpen && 'max-h-[55px]',
        accordionOpen && 'max-h-full',
        'h-full',
      )}
    >
      <button
        className={clsx(
          'relative flex items-center p-5 w-full py-[11.5px] font-montserrat font-semibold text-teal-800 text-sm text-left bg-[#FFFFFF] rounded-lg shadow-outline',
          !accordionOpen && 'h-full',
        )}
        onClick={(e) => {
          e.preventDefault()
          setAccordionOpen(!accordionOpen)
        }}
        aria-expanded={accordionOpen}
      >
        {icon && (
          <span className="flex justify-center items-center mr-5 md:mr-4 3xl:mr-8 md:w-6 md:h-6 3xl:w-8 3xl:h-8">
            {icon}
          </span>
        )}
        <span className="mr-auto">{title}</span>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transform origin-center transition duration-200 ease-out ${
            accordionOpen && '!rotate-90'
          }`}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.6629 11.6023C15.8826 11.822 15.8826 12.1781 15.6629 12.3978L9.92804 18.1326C9.70837 18.3523 9.35227 18.3523 9.13259 18.1326L8.86739 17.8674C8.64772 17.6478 8.64772 17.2916 8.86739 17.0719L13.9393 12L8.86739 6.92808C8.64772 6.7084 8.64772 6.3523 8.86739 6.13263L9.13259 5.86743C9.35227 5.64775 9.70837 5.64775 9.92804 5.86743L15.6629 11.6023Z"
            fill="#387C81"
          />
        </svg>
      </button>
      <div
        ref={accordion}
        className="-mt-2 pt-[26px] pb-[20px] px-[20px] rounded-b-lg bg-[#FFFFFF] text-gray-400 text-xs overflow-hidden transition-all duration-300 ease-in-out"
        style={
          accordionOpen
            ? { maxHeight: accordion.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <p className="mb-5">{children}</p>

        {link && href && (
          <Button
            as="link"
            bgColor="bg-[#FFFFFF]"
            border
            borderColor="border-teal-400"
            color="text-teal-400"
            href={href}
            width="md:max-w-[205px]"
          >
            {link}
          </Button>
        )}
      </div>
    </Component>
  )
}
