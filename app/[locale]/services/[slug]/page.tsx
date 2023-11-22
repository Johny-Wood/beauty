import Callback from '@/components/sections/callback/callback'
import Experts from '@/components/sections/experts/experts'
import Hero from '@/components/services/service/sections/Hero/hero'
import AboutService from '@/components/services/service/sections/about-service/about-service'
import React from 'react'

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
  return [{ slug: 'laserCorrection' }, { slug: 'massage' }]
}

export default function Page({ params }: { params: { slug: string } }) {
  const service = getService(params?.slug)

  return (
    <>
      <Hero service={service} />
      <AboutService slug={params.slug} />
      <div className=" md:pb-[160px] bg-gray-50">
        <Experts />
      </div>
      <div className="bg-gray-50">
        <Callback />
      </div>
    </>
  )
}
