import { AbsoulteContainerProps } from '../../model/types'

function AbsoulteContainer({ children, classname }: AbsoulteContainerProps) {
  return <div className={`absolute ${classname ?? ''}`}>{children}</div>
}

export default AbsoulteContainer
