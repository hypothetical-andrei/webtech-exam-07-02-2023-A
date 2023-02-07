import React from 'react'
import App from '../components/App'
import { fireEvent, render, screen } from '@testing-library/react';

it ('renders a list of companies with edit buttons', () => {
	const component = render(<App />)
	const companies = component.getAllByText(/revenue/)
	const editButtons = component.getAllByText('edit')
	expect(companies.length).toEqual(2)	
	expect(editButtons.length).toEqual(2)	
})

it ('goes to edit mode upon clicking', () => {
	const component = render(<App />)
	const editButtons = component.getAllByText('edit')
	const firstEdit = editButtons[0]
	fireEvent.click(firstEdit)
	const inputs = component.queryAllByRole('textbox')
	expect(inputs.length).toEqual(3)
})

it ('can return to view mode', () => {
	const component = render(<App />)
	const editButtons = component.getAllByText('edit')
	const firstEdit = editButtons[0]
	fireEvent.click(firstEdit)
	const cancelButton = component.queryByText('cancel')
	fireEvent.click(cancelButton)
	expect(screen.getByText(/acme/)).toBeTruthy()
})

it ('can save a company', () => {
	const component = render(<App />)
	const editButtons = component.getAllByText('edit')
	const firstEdit = editButtons[0]
	fireEvent.click(firstEdit)
	const nameInput = component.getByDisplayValue('acme inc')
	fireEvent.input(nameInput, { target: { value: 'test' }})
	const saveButton = component.queryByText('save')
	fireEvent.click(saveButton)
	expect(screen.getByText(/test/)).toBeTruthy()
})