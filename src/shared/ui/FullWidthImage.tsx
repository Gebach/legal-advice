import { FullWidthImageProps } from '../model/types'

function FullWidthImage({ classname, src, alt }: FullWidthImageProps) {
  return <img className={classname} src={src} alt={alt ?? ''} />
}

export default FullWidthImage
