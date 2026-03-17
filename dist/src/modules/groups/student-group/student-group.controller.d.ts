import { StudentGroupService } from './student-group.service';
import { CreateStudentGroupDto } from './dto/create.studentgroup.dto';
import { UpdateStudentGroupDto } from './dto/update.student-group.dto';
export declare class StudentGroupController {
    private readonly studentGroupServise;
    constructor(studentGroupServise: StudentGroupService);
    createStudentGroup(payload: CreateStudentGroupDto, req: Request): Promise<{
        success: boolean;
        message: string;
    }>;
    getOneStudentGroup(id: string): Promise<{
        success: boolean;
        data: {
            id: number;
            status: import("@prisma/client").$Enums.UserStatus;
            created_at: Date;
            updated_at: Date;
            userId: number;
            studentId: number;
            groupId: number;
        };
    }>;
    updateStudentGroup(id: string, payload: UpdateStudentGroupDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteStudentGroup(id: string): Promise<void>;
}
