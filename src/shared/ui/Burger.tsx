import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

function Burger() {
  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
    </div>
  )
}

export default Burger
