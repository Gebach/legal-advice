import { Box } from '@mui/material'
import PageSection from '../../shared/ui/PageSection/PageSection'
import { fakeLegalServicesJson } from '../../shared/api/fakeJson'
import ListIconComponent from '../../shared/ui/ListIconComponent/ListIconComponent'
import FullWidthImage from '../../shared/ui/FullWidthImage/FullWidthImage'
import LegalServicesImage from '../../shared/assets/LegalServicesSection/still-life-with-scales-justice.jpg'

function LegalServicesSection() {
  return (
    <PageSection id="legal-services">
      <Box className="flex lg:flex-row flex-col justify-between items-center">
        <ListIconComponent classname="flex-1" title="Юридические услуги" items={fakeLegalServicesJson} />
        <Box className=" flex-1 max-lg:max-h-[450px] max-md:max-h-[300px] max-lg:overflow-hidden">
          <FullWidthImage
            classname="w-full lg:max-h-full max-lg:relative max-lg:bottom-80 max-md:bottom-32"
            src={LegalServicesImage}
          />
        </Box>
      </Box>
    </PageSection>
  )
}

export default LegalServicesSection
