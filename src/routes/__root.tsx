import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import logo from '../assets/react.svg'
import Burger from '../shared/ui/Burger'
import { Box, Container } from '@mui/material'
import MainHeader from '../widgets/MainHeader/MainHeader'

export const Route = createRootRoute({
  component: () => (
    <Box className="bg-primary min-h-screen">
      <Container>
        <MainHeader classname="site-header kkk">
          <div className="p-2 flex justify-between items-center">
            <img src={logo} alt="" />
            <Burger />
          </div>
        </MainHeader>
        <Outlet />
        <TanStackRouterDevtools />
      </Container>
    </Box>
  ),
})
