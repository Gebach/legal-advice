import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Box, Container } from '@mui/material'
import MainHeader from '../widgets/MainHeader/MainHeader'

export const Route = createRootRoute({
  component: () => (
    <Box className="bg-primary min-h-screen">
      <Container>
        <MainHeader classname="site-header kkk"></MainHeader>
        <Outlet />
        <TanStackRouterDevtools />
      </Container>
    </Box>
  ),
})
