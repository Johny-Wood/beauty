import { clsx } from 'clsx'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

type Props = {
  coverPosition: 'top' | 'left' | 'right' | 'bottom'
  title: string
  desc: string
  icon: string | StaticImport
  alt: string
}

const CoveredCard: React.FC<Props> = ({
  coverPosition,
  title,
  desc,
  icon,
  alt,
}) => {
  return (
    <>
      <div className="relative xl:w-[304px] 3xl:w-[415px] w-[263px] h-[298px] xl:h-[266px] 3xl:h-[350px] shadow-1">
        <div className="relative h-[298px] xl:h-[266px] 3xl:h-[350px]">
          <div className="absolute w-[235px] xl:w-[275px] 3xl:w-[370px] h-[26px] xl:h-[23px] top-[267px] xl:top-[237px] 3xl:top-[319px] left-[19px] xl:left-[22px] bg-orange-500 rounded-[8px] rotate-[-2.69deg]" />
          <div className="flex w-[263px] xl:w-[304px] 3xl:w-[415px] h-[284px] xl:h-[251px] 3xl:h-[333px] gap-[10px] xl:gap-[8px] 3xl:gap-[10px] p-[16px] xl:p-[23px] 3xl:p-[30px] absolute top-0 left-0 bg-white rounded-[8px] flex-col items-start">
            <Image
              src={icon}
              width={65}
              height={65}
              alt={alt}
              className="relative w-[64px] xl:w-[49px] h-[64px] xl:h-[49px] 3xl:w-[64px] 3xl:h-[64px]"
            />

            <div className="inline-flex gap-[8px] relative flex-[0_0_auto] flex-col items-start">
              <h4 className="w-fit mt-[-1.00px] font-montserrat text-teal-800 text-[16px] 3xl:text-[18px] text-center relative font-semibold tracking-[0] leading-[normal]">
                {title}
              </h4>
              <p className="w-[227px] xl:w-[266px] 3xl:w-[350px] font-manrope text-teal-400 text-[14px] 3xl:text-[18px] relative font-semibold tracking-[0] leading-[normal]">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div */}
      {/*   className={clsx( */}
      {/*     'relative flex flex-col gap-y-[10px] p-4 w-full max-w-[288px] h-[284px] rounded-lg bg-[#FFFFFF] z-10', */}
      {/*     coverPosition === 'bottom' && */}
      {/*       'after:absolute after:bottom-0 after:translate-y-1/2 after:h-[20%] after:w-full after:z-0 after:rounded-lg after:bg-orange-500', */}
      {/*   )} */}
      {/* > */}
      {/*   <div */}
      {/*     className={clsx(coverPosition === 'bottom' && */}
      {/*       'after:absolute after:bottom-0 after:translate-y-1/2 after:h-[20%] after:w-full after:z-0 after:rounded-lg after:bg-orange-500', */}
      {/*   )} */}
      {/*   > */}
      {/*     <span> */}
      {/*       <Image src={icon} width={65} height={65} alt={alt} /> */}
      {/*     </span> */}
      {/**/}
      {/*     <div className="flex flex-col gap-y-2"> */}
      {/*       <h4 className="font-montserrat text-lg font-semibold text-teal-800"> */}
      {/*         {title} */}
      {/*       </h4> */}
      {/*       <p className="font-manrope font-semibold text-gray-400">{desc}</p> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </div> */}
    </>
  )
}

export default CoveredCard
