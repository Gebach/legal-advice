import { Box } from '@mui/material'
import PageSection from '../../shared/ui/PageSection/PageSection'
import FullWidthImage from '../../shared/ui/FullWidthImage/FullWidthImage'
import ListIconComponent from '../../shared/ui/ListIconComponent/ListIconComponent'
import { fakeSecurityServicesJson } from '../../shared/api/fakeJson'
import SecurityServicesImage from '../../shared/assets/SecurityServicesSection/secutiy.jpg'

function LegalServicesSection() {
  return (
    <PageSection id="security-services">
      <Box className="flex lg:flex-row flex-col-reverse justify-between items-center">
        <Box className="overflow-hidden max-lg:max-h-[450px] max-w-fit flex-1 flex justify-center items-center">
          <FullWidthImage classname="lg:w-[700px] w-full lg:max-h-full max-lg:relative" src={SecurityServicesImage} />
        </Box>
        <ListIconComponent
          classname="flex-1 md:pl-8"
          title="Услуги по экономической и информационной безопасности бизнеса"
          items={fakeSecurityServicesJson}
        />
      </Box>
    </PageSection>
  )
}

export default LegalServicesSection
