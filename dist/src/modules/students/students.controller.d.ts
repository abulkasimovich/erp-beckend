import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    createStudent(payload: CreateStudentDto, file: Express.Multer.File): Promise<{
        success: boolean;
        message: string;
    }>;
    getAllStudent(): Promise<{
        success: boolean;
        data: {
            fullName: string;
            email: string;
            password: string;
            id: number;
            photo: string | null;
            status: import("@prisma/client").$Enums.UserStatus;
            created_at: Date;
            updated_at: Date;
            birth_date: Date;
        }[];
    }>;
    getOneStudent(id: string): Promise<{
        success: boolean;
        data: {
            fullName: string;
            email: string;
            password: string;
            id: number;
            photo: string | null;
            status: import("@prisma/client").$Enums.UserStatus;
            created_at: Date;
            updated_at: Date;
            birth_date: Date;
        };
    }>;
    updateStudent(id: string, payload: UpdateStudentDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteStudent(id: string): void;
}
