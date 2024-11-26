import { createLazyFileRoute } from '@tanstack/react-router'
import PageSection from '../widgets/PageSection/PageSection'
import AbsoulteContainer from '../shared/ui/AbsoulteContainer'
import { Box, Typography } from '@mui/material'
import FullWidthImage from '../shared/ui/FullWidthImage'
import heroImage from '../assets/1.jpg'
import BackgroundTextContainer from '../shared/ui/BackgroundTextContainer'
import ButtonPrimary from '../shared/ui/ButtonPrimary'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Box className="page-content">
      <PageSection classname="mt-8 bg-gradient-to-b from-secondary to-primary">
        <AbsoulteContainer classname="-top-5 -left-10 w-[620px] ">
          <BackgroundTextContainer gradient="to right, #292d33, #555c66">
            <Typography variant="h3">Творчество на службе у наших клиентов</Typography>
          </BackgroundTextContainer>
        </AbsoulteContainer>

        <FullWidthImage classname="max-h-[900px] pt-24" src={heroImage} />

        <AbsoulteContainer classname="right-0 -bottom-56 w-[458px]">
          <BackgroundTextContainer>
            <p className="text-black text-xl leading-7">
              Mi quis hendrerit dolor magna eget est lorem. In est ante in nibh mauris cursus mattis molestie a. Tortor
              condimentum lacinia quis vel eros donec ac odio tempor. Vitae sapien pellentesque habitant morbi
              tristique. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Bibendum at varius vel
              pharetra vel turpis.
            </p>

            <ButtonPrimary content="Более" />
          </BackgroundTextContainer>
        </AbsoulteContainer>
      </PageSection>
    </Box>
  )
}
