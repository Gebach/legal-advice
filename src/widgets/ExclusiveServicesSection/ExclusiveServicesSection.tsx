import { Box } from '@mui/material'
import PageSection from '../../shared/ui/PageSection/PageSection'
import { fakeExclusiveServicesJson } from '../../shared/api/fakeJson'
import ListIconComponent from '../../shared/ui/ListIconComponent/ListIconComponent'
import FullWidthImage from '../../shared/ui/FullWidthImage/FullWidthImage'
import ExclusiveServicesImage from '../../shared/assets/ExclusiveServicesSection/exclusive-services.jpg'

function ExclusiveServicesSection() {
  return (
    <PageSection id="exclusive-services">
      <Box className="flex justify-between items-center gap-10">
        <ListIconComponent classname="flex-1" title="Эксклюзивные услуги" items={fakeExclusiveServicesJson} />
        <FullWidthImage classname="w-full flex-1" src={ExclusiveServicesImage} />
      </Box>
    </PageSection>
  )
}

export default ExclusiveServicesSection
