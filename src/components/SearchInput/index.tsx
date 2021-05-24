import React, { InputHTMLAttributes } from 'react'

import { Container, Input, Form } from './styles'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
}

function SearchInput({ placeholder, ...rest }: SearchInputProps) {
	return (
		<Container>
			<Form
				onSubmit={e => {
					e.preventDefault()
				}}
			>
				<Input type="text" placeholder={placeholder} {...rest} />
			</Form>
		</Container>
	)
}

export default SearchInput
