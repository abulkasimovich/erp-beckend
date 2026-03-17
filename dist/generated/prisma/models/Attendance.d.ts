import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AttendanceModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendancePayload>;
export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null;
    _avg: AttendanceAvgAggregateOutputType | null;
    _sum: AttendanceSumAggregateOutputType | null;
    _min: AttendanceMinAggregateOutputType | null;
    _max: AttendanceMaxAggregateOutputType | null;
};
export type AttendanceAvgAggregateOutputType = {
    id: number | null;
    lessonId: number | null;
    teacherId: number | null;
    userId: number | null;
    studentId: number | null;
};
export type AttendanceSumAggregateOutputType = {
    id: number | null;
    lessonId: number | null;
    teacherId: number | null;
    userId: number | null;
    studentId: number | null;
};
export type AttendanceMinAggregateOutputType = {
    id: number | null;
    lessonId: number | null;
    teacherId: number | null;
    userId: number | null;
    studentId: number | null;
    isPresent: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type AttendanceMaxAggregateOutputType = {
    id: number | null;
    lessonId: number | null;
    teacherId: number | null;
    userId: number | null;
    studentId: number | null;
    isPresent: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type AttendanceCountAggregateOutputType = {
    id: number;
    lessonId: number;
    teacherId: number;
    userId: number;
    studentId: number;
    isPresent: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type AttendanceAvgAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
    studentId?: true;
};
export type AttendanceSumAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
    studentId?: true;
};
export type AttendanceMinAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
    studentId?: true;
    isPresent?: true;
    created_at?: true;
    updated_at?: true;
};
export type AttendanceMaxAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
    studentId?: true;
    isPresent?: true;
    created_at?: true;
    updated_at?: true;
};
export type AttendanceCountAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
    studentId?: true;
    isPresent?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type AttendanceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceWhereInput;
    orderBy?: Prisma.AttendanceOrderByWithRelationInput | Prisma.AttendanceOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttendanceCountAggregateInputType;
    _avg?: AttendanceAvgAggregateInputType;
    _sum?: AttendanceSumAggregateInputType;
    _min?: AttendanceMinAggregateInputType;
    _max?: AttendanceMaxAggregateInputType;
};
export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendance[P]> : Prisma.GetScalarType<T[P], AggregateAttendance[P]>;
};
export type AttendanceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceWhereInput;
    orderBy?: Prisma.AttendanceOrderByWithAggregationInput | Prisma.AttendanceOrderByWithAggregationInput[];
    by: Prisma.AttendanceScalarFieldEnum[] | Prisma.AttendanceScalarFieldEnum;
    having?: Prisma.AttendanceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceCountAggregateInputType | true;
    _avg?: AttendanceAvgAggregateInputType;
    _sum?: AttendanceSumAggregateInputType;
    _min?: AttendanceMinAggregateInputType;
    _max?: AttendanceMaxAggregateInputType;
};
export type AttendanceGroupByOutputType = {
    id: number;
    lessonId: number;
    teacherId: number | null;
    userId: number | null;
    studentId: number;
    isPresent: boolean;
    created_at: Date;
    updated_at: Date;
    _count: AttendanceCountAggregateOutputType | null;
    _avg: AttendanceAvgAggregateOutputType | null;
    _sum: AttendanceSumAggregateOutputType | null;
    _min: AttendanceMinAggregateOutputType | null;
    _max: AttendanceMaxAggregateOutputType | null;
};
type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceGroupByOutputType[P]>;
}>>;
export type AttendanceWhereInput = {
    AND?: Prisma.AttendanceWhereInput | Prisma.AttendanceWhereInput[];
    OR?: Prisma.AttendanceWhereInput[];
    NOT?: Prisma.AttendanceWhereInput | Prisma.AttendanceWhereInput[];
    id?: Prisma.IntFilter<"Attendance"> | number;
    lessonId?: Prisma.IntFilter<"Attendance"> | number;
    teacherId?: Prisma.IntNullableFilter<"Attendance"> | number | null;
    userId?: Prisma.IntNullableFilter<"Attendance"> | number | null;
    studentId?: Prisma.IntFilter<"Attendance"> | number;
    isPresent?: Prisma.BoolFilter<"Attendance"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Attendance"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Attendance"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
};
export type AttendanceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    isPresent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    lesson?: Prisma.LessonOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    student?: Prisma.StudentOrderByWithRelationInput;
};
export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AttendanceWhereInput | Prisma.AttendanceWhereInput[];
    OR?: Prisma.AttendanceWhereInput[];
    NOT?: Prisma.AttendanceWhereInput | Prisma.AttendanceWhereInput[];
    lessonId?: Prisma.IntFilter<"Attendance"> | number;
    teacherId?: Prisma.IntNullableFilter<"Attendance"> | number | null;
    userId?: Prisma.IntNullableFilter<"Attendance"> | number | null;
    studentId?: Prisma.IntFilter<"Attendance"> | number;
    isPresent?: Prisma.BoolFilter<"Attendance"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Attendance"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Attendance"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
}, "id">;
export type AttendanceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    isPresent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.AttendanceCountOrderByAggregateInput;
    _avg?: Prisma.AttendanceAvgOrderByAggregateInput;
    _max?: Prisma.AttendanceMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceMinOrderByAggregateInput;
    _sum?: Prisma.AttendanceSumOrderByAggregateInput;
};
export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceScalarWhereWithAggregatesInput | Prisma.AttendanceScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceScalarWhereWithAggregatesInput | Prisma.AttendanceScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Attendance"> | number;
    lessonId?: Prisma.IntWithAggregatesFilter<"Attendance"> | number;
    teacherId?: Prisma.IntNullableWithAggregatesFilter<"Attendance"> | number | null;
    userId?: Prisma.IntNullableWithAggregatesFilter<"Attendance"> | number | null;
    studentId?: Prisma.IntWithAggregatesFilter<"Attendance"> | number;
    isPresent?: Prisma.BoolWithAggregatesFilter<"Attendance"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Attendance"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Attendance"> | Date | string;
};
export type AttendanceCreateInput = {
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutAttendancesInput;
    lesson: Prisma.LessonCreateNestedOneWithoutAttendancesInput;
    user?: Prisma.UserCreateNestedOneWithoutAttendancesInput;
    student: Prisma.StudentCreateNestedOneWithoutAttendancesInput;
};
export type AttendanceUncheckedCreateInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    userId?: number | null;
    studentId: number;
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type AttendanceUpdateInput = {
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutAttendancesNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutAttendancesNestedInput;
    user?: Prisma.UserUpdateOneWithoutAttendancesNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutAttendancesNestedInput;
};
export type AttendanceUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCreateManyInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    userId?: number | null;
    studentId: number;
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type AttendanceUpdateManyMutationInput = {
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceListRelationFilter = {
    every?: Prisma.AttendanceWhereInput;
    some?: Prisma.AttendanceWhereInput;
    none?: Prisma.AttendanceWhereInput;
};
export type AttendanceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendanceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    isPresent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type AttendanceAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
};
export type AttendanceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    isPresent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type AttendanceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    isPresent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type AttendanceSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
};
export type AttendanceCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutUserInput, Prisma.AttendanceUncheckedCreateWithoutUserInput> | Prisma.AttendanceCreateWithoutUserInput[] | Prisma.AttendanceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutUserInput | Prisma.AttendanceCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AttendanceCreateManyUserInputEnvelope;
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
};
export type AttendanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutUserInput, Prisma.AttendanceUncheckedCreateWithoutUserInput> | Prisma.AttendanceCreateWithoutUserInput[] | Prisma.AttendanceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutUserInput | Prisma.AttendanceCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AttendanceCreateManyUserInputEnvelope;
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
};
export type AttendanceUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutUserInput, Prisma.AttendanceUncheckedCreateWithoutUserInput> | Prisma.AttendanceCreateWithoutUserInput[] | Prisma.AttendanceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutUserInput | Prisma.AttendanceCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AttendanceUpsertWithWhereUniqueWithoutUserInput | Prisma.AttendanceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AttendanceCreateManyUserInputEnvelope;
    set?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    disconnect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    delete?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    update?: Prisma.AttendanceUpdateWithWhereUniqueWithoutUserInput | Prisma.AttendanceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AttendanceUpdateManyWithWhereWithoutUserInput | Prisma.AttendanceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AttendanceScalarWhereInput | Prisma.AttendanceScalarWhereInput[];
};
export type AttendanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutUserInput, Prisma.AttendanceUncheckedCreateWithoutUserInput> | Prisma.AttendanceCreateWithoutUserInput[] | Prisma.AttendanceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutUserInput | Prisma.AttendanceCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AttendanceUpsertWithWhereUniqueWithoutUserInput | Prisma.AttendanceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AttendanceCreateManyUserInputEnvelope;
    set?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    disconnect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    delete?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    update?: Prisma.AttendanceUpdateWithWhereUniqueWithoutUserInput | Prisma.AttendanceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AttendanceUpdateManyWithWhereWithoutUserInput | Prisma.AttendanceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AttendanceScalarWhereInput | Prisma.AttendanceScalarWhereInput[];
};
export type AttendanceCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutTeacherInput, Prisma.AttendanceUncheckedCreateWithoutTeacherInput> | Prisma.AttendanceCreateWithoutTeacherInput[] | Prisma.AttendanceUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutTeacherInput | Prisma.AttendanceCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.AttendanceCreateManyTeacherInputEnvelope;
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
};
export type AttendanceUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutTeacherInput, Prisma.AttendanceUncheckedCreateWithoutTeacherInput> | Prisma.AttendanceCreateWithoutTeacherInput[] | Prisma.AttendanceUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutTeacherInput | Prisma.AttendanceCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.AttendanceCreateManyTeacherInputEnvelope;
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
};
export type AttendanceUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutTeacherInput, Prisma.AttendanceUncheckedCreateWithoutTeacherInput> | Prisma.AttendanceCreateWithoutTeacherInput[] | Prisma.AttendanceUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutTeacherInput | Prisma.AttendanceCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.AttendanceUpsertWithWhereUniqueWithoutTeacherInput | Prisma.AttendanceUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.AttendanceCreateManyTeacherInputEnvelope;
    set?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    disconnect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    delete?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    update?: Prisma.AttendanceUpdateWithWhereUniqueWithoutTeacherInput | Prisma.AttendanceUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.AttendanceUpdateManyWithWhereWithoutTeacherInput | Prisma.AttendanceUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.AttendanceScalarWhereInput | Prisma.AttendanceScalarWhereInput[];
};
export type AttendanceUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutTeacherInput, Prisma.AttendanceUncheckedCreateWithoutTeacherInput> | Prisma.AttendanceCreateWithoutTeacherInput[] | Prisma.AttendanceUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutTeacherInput | Prisma.AttendanceCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.AttendanceUpsertWithWhereUniqueWithoutTeacherInput | Prisma.AttendanceUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.AttendanceCreateManyTeacherInputEnvelope;
    set?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    disconnect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    delete?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    update?: Prisma.AttendanceUpdateWithWhereUniqueWithoutTeacherInput | Prisma.AttendanceUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.AttendanceUpdateManyWithWhereWithoutTeacherInput | Prisma.AttendanceUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.AttendanceScalarWhereInput | Prisma.AttendanceScalarWhereInput[];
};
export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutStudentInput, Prisma.AttendanceUncheckedCreateWithoutStudentInput> | Prisma.AttendanceCreateWithoutStudentInput[] | Prisma.AttendanceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutStudentInput | Prisma.AttendanceCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.AttendanceCreateManyStudentInputEnvelope;
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
};
export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutStudentInput, Prisma.AttendanceUncheckedCreateWithoutStudentInput> | Prisma.AttendanceCreateWithoutStudentInput[] | Prisma.AttendanceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutStudentInput | Prisma.AttendanceCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.AttendanceCreateManyStudentInputEnvelope;
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
};
export type AttendanceUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutStudentInput, Prisma.AttendanceUncheckedCreateWithoutStudentInput> | Prisma.AttendanceCreateWithoutStudentInput[] | Prisma.AttendanceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutStudentInput | Prisma.AttendanceCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.AttendanceUpsertWithWhereUniqueWithoutStudentInput | Prisma.AttendanceUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.AttendanceCreateManyStudentInputEnvelope;
    set?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    disconnect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    delete?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    update?: Prisma.AttendanceUpdateWithWhereUniqueWithoutStudentInput | Prisma.AttendanceUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.AttendanceUpdateManyWithWhereWithoutStudentInput | Prisma.AttendanceUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.AttendanceScalarWhereInput | Prisma.AttendanceScalarWhereInput[];
};
export type AttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutStudentInput, Prisma.AttendanceUncheckedCreateWithoutStudentInput> | Prisma.AttendanceCreateWithoutStudentInput[] | Prisma.AttendanceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutStudentInput | Prisma.AttendanceCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.AttendanceUpsertWithWhereUniqueWithoutStudentInput | Prisma.AttendanceUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.AttendanceCreateManyStudentInputEnvelope;
    set?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    disconnect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    delete?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    update?: Prisma.AttendanceUpdateWithWhereUniqueWithoutStudentInput | Prisma.AttendanceUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.AttendanceUpdateManyWithWhereWithoutStudentInput | Prisma.AttendanceUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.AttendanceScalarWhereInput | Prisma.AttendanceScalarWhereInput[];
};
export type AttendanceCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutLessonInput, Prisma.AttendanceUncheckedCreateWithoutLessonInput> | Prisma.AttendanceCreateWithoutLessonInput[] | Prisma.AttendanceUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutLessonInput | Prisma.AttendanceCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.AttendanceCreateManyLessonInputEnvelope;
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
};
export type AttendanceUncheckedCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutLessonInput, Prisma.AttendanceUncheckedCreateWithoutLessonInput> | Prisma.AttendanceCreateWithoutLessonInput[] | Prisma.AttendanceUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutLessonInput | Prisma.AttendanceCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.AttendanceCreateManyLessonInputEnvelope;
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
};
export type AttendanceUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutLessonInput, Prisma.AttendanceUncheckedCreateWithoutLessonInput> | Prisma.AttendanceCreateWithoutLessonInput[] | Prisma.AttendanceUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutLessonInput | Prisma.AttendanceCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.AttendanceUpsertWithWhereUniqueWithoutLessonInput | Prisma.AttendanceUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.AttendanceCreateManyLessonInputEnvelope;
    set?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    disconnect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    delete?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    update?: Prisma.AttendanceUpdateWithWhereUniqueWithoutLessonInput | Prisma.AttendanceUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.AttendanceUpdateManyWithWhereWithoutLessonInput | Prisma.AttendanceUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.AttendanceScalarWhereInput | Prisma.AttendanceScalarWhereInput[];
};
export type AttendanceUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutLessonInput, Prisma.AttendanceUncheckedCreateWithoutLessonInput> | Prisma.AttendanceCreateWithoutLessonInput[] | Prisma.AttendanceUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutLessonInput | Prisma.AttendanceCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.AttendanceUpsertWithWhereUniqueWithoutLessonInput | Prisma.AttendanceUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.AttendanceCreateManyLessonInputEnvelope;
    set?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    disconnect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    delete?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    update?: Prisma.AttendanceUpdateWithWhereUniqueWithoutLessonInput | Prisma.AttendanceUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.AttendanceUpdateManyWithWhereWithoutLessonInput | Prisma.AttendanceUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.AttendanceScalarWhereInput | Prisma.AttendanceScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type AttendanceCreateWithoutUserInput = {
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutAttendancesInput;
    lesson: Prisma.LessonCreateNestedOneWithoutAttendancesInput;
    student: Prisma.StudentCreateNestedOneWithoutAttendancesInput;
};
export type AttendanceUncheckedCreateWithoutUserInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    studentId: number;
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type AttendanceCreateOrConnectWithoutUserInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceCreateWithoutUserInput, Prisma.AttendanceUncheckedCreateWithoutUserInput>;
};
export type AttendanceCreateManyUserInputEnvelope = {
    data: Prisma.AttendanceCreateManyUserInput | Prisma.AttendanceCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type AttendanceUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceUpdateWithoutUserInput, Prisma.AttendanceUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AttendanceCreateWithoutUserInput, Prisma.AttendanceUncheckedCreateWithoutUserInput>;
};
export type AttendanceUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceUpdateWithoutUserInput, Prisma.AttendanceUncheckedUpdateWithoutUserInput>;
};
export type AttendanceUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.AttendanceScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceUpdateManyMutationInput, Prisma.AttendanceUncheckedUpdateManyWithoutUserInput>;
};
export type AttendanceScalarWhereInput = {
    AND?: Prisma.AttendanceScalarWhereInput | Prisma.AttendanceScalarWhereInput[];
    OR?: Prisma.AttendanceScalarWhereInput[];
    NOT?: Prisma.AttendanceScalarWhereInput | Prisma.AttendanceScalarWhereInput[];
    id?: Prisma.IntFilter<"Attendance"> | number;
    lessonId?: Prisma.IntFilter<"Attendance"> | number;
    teacherId?: Prisma.IntNullableFilter<"Attendance"> | number | null;
    userId?: Prisma.IntNullableFilter<"Attendance"> | number | null;
    studentId?: Prisma.IntFilter<"Attendance"> | number;
    isPresent?: Prisma.BoolFilter<"Attendance"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Attendance"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Attendance"> | Date | string;
};
export type AttendanceCreateWithoutTeacherInput = {
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    lesson: Prisma.LessonCreateNestedOneWithoutAttendancesInput;
    user?: Prisma.UserCreateNestedOneWithoutAttendancesInput;
    student: Prisma.StudentCreateNestedOneWithoutAttendancesInput;
};
export type AttendanceUncheckedCreateWithoutTeacherInput = {
    id?: number;
    lessonId: number;
    userId?: number | null;
    studentId: number;
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type AttendanceCreateOrConnectWithoutTeacherInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceCreateWithoutTeacherInput, Prisma.AttendanceUncheckedCreateWithoutTeacherInput>;
};
export type AttendanceCreateManyTeacherInputEnvelope = {
    data: Prisma.AttendanceCreateManyTeacherInput | Prisma.AttendanceCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type AttendanceUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceUpdateWithoutTeacherInput, Prisma.AttendanceUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.AttendanceCreateWithoutTeacherInput, Prisma.AttendanceUncheckedCreateWithoutTeacherInput>;
};
export type AttendanceUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceUpdateWithoutTeacherInput, Prisma.AttendanceUncheckedUpdateWithoutTeacherInput>;
};
export type AttendanceUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.AttendanceScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceUpdateManyMutationInput, Prisma.AttendanceUncheckedUpdateManyWithoutTeacherInput>;
};
export type AttendanceCreateWithoutStudentInput = {
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutAttendancesInput;
    lesson: Prisma.LessonCreateNestedOneWithoutAttendancesInput;
    user?: Prisma.UserCreateNestedOneWithoutAttendancesInput;
};
export type AttendanceUncheckedCreateWithoutStudentInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    userId?: number | null;
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceCreateWithoutStudentInput, Prisma.AttendanceUncheckedCreateWithoutStudentInput>;
};
export type AttendanceCreateManyStudentInputEnvelope = {
    data: Prisma.AttendanceCreateManyStudentInput | Prisma.AttendanceCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type AttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceUpdateWithoutStudentInput, Prisma.AttendanceUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.AttendanceCreateWithoutStudentInput, Prisma.AttendanceUncheckedCreateWithoutStudentInput>;
};
export type AttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceUpdateWithoutStudentInput, Prisma.AttendanceUncheckedUpdateWithoutStudentInput>;
};
export type AttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.AttendanceScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceUpdateManyMutationInput, Prisma.AttendanceUncheckedUpdateManyWithoutStudentInput>;
};
export type AttendanceCreateWithoutLessonInput = {
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutAttendancesInput;
    user?: Prisma.UserCreateNestedOneWithoutAttendancesInput;
    student: Prisma.StudentCreateNestedOneWithoutAttendancesInput;
};
export type AttendanceUncheckedCreateWithoutLessonInput = {
    id?: number;
    teacherId?: number | null;
    userId?: number | null;
    studentId: number;
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type AttendanceCreateOrConnectWithoutLessonInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceCreateWithoutLessonInput, Prisma.AttendanceUncheckedCreateWithoutLessonInput>;
};
export type AttendanceCreateManyLessonInputEnvelope = {
    data: Prisma.AttendanceCreateManyLessonInput | Prisma.AttendanceCreateManyLessonInput[];
    skipDuplicates?: boolean;
};
export type AttendanceUpsertWithWhereUniqueWithoutLessonInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceUpdateWithoutLessonInput, Prisma.AttendanceUncheckedUpdateWithoutLessonInput>;
    create: Prisma.XOR<Prisma.AttendanceCreateWithoutLessonInput, Prisma.AttendanceUncheckedCreateWithoutLessonInput>;
};
export type AttendanceUpdateWithWhereUniqueWithoutLessonInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceUpdateWithoutLessonInput, Prisma.AttendanceUncheckedUpdateWithoutLessonInput>;
};
export type AttendanceUpdateManyWithWhereWithoutLessonInput = {
    where: Prisma.AttendanceScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceUpdateManyMutationInput, Prisma.AttendanceUncheckedUpdateManyWithoutLessonInput>;
};
export type AttendanceCreateManyUserInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    studentId: number;
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type AttendanceUpdateWithoutUserInput = {
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutAttendancesNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutAttendancesNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutAttendancesNestedInput;
};
export type AttendanceUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCreateManyTeacherInput = {
    id?: number;
    lessonId: number;
    userId?: number | null;
    studentId: number;
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type AttendanceUpdateWithoutTeacherInput = {
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutAttendancesNestedInput;
    user?: Prisma.UserUpdateOneWithoutAttendancesNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutAttendancesNestedInput;
};
export type AttendanceUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCreateManyStudentInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    userId?: number | null;
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type AttendanceUpdateWithoutStudentInput = {
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutAttendancesNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutAttendancesNestedInput;
    user?: Prisma.UserUpdateOneWithoutAttendancesNestedInput;
};
export type AttendanceUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCreateManyLessonInput = {
    id?: number;
    teacherId?: number | null;
    userId?: number | null;
    studentId: number;
    isPresent: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type AttendanceUpdateWithoutLessonInput = {
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutAttendancesNestedInput;
    user?: Prisma.UserUpdateOneWithoutAttendancesNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutAttendancesNestedInput;
};
export type AttendanceUncheckedUpdateWithoutLessonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceUncheckedUpdateManyWithoutLessonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    isPresent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    studentId?: boolean;
    isPresent?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    teacher?: boolean | Prisma.Attendance$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Attendance$userArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendance"]>;
export type AttendanceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    studentId?: boolean;
    isPresent?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    teacher?: boolean | Prisma.Attendance$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Attendance$userArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendance"]>;
export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    studentId?: boolean;
    isPresent?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    teacher?: boolean | Prisma.Attendance$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Attendance$userArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendance"]>;
export type AttendanceSelectScalar = {
    id?: boolean;
    lessonId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    studentId?: boolean;
    isPresent?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type AttendanceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lessonId" | "teacherId" | "userId" | "studentId" | "isPresent" | "created_at" | "updated_at", ExtArgs["result"]["attendance"]>;
export type AttendanceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.Attendance$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Attendance$userArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.Attendance$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Attendance$userArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.Attendance$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Attendance$userArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type $AttendancePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Attendance";
    objects: {
        teacher: Prisma.$TeacherPayload<ExtArgs> | null;
        lesson: Prisma.$LessonPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs> | null;
        student: Prisma.$StudentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        lessonId: number;
        teacherId: number | null;
        userId: number | null;
        studentId: number;
        isPresent: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["attendance"]>;
    composites: {};
};
export type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendancePayload, S>;
export type AttendanceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceCountAggregateInputType | true;
};
export interface AttendanceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Attendance'];
        meta: {
            name: 'Attendance';
        };
    };
    findUnique<T extends AttendanceFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttendanceFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttendanceFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttendanceCreateArgs>(args: Prisma.SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttendanceCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttendanceDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttendanceUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttendanceUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttendanceUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttendanceCountArgs>(args?: Prisma.Subset<T, AttendanceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceCountAggregateOutputType> : number>;
    aggregate<T extends AttendanceAggregateArgs>(args: Prisma.Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>;
    groupBy<T extends AttendanceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttendanceFieldRefs;
}
export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    teacher<T extends Prisma.Attendance$teacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Attendance$teacherArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lesson<T extends Prisma.LessonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonDefaultArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.Attendance$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Attendance$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttendanceFieldRefs {
    readonly id: Prisma.FieldRef<"Attendance", 'Int'>;
    readonly lessonId: Prisma.FieldRef<"Attendance", 'Int'>;
    readonly teacherId: Prisma.FieldRef<"Attendance", 'Int'>;
    readonly userId: Prisma.FieldRef<"Attendance", 'Int'>;
    readonly studentId: Prisma.FieldRef<"Attendance", 'Int'>;
    readonly isPresent: Prisma.FieldRef<"Attendance", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"Attendance", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Attendance", 'DateTime'>;
}
export type AttendanceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    where: Prisma.AttendanceWhereUniqueInput;
};
export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    where: Prisma.AttendanceWhereUniqueInput;
};
export type AttendanceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttendanceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttendanceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttendanceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceCreateInput, Prisma.AttendanceUncheckedCreateInput>;
};
export type AttendanceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttendanceCreateManyInput | Prisma.AttendanceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendanceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    data: Prisma.AttendanceCreateManyInput | Prisma.AttendanceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AttendanceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AttendanceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceUpdateInput, Prisma.AttendanceUncheckedUpdateInput>;
    where: Prisma.AttendanceWhereUniqueInput;
};
export type AttendanceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttendanceUpdateManyMutationInput, Prisma.AttendanceUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceWhereInput;
    limit?: number;
};
export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceUpdateManyMutationInput, Prisma.AttendanceUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceWhereInput;
    limit?: number;
    include?: Prisma.AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AttendanceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    where: Prisma.AttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceCreateInput, Prisma.AttendanceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttendanceUpdateInput, Prisma.AttendanceUncheckedUpdateInput>;
};
export type AttendanceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    where: Prisma.AttendanceWhereUniqueInput;
};
export type AttendanceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceWhereInput;
    limit?: number;
};
export type Attendance$teacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
};
export type Attendance$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type AttendanceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
};
export {};
