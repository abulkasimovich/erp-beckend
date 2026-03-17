import { PrismaService } from 'src/database/prisma.service';
import { CreateStudentGroupDto } from './dto/create.studentgroup.dto';
import { UpdateStudentGroupDto } from './dto/update.student-group.dto';
export declare class StudentGroupService {
    private prisma;
    constructor(prisma: PrismaService);
    createStudentGroup(payload: CreateStudentGroupDto, currentUser: {
        id: number;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
    getOneStudentGroup(id: number): Promise<{
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
    updateStudentGroup(id: number, payload: UpdateStudentGroupDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteStudentGroup(id: number): Promise<void>;
}
