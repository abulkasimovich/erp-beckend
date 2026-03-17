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
exports.HomeworkResponseController = void 0;
const common_1 = require("@nestjs/common");
const homework_response_service_1 = require("./homework-response.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = __importDefault(require("path"));
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const role_guard_1 = require("../../common/guards/role-guard");
const role_1 = require("../../common/decorator/role");
const client_1 = require("@prisma/client");
const swagger_1 = require("@nestjs/swagger");
const create_homework_response_dto_1 = require("./dto/create-homework-response.dto");
const update_homework_response_dto_1 = require("./dto/update-homework-response.dto");
let HomeworkResponseController = class HomeworkResponseController {
    service;
    constructor(service) {
        this.service = service;
    }
    createResponse(payload, req, file) {
        return this.service.createResponse(payload, req["user"], file?.filename);
    }
    getResponses(homeworkId) {
        return this.service.getResponses(homeworkId);
    }
    getOneHomeworkResponse(id) {
        return this.service.getOneHomeworkResponse(+id);
    }
    updateHomeworkResponse(id, payload) {
        return this.service.updateHomeworkResponse(+id, payload);
    }
    deleteHomeworkResponse(id) {
        return this.service.deleteHomeworkResponse(+id);
    }
};
exports.HomeworkResponseController = HomeworkResponseController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: `${client_1.Role.STUDENT}, ${client_1.Role.ADMIN}, ${client_1.Role.SUPERADMIN}` }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.STUDENT, client_1.Role.ADMIN, client_1.Role.SUPERADMIN),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                homeworkId: { type: 'number' },
                studentId: { type: 'number' },
                title: { type: 'string' },
                file: {
                    type: 'string',
                    format: 'binary',
                    nullable: true
                }
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file", {
        storage: (0, multer_1.diskStorage)({
            destination: "./uploads/homework-response",
            filename: (req, file, cb) => {
                const name = Date.now() + path_1.default.extname(file.originalname);
                cb(null, name);
            }
        })
    })),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_homework_response_dto_1.CreateHomeworkResponseDto,
        Request, Object]),
    __metadata("design:returntype", void 0)
], HomeworkResponseController.prototype, "createResponse", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: `${client_1.Role.SUPERADMIN}, ${client_1.Role.ADMIN}, ${client_1.Role.STUDENT}` }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.SUPERADMIN, client_1.Role.ADMIN),
    (0, common_1.Get)("homework/:homeworkId"),
    __param(0, (0, common_1.Param)("homeworkId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HomeworkResponseController.prototype, "getResponses", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.ADMIN, client_1.Role.SUPERADMIN),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HomeworkResponseController.prototype, "getOneHomeworkResponse", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.ADMIN, client_1.Role.SUPERADMIN),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_homework_response_dto_1.UpdateHomeworkResponseDto]),
    __metadata("design:returntype", void 0)
], HomeworkResponseController.prototype, "updateHomeworkResponse", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.ADMIN, client_1.Role.SUPERADMIN),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HomeworkResponseController.prototype, "deleteHomeworkResponse", null);
exports.HomeworkResponseController = HomeworkResponseController = __decorate([
    (0, common_1.Controller)("homework-response"),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [homework_response_service_1.homeworkResponseService])
], HomeworkResponseController);
//# sourceMappingURL=homework-response.controller.js.map