import { Typography } from '@mui/material'
import PageSection from '../../shared/ui/PageSection/PageSection'
import ButtonPrimary from '../../shared/ui/ButtonPrimary/ButtonPrimary'
import AbsoulteContainer from '../../shared/ui/AbsoluteContainer/AbsoulteContainer'
import DesignCircle from '../../shared/ui/DesignCircle/DesignCircle'

function LegalWorkSection() {
  return (
    <PageSection id="legal-work" classname="md:mt-32 flex flex-col justify-center items-end">
      <Typography variant="h2" className="relative z-10 md:w-[700px] text-right max-md:text-2xl">
        Комплексное юридическое обслуживание
      </Typography>
      <p className="text-2xl leading-8 mt-8 relative z-10 text-right max-md:text-xl">
        Мы предоставляем полный спектр юридических услуг для вашего бизнеса или личных потребностей. Комплексное
        сопровождение включает правовую экспертизу, составление договоров, защиту интересов в суде и консультации по
        текущим вопросам. Мы обеспечиваем надёжную правовую основу для вашего спокойствия и уверенности в будущем.
      </p>

      <ButtonPrimary linkTo="#legal-services" content="Посмотреть больше" />

      <AbsoulteContainer classname="inset-y-0 left-0 top-[20%] max-md:absolute max-md:opacity-70">
        <DesignCircle classname="-z-10" />
      </AbsoulteContainer>
    </PageSection>
  )
}

export default LegalWorkSection
