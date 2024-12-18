import { Typography } from '@mui/material'
import AbsoulteContainer from '../../shared/ui/AbsoluteContainer/AbsoulteContainer'
import BackgroundTextContainer from '../../shared/ui/BackgroundTextContainer/BackgroundTextContainer'
import PageSection from '../../shared/ui/PageSection/PageSection'
import FullWidthImage from '../../shared/ui/FullWidthImage/FullWidthImage'
import ButtonPrimary from '../../shared/ui/ButtonPrimary/ButtonPrimary'
import DesignCircle from '../../shared/ui/DesignCircle/DesignCircle'
import heroImage from '../../shared/assets/1_1.jpg'

function HeroSection() {
  return (
    <PageSection id="hero-section" classname="mt-8 bg-gradient-to-b from-secondary to-primary">
      <AbsoulteContainer classname="-top-5 -left-10 md:w-[620px] ">
        <BackgroundTextContainer theme="dark" gradient="to right, #292d33, #555c66">
          <Typography variant="h3" className="max-md:text-2xl">
            Творчество на службе у наших клиентов
          </Typography>
        </BackgroundTextContainer>
      </AbsoulteContainer>

      <FullWidthImage classname="max-w-screen-lg w-full md:max-h-[900px] max-md:w-full md:pt-24" src={heroImage} />

      <AbsoulteContainer classname="md:right-0 md:-bottom-56 md:w-[458px]">
        <BackgroundTextContainer>
          <p className="text-black text-2xl leading-8 max-md:text-xl">
            Мы объединяем профессионализм, опыт и нестандартный подход к решению юридических задач. Наша команда
            стремится обеспечить максимальный результат для клиентов, используя инновационные методы и глубокие знания
            законодательства. Мы уверены, что каждая ситуация требует индивидуального подхода, поэтому наши решения
            всегда нацелены на успех и защиту ваших интересов.
          </p>

          <ButtonPrimary linkTo="#legal-areas" content="Более" />
        </BackgroundTextContainer>
      </AbsoulteContainer>

      <AbsoulteContainer classname="md:-left-8 md:-bottom-32 left-0 -bottom-44 max-md:absolute">
        <DesignCircle />
      </AbsoulteContainer>
    </PageSection>
  )
}

export default HeroSection
