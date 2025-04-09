import { createLazyFileRoute } from '@tanstack/react-router'
import PolicyBox from '../widgets/PolicyBox/PolicyBox'

export const Route = createLazyFileRoute('/policy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PolicyBox />
}
