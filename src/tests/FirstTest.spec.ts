import StudentsService from '../services/StudentsService'

test('Exist return', async () => {
	const StudentsReturn = await StudentsService.getStudents()

	expect(StudentsReturn)
})
