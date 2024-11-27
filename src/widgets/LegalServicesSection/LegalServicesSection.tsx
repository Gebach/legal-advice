import { Box } from '@mui/material'
import PageSection from '../../shared/ui/PageSection/PageSection'
import { fakeLegalServicesJson } from '../../shared/api/fakeJson'
import ListIconComponent from '../../shared/ui/ListIconComponent/ListIconComponent'
import FullWidthImage from '../../shared/ui/FullWidthImage/FullWidthImage'
import LegalServicesImage from '../../shared/assets/LegalServicesSection/still-life-with-scales-justice.jpg'

function LegalServicesSection() {
  return (
    <PageSection id="legal-services">
      <Box className="flex justify-between items-center">
        <ListIconComponent classname="flex-1" title="Юридические услуги" items={fakeLegalServicesJson} />
        <FullWidthImage classname="w-full flex-1" src={LegalServicesImage} />
      </Box>
    </PageSection>
  )
}

export default LegalServicesSection
