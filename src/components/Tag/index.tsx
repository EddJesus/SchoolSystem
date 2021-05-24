import React, { ReactNode } from 'react'

import { Container } from './styles'

interface TagProps {
	children: ReactNode
}

function Tag({ children }: TagProps) {
	return <Container>{children}</Container>
}

export default Tag
