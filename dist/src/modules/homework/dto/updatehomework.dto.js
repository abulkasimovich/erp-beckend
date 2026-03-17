"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHomeworkDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_homework_dto_1 = require("./create-homework.dto");
class UpdateHomeworkDto extends (0, swagger_1.PartialType)(create_homework_dto_1.CreateHomeworkDto) {
}
exports.UpdateHomeworkDto = UpdateHomeworkDto;
//# sourceMappingURL=updatehomework.dto.js.map