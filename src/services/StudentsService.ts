import request from '../constants/axios'

export default class StudentsService {
	static getStudents = async (): Promise<Student[]> => {
		try {
			const { data } = await request.get('/students')
			return data.students || []
		} catch (error) {
			return []
		}
	}
}
