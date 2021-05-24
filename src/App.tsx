import React, { useState, useEffect, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'
import StudentsController from './services/StudentsService'

import {
	Container,
	Wrapper,
	Avatar,
	Card,
	WrapperInfo,
	SearchInput,
	ActiveIcon,
	Accordion,
	InputTag,
	Tag
} from './components/index'

import GlobalStyle from './styles/global'
import theme from './styles/theme'

function App() {
	const [students, setStudents] = useState<Student[]>([])
	const [searchName, setSearchName] = useState<string>('')
	const [searchTag, setSearchTag] = useState<string>('')
	const filteredStudents = useMemo(() => {
		if (searchName || searchTag) {
			const searchLower = searchName.toLowerCase()
			const searchTagLower = searchTag.toLowerCase()
			return students.filter(student => {
				const tags = student.tags.join(' ').toLowerCase()
				const name = `${student.firstName} ${student.lastName}`.toLowerCase()
				return name.includes(searchLower) && tags.includes(searchTagLower)
			})
		}
		return students
	}, [searchName, searchTag, students])

	function handleActive(id: number) {
		setStudents(prevStudents =>
			prevStudents.map(student => {
				if (student.id === id) {
					return {
						...student,
						active: !student.active
					}
				}
				return student
			})
		)
	}

	function addTag(id: number, value: string) {
		setStudents(prevStudents =>
			prevStudents.map(student => {
				if (student.id === id) {
					return {
						...student,
						tags: [...new Set([...student.tags, value])]
					}
				}
				return student
			})
		)
	}

	useEffect(() => {
		;(async () => {
			const payLoadStudents = await StudentsController.getStudents()
			const transformPayLoadStudents = payLoadStudents.map(student => ({
				...student,
				active: false,
				tags: []
			}))
			setStudents(transformPayLoadStudents)
		})()
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Wrapper>
					<SearchInput
						placeholder="Search By Name"
						onChange={event => {
							setSearchName(event.target.value)
						}}
					/>
					<SearchInput
						placeholder="Search By Tag"
						onChange={event => {
							setSearchTag(event.target.value)
						}}
					/>
					{filteredStudents.map(student => (
						<Card key={student.id}>
							<Avatar source={student.pic} alt={student.firstName} />
							<WrapperInfo>
								<h1>
									{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
								</h1>
								<p>Email:{student.email}</p>
								<p>Company:{student.company}</p>
								<p>Skill:{student.skill}</p>
								<Accordion active={student.active}>
									{student.grades.map((grade, index) => (
										<p key={index}>
											Test {index}: {grade}%
										</p>
									))}
									{student.tags.map((tag, index) => (
										<Tag key={index}>{tag}</Tag>
									))}
									<InputTag
										placeholder="Add a tag"
										onKeyDown={e => {
											if (e.keyCode === 13 && e.currentTarget.value) {
												addTag(student.id, e.currentTarget.value)
												e.currentTarget.value = ''
											}
										}}
									/>
								</Accordion>
							</WrapperInfo>
							<ActiveIcon
								active={student.active}
								onClick={() => handleActive(student.id)}
							/>
						</Card>
					))}
				</Wrapper>
			</Container>

			<GlobalStyle />
		</ThemeProvider>
	)
}

export default App
