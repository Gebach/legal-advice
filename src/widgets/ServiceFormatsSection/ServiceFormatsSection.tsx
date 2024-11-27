import { Box, Typography } from '@mui/material'
import PageSection from '../../shared/ui/PageSection/PageSection'
import ListIconComponent from '../../shared/ui/ListIconComponent/ListIconComponent'
import { fakeServiceFormatsJson } from '../../shared/api/fakeJson'
import { DoneAll } from '@mui/icons-material'

function ServiceFormatsSection() {
  return (
    <PageSection id="service-formats">
      <Box className="flex flex-col justify-center items-center max-w-3xl mx-auto">
        <Typography variant="h3" className="center mb-6">
          Форматы обслуживания
        </Typography>
        <ListIconComponent
          items={fakeServiceFormatsJson}
          icon={<DoneAll sx={{ fontSize: 48, color: 'secondary.light' }} />}
        />
      </Box>
    </PageSection>
  )
}

export default ServiceFormatsSection
