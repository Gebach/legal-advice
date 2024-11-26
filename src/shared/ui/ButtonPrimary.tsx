import { Link } from '@tanstack/react-router'
import { ButtonPrimaryProps } from '../model/types'

function ButtonPrimary({ content, linkTo }: ButtonPrimaryProps) {
  return (
    <div className="button-primary mt-6 group/button-primary py-4 px-12 bg-secondary-light cursor-pointer transition-colors hover:bg-secondary max-w-fit">
      <span className="text-black uppercase font-bold transition-colors group-hover/button-primary:text-white">
        {linkTo ? <Link to={linkTo}>{content}</Link> : content}
      </span>
    </div>
  )
}

export default ButtonPrimary
