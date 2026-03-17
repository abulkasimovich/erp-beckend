export declare const CourseLevel: {
    readonly BEGINNER: "BEGINNER";
    readonly INTERMEDIATE: "INTERMEDIATE";
    readonly ADVANCED: "ADVANCED";
};
export type CourseLevel = (typeof CourseLevel)[keyof typeof CourseLevel];
export declare const Status: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly FREEZE: "FREEZE";
};
export type Status = (typeof Status)[keyof typeof Status];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly FREEZE: "FREEZE";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const Role: {
    readonly SUPERADMIN: "SUPERADMIN";
    readonly ADMIN: "ADMIN";
    readonly STUDENT: "STUDENT";
    readonly TEACHER: "TEACHER";
    readonly MANAGEMENT: "MANAGEMENT";
    readonly ADMINSTRATOR: "ADMINSTRATOR";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const WeekDays: {
    readonly MONDAY: "MONDAY";
    readonly TUESDAY: "TUESDAY";
    readonly WEDNESDAY: "WEDNESDAY";
    readonly THURSDAY: "THURSDAY";
    readonly FRIDAY: "FRIDAY";
    readonly SATURDAY: "SATURDAY";
    readonly SUNDAY: "SUNDAY";
};
export type WeekDays = (typeof WeekDays)[keyof typeof WeekDays];
export declare const HomeworkStatus: {
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly PENDING: "PENDING";
};
export type HomeworkStatus = (typeof HomeworkStatus)[keyof typeof HomeworkStatus];
export declare const HomeworkStatusStudent: {
    readonly COMPLETED: "COMPLETED";
    readonly MISSED: "MISSED";
    readonly DELAY: "DELAY";
};
export type HomeworkStatusStudent = (typeof HomeworkStatusStudent)[keyof typeof HomeworkStatusStudent];
