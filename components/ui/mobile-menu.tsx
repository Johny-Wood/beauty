'use client'

import { useState, useRef, useEffect } from 'react'
import { useScopedI18n } from '@/app/locales/client'
import { Transition } from '@headlessui/react'
import MenuList from './menu-list'
import Button from './button'
import Phone from '../icons/Phone'
import HeaderTop from './header/header-top'
import LanguageChanger from '../language-changer'

export default function MobileMenu() {
  const scopedT = useScopedI18n('mobileMenu')
  const scopedTButtons = useScopedI18n('buttons')

  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  // disable scroll if menu open
  useEffect(() => {
    if (mobileNavOpen) {
      if (document) {
        document.body.style.overflow = 'hidden'
      }
    } else {
      if (document) {
        document.body.style.overflow = 'auto'
      }
    }
  }, [mobileNavOpen])

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        {!mobileNavOpen ? (
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 7.25V8.75C18 8.94891 17.921 9.13968 17.7803 9.28033C17.6397 9.42098 17.4489 9.5 17.25 9.5H0.75C0.551088 9.5 0.360322 9.42098 0.21967 9.28033C0.0790178 9.13968 0 8.94891 0 8.75V7.25C0 7.05109 0.0790178 6.86032 0.21967 6.71967C0.360322 6.57902 0.551088 6.5 0.75 6.5H17.25C17.4489 6.5 17.6397 6.57902 17.7803 6.71967C17.921 6.86032 18 7.05109 18 7.25ZM17.25 12.5H0.75C0.551088 12.5 0.360322 12.579 0.21967 12.7197C0.0790178 12.8603 0 13.0511 0 13.25V14.75C0 14.9489 0.0790178 15.1397 0.21967 15.2803C0.360322 15.421 0.551088 15.5 0.75 15.5H17.25C17.4489 15.5 17.6397 15.421 17.7803 15.2803C17.921 15.1397 18 14.9489 18 14.75V13.25C18 13.0511 17.921 12.8603 17.7803 12.7197C17.6397 12.579 17.4489 12.5 17.25 12.5ZM17.25 0.5H0.75C0.551088 0.5 0.360322 0.579018 0.21967 0.71967C0.0790178 0.860322 0 1.05109 0 1.25V2.75C0 2.94891 0.0790178 3.13968 0.21967 3.28033C0.360322 3.42098 0.551088 3.5 0.75 3.5H17.25C17.4489 3.5 17.6397 3.42098 17.7803 3.28033C17.921 3.13968 18 2.94891 18 2.75V1.25C18 1.05109 17.921 0.860322 17.7803 0.71967C17.6397 0.579018 17.4489 0.5 17.25 0.5Z"
              fill="#387C81"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-45"
          >
            <path
              d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.5306 14.4694C15.6003 14.5391 15.6556 14.6218 15.6933 14.7128C15.731 14.8039 15.7504 14.9015 15.7504 15C15.7504 15.0985 15.731 15.1961 15.6933 15.2872C15.6556 15.3782 15.6003 15.4609 15.5306 15.5306C15.4609 15.6003 15.3782 15.6556 15.2872 15.6933C15.1961 15.731 15.0986 15.7504 15 15.7504C14.9015 15.7504 14.8039 15.731 14.7128 15.6933C14.6218 15.6556 14.5391 15.6003 14.4694 15.5306L12 13.0603L9.53063 15.5306C9.46095 15.6003 9.37822 15.6556 9.28718 15.6933C9.19613 15.731 9.09855 15.7504 9 15.7504C8.90146 15.7504 8.80388 15.731 8.71283 15.6933C8.62179 15.6556 8.53906 15.6003 8.46938 15.5306C8.3997 15.4609 8.34442 15.3782 8.30671 15.2872C8.269 15.1961 8.24959 15.0985 8.24959 15C8.24959 14.9015 8.269 14.8039 8.30671 14.7128C8.34442 14.6218 8.3997 14.5391 8.46938 14.4694L10.9397 12L8.46938 9.53063C8.32865 9.38989 8.24959 9.19902 8.24959 9C8.24959 8.80098 8.32865 8.61011 8.46938 8.46937C8.61011 8.32864 8.80098 8.24958 9 8.24958C9.19903 8.24958 9.3899 8.32864 9.53063 8.46937L12 10.9397L14.4694 8.46937C14.5391 8.39969 14.6218 8.34442 14.7128 8.3067C14.8039 8.26899 14.9015 8.24958 15 8.24958C15.0986 8.24958 15.1961 8.26899 15.2872 8.3067C15.3782 8.34442 15.4609 8.39969 15.5306 8.46937C15.6003 8.53906 15.6556 8.62178 15.6933 8.71283C15.731 8.80387 15.7504 8.90145 15.7504 9C15.7504 9.09855 15.731 9.19613 15.6933 9.28717C15.6556 9.37822 15.6003 9.46094 15.5306 9.53063L13.0603 12L15.5306 14.4694Z"
              fill="#387C81"
            />
          </svg>
        )}
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-[52px] z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="pt-14 pb-8 px-4">
            <div className="pb-8">
              <MenuList />
            </div>
            <div className="flex flex-col gap-y-2">
              <Button bgColor="bg-teal-800" href="#">
                <Phone />
                {scopedTButtons('callback')}
              </Button>
              <Button as="link" bgColor="bg-teal-400" href="#">
                {scopedTButtons('apointment')}
              </Button>
            </div>
          </div>
          <div className="flex justify-center pb-[27px]">
            <LanguageChanger />
          </div>
          {/* <HeaderTop /> */}
          {/* <div className="flex justify-center py-[22px] bg-gray-500"> */}
          {/*   <h3 className="text-[20px] text-teal-800 font-extrabold"> */}
          {/*     {scopedT('callToAction')} */}
          {/*   </h3> */}
          {/* </div> */}
        </Transition>
      </div>
    </div>
  )
}
