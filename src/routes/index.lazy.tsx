import { createLazyFileRoute } from '@tanstack/react-router'
import { Box } from '@mui/material'
import HeroSection from '../widgets/HeroSection/HeroSerction'
import ContactSection from '../widgets/ContactSection/ContactSection'
import LabourRightsSection from '../widgets/LabourRightsSection/LabourRightsSection'
import LegalWorkSection from '../widgets/LegalWorkSection/LegalWorkSection'
import LegalAreas from '../widgets/LegalAreas/LegalAreas'
import LegalServicesSection from '../widgets/LegalServicesSection/LegalServicesSection'
import SecurityServicesSection from '../widgets/SecurityServicesSection/SecurityServicesSection'
import ExclusiveServicesSection from '../widgets/ExclusiveServicesSection/ExclusiveServicesSection'
import ServiceFormatsSection from '../widgets/ServiceFormatsSection/ServiceFormatsSection'
import ContactForm from '../widgets/ContactForm/ContactForm'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Box className="page-content flex flex-col md:gap-48 gap-32 pt-24">
      <HeroSection />
      <ContactSection />
      <LabourRightsSection />
      <LegalWorkSection />
      <LegalAreas />
      <LegalServicesSection />
      <SecurityServicesSection />
      <ExclusiveServicesSection />
      <ServiceFormatsSection />
      <ContactForm />
    </Box>
  )
}
