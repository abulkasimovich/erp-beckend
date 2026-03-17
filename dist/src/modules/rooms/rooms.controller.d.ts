import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create.room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
export declare class RoomsController {
    private readonly roomService;
    constructor(roomService: RoomsService);
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
    getOneRoom(id: string): Promise<{
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
    updateRoom(id: string, payload: UpdateRoomDto): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteRoom(id: string): Promise<void>;
}
