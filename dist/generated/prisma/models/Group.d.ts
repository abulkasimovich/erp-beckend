import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GroupModel = runtime.Types.Result.DefaultSelection<Prisma.$GroupPayload>;
export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null;
    _avg: GroupAvgAggregateOutputType | null;
    _sum: GroupSumAggregateOutputType | null;
    _min: GroupMinAggregateOutputType | null;
    _max: GroupMaxAggregateOutputType | null;
};
export type GroupAvgAggregateOutputType = {
    id: number | null;
    teacherId: number | null;
    userId: number | null;
    roomId: number | null;
    courseId: number | null;
    capacity: number | null;
};
export type GroupSumAggregateOutputType = {
    id: number | null;
    teacherId: number | null;
    userId: number | null;
    roomId: number | null;
    courseId: number | null;
    capacity: number | null;
};
export type GroupMinAggregateOutputType = {
    id: number | null;
    teacherId: number | null;
    userId: number | null;
    roomId: number | null;
    courseId: number | null;
    name: string | null;
    capacity: number | null;
    startDate: Date | null;
    startTime: string | null;
    status: $Enums.UserStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type GroupMaxAggregateOutputType = {
    id: number | null;
    teacherId: number | null;
    userId: number | null;
    roomId: number | null;
    courseId: number | null;
    name: string | null;
    capacity: number | null;
    startDate: Date | null;
    startTime: string | null;
    status: $Enums.UserStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type GroupCountAggregateOutputType = {
    id: number;
    teacherId: number;
    userId: number;
    roomId: number;
    courseId: number;
    name: number;
    capacity: number;
    startDate: number;
    startTime: number;
    weekDays: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type GroupAvgAggregateInputType = {
    id?: true;
    teacherId?: true;
    userId?: true;
    roomId?: true;
    courseId?: true;
    capacity?: true;
};
export type GroupSumAggregateInputType = {
    id?: true;
    teacherId?: true;
    userId?: true;
    roomId?: true;
    courseId?: true;
    capacity?: true;
};
export type GroupMinAggregateInputType = {
    id?: true;
    teacherId?: true;
    userId?: true;
    roomId?: true;
    courseId?: true;
    name?: true;
    capacity?: true;
    startDate?: true;
    startTime?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type GroupMaxAggregateInputType = {
    id?: true;
    teacherId?: true;
    userId?: true;
    roomId?: true;
    courseId?: true;
    name?: true;
    capacity?: true;
    startDate?: true;
    startTime?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type GroupCountAggregateInputType = {
    id?: true;
    teacherId?: true;
    userId?: true;
    roomId?: true;
    courseId?: true;
    name?: true;
    capacity?: true;
    startDate?: true;
    startTime?: true;
    weekDays?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type GroupAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput | Prisma.GroupOrderByWithRelationInput[];
    cursor?: Prisma.GroupWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GroupCountAggregateInputType;
    _avg?: GroupAvgAggregateInputType;
    _sum?: GroupSumAggregateInputType;
    _min?: GroupMinAggregateInputType;
    _max?: GroupMaxAggregateInputType;
};
export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
    [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGroup[P]> : Prisma.GetScalarType<T[P], AggregateGroup[P]>;
};
export type GroupGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithAggregationInput | Prisma.GroupOrderByWithAggregationInput[];
    by: Prisma.GroupScalarFieldEnum[] | Prisma.GroupScalarFieldEnum;
    having?: Prisma.GroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GroupCountAggregateInputType | true;
    _avg?: GroupAvgAggregateInputType;
    _sum?: GroupSumAggregateInputType;
    _min?: GroupMinAggregateInputType;
    _max?: GroupMaxAggregateInputType;
};
export type GroupGroupByOutputType = {
    id: number;
    teacherId: number | null;
    userId: number | null;
    roomId: number;
    courseId: number;
    name: string;
    capacity: number;
    startDate: Date;
    startTime: string;
    weekDays: $Enums.WeekDays[];
    status: $Enums.UserStatus;
    created_at: Date;
    updated_at: Date;
    _count: GroupCountAggregateOutputType | null;
    _avg: GroupAvgAggregateOutputType | null;
    _sum: GroupSumAggregateOutputType | null;
    _min: GroupMinAggregateOutputType | null;
    _max: GroupMaxAggregateOutputType | null;
};
type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GroupGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GroupGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GroupGroupByOutputType[P]>;
}>>;
export type GroupWhereInput = {
    AND?: Prisma.GroupWhereInput | Prisma.GroupWhereInput[];
    OR?: Prisma.GroupWhereInput[];
    NOT?: Prisma.GroupWhereInput | Prisma.GroupWhereInput[];
    id?: Prisma.IntFilter<"Group"> | number;
    teacherId?: Prisma.IntNullableFilter<"Group"> | number | null;
    userId?: Prisma.IntNullableFilter<"Group"> | number | null;
    roomId?: Prisma.IntFilter<"Group"> | number;
    courseId?: Prisma.IntFilter<"Group"> | number;
    name?: Prisma.StringFilter<"Group"> | string;
    capacity?: Prisma.IntFilter<"Group"> | number;
    startDate?: Prisma.DateTimeFilter<"Group"> | Date | string;
    startTime?: Prisma.StringFilter<"Group"> | string;
    weekDays?: Prisma.EnumWeekDaysNullableListFilter<"Group">;
    status?: Prisma.EnumUserStatusFilter<"Group"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFilter<"Group"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Group"> | Date | string;
    studentGroups?: Prisma.StudentGroupListRelationFilter;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    room?: Prisma.XOR<Prisma.RoomScalarRelationFilter, Prisma.RoomWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    lessons?: Prisma.LessonListRelationFilter;
};
export type GroupOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    weekDays?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    studentGroups?: Prisma.StudentGroupOrderByRelationAggregateInput;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    room?: Prisma.RoomOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    course?: Prisma.CourseOrderByWithRelationInput;
    lessons?: Prisma.LessonOrderByRelationAggregateInput;
};
export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    courseId?: number;
    name?: string;
    AND?: Prisma.GroupWhereInput | Prisma.GroupWhereInput[];
    OR?: Prisma.GroupWhereInput[];
    NOT?: Prisma.GroupWhereInput | Prisma.GroupWhereInput[];
    teacherId?: Prisma.IntNullableFilter<"Group"> | number | null;
    userId?: Prisma.IntNullableFilter<"Group"> | number | null;
    roomId?: Prisma.IntFilter<"Group"> | number;
    capacity?: Prisma.IntFilter<"Group"> | number;
    startDate?: Prisma.DateTimeFilter<"Group"> | Date | string;
    startTime?: Prisma.StringFilter<"Group"> | string;
    weekDays?: Prisma.EnumWeekDaysNullableListFilter<"Group">;
    status?: Prisma.EnumUserStatusFilter<"Group"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFilter<"Group"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Group"> | Date | string;
    studentGroups?: Prisma.StudentGroupListRelationFilter;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    room?: Prisma.XOR<Prisma.RoomScalarRelationFilter, Prisma.RoomWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    lessons?: Prisma.LessonListRelationFilter;
}, "id" | "courseId" | "name">;
export type GroupOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    weekDays?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.GroupCountOrderByAggregateInput;
    _avg?: Prisma.GroupAvgOrderByAggregateInput;
    _max?: Prisma.GroupMaxOrderByAggregateInput;
    _min?: Prisma.GroupMinOrderByAggregateInput;
    _sum?: Prisma.GroupSumOrderByAggregateInput;
};
export type GroupScalarWhereWithAggregatesInput = {
    AND?: Prisma.GroupScalarWhereWithAggregatesInput | Prisma.GroupScalarWhereWithAggregatesInput[];
    OR?: Prisma.GroupScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GroupScalarWhereWithAggregatesInput | Prisma.GroupScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Group"> | number;
    teacherId?: Prisma.IntNullableWithAggregatesFilter<"Group"> | number | null;
    userId?: Prisma.IntNullableWithAggregatesFilter<"Group"> | number | null;
    roomId?: Prisma.IntWithAggregatesFilter<"Group"> | number;
    courseId?: Prisma.IntWithAggregatesFilter<"Group"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Group"> | string;
    capacity?: Prisma.IntWithAggregatesFilter<"Group"> | number;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"Group"> | Date | string;
    startTime?: Prisma.StringWithAggregatesFilter<"Group"> | string;
    weekDays?: Prisma.EnumWeekDaysNullableListFilter<"Group">;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"Group"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Group"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Group"> | Date | string;
};
export type GroupCreateInput = {
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupCreateNestedManyWithoutGroupInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutGroupsInput;
    room: Prisma.RoomCreateNestedOneWithoutGroupsInput;
    user?: Prisma.UserCreateNestedOneWithoutGroupsInput;
    course: Prisma.CourseCreateNestedOneWithoutGroupsInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutGroupInput;
};
export type GroupUncheckedCreateInput = {
    id?: number;
    teacherId?: number | null;
    userId?: number | null;
    roomId: number;
    courseId: number;
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedCreateNestedManyWithoutGroupInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutGroupInput;
};
export type GroupUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUpdateManyWithoutGroupNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutGroupsNestedInput;
    room?: Prisma.RoomUpdateOneRequiredWithoutGroupsNestedInput;
    user?: Prisma.UserUpdateOneWithoutGroupsNestedInput;
    course?: Prisma.CourseUpdateOneRequiredWithoutGroupsNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    roomId?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedUpdateManyWithoutGroupNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GroupCreateManyInput = {
    id?: number;
    teacherId?: number | null;
    userId?: number | null;
    roomId: number;
    courseId: number;
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type GroupUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    roomId?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupListRelationFilter = {
    every?: Prisma.GroupWhereInput;
    some?: Prisma.GroupWhereInput;
    none?: Prisma.GroupWhereInput;
};
export type GroupOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnumWeekDaysNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDays[] | Prisma.ListEnumWeekDaysFieldRefInput<$PrismaModel> | null;
    has?: $Enums.WeekDays | Prisma.EnumWeekDaysFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.WeekDays[] | Prisma.ListEnumWeekDaysFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.WeekDays[] | Prisma.ListEnumWeekDaysFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type GroupCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    weekDays?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type GroupAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
};
export type GroupMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type GroupMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type GroupSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
};
export type GroupScalarRelationFilter = {
    is?: Prisma.GroupWhereInput;
    isNot?: Prisma.GroupWhereInput;
};
export type GroupCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutUserInput, Prisma.GroupUncheckedCreateWithoutUserInput> | Prisma.GroupCreateWithoutUserInput[] | Prisma.GroupUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutUserInput | Prisma.GroupCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.GroupCreateManyUserInputEnvelope;
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
};
export type GroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutUserInput, Prisma.GroupUncheckedCreateWithoutUserInput> | Prisma.GroupCreateWithoutUserInput[] | Prisma.GroupUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutUserInput | Prisma.GroupCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.GroupCreateManyUserInputEnvelope;
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
};
export type GroupUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutUserInput, Prisma.GroupUncheckedCreateWithoutUserInput> | Prisma.GroupCreateWithoutUserInput[] | Prisma.GroupUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutUserInput | Prisma.GroupCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.GroupUpsertWithWhereUniqueWithoutUserInput | Prisma.GroupUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.GroupCreateManyUserInputEnvelope;
    set?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    disconnect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    delete?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    update?: Prisma.GroupUpdateWithWhereUniqueWithoutUserInput | Prisma.GroupUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.GroupUpdateManyWithWhereWithoutUserInput | Prisma.GroupUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
};
export type GroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutUserInput, Prisma.GroupUncheckedCreateWithoutUserInput> | Prisma.GroupCreateWithoutUserInput[] | Prisma.GroupUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutUserInput | Prisma.GroupCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.GroupUpsertWithWhereUniqueWithoutUserInput | Prisma.GroupUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.GroupCreateManyUserInputEnvelope;
    set?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    disconnect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    delete?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    update?: Prisma.GroupUpdateWithWhereUniqueWithoutUserInput | Prisma.GroupUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.GroupUpdateManyWithWhereWithoutUserInput | Prisma.GroupUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
};
export type GroupCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutTeacherInput, Prisma.GroupUncheckedCreateWithoutTeacherInput> | Prisma.GroupCreateWithoutTeacherInput[] | Prisma.GroupUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutTeacherInput | Prisma.GroupCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.GroupCreateManyTeacherInputEnvelope;
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
};
export type GroupUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutTeacherInput, Prisma.GroupUncheckedCreateWithoutTeacherInput> | Prisma.GroupCreateWithoutTeacherInput[] | Prisma.GroupUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutTeacherInput | Prisma.GroupCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.GroupCreateManyTeacherInputEnvelope;
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
};
export type GroupUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutTeacherInput, Prisma.GroupUncheckedCreateWithoutTeacherInput> | Prisma.GroupCreateWithoutTeacherInput[] | Prisma.GroupUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutTeacherInput | Prisma.GroupCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.GroupUpsertWithWhereUniqueWithoutTeacherInput | Prisma.GroupUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.GroupCreateManyTeacherInputEnvelope;
    set?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    disconnect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    delete?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    update?: Prisma.GroupUpdateWithWhereUniqueWithoutTeacherInput | Prisma.GroupUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.GroupUpdateManyWithWhereWithoutTeacherInput | Prisma.GroupUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
};
export type GroupUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutTeacherInput, Prisma.GroupUncheckedCreateWithoutTeacherInput> | Prisma.GroupCreateWithoutTeacherInput[] | Prisma.GroupUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutTeacherInput | Prisma.GroupCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.GroupUpsertWithWhereUniqueWithoutTeacherInput | Prisma.GroupUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.GroupCreateManyTeacherInputEnvelope;
    set?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    disconnect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    delete?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    update?: Prisma.GroupUpdateWithWhereUniqueWithoutTeacherInput | Prisma.GroupUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.GroupUpdateManyWithWhereWithoutTeacherInput | Prisma.GroupUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
};
export type GroupCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutCourseInput, Prisma.GroupUncheckedCreateWithoutCourseInput> | Prisma.GroupCreateWithoutCourseInput[] | Prisma.GroupUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutCourseInput | Prisma.GroupCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.GroupCreateManyCourseInputEnvelope;
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
};
export type GroupUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutCourseInput, Prisma.GroupUncheckedCreateWithoutCourseInput> | Prisma.GroupCreateWithoutCourseInput[] | Prisma.GroupUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutCourseInput | Prisma.GroupCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.GroupCreateManyCourseInputEnvelope;
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
};
export type GroupUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutCourseInput, Prisma.GroupUncheckedCreateWithoutCourseInput> | Prisma.GroupCreateWithoutCourseInput[] | Prisma.GroupUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutCourseInput | Prisma.GroupCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.GroupUpsertWithWhereUniqueWithoutCourseInput | Prisma.GroupUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.GroupCreateManyCourseInputEnvelope;
    set?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    disconnect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    delete?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    update?: Prisma.GroupUpdateWithWhereUniqueWithoutCourseInput | Prisma.GroupUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.GroupUpdateManyWithWhereWithoutCourseInput | Prisma.GroupUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
};
export type GroupUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutCourseInput, Prisma.GroupUncheckedCreateWithoutCourseInput> | Prisma.GroupCreateWithoutCourseInput[] | Prisma.GroupUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutCourseInput | Prisma.GroupCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.GroupUpsertWithWhereUniqueWithoutCourseInput | Prisma.GroupUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.GroupCreateManyCourseInputEnvelope;
    set?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    disconnect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    delete?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    update?: Prisma.GroupUpdateWithWhereUniqueWithoutCourseInput | Prisma.GroupUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.GroupUpdateManyWithWhereWithoutCourseInput | Prisma.GroupUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
};
export type GroupCreateNestedManyWithoutRoomInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutRoomInput, Prisma.GroupUncheckedCreateWithoutRoomInput> | Prisma.GroupCreateWithoutRoomInput[] | Prisma.GroupUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutRoomInput | Prisma.GroupCreateOrConnectWithoutRoomInput[];
    createMany?: Prisma.GroupCreateManyRoomInputEnvelope;
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
};
export type GroupUncheckedCreateNestedManyWithoutRoomInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutRoomInput, Prisma.GroupUncheckedCreateWithoutRoomInput> | Prisma.GroupCreateWithoutRoomInput[] | Prisma.GroupUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutRoomInput | Prisma.GroupCreateOrConnectWithoutRoomInput[];
    createMany?: Prisma.GroupCreateManyRoomInputEnvelope;
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
};
export type GroupUpdateManyWithoutRoomNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutRoomInput, Prisma.GroupUncheckedCreateWithoutRoomInput> | Prisma.GroupCreateWithoutRoomInput[] | Prisma.GroupUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutRoomInput | Prisma.GroupCreateOrConnectWithoutRoomInput[];
    upsert?: Prisma.GroupUpsertWithWhereUniqueWithoutRoomInput | Prisma.GroupUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: Prisma.GroupCreateManyRoomInputEnvelope;
    set?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    disconnect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    delete?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    update?: Prisma.GroupUpdateWithWhereUniqueWithoutRoomInput | Prisma.GroupUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?: Prisma.GroupUpdateManyWithWhereWithoutRoomInput | Prisma.GroupUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
};
export type GroupUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutRoomInput, Prisma.GroupUncheckedCreateWithoutRoomInput> | Prisma.GroupCreateWithoutRoomInput[] | Prisma.GroupUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutRoomInput | Prisma.GroupCreateOrConnectWithoutRoomInput[];
    upsert?: Prisma.GroupUpsertWithWhereUniqueWithoutRoomInput | Prisma.GroupUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: Prisma.GroupCreateManyRoomInputEnvelope;
    set?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    disconnect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    delete?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    update?: Prisma.GroupUpdateWithWhereUniqueWithoutRoomInput | Prisma.GroupUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?: Prisma.GroupUpdateManyWithWhereWithoutRoomInput | Prisma.GroupUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
};
export type GroupCreateweekDaysInput = {
    set: $Enums.WeekDays[];
};
export type GroupUpdateweekDaysInput = {
    set?: $Enums.WeekDays[];
    push?: $Enums.WeekDays | $Enums.WeekDays[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type GroupCreateNestedOneWithoutStudentGroupsInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutStudentGroupsInput, Prisma.GroupUncheckedCreateWithoutStudentGroupsInput>;
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutStudentGroupsInput;
    connect?: Prisma.GroupWhereUniqueInput;
};
export type GroupUpdateOneRequiredWithoutStudentGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutStudentGroupsInput, Prisma.GroupUncheckedCreateWithoutStudentGroupsInput>;
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutStudentGroupsInput;
    upsert?: Prisma.GroupUpsertWithoutStudentGroupsInput;
    connect?: Prisma.GroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GroupUpdateToOneWithWhereWithoutStudentGroupsInput, Prisma.GroupUpdateWithoutStudentGroupsInput>, Prisma.GroupUncheckedUpdateWithoutStudentGroupsInput>;
};
export type GroupCreateNestedOneWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutLessonsInput, Prisma.GroupUncheckedCreateWithoutLessonsInput>;
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutLessonsInput;
    connect?: Prisma.GroupWhereUniqueInput;
};
export type GroupUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutLessonsInput, Prisma.GroupUncheckedCreateWithoutLessonsInput>;
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutLessonsInput;
    upsert?: Prisma.GroupUpsertWithoutLessonsInput;
    connect?: Prisma.GroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GroupUpdateToOneWithWhereWithoutLessonsInput, Prisma.GroupUpdateWithoutLessonsInput>, Prisma.GroupUncheckedUpdateWithoutLessonsInput>;
};
export type GroupCreateWithoutUserInput = {
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupCreateNestedManyWithoutGroupInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutGroupsInput;
    room: Prisma.RoomCreateNestedOneWithoutGroupsInput;
    course: Prisma.CourseCreateNestedOneWithoutGroupsInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutGroupInput;
};
export type GroupUncheckedCreateWithoutUserInput = {
    id?: number;
    teacherId?: number | null;
    roomId: number;
    courseId: number;
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedCreateNestedManyWithoutGroupInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutGroupInput;
};
export type GroupCreateOrConnectWithoutUserInput = {
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateWithoutUserInput, Prisma.GroupUncheckedCreateWithoutUserInput>;
};
export type GroupCreateManyUserInputEnvelope = {
    data: Prisma.GroupCreateManyUserInput | Prisma.GroupCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type GroupUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.GroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.GroupUpdateWithoutUserInput, Prisma.GroupUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.GroupCreateWithoutUserInput, Prisma.GroupUncheckedCreateWithoutUserInput>;
};
export type GroupUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.GroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.GroupUpdateWithoutUserInput, Prisma.GroupUncheckedUpdateWithoutUserInput>;
};
export type GroupUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.GroupScalarWhereInput;
    data: Prisma.XOR<Prisma.GroupUpdateManyMutationInput, Prisma.GroupUncheckedUpdateManyWithoutUserInput>;
};
export type GroupScalarWhereInput = {
    AND?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
    OR?: Prisma.GroupScalarWhereInput[];
    NOT?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
    id?: Prisma.IntFilter<"Group"> | number;
    teacherId?: Prisma.IntNullableFilter<"Group"> | number | null;
    userId?: Prisma.IntNullableFilter<"Group"> | number | null;
    roomId?: Prisma.IntFilter<"Group"> | number;
    courseId?: Prisma.IntFilter<"Group"> | number;
    name?: Prisma.StringFilter<"Group"> | string;
    capacity?: Prisma.IntFilter<"Group"> | number;
    startDate?: Prisma.DateTimeFilter<"Group"> | Date | string;
    startTime?: Prisma.StringFilter<"Group"> | string;
    weekDays?: Prisma.EnumWeekDaysNullableListFilter<"Group">;
    status?: Prisma.EnumUserStatusFilter<"Group"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFilter<"Group"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Group"> | Date | string;
};
export type GroupCreateWithoutTeacherInput = {
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupCreateNestedManyWithoutGroupInput;
    room: Prisma.RoomCreateNestedOneWithoutGroupsInput;
    user?: Prisma.UserCreateNestedOneWithoutGroupsInput;
    course: Prisma.CourseCreateNestedOneWithoutGroupsInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutGroupInput;
};
export type GroupUncheckedCreateWithoutTeacherInput = {
    id?: number;
    userId?: number | null;
    roomId: number;
    courseId: number;
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedCreateNestedManyWithoutGroupInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutGroupInput;
};
export type GroupCreateOrConnectWithoutTeacherInput = {
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateWithoutTeacherInput, Prisma.GroupUncheckedCreateWithoutTeacherInput>;
};
export type GroupCreateManyTeacherInputEnvelope = {
    data: Prisma.GroupCreateManyTeacherInput | Prisma.GroupCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type GroupUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.GroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.GroupUpdateWithoutTeacherInput, Prisma.GroupUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.GroupCreateWithoutTeacherInput, Prisma.GroupUncheckedCreateWithoutTeacherInput>;
};
export type GroupUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.GroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.GroupUpdateWithoutTeacherInput, Prisma.GroupUncheckedUpdateWithoutTeacherInput>;
};
export type GroupUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.GroupScalarWhereInput;
    data: Prisma.XOR<Prisma.GroupUpdateManyMutationInput, Prisma.GroupUncheckedUpdateManyWithoutTeacherInput>;
};
export type GroupCreateWithoutCourseInput = {
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupCreateNestedManyWithoutGroupInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutGroupsInput;
    room: Prisma.RoomCreateNestedOneWithoutGroupsInput;
    user?: Prisma.UserCreateNestedOneWithoutGroupsInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutGroupInput;
};
export type GroupUncheckedCreateWithoutCourseInput = {
    id?: number;
    teacherId?: number | null;
    userId?: number | null;
    roomId: number;
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedCreateNestedManyWithoutGroupInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutGroupInput;
};
export type GroupCreateOrConnectWithoutCourseInput = {
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateWithoutCourseInput, Prisma.GroupUncheckedCreateWithoutCourseInput>;
};
export type GroupCreateManyCourseInputEnvelope = {
    data: Prisma.GroupCreateManyCourseInput | Prisma.GroupCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type GroupUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.GroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.GroupUpdateWithoutCourseInput, Prisma.GroupUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.GroupCreateWithoutCourseInput, Prisma.GroupUncheckedCreateWithoutCourseInput>;
};
export type GroupUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.GroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.GroupUpdateWithoutCourseInput, Prisma.GroupUncheckedUpdateWithoutCourseInput>;
};
export type GroupUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.GroupScalarWhereInput;
    data: Prisma.XOR<Prisma.GroupUpdateManyMutationInput, Prisma.GroupUncheckedUpdateManyWithoutCourseInput>;
};
export type GroupCreateWithoutRoomInput = {
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupCreateNestedManyWithoutGroupInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutGroupsInput;
    user?: Prisma.UserCreateNestedOneWithoutGroupsInput;
    course: Prisma.CourseCreateNestedOneWithoutGroupsInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutGroupInput;
};
export type GroupUncheckedCreateWithoutRoomInput = {
    id?: number;
    teacherId?: number | null;
    userId?: number | null;
    courseId: number;
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedCreateNestedManyWithoutGroupInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutGroupInput;
};
export type GroupCreateOrConnectWithoutRoomInput = {
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateWithoutRoomInput, Prisma.GroupUncheckedCreateWithoutRoomInput>;
};
export type GroupCreateManyRoomInputEnvelope = {
    data: Prisma.GroupCreateManyRoomInput | Prisma.GroupCreateManyRoomInput[];
    skipDuplicates?: boolean;
};
export type GroupUpsertWithWhereUniqueWithoutRoomInput = {
    where: Prisma.GroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.GroupUpdateWithoutRoomInput, Prisma.GroupUncheckedUpdateWithoutRoomInput>;
    create: Prisma.XOR<Prisma.GroupCreateWithoutRoomInput, Prisma.GroupUncheckedCreateWithoutRoomInput>;
};
export type GroupUpdateWithWhereUniqueWithoutRoomInput = {
    where: Prisma.GroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.GroupUpdateWithoutRoomInput, Prisma.GroupUncheckedUpdateWithoutRoomInput>;
};
export type GroupUpdateManyWithWhereWithoutRoomInput = {
    where: Prisma.GroupScalarWhereInput;
    data: Prisma.XOR<Prisma.GroupUpdateManyMutationInput, Prisma.GroupUncheckedUpdateManyWithoutRoomInput>;
};
export type GroupCreateWithoutStudentGroupsInput = {
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutGroupsInput;
    room: Prisma.RoomCreateNestedOneWithoutGroupsInput;
    user?: Prisma.UserCreateNestedOneWithoutGroupsInput;
    course: Prisma.CourseCreateNestedOneWithoutGroupsInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutGroupInput;
};
export type GroupUncheckedCreateWithoutStudentGroupsInput = {
    id?: number;
    teacherId?: number | null;
    userId?: number | null;
    roomId: number;
    courseId: number;
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutGroupInput;
};
export type GroupCreateOrConnectWithoutStudentGroupsInput = {
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateWithoutStudentGroupsInput, Prisma.GroupUncheckedCreateWithoutStudentGroupsInput>;
};
export type GroupUpsertWithoutStudentGroupsInput = {
    update: Prisma.XOR<Prisma.GroupUpdateWithoutStudentGroupsInput, Prisma.GroupUncheckedUpdateWithoutStudentGroupsInput>;
    create: Prisma.XOR<Prisma.GroupCreateWithoutStudentGroupsInput, Prisma.GroupUncheckedCreateWithoutStudentGroupsInput>;
    where?: Prisma.GroupWhereInput;
};
export type GroupUpdateToOneWithWhereWithoutStudentGroupsInput = {
    where?: Prisma.GroupWhereInput;
    data: Prisma.XOR<Prisma.GroupUpdateWithoutStudentGroupsInput, Prisma.GroupUncheckedUpdateWithoutStudentGroupsInput>;
};
export type GroupUpdateWithoutStudentGroupsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutGroupsNestedInput;
    room?: Prisma.RoomUpdateOneRequiredWithoutGroupsNestedInput;
    user?: Prisma.UserUpdateOneWithoutGroupsNestedInput;
    course?: Prisma.CourseUpdateOneRequiredWithoutGroupsNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateWithoutStudentGroupsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    roomId?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GroupCreateWithoutLessonsInput = {
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupCreateNestedManyWithoutGroupInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutGroupsInput;
    room: Prisma.RoomCreateNestedOneWithoutGroupsInput;
    user?: Prisma.UserCreateNestedOneWithoutGroupsInput;
    course: Prisma.CourseCreateNestedOneWithoutGroupsInput;
};
export type GroupUncheckedCreateWithoutLessonsInput = {
    id?: number;
    teacherId?: number | null;
    userId?: number | null;
    roomId: number;
    courseId: number;
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedCreateNestedManyWithoutGroupInput;
};
export type GroupCreateOrConnectWithoutLessonsInput = {
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateWithoutLessonsInput, Prisma.GroupUncheckedCreateWithoutLessonsInput>;
};
export type GroupUpsertWithoutLessonsInput = {
    update: Prisma.XOR<Prisma.GroupUpdateWithoutLessonsInput, Prisma.GroupUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.GroupCreateWithoutLessonsInput, Prisma.GroupUncheckedCreateWithoutLessonsInput>;
    where?: Prisma.GroupWhereInput;
};
export type GroupUpdateToOneWithWhereWithoutLessonsInput = {
    where?: Prisma.GroupWhereInput;
    data: Prisma.XOR<Prisma.GroupUpdateWithoutLessonsInput, Prisma.GroupUncheckedUpdateWithoutLessonsInput>;
};
export type GroupUpdateWithoutLessonsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUpdateManyWithoutGroupNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutGroupsNestedInput;
    room?: Prisma.RoomUpdateOneRequiredWithoutGroupsNestedInput;
    user?: Prisma.UserUpdateOneWithoutGroupsNestedInput;
    course?: Prisma.CourseUpdateOneRequiredWithoutGroupsNestedInput;
};
export type GroupUncheckedUpdateWithoutLessonsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    roomId?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GroupCreateManyUserInput = {
    id?: number;
    teacherId?: number | null;
    roomId: number;
    courseId: number;
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type GroupUpdateWithoutUserInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUpdateManyWithoutGroupNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutGroupsNestedInput;
    room?: Prisma.RoomUpdateOneRequiredWithoutGroupsNestedInput;
    course?: Prisma.CourseUpdateOneRequiredWithoutGroupsNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    roomId?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedUpdateManyWithoutGroupNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    roomId?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupCreateManyTeacherInput = {
    id?: number;
    userId?: number | null;
    roomId: number;
    courseId: number;
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type GroupUpdateWithoutTeacherInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUpdateManyWithoutGroupNestedInput;
    room?: Prisma.RoomUpdateOneRequiredWithoutGroupsNestedInput;
    user?: Prisma.UserUpdateOneWithoutGroupsNestedInput;
    course?: Prisma.CourseUpdateOneRequiredWithoutGroupsNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    roomId?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedUpdateManyWithoutGroupNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    roomId?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupCreateManyCourseInput = {
    id?: number;
    teacherId?: number | null;
    userId?: number | null;
    roomId: number;
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type GroupUpdateWithoutCourseInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUpdateManyWithoutGroupNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutGroupsNestedInput;
    room?: Prisma.RoomUpdateOneRequiredWithoutGroupsNestedInput;
    user?: Prisma.UserUpdateOneWithoutGroupsNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    roomId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedUpdateManyWithoutGroupNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    roomId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupCreateManyRoomInput = {
    id?: number;
    teacherId?: number | null;
    userId?: number | null;
    courseId: number;
    name: string;
    capacity: number;
    startDate: Date | string;
    startTime: string;
    weekDays?: Prisma.GroupCreateweekDaysInput | $Enums.WeekDays[];
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type GroupUpdateWithoutRoomInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUpdateManyWithoutGroupNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutGroupsNestedInput;
    user?: Prisma.UserUpdateOneWithoutGroupsNestedInput;
    course?: Prisma.CourseUpdateOneRequiredWithoutGroupsNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateWithoutRoomInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedUpdateManyWithoutGroupNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateManyWithoutRoomInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDays?: Prisma.GroupUpdateweekDaysInput | $Enums.WeekDays[];
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupCountOutputType = {
    studentGroups: number;
    lessons: number;
};
export type GroupCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    studentGroups?: boolean | GroupCountOutputTypeCountStudentGroupsArgs;
    lessons?: boolean | GroupCountOutputTypeCountLessonsArgs;
};
export type GroupCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupCountOutputTypeSelect<ExtArgs> | null;
};
export type GroupCountOutputTypeCountStudentGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentGroupWhereInput;
};
export type GroupCountOutputTypeCountLessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
};
export type GroupSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    roomId?: boolean;
    courseId?: boolean;
    name?: boolean;
    capacity?: boolean;
    startDate?: boolean;
    startTime?: boolean;
    weekDays?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    studentGroups?: boolean | Prisma.Group$studentGroupsArgs<ExtArgs>;
    teacher?: boolean | Prisma.Group$teacherArgs<ExtArgs>;
    room?: boolean | Prisma.RoomDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Group$userArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    lessons?: boolean | Prisma.Group$lessonsArgs<ExtArgs>;
    _count?: boolean | Prisma.GroupCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["group"]>;
