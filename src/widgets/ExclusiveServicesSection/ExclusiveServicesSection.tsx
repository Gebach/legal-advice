import { Box } from '@mui/material'
import PageSection from '../../shared/ui/PageSection/PageSection'
import { fakeExclusiveServicesJson } from '../../shared/api/fakeJson'
import ListIconComponent from '../../shared/ui/ListIconComponent/ListIconComponent'
import FullWidthImage from '../../shared/ui/FullWidthImage/FullWidthImage'
import ExclusiveServicesImage from '../../shared/assets/ExclusiveServicesSection/exclusive-services.jpg'

function ExclusiveServicesSection() {
  return (
    <PageSection id="exclusive-services">
      <Box className="flex lg:flex-row flex-col justify-between items-center gap-10">
        <ListIconComponent classname="flex-1" title="Эксклюзивные услуги" items={fakeExclusiveServicesJson} />
        <Box className="flex-1 max-lg:max-h-[450px] max-lg:w-full max-lg:overflow-hidden">
          <FullWidthImage classname="w-full lg:max-h-full max-lg:relative " src={ExclusiveServicesImage} />
        </Box>
        {/* <FullWidthImage classname="w-full flex-1" src={ExclusiveServicesImage} /> */}
      </Box>
    </PageSection>
  )
}

export default ExclusiveServicesSection
