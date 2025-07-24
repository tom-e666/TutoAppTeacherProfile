export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  subjects: string[];
  rating: number;
  totalReviews: number;
  institute: string;
  numberOfStudents: number;
  experience: string;
  hourlyRate: string;
  bio: string;
  qualifications: string[];
  languages: string[];
  availability: string;
}

export interface TeacherResponse {
  teacher: Teacher;
}
