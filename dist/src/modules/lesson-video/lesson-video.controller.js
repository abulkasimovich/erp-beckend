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
exports.LessonVideoController = void 0;
const common_1 = require("@nestjs/common");
const lesson_video_service_1 = require("./lesson-video.service");
const create_lesson_video_dto_1 = require("./dto/create-lesson-video.dto");
const swagger_1 = require("@nestjs/swagger");
const role_guard_1 = require("../../common/guards/role-guard");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const role_1 = require("../../common/decorator/role");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = __importDefault(require("path"));
const client_1 = require("@prisma/client");
const update_lesson_video_dto_1 = require("./dto/update-lesson-video.dto");
let LessonVideoController = class LessonVideoController {
    lessonVideoService;
    constructor(lessonVideoService) {
        this.lessonVideoService = lessonVideoService;
    }
    getLessonVideoByGroupId(groupId, req) {
        return this.lessonVideoService.getLessonVideoByGroupId(groupId, req["user"]);
    }
    createHomework(payload, req, file) {
        return this.lessonVideoService.createLessonVideos(payload, req["user"], file.filename);
    }
    getOneLessonVideo(id) {
        return this.lessonVideoService.getOneLessonVideo(+id);
    }
    updateLessonVideo(id, payload) {
        return this.lessonVideoService.updateLessonVideo(+id, payload);
    }
    deleteHomeworkResponse(id) {
        return this.lessonVideoService.deleteLessonVideo(+id);
    }
};
exports.LessonVideoController = LessonVideoController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: `${client_1.Role.SUPERADMIN}, ${client_1.Role.ADMIN}, ${client_1.Role.TEACHER}` }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.SUPERADMIN, client_1.Role.ADMIN),
    (0, common_1.Get)(":groupId"),
    __param(0, (0, common_1.Param)('groupId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Request]),
    __metadata("design:returntype", void 0)
], LessonVideoController.prototype, "getLessonVideoByGroupId", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: `${client_1.Role.SUPERADMIN}, ${client_1.Role.ADMIN}, ${client_1.Role.TEACHER}` }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.SUPERADMIN, client_1.Role.ADMIN),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                groupId: { type: "number" },
                lessonId: { type: "number" },
                file: { type: "string", format: "binary", nullable: true }
            }
        }
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/videos',
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
    __metadata("design:paramtypes", [create_lesson_video_dto_1.CreateLessonVideoDto, Request, Object]),
    __metadata("design:returntype", void 0)
], LessonVideoController.prototype, "createHomework", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.ADMIN, client_1.Role.SUPERADMIN),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LessonVideoController.prototype, "getOneLessonVideo", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.ADMIN, client_1.Role.SUPERADMIN),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lesson_video_dto_1.UpdateLessonVideoDto]),
    __metadata("design:returntype", void 0)
], LessonVideoController.prototype, "updateLessonVideo", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, role_1.Roles)(client_1.Role.ADMIN, client_1.Role.SUPERADMIN),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LessonVideoController.prototype, "deleteHomeworkResponse", null);
exports.LessonVideoController = LessonVideoController = __decorate([
    (0, common_1.Controller)('lesson-video'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [lesson_video_service_1.LessonVideoService])
], LessonVideoController);
//# sourceMappingURL=lesson-video.controller.js.map