import { Typography } from '@mui/material'
import PageSection from '../../shared/ui/PageSection/PageSection'
import ButtonPrimary from '../../shared/ui/ButtonPrimary/ButtonPrimary'
import AbsoulteContainer from '../../shared/ui/AbsoluteContainer/AbsoulteContainer'
import DesignCircle from '../../shared/ui/DesignCircle/DesignCircle'

function LegalWorkSection() {
  return (
    <PageSection id="legal-work" classname="mt-32 flex flex-col justify-center items-end">
      <Typography variant="h2" className="relative z-10 md:w-[700px] text-right max-md:text-2xl">
        Комплексное юридическое обслуживание
      </Typography>
      <p className="text-2xl leading-8 mt-8 relative z-10 text-right max-md:text-xl">
        Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Dignissim enim sit amet venenatis urna
        cursus eget nunc. Sit amet cursus sit amet dictum sit amet. Dolor sit amet consectetur adipiscing elit
        pellentesque habitant morbi tristique. Risus nullam eget felis eget nunc lobortis mattis aliquam.
      </p>

      <ButtonPrimary content="Посмотреть больше" />

      <AbsoulteContainer classname="inset-y-0 left-0 top-[20%] max-md:absolute max-md:opacity-70">
        <DesignCircle classname="-z-10" />
      </AbsoulteContainer>
    </PageSection>
  )
}

export default LegalWorkSection
