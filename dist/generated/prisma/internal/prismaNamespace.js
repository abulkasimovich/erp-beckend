"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.RatingScalarFieldEnum = exports.HomeworkResultScalarFieldEnum = exports.HomeworkResponseScalarFieldEnum = exports.LessonVideoScalarFieldEnum = exports.HomeworkScalarFieldEnum = exports.AttendanceScalarFieldEnum = exports.LessonScalarFieldEnum = exports.StudentGroupScalarFieldEnum = exports.GroupScalarFieldEnum = exports.RoomScalarFieldEnum = exports.CourseScalarFieldEnum = exports.StudentScalarFieldEnum = exports.TeacherScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.4.2",
    engine: "94a226be1cf2967af2541cca5529f0f7ba866919"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Teacher: 'Teacher',
    Student: 'Student',
    Course: 'Course',
    Room: 'Room',
    Group: 'Group',
    StudentGroup: 'StudentGroup',
    Lesson: 'Lesson',
    Attendance: 'Attendance',
    Homework: 'Homework',
    LessonVideo: 'LessonVideo',
    HomeworkResponse: 'HomeworkResponse',
    HomeworkResult: 'HomeworkResult',
    Rating: 'Rating'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    fullName: 'fullName',
    contact: 'contact',
    photo: 'photo',
    password: 'password',
    position: 'position',
    hire_date: 'hire_date',
    role: 'role',
    address: 'address',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.TeacherScalarFieldEnum = {
    id: 'id',
    fullName: 'fullName',
    contact: 'contact',
    photo: 'photo',
    password: 'password',
    position: 'position',
    exprience: 'exprience',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.StudentScalarFieldEnum = {
    id: 'id',
    fullName: 'fullName',
    contact: 'contact',
    photo: 'photo',
    password: 'password',
    birth_date: 'birth_date',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.CourseScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    durationMonth: 'durationMonth',
    durationLesson: 'durationLesson',
    level: 'level',
    price: 'price',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.RoomScalarFieldEnum = {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.GroupScalarFieldEnum = {
    id: 'id',
    teacherId: 'teacherId',
    userId: 'userId',
    roomId: 'roomId',
    courseId: 'courseId',
    name: 'name',
    capacity: 'capacity',
    startDate: 'startDate',
    startTime: 'startTime',
    weekDays: 'weekDays',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.StudentGroupScalarFieldEnum = {
    id: 'id',
    groupId: 'groupId',
    studentId: 'studentId',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.LessonScalarFieldEnum = {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    teacherId: 'teacherId',
    title: 'title',
    lessonStart: 'lessonStart',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.AttendanceScalarFieldEnum = {
    id: 'id',
    lessonId: 'lessonId',
    teacherId: 'teacherId',
    userId: 'userId',
    studentId: 'studentId',
    isPresent: 'isPresent',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.HomeworkScalarFieldEnum = {
    id: 'id',
    lessonId: 'lessonId',
    teacherId: 'teacherId',
    userId: 'userId',
    title: 'title',
    file: 'file',
    durationTime: 'durationTime',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.LessonVideoScalarFieldEnum = {
    id: 'id',
    lessonId: 'lessonId',
    teacherId: 'teacherId',
    userId: 'userId',
    file: 'file',
    created_at: 'created_at'
};
exports.HomeworkResponseScalarFieldEnum = {
    id: 'id',
    homeworkId: 'homeworkId',
    studentId: 'studentId',
    title: 'title',
    file: 'file',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.HomeworkResultScalarFieldEnum = {
    id: 'id',
    homeworkId: 'homeworkId',
    studentId: 'studentId',
    teacherId: 'teacherId',
    userId: 'userId',
    title: 'title',
    file: 'file',
    score: 'score',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.RatingScalarFieldEnum = {
    id: 'id',
    teacherId: 'teacherId',
    lessonId: 'lessonId',
    score: 'score',
    created_at: 'created_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map