"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeworkResultModule = void 0;
const common_1 = require("@nestjs/common");
const homework_result_service_1 = require("./homework-result.service");
const homework_result_controller_1 = require("./homework-result.controller");
let HomeworkResultModule = class HomeworkResultModule {
};
exports.HomeworkResultModule = HomeworkResultModule;
exports.HomeworkResultModule = HomeworkResultModule = __decorate([
    (0, common_1.Module)({
        controllers: [homework_result_controller_1.HomeworkResultController],
        providers: [homework_result_service_1.HomeworkResultService],
    })
], HomeworkResultModule);
//# sourceMappingURL=homework-result.module.js.map