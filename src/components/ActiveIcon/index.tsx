import React, { ButtonHTMLAttributes } from 'react'

import { Container, MinusIcon, PlusIcon, Button } from './styles'

interface ActiveIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	active: boolean
}

function ActiveIcon({ active, ...rest }: ActiveIconProps) {
	return (
		<Container>
			<Button {...rest}>{active ? <MinusIcon /> : <PlusIcon />}</Button>
		</Container>
	)
}

export default ActiveIcon
