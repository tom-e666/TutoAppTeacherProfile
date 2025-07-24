import { Teacher, TeacherResponse } from '../types/Teacher';
import teacherData from '../data/teacherData.json';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const TeacherAPI = {
    async getTeacherProfile(id: number): Promise<Teacher> {
        await delay(1000); // Simulate network delay

        // In a real app, this would make an HTTP request
        const response: TeacherResponse = teacherData;

        if (response.teacher.id === id || !id) {
            return response.teacher;
        }

        throw new Error('Teacher not found');
    }
};
