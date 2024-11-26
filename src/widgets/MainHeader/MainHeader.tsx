import { MainHeaderProps } from '../../shared/model/types'

function MainHeader({ children, classname }: MainHeaderProps) {
  return <header className={classname ?? ''}>{children}</header>
}

export default MainHeader
