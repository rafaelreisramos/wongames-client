import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { objectFit, objectPosition, ...rest } = props
    return <img {...rest} />
  }
})