export type GroupSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    roomId?: boolean;
    courseId?: boolean;
    name?: boolean;
    capacity?: boolean;
    startDate?: boolean;
    startTime?: boolean;
    weekDays?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    teacher?: boolean | Prisma.Group$teacherArgs<ExtArgs>;
    room?: boolean | Prisma.RoomDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Group$userArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["group"]>;
export type GroupSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    roomId?: boolean;
    courseId?: boolean;
    name?: boolean;
    capacity?: boolean;
    startDate?: boolean;
    startTime?: boolean;
    weekDays?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    teacher?: boolean | Prisma.Group$teacherArgs<ExtArgs>;
    room?: boolean | Prisma.RoomDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Group$userArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["group"]>;
export type GroupSelectScalar = {
    id?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    roomId?: boolean;
    courseId?: boolean;
    name?: boolean;
    capacity?: boolean;
    startDate?: boolean;
    startTime?: boolean;
    weekDays?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type GroupOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "teacherId" | "userId" | "roomId" | "courseId" | "name" | "capacity" | "startDate" | "startTime" | "weekDays" | "status" | "created_at" | "updated_at", ExtArgs["result"]["group"]>;
export type GroupInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    studentGroups?: boolean | Prisma.Group$studentGroupsArgs<ExtArgs>;
    teacher?: boolean | Prisma.Group$teacherArgs<ExtArgs>;
    room?: boolean | Prisma.RoomDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Group$userArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    lessons?: boolean | Prisma.Group$lessonsArgs<ExtArgs>;
    _count?: boolean | Prisma.GroupCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GroupIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.Group$teacherArgs<ExtArgs>;
    room?: boolean | Prisma.RoomDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Group$userArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type GroupIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.Group$teacherArgs<ExtArgs>;
    room?: boolean | Prisma.RoomDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Group$userArgs<ExtArgs>;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type $GroupPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Group";
    objects: {
        studentGroups: Prisma.$StudentGroupPayload<ExtArgs>[];
        teacher: Prisma.$TeacherPayload<ExtArgs> | null;
        room: Prisma.$RoomPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs> | null;
        course: Prisma.$CoursePayload<ExtArgs>;
        lessons: Prisma.$LessonPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        teacherId: number | null;
        userId: number | null;
        roomId: number;
        courseId: number;
        name: string;
        capacity: number;
        startDate: Date;
        startTime: string;
        weekDays: $Enums.WeekDays[];
        status: $Enums.UserStatus;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["group"]>;
    composites: {};
};
export type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GroupPayload, S>;
export type GroupCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GroupCountAggregateInputType | true;
};
export interface GroupDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Group'];
        meta: {
            name: 'Group';
        };
    };
    findUnique<T extends GroupFindUniqueArgs>(args: Prisma.SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GroupFindFirstArgs>(args?: Prisma.SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GroupFindManyArgs>(args?: Prisma.SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GroupCreateArgs>(args: Prisma.SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GroupCreateManyArgs>(args?: Prisma.SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GroupDeleteArgs>(args: Prisma.SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GroupUpdateArgs>(args: Prisma.SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GroupDeleteManyArgs>(args?: Prisma.SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GroupUpdateManyArgs>(args: Prisma.SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GroupUpsertArgs>(args: Prisma.SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GroupCountArgs>(args?: Prisma.Subset<T, GroupCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GroupCountAggregateOutputType> : number>;
    aggregate<T extends GroupAggregateArgs>(args: Prisma.Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>;
    groupBy<T extends GroupGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GroupGroupByArgs['orderBy'];
    } : {
        orderBy?: GroupGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GroupFieldRefs;
}
export interface Prisma__GroupClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    studentGroups<T extends Prisma.Group$studentGroupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Group$studentGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    teacher<T extends Prisma.Group$teacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Group$teacherArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    room<T extends Prisma.RoomDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoomDefaultArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.Group$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Group$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lessons<T extends Prisma.Group$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Group$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GroupFieldRefs {
    readonly id: Prisma.FieldRef<"Group", 'Int'>;
    readonly teacherId: Prisma.FieldRef<"Group", 'Int'>;
    readonly userId: Prisma.FieldRef<"Group", 'Int'>;
    readonly roomId: Prisma.FieldRef<"Group", 'Int'>;
    readonly courseId: Prisma.FieldRef<"Group", 'Int'>;
    readonly name: Prisma.FieldRef<"Group", 'String'>;
    readonly capacity: Prisma.FieldRef<"Group", 'Int'>;
    readonly startDate: Prisma.FieldRef<"Group", 'DateTime'>;
    readonly startTime: Prisma.FieldRef<"Group", 'String'>;
    readonly weekDays: Prisma.FieldRef<"Group", 'WeekDays[]'>;
    readonly status: Prisma.FieldRef<"Group", 'UserStatus'>;
    readonly created_at: Prisma.FieldRef<"Group", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Group", 'DateTime'>;
}
export type GroupFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where: Prisma.GroupWhereUniqueInput;
};
export type GroupFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where: Prisma.GroupWhereUniqueInput;
};
export type GroupFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GroupFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GroupFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GroupCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupCreateInput, Prisma.GroupUncheckedCreateInput>;
};
export type GroupCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GroupCreateManyInput | Prisma.GroupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GroupCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    data: Prisma.GroupCreateManyInput | Prisma.GroupCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GroupIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GroupUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupUpdateInput, Prisma.GroupUncheckedUpdateInput>;
    where: Prisma.GroupWhereUniqueInput;
};
export type GroupUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GroupUpdateManyMutationInput, Prisma.GroupUncheckedUpdateManyInput>;
    where?: Prisma.GroupWhereInput;
    limit?: number;
};
export type GroupUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupUpdateManyMutationInput, Prisma.GroupUncheckedUpdateManyInput>;
    where?: Prisma.GroupWhereInput;
    limit?: number;
    include?: Prisma.GroupIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GroupUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateInput, Prisma.GroupUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GroupUpdateInput, Prisma.GroupUncheckedUpdateInput>;
};
export type GroupDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where: Prisma.GroupWhereUniqueInput;
};
export type GroupDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
    limit?: number;
};
export type Group$studentGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGroupSelect<ExtArgs> | null;
    omit?: Prisma.StudentGroupOmit<ExtArgs> | null;
    include?: Prisma.StudentGroupInclude<ExtArgs> | null;
    where?: Prisma.StudentGroupWhereInput;
    orderBy?: Prisma.StudentGroupOrderByWithRelationInput | Prisma.StudentGroupOrderByWithRelationInput[];
    cursor?: Prisma.StudentGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentGroupScalarFieldEnum | Prisma.StudentGroupScalarFieldEnum[];
};
export type Group$teacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
};
export type Group$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Group$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GroupDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
};
export {};
