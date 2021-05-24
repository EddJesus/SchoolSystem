import React, { HTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	active: boolean
	style?: any
}

function Accordion({ children, active, style }: AccordionProps) {
	return <>{active && <Container>{children}</Container>}</>
}

export default Accordion
