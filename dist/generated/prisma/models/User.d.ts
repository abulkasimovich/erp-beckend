import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    fullName: string | null;
    contact: string | null;
    photo: string | null;
    password: string | null;
    position: string | null;
    hire_date: Date | null;
    role: $Enums.Role | null;
    address: string | null;
    status: $Enums.UserStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    fullName: string | null;
    contact: string | null;
    photo: string | null;
    password: string | null;
    position: string | null;
    hire_date: Date | null;
    role: $Enums.Role | null;
    address: string | null;
    status: $Enums.UserStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    fullName: number;
    contact: number;
    photo: number;
    password: number;
    position: number;
    hire_date: number;
    role: number;
    address: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    fullName?: true;
    contact?: true;
    photo?: true;
    password?: true;
    position?: true;
    hire_date?: true;
    role?: true;
    address?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    fullName?: true;
    contact?: true;
    photo?: true;
    password?: true;
    position?: true;
    hire_date?: true;
    role?: true;
    address?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    fullName?: true;
    contact?: true;
    photo?: true;
    password?: true;
    position?: true;
    hire_date?: true;
    role?: true;
    address?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    fullName: string;
    contact: string;
    photo: string | null;
    password: string;
    position: string;
    hire_date: Date;
    role: $Enums.Role;
    address: string | null;
    status: $Enums.UserStatus;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    fullName?: Prisma.StringFilter<"User"> | string;
    contact?: Prisma.StringFilter<"User"> | string;
    photo?: Prisma.StringNullableFilter<"User"> | string | null;
    password?: Prisma.StringFilter<"User"> | string;
    position?: Prisma.StringFilter<"User"> | string;
    hire_date?: Prisma.DateTimeFilter<"User"> | Date | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    address?: Prisma.StringNullableFilter<"User"> | string | null;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    groups?: Prisma.GroupListRelationFilter;
    attendances?: Prisma.AttendanceListRelationFilter;
    lessons?: Prisma.LessonListRelationFilter;
    homework?: Prisma.HomeworkListRelationFilter;
    lessonVideos?: Prisma.LessonVideoListRelationFilter;
    homeworkResults?: Prisma.HomeworkResultListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    hire_date?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    groups?: Prisma.GroupOrderByRelationAggregateInput;
    attendances?: Prisma.AttendanceOrderByRelationAggregateInput;
    lessons?: Prisma.LessonOrderByRelationAggregateInput;
    homework?: Prisma.HomeworkOrderByRelationAggregateInput;
    lessonVideos?: Prisma.LessonVideoOrderByRelationAggregateInput;
    homeworkResults?: Prisma.HomeworkResultOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    contact?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    fullName?: Prisma.StringFilter<"User"> | string;
    photo?: Prisma.StringNullableFilter<"User"> | string | null;
    password?: Prisma.StringFilter<"User"> | string;
    position?: Prisma.StringFilter<"User"> | string;
    hire_date?: Prisma.DateTimeFilter<"User"> | Date | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    address?: Prisma.StringNullableFilter<"User"> | string | null;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    groups?: Prisma.GroupListRelationFilter;
    attendances?: Prisma.AttendanceListRelationFilter;
    lessons?: Prisma.LessonListRelationFilter;
    homework?: Prisma.HomeworkListRelationFilter;
    lessonVideos?: Prisma.LessonVideoListRelationFilter;
    homeworkResults?: Prisma.HomeworkResultListRelationFilter;
}, "id" | "contact">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    hire_date?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    fullName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    contact?: Prisma.StringWithAggregatesFilter<"User"> | string;
    photo?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    position?: Prisma.StringWithAggregatesFilter<"User"> | string;
    hire_date?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    address?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutUserInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutUserInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutUserInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutUserInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutUserInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutUserInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutUserInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutUserInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutUserInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutUserInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutUserNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutUserNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutUserNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutUserNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutUserNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutUserNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutUserNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutUserNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutUserNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutUserNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type UserUpdateManyMutationInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    hire_date?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    hire_date?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    hire_date?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateNestedOneWithoutGroupsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutGroupsInput, Prisma.UserUncheckedCreateWithoutGroupsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutGroupsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutGroupsInput, Prisma.UserUncheckedCreateWithoutGroupsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutGroupsInput;
    upsert?: Prisma.UserUpsertWithoutGroupsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutGroupsInput, Prisma.UserUpdateWithoutGroupsInput>, Prisma.UserUncheckedUpdateWithoutGroupsInput>;
};
export type UserCreateNestedOneWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLessonsInput, Prisma.UserUncheckedCreateWithoutLessonsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLessonsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLessonsInput, Prisma.UserUncheckedCreateWithoutLessonsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLessonsInput;
    upsert?: Prisma.UserUpsertWithoutLessonsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLessonsInput, Prisma.UserUpdateWithoutLessonsInput>, Prisma.UserUncheckedUpdateWithoutLessonsInput>;
};
export type UserCreateNestedOneWithoutAttendancesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAttendancesInput, Prisma.UserUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAttendancesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutAttendancesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAttendancesInput, Prisma.UserUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAttendancesInput;
    upsert?: Prisma.UserUpsertWithoutAttendancesInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAttendancesInput, Prisma.UserUpdateWithoutAttendancesInput>, Prisma.UserUncheckedUpdateWithoutAttendancesInput>;
};
export type UserCreateNestedOneWithoutHomeworkInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutHomeworkInput, Prisma.UserUncheckedCreateWithoutHomeworkInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutHomeworkInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutHomeworkNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutHomeworkInput, Prisma.UserUncheckedCreateWithoutHomeworkInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutHomeworkInput;
    upsert?: Prisma.UserUpsertWithoutHomeworkInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutHomeworkInput, Prisma.UserUpdateWithoutHomeworkInput>, Prisma.UserUncheckedUpdateWithoutHomeworkInput>;
};
export type UserCreateNestedOneWithoutLessonVideosInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLessonVideosInput, Prisma.UserUncheckedCreateWithoutLessonVideosInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLessonVideosInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutLessonVideosNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLessonVideosInput, Prisma.UserUncheckedCreateWithoutLessonVideosInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLessonVideosInput;
    upsert?: Prisma.UserUpsertWithoutLessonVideosInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLessonVideosInput, Prisma.UserUpdateWithoutLessonVideosInput>, Prisma.UserUncheckedUpdateWithoutLessonVideosInput>;
};
export type UserCreateNestedOneWithoutHomeworkResultsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutHomeworkResultsInput, Prisma.UserUncheckedCreateWithoutHomeworkResultsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutHomeworkResultsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutHomeworkResultsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutHomeworkResultsInput, Prisma.UserUncheckedCreateWithoutHomeworkResultsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutHomeworkResultsInput;
    upsert?: Prisma.UserUpsertWithoutHomeworkResultsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutHomeworkResultsInput, Prisma.UserUpdateWithoutHomeworkResultsInput>, Prisma.UserUncheckedUpdateWithoutHomeworkResultsInput>;
};
export type UserCreateWithoutGroupsInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutUserInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutUserInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutUserInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutUserInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutGroupsInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutUserInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutUserInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutUserInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutUserInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutGroupsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutGroupsInput, Prisma.UserUncheckedCreateWithoutGroupsInput>;
};
export type UserUpsertWithoutGroupsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutGroupsInput, Prisma.UserUncheckedUpdateWithoutGroupsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutGroupsInput, Prisma.UserUncheckedCreateWithoutGroupsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutGroupsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutGroupsInput, Prisma.UserUncheckedUpdateWithoutGroupsInput>;
};
export type UserUpdateWithoutGroupsInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUpdateManyWithoutUserNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutUserNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutUserNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutUserNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutGroupsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutUserNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutUserNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutUserNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutUserNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutLessonsInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutUserInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutUserInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutUserInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutUserInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutLessonsInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutUserInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutUserInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutUserInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutUserInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutLessonsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLessonsInput, Prisma.UserUncheckedCreateWithoutLessonsInput>;
};
export type UserUpsertWithoutLessonsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLessonsInput, Prisma.UserUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLessonsInput, Prisma.UserUncheckedCreateWithoutLessonsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLessonsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLessonsInput, Prisma.UserUncheckedUpdateWithoutLessonsInput>;
};
export type UserUpdateWithoutLessonsInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutUserNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutUserNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutUserNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutUserNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLessonsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutUserNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutUserNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutUserNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutUserNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAttendancesInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutUserInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutUserInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutUserInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutUserInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAttendancesInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutUserInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutUserInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutUserInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutUserInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAttendancesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAttendancesInput, Prisma.UserUncheckedCreateWithoutAttendancesInput>;
};
export type UserUpsertWithoutAttendancesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAttendancesInput, Prisma.UserUncheckedUpdateWithoutAttendancesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAttendancesInput, Prisma.UserUncheckedCreateWithoutAttendancesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAttendancesInput, Prisma.UserUncheckedUpdateWithoutAttendancesInput>;
};
export type UserUpdateWithoutAttendancesInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutUserNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutUserNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutUserNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutUserNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAttendancesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutUserNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutUserNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutUserNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutUserNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutHomeworkInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutUserInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutUserInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutUserInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutUserInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutHomeworkInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutUserInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutUserInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutUserInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutUserInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutHomeworkInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutHomeworkInput, Prisma.UserUncheckedCreateWithoutHomeworkInput>;
};
export type UserUpsertWithoutHomeworkInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutHomeworkInput, Prisma.UserUncheckedUpdateWithoutHomeworkInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutHomeworkInput, Prisma.UserUncheckedCreateWithoutHomeworkInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutHomeworkInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutHomeworkInput, Prisma.UserUncheckedUpdateWithoutHomeworkInput>;
};
export type UserUpdateWithoutHomeworkInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutUserNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutUserNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutUserNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutUserNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutHomeworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutUserNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutUserNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutUserNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutUserNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutLessonVideosInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutUserInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutUserInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutUserInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutUserInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutLessonVideosInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutUserInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutUserInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutUserInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutUserInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutLessonVideosInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLessonVideosInput, Prisma.UserUncheckedCreateWithoutLessonVideosInput>;
};
export type UserUpsertWithoutLessonVideosInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLessonVideosInput, Prisma.UserUncheckedUpdateWithoutLessonVideosInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLessonVideosInput, Prisma.UserUncheckedCreateWithoutLessonVideosInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLessonVideosInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLessonVideosInput, Prisma.UserUncheckedUpdateWithoutLessonVideosInput>;
};
export type UserUpdateWithoutLessonVideosInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutUserNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutUserNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutUserNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutUserNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLessonVideosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutUserNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutUserNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutUserNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutUserNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutHomeworkResultsInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutUserInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutUserInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutUserInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutUserInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutHomeworkResultsInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    hire_date: Date | string;
    role: $Enums.Role;
    address?: string | null;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutUserInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutUserInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutUserInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutUserInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutHomeworkResultsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutHomeworkResultsInput, Prisma.UserUncheckedCreateWithoutHomeworkResultsInput>;
};
export type UserUpsertWithoutHomeworkResultsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutHomeworkResultsInput, Prisma.UserUncheckedUpdateWithoutHomeworkResultsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutHomeworkResultsInput, Prisma.UserUncheckedCreateWithoutHomeworkResultsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutHomeworkResultsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutHomeworkResultsInput, Prisma.UserUncheckedUpdateWithoutHomeworkResultsInput>;
};
export type UserUpdateWithoutHomeworkResultsInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutUserNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutUserNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutUserNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutUserNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutHomeworkResultsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    hire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutUserNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutUserNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutUserNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutUserNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    groups: number;
    attendances: number;
    lessons: number;
    homework: number;
    lessonVideos: number;
    homeworkResults: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    groups?: boolean | UserCountOutputTypeCountGroupsArgs;
    attendances?: boolean | UserCountOutputTypeCountAttendancesArgs;
    lessons?: boolean | UserCountOutputTypeCountLessonsArgs;
    homework?: boolean | UserCountOutputTypeCountHomeworkArgs;
    lessonVideos?: boolean | UserCountOutputTypeCountLessonVideosArgs;
    homeworkResults?: boolean | UserCountOutputTypeCountHomeworkResultsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
};
export type UserCountOutputTypeCountAttendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceWhereInput;
};
export type UserCountOutputTypeCountLessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
};
export type UserCountOutputTypeCountHomeworkArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkWhereInput;
};
export type UserCountOutputTypeCountLessonVideosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonVideoWhereInput;
};
export type UserCountOutputTypeCountHomeworkResultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkResultWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    contact?: boolean;
    photo?: boolean;
    password?: boolean;
    position?: boolean;
    hire_date?: boolean;
    role?: boolean;
    address?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    groups?: boolean | Prisma.User$groupsArgs<ExtArgs>;
    attendances?: boolean | Prisma.User$attendancesArgs<ExtArgs>;
    lessons?: boolean | Prisma.User$lessonsArgs<ExtArgs>;
    homework?: boolean | Prisma.User$homeworkArgs<ExtArgs>;
    lessonVideos?: boolean | Prisma.User$lessonVideosArgs<ExtArgs>;
    homeworkResults?: boolean | Prisma.User$homeworkResultsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    contact?: boolean;
    photo?: boolean;
    password?: boolean;
    position?: boolean;
    hire_date?: boolean;
    role?: boolean;
    address?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    contact?: boolean;
    photo?: boolean;
    password?: boolean;
    position?: boolean;
    hire_date?: boolean;
    role?: boolean;
    address?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    fullName?: boolean;
    contact?: boolean;
    photo?: boolean;
    password?: boolean;
    position?: boolean;
    hire_date?: boolean;
    role?: boolean;
    address?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fullName" | "contact" | "photo" | "password" | "position" | "hire_date" | "role" | "address" | "status" | "created_at" | "updated_at", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    groups?: boolean | Prisma.User$groupsArgs<ExtArgs>;
    attendances?: boolean | Prisma.User$attendancesArgs<ExtArgs>;
    lessons?: boolean | Prisma.User$lessonsArgs<ExtArgs>;
    homework?: boolean | Prisma.User$homeworkArgs<ExtArgs>;
    lessonVideos?: boolean | Prisma.User$lessonVideosArgs<ExtArgs>;
    homeworkResults?: boolean | Prisma.User$homeworkResultsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        groups: Prisma.$GroupPayload<ExtArgs>[];
        attendances: Prisma.$AttendancePayload<ExtArgs>[];
        lessons: Prisma.$LessonPayload<ExtArgs>[];
        homework: Prisma.$HomeworkPayload<ExtArgs>[];
        lessonVideos: Prisma.$LessonVideoPayload<ExtArgs>[];
        homeworkResults: Prisma.$HomeworkResultPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        fullName: string;
        contact: string;
        photo: string | null;
        password: string;
        position: string;
        hire_date: Date;
        role: $Enums.Role;
        address: string | null;
        status: $Enums.UserStatus;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    groups<T extends Prisma.User$groupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attendances<T extends Prisma.User$attendancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lessons<T extends Prisma.User$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    homework<T extends Prisma.User$homeworkArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$homeworkArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lessonVideos<T extends Prisma.User$lessonVideosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$lessonVideosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    homeworkResults<T extends Prisma.User$homeworkResultsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$homeworkResultsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly fullName: Prisma.FieldRef<"User", 'String'>;
    readonly contact: Prisma.FieldRef<"User", 'String'>;
    readonly photo: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly position: Prisma.FieldRef<"User", 'String'>;
    readonly hire_date: Prisma.FieldRef<"User", 'DateTime'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly address: Prisma.FieldRef<"User", 'String'>;
    readonly status: Prisma.FieldRef<"User", 'UserStatus'>;
    readonly created_at: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$groupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput | Prisma.GroupOrderByWithRelationInput[];
    cursor?: Prisma.GroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupScalarFieldEnum | Prisma.GroupScalarFieldEnum[];
};
export type User$attendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    where?: Prisma.AttendanceWhereInput;
    orderBy?: Prisma.AttendanceOrderByWithRelationInput | Prisma.AttendanceOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceScalarFieldEnum | Prisma.AttendanceScalarFieldEnum[];
};
export type User$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    cursor?: Prisma.LessonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonScalarFieldEnum | Prisma.LessonScalarFieldEnum[];
};
export type User$homeworkArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkOmit<ExtArgs> | null;
    include?: Prisma.HomeworkInclude<ExtArgs> | null;
    where?: Prisma.HomeworkWhereInput;
    orderBy?: Prisma.HomeworkOrderByWithRelationInput | Prisma.HomeworkOrderByWithRelationInput[];
    cursor?: Prisma.HomeworkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HomeworkScalarFieldEnum | Prisma.HomeworkScalarFieldEnum[];
};
export type User$lessonVideosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonVideoSelect<ExtArgs> | null;
    omit?: Prisma.LessonVideoOmit<ExtArgs> | null;
    include?: Prisma.LessonVideoInclude<ExtArgs> | null;
    where?: Prisma.LessonVideoWhereInput;
    orderBy?: Prisma.LessonVideoOrderByWithRelationInput | Prisma.LessonVideoOrderByWithRelationInput[];
    cursor?: Prisma.LessonVideoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonVideoScalarFieldEnum | Prisma.LessonVideoScalarFieldEnum[];
};
export type User$homeworkResultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResultSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResultOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResultInclude<ExtArgs> | null;
    where?: Prisma.HomeworkResultWhereInput;
    orderBy?: Prisma.HomeworkResultOrderByWithRelationInput | Prisma.HomeworkResultOrderByWithRelationInput[];
    cursor?: Prisma.HomeworkResultWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HomeworkResultScalarFieldEnum | Prisma.HomeworkResultScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
