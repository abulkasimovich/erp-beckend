"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentGroupDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_studentgroup_dto_1 = require("./create.studentgroup.dto");
class UpdateStudentGroupDto extends (0, swagger_1.PartialType)(create_studentgroup_dto_1.CreateStudentGroupDto) {
}
exports.UpdateStudentGroupDto = UpdateStudentGroupDto;
//# sourceMappingURL=update.student-group.dto.js.map