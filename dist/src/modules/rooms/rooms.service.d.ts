import { CreateRoomDto } from './dto/create.room.dto';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateRoomDto } from './dto/update-room.dto';
export declare class RoomsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllRoom(): Promise<{
        success: boolean;
        data: {
            id: number;
            status: import("@prisma/client").$Enums.UserStatus;
            created_at: Date;
            updated_at: Date;
            name: string;
            capacity: number;
        }[];
    }>;
    createRoom(payload: CreateRoomDto): Promise<{
        success: boolean;
        message: string;
    }>;
    getOneRoom(id: number): Promise<{
        success: boolean;
        data: {
            id: number;
            status: import("@prisma/client").$Enums.UserStatus;
            created_at: Date;
            updated_at: Date;
            name: string;
            capacity: number;
        };
    }>;
    updateRoom(id: number, payload: UpdateRoomDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteRoom(id: number): Promise<void>;
}
