"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeworkController = void 0;
const common_1 = require("@nestjs/common");
const create_homework_dto_1 = require("./dto/create-homework.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = __importDefault(require("path"));
const homework_service_1 = require("./homework.service");
const swagger_1 = require("@nestjs/swagger");
const role_1 = require("../../common/decorator/role");
const client_1 = require("@prisma/client");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const role_guard_1 = require("../../common/guards/role-guard");
const updatehomework_dto_1 = require("./dto/updatehomework.dto");
let HomeworkController = class HomeworkController {
    homeworkService;
    constructor(homeworkService) {
        this.homeworkService = homeworkService;
    }
    getAllHomeworksByGroup(groupId, req) {
        return this.homeworkService.getAllHomeworkByGroup(groupId, req['user']);
    }
    createHomework(payload, req, file) {
        return this.homeworkService.createHomework(payload, req["user"], file?.filename);
    }
    getOneHomework(id) {
        return this.homeworkService.getOneHomework(+id);
    }
    updateHomework(id, payload) {
        return this.homeworkService.updateHomework(+id, payload);
    }
    deleteHomework(id) {
        return this.homeworkService.deleteHomework(+id);
    }
};
exports.HomeworkController = HomeworkController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: `${client_1.Role.SUPERADMIN}, ${client_1.Role.ADMIN}, ${client_1.Role.TEACHER}` }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.SUPERADMIN, client_1.Role.ADMIN),
    (0, common_1.Get)("group/:groupId"),
    __param(0, (0, common_1.Param)("groupId", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Request]),
    __metadata("design:returntype", void 0)
], HomeworkController.prototype, "getAllHomeworksByGroup", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: `${client_1.Role.SUPERADMIN}, ${client_1.Role.ADMIN}, ${client_1.Role.TEACHER}` }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.SUPERADMIN, client_1.Role.ADMIN),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                title: { type: "string" },
                groupId: { type: "number" },
                lessonId: { type: "number" },
                file: { type: "string", format: "binary", nullable: true }
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/homework',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = path_1.default.extname(file.originalname);
                const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
                cb(null, filename);
            }
        })
    })),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_homework_dto_1.CreateHomeworkDto, Request, Object]),
    __metadata("design:returntype", void 0)
], HomeworkController.prototype, "createHomework", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.ADMIN, client_1.Role.SUPERADMIN),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HomeworkController.prototype, "getOneHomework", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.ADMIN, client_1.Role.SUPERADMIN),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updatehomework_dto_1.UpdateHomeworkDto]),
    __metadata("design:returntype", void 0)
], HomeworkController.prototype, "updateHomework", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.ADMIN, client_1.Role.SUPERADMIN),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HomeworkController.prototype, "deleteHomework", null);
exports.HomeworkController = HomeworkController = __decorate([
    (0, common_1.Controller)('homework'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [homework_service_1.HomeworksService])
], HomeworkController);
//# sourceMappingURL=homework.controller.js.map