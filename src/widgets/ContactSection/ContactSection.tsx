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
        Нужна квалифицированная помощь? Наши юристы готовы проконсультировать вас по любым правовым вопросам. Мы
        обеспечим оперативный разбор вашей ситуации и предложим наилучшие пути её решения. Запишитесь на консультацию
        сегодня и сделайте шаг к защите ваших прав и интересов.
      </p>

      <ButtonPrimary linkTo="#contact-form" content="Связаться" />

      <AbsoulteContainer classname="inset-y-0 right-0 top-[30%] max-md:absolute">
        <DesignCircle classname="-z-10" />
      </AbsoulteContainer>
    </PageSection>
  )
}

export default ContactSection
