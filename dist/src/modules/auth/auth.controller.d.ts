import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(payload: LoginDto): Promise<{
        success: boolean;
        accessToken: string;
        role: import("@prisma/client").$Enums.Role;
    }>;
    loginTeacher(payload: LoginDto): Promise<{
        success: boolean;
        accessToken: string;
        role: "TEACHER";
    }>;
    loginStudent(payload: LoginDto): Promise<{
        success: boolean;
        accessToken: string;
        role: "STUDENT";
    }>;
}
