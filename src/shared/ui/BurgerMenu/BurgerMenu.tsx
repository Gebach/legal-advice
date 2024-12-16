import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useState } from 'react'
import { Box, Fade, Menu } from '@mui/material'
import ButtonLink from '../ButtonLink/ButtonLink'

function Burger({ className, color = 'inherit' }: { className?: string; color?: string }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    // scrollTo(e.target)
    setAnchorEl(null)
  }

  return (
    <>
      <div className={`${className ?? ''}`} onClick={handleClick}>
        <IconButton edge="start" sx={{ mr: 2, color: color }}>
          <MenuIcon fontSize="large" sx={{ color: 'white' }} />
        </IconButton>
      </div>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{ backgroundColor: 'rgba(0,0,0,0.4)', color: '#000' }}
      >
        {/* <MenuItem onClick={e => handleClose(e)}></MenuItem>
        <MenuItem onClick={handleClose}></MenuItem>
        <MenuItem onClick={handleClose}></MenuItem>
        <MenuItem onClick={handleClose}></MenuItem> */}
        <Box className="flex flex-col justify-start items-start gap-4 p-4" sx={{ backgroundColor: 'secondary.light' }}>
          <ButtonLink classname="w-full" onClick={handleClose} content="Виды услуг" linkTo="#legal-areas" />
          <ButtonLink classname="w-full" onClick={handleClose} content="Юридические услуги" linkTo="#legal-services" />
          <ButtonLink
            classname="w-full"
            onClick={handleClose}
            content="Услуги по безопасноти бизнеса"
            linkTo="#security-services"
          />
          <ButtonLink
            classname="w-full"
            onClick={handleClose}
            content="Эксклюзивные услуги"
            linkTo="#exclusive-services"
          />
        </Box>
      </Menu>
    </>
  )
}

export default Burger
