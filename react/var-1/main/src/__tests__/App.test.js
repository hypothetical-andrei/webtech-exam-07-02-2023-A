import React from 'react'
import App from '../components/App'
import { render, screen } from '@testing-library/react';

it('renders without crashing', () => {
  render(<App />)
})
