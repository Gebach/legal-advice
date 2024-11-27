import { ButtonPrimaryProps } from '../../model/types'
import { Button } from '@mui/material'

function ButtonPrimary({ content, linkTo, classname }: ButtonPrimaryProps) {
  return (
    <Button
      href={linkTo ?? ''}
      variant="contained"
      sx={{
        backgroundColor: 'secondary.light',
      }}
      className={`button-primary mt-6 py-4 px-12 group/button-primary transition-all hover:bg-secondary ${classname}`}
    >
      <span className="text-black uppercase font-bold transition-colors group-hover/button-primary:text-white">
        {content}
      </span>
    </Button>
  )
}

export default ButtonPrimary
