import './Icon.scss'

interface IconProps {
  name?: string
  prefix?: string
  size?: number
  [x: string]: any
}

export default function Icon({ name = '', prefix = 'icon', size = 16, ...props }: IconProps) {
  const symbolId = `#${prefix}-${name}`

  const getStyle = () => {
    let s = `${size}`
    s = `${s.replace('px', '')}px`
    return {
      width: s,
      height: s,
    }
  }

  return (
    <svg style={getStyle()} className={prefix} aria-hidden="true" {...props}>
      <use href={symbolId} />
    </svg>
  )
}
