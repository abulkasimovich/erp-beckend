import { CreateGroupDto } from './dto/create.group.dto';
import { Role } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateGroupDto } from './dto/update.group.dto';
export declare class GroupsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllStudentGroupById(groupId: number): Promise<{
        success: boolean;
        data: {
            fullName: string;
            email: string;
            id: number;
            photo: string | null;
        }[];
    }>;
    getGroupLessons(groupId: number, currentUser: {
        id: number;
        role: Role;
    }): Promise<{
        success: boolean;
        data: {
            id: number;
            created_at: Date;
            updated_at: Date;
            userId: number | null;
            title: string;
            teacherId: number | null;
            groupId: number;
        }[];
    }>;
    getAllGroup(): Promise<{
        success: boolean;
        data: {
            id: number;
            status: import("@prisma/client").$Enums.UserStatus;
            created_at: Date;
            updated_at: Date;
            name: string;
            userId: number;
            teacherId: number;
            capacity: number;
            startDate: Date;
            startTime: string;
            weekDays: import("@prisma/client").$Enums.WeekDays[];
            roomId: number;
            courseId: number;
        }[];
    }>;
    createGroup(payload: CreateGroupDto, currentUser: {
        id: number;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
    getOneGroup(id: number): Promise<{
        success: boolean;
        data: {
            id: number;
            status: import("@prisma/client").$Enums.UserStatus;
            created_at: Date;
            updated_at: Date;
            name: string;
            userId: number;
            teacherId: number;
            capacity: number;
            startDate: Date;
            startTime: string;
            weekDays: import("@prisma/client").$Enums.WeekDays[];
            roomId: number;
            courseId: number;
        };
    }>;
    updateGroup(id: number, payload: UpdateGroupDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteGroup(id: number): Promise<void>;
}
