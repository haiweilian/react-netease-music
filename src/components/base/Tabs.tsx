import './Tabs.scss'
import { useEffect, useState } from 'react'
import type { ISingleTab } from '~/types'

interface TabsProps {
  tabs: ISingleTab[]
  value?: string | number
  onChange: (value: string | number) => void
}

export default function Tabs({ tabs, value, onChange }: TabsProps) {
  const [currentValue, setCurrentValue] = useState<string | number>()
  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  return (
    <ul className="tabs">
      {tabs.map((tab) => (
        <li
          key={tab.value}
          className={tab.value === currentValue ? 'tabs__item is-active' : 'tabs__item'}
          onClick={() => {
            setCurrentValue(tab.value)
            onChange(tab.value)
          }}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  )
}
