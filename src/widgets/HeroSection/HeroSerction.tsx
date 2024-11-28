import { Typography } from '@mui/material'
import AbsoulteContainer from '../../shared/ui/AbsoluteContainer/AbsoulteContainer'
import BackgroundTextContainer from '../../shared/ui/BackgroundTextContainer/BackgroundTextContainer'
import PageSection from '../../shared/ui/PageSection/PageSection'
import FullWidthImage from '../../shared/ui/FullWidthImage/FullWidthImage'
import ButtonPrimary from '../../shared/ui/ButtonPrimary/ButtonPrimary'
import DesignCircle from '../../shared/ui/DesignCircle/DesignCircle'
import heroImage from '../../shared/assets/1.jpg'

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

      <FullWidthImage classname="md:max-h-[900px] max-md:w-full md:pt-24" src={heroImage} />

      <AbsoulteContainer classname="md:right-0 md:-bottom-56 md:w-[458px]">
        <BackgroundTextContainer>
          <p className="text-black text-2xl leading-8 max-md:text-xl">
            Mi quis hendrerit dolor magna eget est lorem. In est ante in nibh mauris cursus mattis molestie a. Tortor
            condimentum lacinia quis vel eros donec ac odio tempor. Vitae sapien pellentesque habitant morbi tristique.
            Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Bibendum at varius vel pharetra vel
            turpis.
          </p>

          <ButtonPrimary content="Более" />
        </BackgroundTextContainer>
      </AbsoulteContainer>

      <AbsoulteContainer classname="md:-left-8 md:-bottom-32 left-0 -bottom-52 max-md:absolute">
        <DesignCircle />
      </AbsoulteContainer>
    </PageSection>
  )
}

export default HeroSection
