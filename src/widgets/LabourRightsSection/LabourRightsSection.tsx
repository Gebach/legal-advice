import { Box, Typography } from '@mui/material'
import AbsoulteContainer from '../../shared/ui/AbsoluteContainer/AbsoulteContainer'
import BackgroundTextContainer from '../../shared/ui/BackgroundTextContainer/BackgroundTextContainer'
import ButtonPrimary from '../../shared/ui/ButtonPrimary/ButtonPrimary'
import FullWidthImage from '../../shared/ui/FullWidthImage/FullWidthImage'
import PageSection from '../../shared/ui/PageSection/PageSection'
import LabourImage from '../../shared//assets/2_2.jpg'

function LabourRightsSection() {
  return (
    <PageSection id="labour-rights" classname="mt-8 bg-gradient-to-b from-secondary to-primary">
      <Box className="md:w-full w-[285px] flex justify-center items-start md:ml-16 m-auto md:h-[720px] overflow-hidden relative md:bottom-32 bottom-8">
        <FullWidthImage classname="md:pb-32 max-md:w-full" src={LabourImage} />
      </Box>

      <AbsoulteContainer classname="xl:pl-0 md:pl-8 -left-10 -bottom-32 md:w-[570px]">
        <BackgroundTextContainer classname="py-16">
          <Typography variant="h4" className="mb-4 font-semibold max-md:text-2xl">
            Трудовое право
          </Typography>
          <p className="text-black text-2xl leading-9 max-md:text-xl">
            Мы помогаем работодателям и сотрудникам находить баланс и справедливые решения в рамках трудового
            законодательства. Наши услуги включают разработку трудовых договоров, защиту прав при увольнении,
            урегулирование трудовых споров и другие вопросы. Мы гарантируем поддержку на всех этапах взаимодействия с
            трудовым правом.
          </p>

          <ButtonPrimary linkTo="#legal-areas" content="Подробнее" />
        </BackgroundTextContainer>
      </AbsoulteContainer>
    </PageSection>
  )
}

export default LabourRightsSection
