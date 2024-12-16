import { ButtonPrimaryProps } from '../../model/types'
import { Button } from '@mui/material'
import scrollTo from '../../../features/scrollTo'

function ButtonPrimary({ content, linkTo, classname, type = 'button', disabled = false, onClick }: ButtonPrimaryProps) {
  return (
    <Button
      type={type}
      variant="contained"
      sx={{
        backgroundColor: 'secondary.light',
      }}
      className={`button-primary mt-6 py-4 px-12 group/button-primary transition-all hover:bg-secondary ${classname}`}
      onClick={() => (linkTo ? scrollTo(linkTo) : onClick && onClick)}
      disabled={disabled}
    >
      <span className="text-black uppercase font-bold transition-colors group-hover/button-primary:text-white">
        {content}
      </span>
    </Button>
  )
}

export default ButtonPrimary
