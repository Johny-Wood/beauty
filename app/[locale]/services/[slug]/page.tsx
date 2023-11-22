import React from 'react'
import { setStaticParamsLocale } from 'next-international/server'
import { getStaticParams } from '@/app/locales/server'
import Callback from '@/components/sections/callback/callback'
import Experts from '@/components/sections/experts/experts'
import Hero from '@/components/services/service/sections/Hero/hero'
import AboutService from '@/components/services/service/sections/about-service/about-service'

const services = [
  {
    slug: 'laserResurfacing',
    title: 'laserResurfacing',
    desc: 'Перед процедурой врач проведет осмотр, чтобы определить, каких результатов можно достичь и как ваши физические особенности, например тон и толщина кожи, могут повлиять на результаты процедуры.',
    benefits: [
      'от мелких морщин',
      'возрастной пигментации',
      'неровного тона или текстуры кожи',
      'солнечных ожогов',
      'легких и умеренных шрамов от акне',
      'увеличенных сальных желез на носу.',
    ],
  },
  {
    slug: 'massage',
    title: 'Massage',
    desc: 'Перед процедурой врач проведет осмотр, чтобы определить, каких результатов можно достичь и как ваши физические особенности, например тон и толщина кожи, могут повлиять на результаты процедуры.',
    benefits: [
      'от мелких морщин',
      'возрастной пигментации',
      'неровного тона или текстуры кожи',
      'солнечных ожогов',
      'легких и умеренных шрамов от акне',
      'увеличенных сальных желез на носу.',
    ],
  },
]

const getService = (slug: string) => {
  console.log(slug)
  const s = services.filter((item) => item.slug === slug)[0]
  console.log(s)

  if (!s) {
    throw new Error('No data found.')
  }

  return s
}

export async function generateStaticParams() {
  const params1 = getStaticParams()
  const params2 = services

  return [...params1, ...params2]
}

export default function Page({
  params: { locale, slug },
}: {
  params: {
    locale: string
    slug: string
  }
}) {
  setStaticParamsLocale(locale)

  const service = getService(slug)

  return (
    <>
      <Hero service={service} />
      <AboutService slug={slug} />
      <div className=" md:pb-[160px] bg-gray-50">
        <Experts />
      </div>
      <div className="bg-gray-50">
        <Callback />
      </div>
    </>
  )
}
