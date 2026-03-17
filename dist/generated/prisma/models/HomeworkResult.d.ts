import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HomeworkResultModel = runtime.Types.Result.DefaultSelection<Prisma.$HomeworkResultPayload>;
export type AggregateHomeworkResult = {
    _count: HomeworkResultCountAggregateOutputType | null;
    _avg: HomeworkResultAvgAggregateOutputType | null;
    _sum: HomeworkResultSumAggregateOutputType | null;
    _min: HomeworkResultMinAggregateOutputType | null;
    _max: HomeworkResultMaxAggregateOutputType | null;
};
export type HomeworkResultAvgAggregateOutputType = {
    id: number | null;
    homeworkId: number | null;
    studentId: number | null;
    teacherId: number | null;
    userId: number | null;
    score: number | null;
};
export type HomeworkResultSumAggregateOutputType = {
    id: number | null;
    homeworkId: number | null;
    studentId: number | null;
    teacherId: number | null;
    userId: number | null;
    score: number | null;
};
export type HomeworkResultMinAggregateOutputType = {
    id: number | null;
    homeworkId: number | null;
    studentId: number | null;
    teacherId: number | null;
    userId: number | null;
    title: string | null;
    file: string | null;
    score: number | null;
    status: $Enums.HomeworkStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type HomeworkResultMaxAggregateOutputType = {
    id: number | null;
    homeworkId: number | null;
    studentId: number | null;
    teacherId: number | null;
    userId: number | null;
    title: string | null;
    file: string | null;
    score: number | null;
    status: $Enums.HomeworkStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type HomeworkResultCountAggregateOutputType = {
    id: number;
    homeworkId: number;
    studentId: number;
    teacherId: number;
    userId: number;
    title: number;
    file: number;
    score: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type HomeworkResultAvgAggregateInputType = {
    id?: true;
    homeworkId?: true;
    studentId?: true;
    teacherId?: true;
    userId?: true;
    score?: true;
};
export type HomeworkResultSumAggregateInputType = {
    id?: true;
    homeworkId?: true;
    studentId?: true;
    teacherId?: true;
    userId?: true;
    score?: true;
};
export type HomeworkResultMinAggregateInputType = {
    id?: true;
    homeworkId?: true;
    studentId?: true;
    teacherId?: true;
    userId?: true;
    title?: true;
    file?: true;
    score?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type HomeworkResultMaxAggregateInputType = {
    id?: true;
    homeworkId?: true;
    studentId?: true;
    teacherId?: true;
    userId?: true;
    title?: true;
    file?: true;
    score?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type HomeworkResultCountAggregateInputType = {
    id?: true;
    homeworkId?: true;
    studentId?: true;
    teacherId?: true;
    userId?: true;
    title?: true;
    file?: true;
    score?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type HomeworkResultAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkResultWhereInput;
    orderBy?: Prisma.HomeworkResultOrderByWithRelationInput | Prisma.HomeworkResultOrderByWithRelationInput[];
    cursor?: Prisma.HomeworkResultWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HomeworkResultCountAggregateInputType;
    _avg?: HomeworkResultAvgAggregateInputType;
    _sum?: HomeworkResultSumAggregateInputType;
    _min?: HomeworkResultMinAggregateInputType;
    _max?: HomeworkResultMaxAggregateInputType;
};
export type GetHomeworkResultAggregateType<T extends HomeworkResultAggregateArgs> = {
    [P in keyof T & keyof AggregateHomeworkResult]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHomeworkResult[P]> : Prisma.GetScalarType<T[P], AggregateHomeworkResult[P]>;
};
export type HomeworkResultGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkResultWhereInput;
    orderBy?: Prisma.HomeworkResultOrderByWithAggregationInput | Prisma.HomeworkResultOrderByWithAggregationInput[];
    by: Prisma.HomeworkResultScalarFieldEnum[] | Prisma.HomeworkResultScalarFieldEnum;
    having?: Prisma.HomeworkResultScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HomeworkResultCountAggregateInputType | true;
    _avg?: HomeworkResultAvgAggregateInputType;
    _sum?: HomeworkResultSumAggregateInputType;
    _min?: HomeworkResultMinAggregateInputType;
    _max?: HomeworkResultMaxAggregateInputType;
};
export type HomeworkResultGroupByOutputType = {
    id: number;
    homeworkId: number;
    studentId: number;
    teacherId: number | null;
    userId: number | null;
    title: string;
    file: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at: Date;
    updated_at: Date;
    _count: HomeworkResultCountAggregateOutputType | null;
    _avg: HomeworkResultAvgAggregateOutputType | null;
    _sum: HomeworkResultSumAggregateOutputType | null;
    _min: HomeworkResultMinAggregateOutputType | null;
    _max: HomeworkResultMaxAggregateOutputType | null;
};
type GetHomeworkResultGroupByPayload<T extends HomeworkResultGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HomeworkResultGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HomeworkResultGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HomeworkResultGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HomeworkResultGroupByOutputType[P]>;
}>>;
export type HomeworkResultWhereInput = {
    AND?: Prisma.HomeworkResultWhereInput | Prisma.HomeworkResultWhereInput[];
    OR?: Prisma.HomeworkResultWhereInput[];
    NOT?: Prisma.HomeworkResultWhereInput | Prisma.HomeworkResultWhereInput[];
    id?: Prisma.IntFilter<"HomeworkResult"> | number;
    homeworkId?: Prisma.IntFilter<"HomeworkResult"> | number;
    studentId?: Prisma.IntFilter<"HomeworkResult"> | number;
    teacherId?: Prisma.IntNullableFilter<"HomeworkResult"> | number | null;
    userId?: Prisma.IntNullableFilter<"HomeworkResult"> | number | null;
    title?: Prisma.StringFilter<"HomeworkResult"> | string;
    file?: Prisma.StringNullableFilter<"HomeworkResult"> | string | null;
    score?: Prisma.IntFilter<"HomeworkResult"> | number;
    status?: Prisma.EnumHomeworkStatusFilter<"HomeworkResult"> | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFilter<"HomeworkResult"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"HomeworkResult"> | Date | string;
    homework?: Prisma.XOR<Prisma.HomeworkScalarRelationFilter, Prisma.HomeworkWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type HomeworkResultOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    homeworkId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrderInput | Prisma.SortOrder;
    score?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    homework?: Prisma.HomeworkOrderByWithRelationInput;
    student?: Prisma.StudentOrderByWithRelationInput;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type HomeworkResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.HomeworkResultWhereInput | Prisma.HomeworkResultWhereInput[];
    OR?: Prisma.HomeworkResultWhereInput[];
    NOT?: Prisma.HomeworkResultWhereInput | Prisma.HomeworkResultWhereInput[];
    homeworkId?: Prisma.IntFilter<"HomeworkResult"> | number;
    studentId?: Prisma.IntFilter<"HomeworkResult"> | number;
    teacherId?: Prisma.IntNullableFilter<"HomeworkResult"> | number | null;
    userId?: Prisma.IntNullableFilter<"HomeworkResult"> | number | null;
    title?: Prisma.StringFilter<"HomeworkResult"> | string;
    file?: Prisma.StringNullableFilter<"HomeworkResult"> | string | null;
    score?: Prisma.IntFilter<"HomeworkResult"> | number;
    status?: Prisma.EnumHomeworkStatusFilter<"HomeworkResult"> | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFilter<"HomeworkResult"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"HomeworkResult"> | Date | string;
    homework?: Prisma.XOR<Prisma.HomeworkScalarRelationFilter, Prisma.HomeworkWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type HomeworkResultOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    homeworkId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrderInput | Prisma.SortOrder;
    score?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.HomeworkResultCountOrderByAggregateInput;
    _avg?: Prisma.HomeworkResultAvgOrderByAggregateInput;
    _max?: Prisma.HomeworkResultMaxOrderByAggregateInput;
    _min?: Prisma.HomeworkResultMinOrderByAggregateInput;
    _sum?: Prisma.HomeworkResultSumOrderByAggregateInput;
};
export type HomeworkResultScalarWhereWithAggregatesInput = {
    AND?: Prisma.HomeworkResultScalarWhereWithAggregatesInput | Prisma.HomeworkResultScalarWhereWithAggregatesInput[];
    OR?: Prisma.HomeworkResultScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HomeworkResultScalarWhereWithAggregatesInput | Prisma.HomeworkResultScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"HomeworkResult"> | number;
    homeworkId?: Prisma.IntWithAggregatesFilter<"HomeworkResult"> | number;
    studentId?: Prisma.IntWithAggregatesFilter<"HomeworkResult"> | number;
    teacherId?: Prisma.IntNullableWithAggregatesFilter<"HomeworkResult"> | number | null;
    userId?: Prisma.IntNullableWithAggregatesFilter<"HomeworkResult"> | number | null;
    title?: Prisma.StringWithAggregatesFilter<"HomeworkResult"> | string;
    file?: Prisma.StringNullableWithAggregatesFilter<"HomeworkResult"> | string | null;
    score?: Prisma.IntWithAggregatesFilter<"HomeworkResult"> | number;
    status?: Prisma.EnumHomeworkStatusWithAggregatesFilter<"HomeworkResult"> | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"HomeworkResult"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"HomeworkResult"> | Date | string;
};
export type HomeworkResultCreateInput = {
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    homework: Prisma.HomeworkCreateNestedOneWithoutHomeworkResultsInput;
    student: Prisma.StudentCreateNestedOneWithoutHomeworkResultsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutHomeworkResultsInput;
    user?: Prisma.UserCreateNestedOneWithoutHomeworkResultsInput;
};
export type HomeworkResultUncheckedCreateInput = {
    id?: number;
    homeworkId: number;
    studentId: number;
    teacherId?: number | null;
    userId?: number | null;
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResultUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homework?: Prisma.HomeworkUpdateOneRequiredWithoutHomeworkResultsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutHomeworkResultsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutHomeworkResultsNestedInput;
    user?: Prisma.UserUpdateOneWithoutHomeworkResultsNestedInput;
};
export type HomeworkResultUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    homeworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResultCreateManyInput = {
    id?: number;
    homeworkId: number;
    studentId: number;
    teacherId?: number | null;
    userId?: number | null;
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResultUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResultUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    homeworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResultListRelationFilter = {
    every?: Prisma.HomeworkResultWhereInput;
    some?: Prisma.HomeworkResultWhereInput;
    none?: Prisma.HomeworkResultWhereInput;
};
export type HomeworkResultOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HomeworkResultCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    homeworkId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type HomeworkResultAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    homeworkId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type HomeworkResultMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    homeworkId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type HomeworkResultMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    homeworkId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type HomeworkResultSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    homeworkId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type HomeworkResultCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutUserInput, Prisma.HomeworkResultUncheckedCreateWithoutUserInput> | Prisma.HomeworkResultCreateWithoutUserInput[] | Prisma.HomeworkResultUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutUserInput | Prisma.HomeworkResultCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.HomeworkResultCreateManyUserInputEnvelope;
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
};
export type HomeworkResultUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutUserInput, Prisma.HomeworkResultUncheckedCreateWithoutUserInput> | Prisma.HomeworkResultCreateWithoutUserInput[] | Prisma.HomeworkResultUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutUserInput | Prisma.HomeworkResultCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.HomeworkResultCreateManyUserInputEnvelope;
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
};
export type HomeworkResultUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutUserInput, Prisma.HomeworkResultUncheckedCreateWithoutUserInput> | Prisma.HomeworkResultCreateWithoutUserInput[] | Prisma.HomeworkResultUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutUserInput | Prisma.HomeworkResultCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.HomeworkResultUpsertWithWhereUniqueWithoutUserInput | Prisma.HomeworkResultUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.HomeworkResultCreateManyUserInputEnvelope;
    set?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    disconnect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    delete?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    update?: Prisma.HomeworkResultUpdateWithWhereUniqueWithoutUserInput | Prisma.HomeworkResultUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.HomeworkResultUpdateManyWithWhereWithoutUserInput | Prisma.HomeworkResultUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.HomeworkResultScalarWhereInput | Prisma.HomeworkResultScalarWhereInput[];
};
export type HomeworkResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutUserInput, Prisma.HomeworkResultUncheckedCreateWithoutUserInput> | Prisma.HomeworkResultCreateWithoutUserInput[] | Prisma.HomeworkResultUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutUserInput | Prisma.HomeworkResultCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.HomeworkResultUpsertWithWhereUniqueWithoutUserInput | Prisma.HomeworkResultUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.HomeworkResultCreateManyUserInputEnvelope;
    set?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    disconnect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    delete?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    update?: Prisma.HomeworkResultUpdateWithWhereUniqueWithoutUserInput | Prisma.HomeworkResultUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.HomeworkResultUpdateManyWithWhereWithoutUserInput | Prisma.HomeworkResultUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.HomeworkResultScalarWhereInput | Prisma.HomeworkResultScalarWhereInput[];
};
export type HomeworkResultCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutTeacherInput, Prisma.HomeworkResultUncheckedCreateWithoutTeacherInput> | Prisma.HomeworkResultCreateWithoutTeacherInput[] | Prisma.HomeworkResultUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutTeacherInput | Prisma.HomeworkResultCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.HomeworkResultCreateManyTeacherInputEnvelope;
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
};
export type HomeworkResultUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutTeacherInput, Prisma.HomeworkResultUncheckedCreateWithoutTeacherInput> | Prisma.HomeworkResultCreateWithoutTeacherInput[] | Prisma.HomeworkResultUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutTeacherInput | Prisma.HomeworkResultCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.HomeworkResultCreateManyTeacherInputEnvelope;
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
};
export type HomeworkResultUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutTeacherInput, Prisma.HomeworkResultUncheckedCreateWithoutTeacherInput> | Prisma.HomeworkResultCreateWithoutTeacherInput[] | Prisma.HomeworkResultUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutTeacherInput | Prisma.HomeworkResultCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.HomeworkResultUpsertWithWhereUniqueWithoutTeacherInput | Prisma.HomeworkResultUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.HomeworkResultCreateManyTeacherInputEnvelope;
    set?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    disconnect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    delete?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    update?: Prisma.HomeworkResultUpdateWithWhereUniqueWithoutTeacherInput | Prisma.HomeworkResultUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.HomeworkResultUpdateManyWithWhereWithoutTeacherInput | Prisma.HomeworkResultUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.HomeworkResultScalarWhereInput | Prisma.HomeworkResultScalarWhereInput[];
};
export type HomeworkResultUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutTeacherInput, Prisma.HomeworkResultUncheckedCreateWithoutTeacherInput> | Prisma.HomeworkResultCreateWithoutTeacherInput[] | Prisma.HomeworkResultUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutTeacherInput | Prisma.HomeworkResultCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.HomeworkResultUpsertWithWhereUniqueWithoutTeacherInput | Prisma.HomeworkResultUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.HomeworkResultCreateManyTeacherInputEnvelope;
    set?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    disconnect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    delete?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    update?: Prisma.HomeworkResultUpdateWithWhereUniqueWithoutTeacherInput | Prisma.HomeworkResultUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.HomeworkResultUpdateManyWithWhereWithoutTeacherInput | Prisma.HomeworkResultUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.HomeworkResultScalarWhereInput | Prisma.HomeworkResultScalarWhereInput[];
};
export type HomeworkResultCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutStudentInput, Prisma.HomeworkResultUncheckedCreateWithoutStudentInput> | Prisma.HomeworkResultCreateWithoutStudentInput[] | Prisma.HomeworkResultUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutStudentInput | Prisma.HomeworkResultCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.HomeworkResultCreateManyStudentInputEnvelope;
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
};
export type HomeworkResultUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutStudentInput, Prisma.HomeworkResultUncheckedCreateWithoutStudentInput> | Prisma.HomeworkResultCreateWithoutStudentInput[] | Prisma.HomeworkResultUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutStudentInput | Prisma.HomeworkResultCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.HomeworkResultCreateManyStudentInputEnvelope;
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
};
export type HomeworkResultUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutStudentInput, Prisma.HomeworkResultUncheckedCreateWithoutStudentInput> | Prisma.HomeworkResultCreateWithoutStudentInput[] | Prisma.HomeworkResultUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutStudentInput | Prisma.HomeworkResultCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.HomeworkResultUpsertWithWhereUniqueWithoutStudentInput | Prisma.HomeworkResultUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.HomeworkResultCreateManyStudentInputEnvelope;
    set?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    disconnect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    delete?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    update?: Prisma.HomeworkResultUpdateWithWhereUniqueWithoutStudentInput | Prisma.HomeworkResultUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.HomeworkResultUpdateManyWithWhereWithoutStudentInput | Prisma.HomeworkResultUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.HomeworkResultScalarWhereInput | Prisma.HomeworkResultScalarWhereInput[];
};
export type HomeworkResultUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutStudentInput, Prisma.HomeworkResultUncheckedCreateWithoutStudentInput> | Prisma.HomeworkResultCreateWithoutStudentInput[] | Prisma.HomeworkResultUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutStudentInput | Prisma.HomeworkResultCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.HomeworkResultUpsertWithWhereUniqueWithoutStudentInput | Prisma.HomeworkResultUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.HomeworkResultCreateManyStudentInputEnvelope;
    set?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    disconnect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    delete?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    update?: Prisma.HomeworkResultUpdateWithWhereUniqueWithoutStudentInput | Prisma.HomeworkResultUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.HomeworkResultUpdateManyWithWhereWithoutStudentInput | Prisma.HomeworkResultUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.HomeworkResultScalarWhereInput | Prisma.HomeworkResultScalarWhereInput[];
};
export type HomeworkResultCreateNestedManyWithoutHomeworkInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutHomeworkInput, Prisma.HomeworkResultUncheckedCreateWithoutHomeworkInput> | Prisma.HomeworkResultCreateWithoutHomeworkInput[] | Prisma.HomeworkResultUncheckedCreateWithoutHomeworkInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutHomeworkInput | Prisma.HomeworkResultCreateOrConnectWithoutHomeworkInput[];
    createMany?: Prisma.HomeworkResultCreateManyHomeworkInputEnvelope;
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
};
export type HomeworkResultUncheckedCreateNestedManyWithoutHomeworkInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutHomeworkInput, Prisma.HomeworkResultUncheckedCreateWithoutHomeworkInput> | Prisma.HomeworkResultCreateWithoutHomeworkInput[] | Prisma.HomeworkResultUncheckedCreateWithoutHomeworkInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutHomeworkInput | Prisma.HomeworkResultCreateOrConnectWithoutHomeworkInput[];
    createMany?: Prisma.HomeworkResultCreateManyHomeworkInputEnvelope;
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
};
export type HomeworkResultUpdateManyWithoutHomeworkNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutHomeworkInput, Prisma.HomeworkResultUncheckedCreateWithoutHomeworkInput> | Prisma.HomeworkResultCreateWithoutHomeworkInput[] | Prisma.HomeworkResultUncheckedCreateWithoutHomeworkInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutHomeworkInput | Prisma.HomeworkResultCreateOrConnectWithoutHomeworkInput[];
    upsert?: Prisma.HomeworkResultUpsertWithWhereUniqueWithoutHomeworkInput | Prisma.HomeworkResultUpsertWithWhereUniqueWithoutHomeworkInput[];
    createMany?: Prisma.HomeworkResultCreateManyHomeworkInputEnvelope;
    set?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    disconnect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    delete?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    update?: Prisma.HomeworkResultUpdateWithWhereUniqueWithoutHomeworkInput | Prisma.HomeworkResultUpdateWithWhereUniqueWithoutHomeworkInput[];
    updateMany?: Prisma.HomeworkResultUpdateManyWithWhereWithoutHomeworkInput | Prisma.HomeworkResultUpdateManyWithWhereWithoutHomeworkInput[];
    deleteMany?: Prisma.HomeworkResultScalarWhereInput | Prisma.HomeworkResultScalarWhereInput[];
};
export type HomeworkResultUncheckedUpdateManyWithoutHomeworkNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkResultCreateWithoutHomeworkInput, Prisma.HomeworkResultUncheckedCreateWithoutHomeworkInput> | Prisma.HomeworkResultCreateWithoutHomeworkInput[] | Prisma.HomeworkResultUncheckedCreateWithoutHomeworkInput[];
    connectOrCreate?: Prisma.HomeworkResultCreateOrConnectWithoutHomeworkInput | Prisma.HomeworkResultCreateOrConnectWithoutHomeworkInput[];
    upsert?: Prisma.HomeworkResultUpsertWithWhereUniqueWithoutHomeworkInput | Prisma.HomeworkResultUpsertWithWhereUniqueWithoutHomeworkInput[];
    createMany?: Prisma.HomeworkResultCreateManyHomeworkInputEnvelope;
    set?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    disconnect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    delete?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    connect?: Prisma.HomeworkResultWhereUniqueInput | Prisma.HomeworkResultWhereUniqueInput[];
    update?: Prisma.HomeworkResultUpdateWithWhereUniqueWithoutHomeworkInput | Prisma.HomeworkResultUpdateWithWhereUniqueWithoutHomeworkInput[];
    updateMany?: Prisma.HomeworkResultUpdateManyWithWhereWithoutHomeworkInput | Prisma.HomeworkResultUpdateManyWithWhereWithoutHomeworkInput[];
    deleteMany?: Prisma.HomeworkResultScalarWhereInput | Prisma.HomeworkResultScalarWhereInput[];
};
export type EnumHomeworkStatusFieldUpdateOperationsInput = {
    set?: $Enums.HomeworkStatus;
};
export type HomeworkResultCreateWithoutUserInput = {
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    homework: Prisma.HomeworkCreateNestedOneWithoutHomeworkResultsInput;
    student: Prisma.StudentCreateNestedOneWithoutHomeworkResultsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutHomeworkResultsInput;
};
export type HomeworkResultUncheckedCreateWithoutUserInput = {
    id?: number;
    homeworkId: number;
    studentId: number;
    teacherId?: number | null;
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResultCreateOrConnectWithoutUserInput = {
    where: Prisma.HomeworkResultWhereUniqueInput;
    create: Prisma.XOR<Prisma.HomeworkResultCreateWithoutUserInput, Prisma.HomeworkResultUncheckedCreateWithoutUserInput>;
};
export type HomeworkResultCreateManyUserInputEnvelope = {
    data: Prisma.HomeworkResultCreateManyUserInput | Prisma.HomeworkResultCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type HomeworkResultUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.HomeworkResultWhereUniqueInput;
    update: Prisma.XOR<Prisma.HomeworkResultUpdateWithoutUserInput, Prisma.HomeworkResultUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.HomeworkResultCreateWithoutUserInput, Prisma.HomeworkResultUncheckedCreateWithoutUserInput>;
};
export type HomeworkResultUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.HomeworkResultWhereUniqueInput;
    data: Prisma.XOR<Prisma.HomeworkResultUpdateWithoutUserInput, Prisma.HomeworkResultUncheckedUpdateWithoutUserInput>;
};
export type HomeworkResultUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.HomeworkResultScalarWhereInput;
    data: Prisma.XOR<Prisma.HomeworkResultUpdateManyMutationInput, Prisma.HomeworkResultUncheckedUpdateManyWithoutUserInput>;
};
export type HomeworkResultScalarWhereInput = {
    AND?: Prisma.HomeworkResultScalarWhereInput | Prisma.HomeworkResultScalarWhereInput[];
    OR?: Prisma.HomeworkResultScalarWhereInput[];
    NOT?: Prisma.HomeworkResultScalarWhereInput | Prisma.HomeworkResultScalarWhereInput[];
    id?: Prisma.IntFilter<"HomeworkResult"> | number;
    homeworkId?: Prisma.IntFilter<"HomeworkResult"> | number;
    studentId?: Prisma.IntFilter<"HomeworkResult"> | number;
    teacherId?: Prisma.IntNullableFilter<"HomeworkResult"> | number | null;
    userId?: Prisma.IntNullableFilter<"HomeworkResult"> | number | null;
    title?: Prisma.StringFilter<"HomeworkResult"> | string;
    file?: Prisma.StringNullableFilter<"HomeworkResult"> | string | null;
    score?: Prisma.IntFilter<"HomeworkResult"> | number;
    status?: Prisma.EnumHomeworkStatusFilter<"HomeworkResult"> | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFilter<"HomeworkResult"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"HomeworkResult"> | Date | string;
};
export type HomeworkResultCreateWithoutTeacherInput = {
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    homework: Prisma.HomeworkCreateNestedOneWithoutHomeworkResultsInput;
    student: Prisma.StudentCreateNestedOneWithoutHomeworkResultsInput;
    user?: Prisma.UserCreateNestedOneWithoutHomeworkResultsInput;
};
export type HomeworkResultUncheckedCreateWithoutTeacherInput = {
    id?: number;
    homeworkId: number;
    studentId: number;
    userId?: number | null;
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResultCreateOrConnectWithoutTeacherInput = {
    where: Prisma.HomeworkResultWhereUniqueInput;
    create: Prisma.XOR<Prisma.HomeworkResultCreateWithoutTeacherInput, Prisma.HomeworkResultUncheckedCreateWithoutTeacherInput>;
};
export type HomeworkResultCreateManyTeacherInputEnvelope = {
    data: Prisma.HomeworkResultCreateManyTeacherInput | Prisma.HomeworkResultCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type HomeworkResultUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.HomeworkResultWhereUniqueInput;
    update: Prisma.XOR<Prisma.HomeworkResultUpdateWithoutTeacherInput, Prisma.HomeworkResultUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.HomeworkResultCreateWithoutTeacherInput, Prisma.HomeworkResultUncheckedCreateWithoutTeacherInput>;
};
export type HomeworkResultUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.HomeworkResultWhereUniqueInput;
    data: Prisma.XOR<Prisma.HomeworkResultUpdateWithoutTeacherInput, Prisma.HomeworkResultUncheckedUpdateWithoutTeacherInput>;
};
export type HomeworkResultUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.HomeworkResultScalarWhereInput;
    data: Prisma.XOR<Prisma.HomeworkResultUpdateManyMutationInput, Prisma.HomeworkResultUncheckedUpdateManyWithoutTeacherInput>;
};
export type HomeworkResultCreateWithoutStudentInput = {
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    homework: Prisma.HomeworkCreateNestedOneWithoutHomeworkResultsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutHomeworkResultsInput;
    user?: Prisma.UserCreateNestedOneWithoutHomeworkResultsInput;
};
export type HomeworkResultUncheckedCreateWithoutStudentInput = {
    id?: number;
    homeworkId: number;
    teacherId?: number | null;
    userId?: number | null;
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResultCreateOrConnectWithoutStudentInput = {
    where: Prisma.HomeworkResultWhereUniqueInput;
    create: Prisma.XOR<Prisma.HomeworkResultCreateWithoutStudentInput, Prisma.HomeworkResultUncheckedCreateWithoutStudentInput>;
};
export type HomeworkResultCreateManyStudentInputEnvelope = {
    data: Prisma.HomeworkResultCreateManyStudentInput | Prisma.HomeworkResultCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type HomeworkResultUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.HomeworkResultWhereUniqueInput;
    update: Prisma.XOR<Prisma.HomeworkResultUpdateWithoutStudentInput, Prisma.HomeworkResultUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.HomeworkResultCreateWithoutStudentInput, Prisma.HomeworkResultUncheckedCreateWithoutStudentInput>;
};
export type HomeworkResultUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.HomeworkResultWhereUniqueInput;
    data: Prisma.XOR<Prisma.HomeworkResultUpdateWithoutStudentInput, Prisma.HomeworkResultUncheckedUpdateWithoutStudentInput>;
};
export type HomeworkResultUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.HomeworkResultScalarWhereInput;
    data: Prisma.XOR<Prisma.HomeworkResultUpdateManyMutationInput, Prisma.HomeworkResultUncheckedUpdateManyWithoutStudentInput>;
};
export type HomeworkResultCreateWithoutHomeworkInput = {
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutHomeworkResultsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutHomeworkResultsInput;
    user?: Prisma.UserCreateNestedOneWithoutHomeworkResultsInput;
};
export type HomeworkResultUncheckedCreateWithoutHomeworkInput = {
    id?: number;
    studentId: number;
    teacherId?: number | null;
    userId?: number | null;
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResultCreateOrConnectWithoutHomeworkInput = {
    where: Prisma.HomeworkResultWhereUniqueInput;
    create: Prisma.XOR<Prisma.HomeworkResultCreateWithoutHomeworkInput, Prisma.HomeworkResultUncheckedCreateWithoutHomeworkInput>;
};
export type HomeworkResultCreateManyHomeworkInputEnvelope = {
    data: Prisma.HomeworkResultCreateManyHomeworkInput | Prisma.HomeworkResultCreateManyHomeworkInput[];
    skipDuplicates?: boolean;
};
export type HomeworkResultUpsertWithWhereUniqueWithoutHomeworkInput = {
    where: Prisma.HomeworkResultWhereUniqueInput;
    update: Prisma.XOR<Prisma.HomeworkResultUpdateWithoutHomeworkInput, Prisma.HomeworkResultUncheckedUpdateWithoutHomeworkInput>;
    create: Prisma.XOR<Prisma.HomeworkResultCreateWithoutHomeworkInput, Prisma.HomeworkResultUncheckedCreateWithoutHomeworkInput>;
};
export type HomeworkResultUpdateWithWhereUniqueWithoutHomeworkInput = {
    where: Prisma.HomeworkResultWhereUniqueInput;
    data: Prisma.XOR<Prisma.HomeworkResultUpdateWithoutHomeworkInput, Prisma.HomeworkResultUncheckedUpdateWithoutHomeworkInput>;
};
export type HomeworkResultUpdateManyWithWhereWithoutHomeworkInput = {
    where: Prisma.HomeworkResultScalarWhereInput;
    data: Prisma.XOR<Prisma.HomeworkResultUpdateManyMutationInput, Prisma.HomeworkResultUncheckedUpdateManyWithoutHomeworkInput>;
};
export type HomeworkResultCreateManyUserInput = {
    id?: number;
    homeworkId: number;
    studentId: number;
    teacherId?: number | null;
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResultUpdateWithoutUserInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homework?: Prisma.HomeworkUpdateOneRequiredWithoutHomeworkResultsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutHomeworkResultsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutHomeworkResultsNestedInput;
};
export type HomeworkResultUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    homeworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResultUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    homeworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResultCreateManyTeacherInput = {
    id?: number;
    homeworkId: number;
    studentId: number;
    userId?: number | null;
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResultUpdateWithoutTeacherInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homework?: Prisma.HomeworkUpdateOneRequiredWithoutHomeworkResultsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutHomeworkResultsNestedInput;
    user?: Prisma.UserUpdateOneWithoutHomeworkResultsNestedInput;
};
export type HomeworkResultUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    homeworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResultUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    homeworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResultCreateManyStudentInput = {
    id?: number;
    homeworkId: number;
    teacherId?: number | null;
    userId?: number | null;
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResultUpdateWithoutStudentInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homework?: Prisma.HomeworkUpdateOneRequiredWithoutHomeworkResultsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutHomeworkResultsNestedInput;
    user?: Prisma.UserUpdateOneWithoutHomeworkResultsNestedInput;
};
export type HomeworkResultUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    homeworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResultUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    homeworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResultCreateManyHomeworkInput = {
    id?: number;
    studentId: number;
    teacherId?: number | null;
    userId?: number | null;
    title: string;
    file?: string | null;
    score: number;
    status: $Enums.HomeworkStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResultUpdateWithoutHomeworkInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutHomeworkResultsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutHomeworkResultsNestedInput;
    user?: Prisma.UserUpdateOneWithoutHomeworkResultsNestedInput;
};
export type HomeworkResultUncheckedUpdateWithoutHomeworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResultUncheckedUpdateManyWithoutHomeworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumHomeworkStatusFieldUpdateOperationsInput | $Enums.HomeworkStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResultSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    homeworkId?: boolean;
    studentId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    title?: boolean;
    file?: boolean;
    score?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    homework?: boolean | Prisma.HomeworkDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.HomeworkResult$teacherArgs<ExtArgs>;
    user?: boolean | Prisma.HomeworkResult$userArgs<ExtArgs>;
}, ExtArgs["result"]["homeworkResult"]>;
export type HomeworkResultSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    homeworkId?: boolean;
    studentId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    title?: boolean;
    file?: boolean;
    score?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    homework?: boolean | Prisma.HomeworkDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.HomeworkResult$teacherArgs<ExtArgs>;
    user?: boolean | Prisma.HomeworkResult$userArgs<ExtArgs>;
}, ExtArgs["result"]["homeworkResult"]>;
export type HomeworkResultSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    homeworkId?: boolean;
    studentId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    title?: boolean;
    file?: boolean;
    score?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    homework?: boolean | Prisma.HomeworkDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.HomeworkResult$teacherArgs<ExtArgs>;
    user?: boolean | Prisma.HomeworkResult$userArgs<ExtArgs>;
}, ExtArgs["result"]["homeworkResult"]>;
export type HomeworkResultSelectScalar = {
    id?: boolean;
    homeworkId?: boolean;
    studentId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    title?: boolean;
    file?: boolean;
    score?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type HomeworkResultOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "homeworkId" | "studentId" | "teacherId" | "userId" | "title" | "file" | "score" | "status" | "created_at" | "updated_at", ExtArgs["result"]["homeworkResult"]>;
export type HomeworkResultInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    homework?: boolean | Prisma.HomeworkDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.HomeworkResult$teacherArgs<ExtArgs>;
    user?: boolean | Prisma.HomeworkResult$userArgs<ExtArgs>;
};
export type HomeworkResultIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    homework?: boolean | Prisma.HomeworkDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.HomeworkResult$teacherArgs<ExtArgs>;
    user?: boolean | Prisma.HomeworkResult$userArgs<ExtArgs>;
};
export type HomeworkResultIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    homework?: boolean | Prisma.HomeworkDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.HomeworkResult$teacherArgs<ExtArgs>;
    user?: boolean | Prisma.HomeworkResult$userArgs<ExtArgs>;
};
export type $HomeworkResultPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HomeworkResult";
    objects: {
        homework: Prisma.$HomeworkPayload<ExtArgs>;
        student: Prisma.$StudentPayload<ExtArgs>;
        teacher: Prisma.$TeacherPayload<ExtArgs> | null;
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        homeworkId: number;
        studentId: number;
        teacherId: number | null;
        userId: number | null;
        title: string;
        file: string | null;
        score: number;
        status: $Enums.HomeworkStatus;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["homeworkResult"]>;
    composites: {};
};
export type HomeworkResultGetPayload<S extends boolean | null | undefined | HomeworkResultDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload, S>;
export type HomeworkResultCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HomeworkResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HomeworkResultCountAggregateInputType | true;
};
export interface HomeworkResultDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HomeworkResult'];
        meta: {
            name: 'HomeworkResult';
        };
    };
    findUnique<T extends HomeworkResultFindUniqueArgs>(args: Prisma.SelectSubset<T, HomeworkResultFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HomeworkResultClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HomeworkResultFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HomeworkResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HomeworkResultClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HomeworkResultFindFirstArgs>(args?: Prisma.SelectSubset<T, HomeworkResultFindFirstArgs<ExtArgs>>): Prisma.Prisma__HomeworkResultClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HomeworkResultFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HomeworkResultFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HomeworkResultClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HomeworkResultFindManyArgs>(args?: Prisma.SelectSubset<T, HomeworkResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HomeworkResultCreateArgs>(args: Prisma.SelectSubset<T, HomeworkResultCreateArgs<ExtArgs>>): Prisma.Prisma__HomeworkResultClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HomeworkResultCreateManyArgs>(args?: Prisma.SelectSubset<T, HomeworkResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HomeworkResultCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HomeworkResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HomeworkResultDeleteArgs>(args: Prisma.SelectSubset<T, HomeworkResultDeleteArgs<ExtArgs>>): Prisma.Prisma__HomeworkResultClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HomeworkResultUpdateArgs>(args: Prisma.SelectSubset<T, HomeworkResultUpdateArgs<ExtArgs>>): Prisma.Prisma__HomeworkResultClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HomeworkResultDeleteManyArgs>(args?: Prisma.SelectSubset<T, HomeworkResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HomeworkResultUpdateManyArgs>(args: Prisma.SelectSubset<T, HomeworkResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HomeworkResultUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HomeworkResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HomeworkResultUpsertArgs>(args: Prisma.SelectSubset<T, HomeworkResultUpsertArgs<ExtArgs>>): Prisma.Prisma__HomeworkResultClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HomeworkResultCountArgs>(args?: Prisma.Subset<T, HomeworkResultCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HomeworkResultCountAggregateOutputType> : number>;
    aggregate<T extends HomeworkResultAggregateArgs>(args: Prisma.Subset<T, HomeworkResultAggregateArgs>): Prisma.PrismaPromise<GetHomeworkResultAggregateType<T>>;
    groupBy<T extends HomeworkResultGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HomeworkResultGroupByArgs['orderBy'];
    } : {
        orderBy?: HomeworkResultGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HomeworkResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeworkResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HomeworkResultFieldRefs;
}
export interface Prisma__HomeworkResultClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    homework<T extends Prisma.HomeworkDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HomeworkDefaultArgs<ExtArgs>>): Prisma.Prisma__HomeworkClient<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    teacher<T extends Prisma.HomeworkResult$teacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HomeworkResult$teacherArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.HomeworkResult$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HomeworkResult$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HomeworkResultFieldRefs {
    readonly id: Prisma.FieldRef<"HomeworkResult", 'Int'>;
    readonly homeworkId: Prisma.FieldRef<"HomeworkResult", 'Int'>;
    readonly studentId: Prisma.FieldRef<"HomeworkResult", 'Int'>;
    readonly teacherId: Prisma.FieldRef<"HomeworkResult", 'Int'>;
    readonly userId: Prisma.FieldRef<"HomeworkResult", 'Int'>;
    readonly title: Prisma.FieldRef<"HomeworkResult", 'String'>;
    readonly file: Prisma.FieldRef<"HomeworkResult", 'String'>;
    readonly score: Prisma.FieldRef<"HomeworkResult", 'Int'>;
    readonly status: Prisma.FieldRef<"HomeworkResult", 'HomeworkStatus'>;
    readonly created_at: Prisma.FieldRef<"HomeworkResult", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"HomeworkResult", 'DateTime'>;
}
export type HomeworkResultFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResultSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResultOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResultInclude<ExtArgs> | null;
    where: Prisma.HomeworkResultWhereUniqueInput;
};
export type HomeworkResultFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResultSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResultOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResultInclude<ExtArgs> | null;
    where: Prisma.HomeworkResultWhereUniqueInput;
};
export type HomeworkResultFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HomeworkResultFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HomeworkResultFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HomeworkResultCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResultSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResultOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResultInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HomeworkResultCreateInput, Prisma.HomeworkResultUncheckedCreateInput>;
};
export type HomeworkResultCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HomeworkResultCreateManyInput | Prisma.HomeworkResultCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HomeworkResultCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResultSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HomeworkResultOmit<ExtArgs> | null;
    data: Prisma.HomeworkResultCreateManyInput | Prisma.HomeworkResultCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HomeworkResultIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HomeworkResultUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResultSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResultOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResultInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HomeworkResultUpdateInput, Prisma.HomeworkResultUncheckedUpdateInput>;
    where: Prisma.HomeworkResultWhereUniqueInput;
};
export type HomeworkResultUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HomeworkResultUpdateManyMutationInput, Prisma.HomeworkResultUncheckedUpdateManyInput>;
    where?: Prisma.HomeworkResultWhereInput;
    limit?: number;
};
export type HomeworkResultUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResultSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HomeworkResultOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HomeworkResultUpdateManyMutationInput, Prisma.HomeworkResultUncheckedUpdateManyInput>;
    where?: Prisma.HomeworkResultWhereInput;
    limit?: number;
    include?: Prisma.HomeworkResultIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HomeworkResultUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResultSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResultOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResultInclude<ExtArgs> | null;
    where: Prisma.HomeworkResultWhereUniqueInput;
    create: Prisma.XOR<Prisma.HomeworkResultCreateInput, Prisma.HomeworkResultUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HomeworkResultUpdateInput, Prisma.HomeworkResultUncheckedUpdateInput>;
};
export type HomeworkResultDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResultSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResultOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResultInclude<ExtArgs> | null;
    where: Prisma.HomeworkResultWhereUniqueInput;
};
export type HomeworkResultDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkResultWhereInput;
    limit?: number;
};
export type HomeworkResult$teacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
};
export type HomeworkResult$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type HomeworkResultDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResultSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResultOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResultInclude<ExtArgs> | null;
};
export {};
