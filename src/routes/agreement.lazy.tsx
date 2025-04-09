import { createLazyFileRoute } from '@tanstack/react-router'
import AgreementBox from '../widgets/AgreementBox/AgreementBox'

export const Route = createLazyFileRoute('/agreement')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AgreementBox />
}
