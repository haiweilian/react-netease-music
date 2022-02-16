import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { localPlaylistTabs } from '~/utils/local'
import Tabs from '../Tabs'

describe('Tabs', () => {
  test('should tabs', () => {
    const onChange = jest.fn()
    const first = localPlaylistTabs[0].value
    const last = localPlaylistTabs[localPlaylistTabs.length - 1].value
    const { container } = render(<Tabs tabs={localPlaylistTabs} value={first} onChange={onChange} />)

    // init
    expect(screen.getByText(first)).toHaveClass('is-active')
    expect(container).toMatchSnapshot()

    // click
    fireEvent.click(screen.getByText(last))
    expect(screen.getByText(last)).toHaveClass('is-active')
    expect(onChange).toHaveBeenCalled()
    expect(container).toMatchSnapshot()
  })
})
