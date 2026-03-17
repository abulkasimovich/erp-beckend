import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create.group.dto';
import { UpdateGroupDto } from './dto/update.group.dto';
export declare class GroupsController {
    private readonly groupService;
    constructor(groupService: GroupsService);
    getAllStudentGroupById(groupId: number): Promise<{
        success: boolean;
        data: {
            fullName: string;
            email: string;
            id: number;
            photo: string | null;
        }[];
    }>;
    getGroupLessons(groupId: number, req: Request): Promise<{
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
    createGroup(payload: CreateGroupDto, req: Request): Promise<{
        success: boolean;
        message: string;
    }>;
    getOneGroup(id: string): Promise<{
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
    updateGroup(id: string, payload: UpdateGroupDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteGroup(id: string): Promise<void>;
}
