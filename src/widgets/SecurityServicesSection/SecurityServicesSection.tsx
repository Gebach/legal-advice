import { Box } from '@mui/material'
import PageSection from '../../shared/ui/PageSection/PageSection'
import FullWidthImage from '../../shared/ui/FullWidthImage/FullWidthImage'
import ListIconComponent from '../../shared/ui/ListIconComponent/ListIconComponent'
import { fakeSecurityServicesJson } from '../../shared/api/fakeJson'
import SecurityServicesImage from '../../shared/assets/SecurityServicesSection/secutiy.jpg'

function LegalServicesSection() {
  return (
    <PageSection id="legal-services">
      <Box className="flex justify-between items-center">
        <Box className="overflow-hidden max-w-fit flex-1 flex justify-center items-center">
          <FullWidthImage classname="w-[700px]" src={SecurityServicesImage} />
        </Box>
        <ListIconComponent
          classname="flex-1 pl-8"
          title="Услуги по экономической и информационной безопасности бизнеса"
          items={fakeSecurityServicesJson}
        />
      </Box>
    </PageSection>
  )
}

export default LegalServicesSection
