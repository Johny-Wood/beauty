import React from 'react'
import { useScopedI18n } from '@/app/locales/client'

import Accordion from '@/components/ui/accordion'

import LaserRemovalIcon from '@/components/icons/LaserRemoval'
import AlexandriteIcon from '@/components/icons/AlexandriteIcon'

const ServicesList = () => {
  const scopedT = useScopedI18n('servicesBlock')
  const scopedButtonsT = useScopedI18n('buttons')

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <div className="flex flex-col gap-2 w-full md:max-w-[420px] 3xl:max-w-[560px]">
        <Accordion
          title={scopedT('laserEpilation.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<LaserRemovalIcon />}
        >
          {scopedT('laserEpilation.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('alexandrite.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<AlexandriteIcon />}
        >
          {scopedT('laserEpilation.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('laserEpilation.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<LaserRemovalIcon />}
        >
          {scopedT('laserEpilation.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('correction.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<LaserRemovalIcon />}
        >
          {scopedT('correction.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('darsonval.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<AlexandriteIcon />}
        >
          {scopedT('laserEpilation.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('aikun.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<LaserRemovalIcon />}
        >
          {scopedT('aikun.longDesc')}
        </Accordion>
      </div>
      <div className="flex flex-col gap-2 w-full md:max-w-[420px] 3xl:max-w-[560px]">
        <Accordion
          title={scopedT('hydroFacial.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<LaserRemovalIcon />}
        >
          {scopedT('hydroFacial.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('pilates.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<AlexandriteIcon />}
        >
          {scopedT('pilates.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('cleanFace.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<LaserRemovalIcon />}
        >
          {scopedT('cleanFace.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('emsTesla.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<LaserRemovalIcon />}
        >
          {scopedT('emsTesla.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('ultrasoundClean.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<AlexandriteIcon />}
        >
          {scopedT('ultrasoundClean.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('bodySculpture.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<LaserRemovalIcon />}
        >
          {scopedT('bodySculpture.longDesc')}
        </Accordion>
      </div>
      <div className="flex flex-col gap-2 w-full md:max-w-[420px] 3xl:max-w-[560px]">
        <Accordion
          title={scopedT('weightLoss.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<LaserRemovalIcon />}
        >
          {scopedT('weightLoss.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('massage.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<AlexandriteIcon />}
        >
          {scopedT('massage.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('lymphaticDrainage.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<LaserRemovalIcon />}
        >
          {scopedT('lymphaticDrainage.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('trichology.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<LaserRemovalIcon />}
        >
          {scopedT('trichology.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('hairColoring.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<AlexandriteIcon />}
        >
          {scopedT('hairColoring.longDesc')}
        </Accordion>
        <Accordion
          title={scopedT('hairCut.title')}
          link={scopedButtonsT('learnMore')}
          href="#"
          icon={<LaserRemovalIcon />}
        >
          {scopedT('hairCut.longDesc')}
        </Accordion>
      </div>
    </div>
  )
}

export default ServicesList
