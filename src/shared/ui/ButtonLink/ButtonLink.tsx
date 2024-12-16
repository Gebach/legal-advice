import { Button } from '@mui/material'
import { ButtonLinkProps } from '../../model/types'
import scrollTo from '../../../features/scrollTo'

function ButtonLink({
  content,
  linkTo,
  classname,
  scrolled = false,
  type = 'button',
  disabled = false,
  onClick,
  color = 'white',
}: ButtonLinkProps) {
  const isLinkOutTo = !linkTo.startsWith('#')

  function onClickHandler() {
    if (!isLinkOutTo) {
      if (onClick) {
        onClick()
        scrollTo(linkTo)
      } else {
        scrollTo(linkTo)
      }
    }
  }

  return (
    <Button
      type={type}
      variant="text"
      className={`button-link group/button-link transition-all hover:bg-opacity-0 ${scrolled ? 'bg-secondary-light' : 'bg-transparent'} ${classname ?? ''}`}
      onClick={onClickHandler}
      disabled={disabled}
      href={isLinkOutTo ? linkTo : ''}
      sx={{ justifyContent: 'flex-start' }}
    >
      <span className={`text-${color} transition-colors group-hover/button-link:text-black`}>{content}</span>
    </Button>
  )
}

export default ButtonLink
