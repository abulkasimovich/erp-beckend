"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLessonVideoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_lesson_video_dto_1 = require("./create-lesson-video.dto");
class UpdateLessonVideoDto extends (0, swagger_1.PartialType)(create_lesson_video_dto_1.CreateLessonVideoDto) {
}
exports.UpdateLessonVideoDto = UpdateLessonVideoDto;
//# sourceMappingURL=update-lesson-video.dto.js.map