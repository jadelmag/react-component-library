import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, beforeEach, test, expect } from 'jest'

import Button from '../components/Button'

describe('Button', () => {
  const label = /Hello world!/i
  beforeEach(() => {
    render(<Button label={`${label}`} />)
  })

  test('renders the Button component', () => {
    const button = screen.getByText(`${label}`)
    expect(button).toBeInTheDocument()
  })
})
