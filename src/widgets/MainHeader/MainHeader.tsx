import { MainHeaderProps } from '../../shared/model/types'
import Burger from '../../shared/ui/Burger/Burger'
import logo from '../../shared/assets/react.svg'

function MainHeader({ classname }: MainHeaderProps) {
  return (
    <header className={`site-header ${classname ?? ''}`}>
      <div className="p-2 flex justify-between items-center">
        <img src={logo} alt="" />
        <Burger />
      </div>
    </header>
  )
}

export default MainHeader
