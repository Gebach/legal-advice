import { Box, Typography } from '@mui/material'
import PageSection from '../../shared/ui/PageSection/PageSection'
import FullWidthImage from '../../shared/ui/FullWidthImage/FullWidthImage'
import BackgroundTextContainer from '../../shared/ui/BackgroundTextContainer/BackgroundTextContainer'
import ButtonPrimary from '../../shared/ui/ButtonPrimary/ButtonPrimary'
import { AutoAwesomeOutlined, BalanceOutlined, VerifiedOutlined } from '@mui/icons-material'
import AbsoulteContainer from '../../shared/ui/AbsoluteContainer/AbsoulteContainer'
import LegalAreasImage from '../../shared/assets/3.jpg'

function LegalAreas() {
  return (
    <PageSection id="legal-areas" classname="mt-12 flex flex-col md:items-end items-center">
      <div className="bg-gradient-to-b absolute from-secondary to-primary max-w-[80%] w-full h-[720px] -left-2/4 -top-32"></div>
      <Box className="flex justify-center items-start xl:w-[900px] md:w-full w-11/12 md:h-[720px] overflow-hidden relative">
        <FullWidthImage classname="max-md:w-full" src={LegalAreasImage} />
      </Box>

      <AbsoulteContainer classname="grid grid-cols-1 xl:absolute md:gap-8 gap-4 xl:-top-28 xl:-right-32 md:-top-32 right-0 top-4 relative  justify-center items-end text-center xl:max-w-[450px] md:max-w-prose max-w-[350px] w-full">
        <Box>
          <BackgroundTextContainer classname="md:py-12 py-4">
            <BalanceOutlined sx={{ fontSize: 48, color: 'secondary.light' }} />

            <Typography variant="h5" className="font-semibold max-md:text-xl">
              Юридические услуги
            </Typography>

            <ButtonPrimary linkTo="#legal-services" content="Подробнее" />
          </BackgroundTextContainer>
        </Box>

        <Box>
          <BackgroundTextContainer classname="md:py-12 py-4">
            <VerifiedOutlined sx={{ fontSize: 48, color: 'secondary.light' }} />

            <Typography variant="h5" className="font-semibold max-md:text-xl">
              Услуги по экономической и информационной безопасности бизнеса
            </Typography>

            <ButtonPrimary linkTo="#security-services" content="Подробнее" />
          </BackgroundTextContainer>
        </Box>

        <Box>
          <BackgroundTextContainer classname="md:py-12 py-4">
            <AutoAwesomeOutlined sx={{ fontSize: 48, color: 'secondary.light' }} />

            <Typography variant="h5" className="font-semibold max-md:text-xl">
              Эксклюзивные услуги
            </Typography>

            <ButtonPrimary linkTo="#exclusive-services" content="Подробнее" />
          </BackgroundTextContainer>
        </Box>
      </AbsoulteContainer>
    </PageSection>
  )
}

export default LegalAreas
