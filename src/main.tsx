import { createRoot } from 'react-dom/client'
import { createRouter, RouterProvider, useLocation } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import { THEME } from './shared/constants/constants'
import './index.scss'
import scrollTo from './features/scrollTo'

const router = createRouter({
  routeTree,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={THEME}>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </ThemeProvider>
)
