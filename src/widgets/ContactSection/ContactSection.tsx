import { Typography } from '@mui/material'
import PageSection from '../../shared/ui/PageSection/PageSection'
import ButtonPrimary from '../../shared/ui/ButtonPrimary/ButtonPrimary'
import DesignCircle from '../../shared/ui/DesignCircle/DesignCircle'
import AbsoulteContainer from '../../shared/ui/AbsoluteContainer/AbsoulteContainer'

function ContactSection() {
  return (
    <PageSection id="contact-section" classname="mt-32">
      <Typography variant="h2" className="relative z-10 md:w-[700px] max-md: text-4xl">
        Свяжитесь с юристом нашей фирмы
      </Typography>
      <p className="text-2xl leading-8 mt-8 relative z-10 max-md:text-xl">
        Mi quis hendrerit dolor magna eget est lorem. In est ante in nibh mauris cursus mattis molestie a. Tortor
        condimentum lacinia quis vel eros donec ac odio tempor. Vitae sapien pellentesque habitant morbi tristique.
        Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Bibendum at varius vel pharetra vel turpis.
      </p>

      <ButtonPrimary content="Посмотреть больше" />

      <AbsoulteContainer classname="inset-y-0 right-0 top-[30%] max-md:absolute max-md:opacity-70">
        <DesignCircle classname="-z-10" />
      </AbsoulteContainer>
    </PageSection>
  )
}

export default ContactSection
