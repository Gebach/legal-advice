import { BackgroundTextContainerProps } from '../model/types'

function BackgroundTextContainer({ children, classname, gradient, background = '#fff' }: BackgroundTextContainerProps) {
  return (
    <div
      className={`background-text p-8 ${classname}`}
      style={{ background: gradient ? `linear-gradient(${gradient})` : background }}
    >
      {children}
    </div>
  )
}

export default BackgroundTextContainer
