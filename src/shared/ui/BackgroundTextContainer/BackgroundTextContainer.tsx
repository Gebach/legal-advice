import styled from 'styled-components'
import { BackgroundTextContainerProps } from '../../model/types'

function BackgroundTextContainer({
  children,
  classname,
  gradient,
  background = '#fff',
  theme = 'light',
}: BackgroundTextContainerProps) {
  const Inner = styled.div`
    color: ${theme === 'light' ? '#000' : '#fff'};
  `

  return (
    <div
      className={`background-text-container p-8 ${theme} ${classname}`}
      style={{
        background: gradient ? `linear-gradient(${gradient})` : background,
      }}
    >
      <Inner>{children}</Inner>
    </div>
  )
}

export default BackgroundTextContainer
