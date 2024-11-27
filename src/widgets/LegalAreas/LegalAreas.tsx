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
    <PageSection id="legal-areas" classname="mt-12">
      <div className="bg-gradient-to-b absolute from-secondary to-primary max-w-[80%] w-full h-[720px] -left-2/4 -top-32"></div>
      <Box className="flex justify-center items-start w-[900px] h-[720px] overflow-hidden relative">
        <FullWidthImage src={LegalAreasImage} />
      </Box>

      <AbsoulteContainer classname="grid grid-cols-1 gap-8 -top-28 -right-32 justify-center items-end text-center max-w-[450px] w-full">
        <Box>
          <BackgroundTextContainer classname="py-12">
            <BalanceOutlined sx={{ fontSize: 48, color: 'secondary.light' }} />

            <Typography variant="h5" className="font-semibold">
              Юридические услуги
            </Typography>

            <ButtonPrimary linkTo="/#legal-services" content="Подробнее" />
          </BackgroundTextContainer>
        </Box>

        <Box>
          <BackgroundTextContainer classname="py-12">
            <VerifiedOutlined sx={{ fontSize: 48, color: 'secondary.light' }} />

            <Typography variant="h5" className="font-semibold">
              Услуги по экономической и информационной безопасности бизнеса
            </Typography>

            <ButtonPrimary linkTo="/#security-services" content="Подробнее" />
          </BackgroundTextContainer>
        </Box>

        <Box>
          <BackgroundTextContainer classname="py-12">
            <AutoAwesomeOutlined sx={{ fontSize: 48, color: 'secondary.light' }} />

            <Typography variant="h5" className="font-semibold">
              Эксклюзивные услуги
            </Typography>

            <ButtonPrimary linkTo="/#exclusive-services" content="Подробнее" />
          </BackgroundTextContainer>
        </Box>
      </AbsoulteContainer>
    </PageSection>
  )
}

export default LegalAreas
