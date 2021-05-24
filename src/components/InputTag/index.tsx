import React, { InputHTMLAttributes } from 'react'

import { Input } from './styles'

interface InputTagProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
}

function InputTag({ placeholder, ...rest }: InputTagProps) {
	return <Input placeholder={placeholder} {...rest} />
}

export default InputTag
