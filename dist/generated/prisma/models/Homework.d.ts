import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HomeworkModel = runtime.Types.Result.DefaultSelection<Prisma.$HomeworkPayload>;
export type AggregateHomework = {
    _count: HomeworkCountAggregateOutputType | null;
    _avg: HomeworkAvgAggregateOutputType | null;
    _sum: HomeworkSumAggregateOutputType | null;
    _min: HomeworkMinAggregateOutputType | null;
    _max: HomeworkMaxAggregateOutputType | null;
};
export type HomeworkAvgAggregateOutputType = {
    id: number | null;
    lessonId: number | null;
    teacherId: number | null;
    userId: number | null;
    durationTime: number | null;
};
export type HomeworkSumAggregateOutputType = {
    id: number | null;
    lessonId: number | null;
    teacherId: number | null;
    userId: number | null;
    durationTime: number | null;
};
export type HomeworkMinAggregateOutputType = {
    id: number | null;
    lessonId: number | null;
    teacherId: number | null;
    userId: number | null;
    title: string | null;
    file: string | null;
    durationTime: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type HomeworkMaxAggregateOutputType = {
    id: number | null;
    lessonId: number | null;
    teacherId: number | null;
    userId: number | null;
    title: string | null;
    file: string | null;
    durationTime: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type HomeworkCountAggregateOutputType = {
    id: number;
    lessonId: number;
    teacherId: number;
    userId: number;
    title: number;
    file: number;
    durationTime: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type HomeworkAvgAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
    durationTime?: true;
};
export type HomeworkSumAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
    durationTime?: true;
};
export type HomeworkMinAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
    title?: true;
    file?: true;
    durationTime?: true;
    created_at?: true;
    updated_at?: true;
};
export type HomeworkMaxAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
    title?: true;
    file?: true;
    durationTime?: true;
    created_at?: true;
    updated_at?: true;
};
export type HomeworkCountAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
    title?: true;
    file?: true;
    durationTime?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type HomeworkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkWhereInput;
    orderBy?: Prisma.HomeworkOrderByWithRelationInput | Prisma.HomeworkOrderByWithRelationInput[];
    cursor?: Prisma.HomeworkWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HomeworkCountAggregateInputType;
    _avg?: HomeworkAvgAggregateInputType;
    _sum?: HomeworkSumAggregateInputType;
    _min?: HomeworkMinAggregateInputType;
    _max?: HomeworkMaxAggregateInputType;
};
export type GetHomeworkAggregateType<T extends HomeworkAggregateArgs> = {
    [P in keyof T & keyof AggregateHomework]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHomework[P]> : Prisma.GetScalarType<T[P], AggregateHomework[P]>;
};
export type HomeworkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkWhereInput;
    orderBy?: Prisma.HomeworkOrderByWithAggregationInput | Prisma.HomeworkOrderByWithAggregationInput[];
    by: Prisma.HomeworkScalarFieldEnum[] | Prisma.HomeworkScalarFieldEnum;
    having?: Prisma.HomeworkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HomeworkCountAggregateInputType | true;
    _avg?: HomeworkAvgAggregateInputType;
    _sum?: HomeworkSumAggregateInputType;
    _min?: HomeworkMinAggregateInputType;
    _max?: HomeworkMaxAggregateInputType;
};
export type HomeworkGroupByOutputType = {
    id: number;
    lessonId: number;
    teacherId: number | null;
    userId: number | null;
    title: string;
    file: string | null;
    durationTime: number;
    created_at: Date;
    updated_at: Date;
    _count: HomeworkCountAggregateOutputType | null;
    _avg: HomeworkAvgAggregateOutputType | null;
    _sum: HomeworkSumAggregateOutputType | null;
    _min: HomeworkMinAggregateOutputType | null;
    _max: HomeworkMaxAggregateOutputType | null;
};
type GetHomeworkGroupByPayload<T extends HomeworkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HomeworkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HomeworkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HomeworkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HomeworkGroupByOutputType[P]>;
}>>;
export type HomeworkWhereInput = {
    AND?: Prisma.HomeworkWhereInput | Prisma.HomeworkWhereInput[];
    OR?: Prisma.HomeworkWhereInput[];
    NOT?: Prisma.HomeworkWhereInput | Prisma.HomeworkWhereInput[];
    id?: Prisma.IntFilter<"Homework"> | number;
    lessonId?: Prisma.IntFilter<"Homework"> | number;
    teacherId?: Prisma.IntNullableFilter<"Homework"> | number | null;
    userId?: Prisma.IntNullableFilter<"Homework"> | number | null;
    title?: Prisma.StringFilter<"Homework"> | string;
    file?: Prisma.StringNullableFilter<"Homework"> | string | null;
    durationTime?: Prisma.IntFilter<"Homework"> | number;
    created_at?: Prisma.DateTimeFilter<"Homework"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Homework"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    homeworkResponses?: Prisma.HomeworkResponseListRelationFilter;
    homeworkResults?: Prisma.HomeworkResultListRelationFilter;
};
export type HomeworkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrderInput | Prisma.SortOrder;
    durationTime?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    lesson?: Prisma.LessonOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    homeworkResponses?: Prisma.HomeworkResponseOrderByRelationAggregateInput;
    homeworkResults?: Prisma.HomeworkResultOrderByRelationAggregateInput;
};
export type HomeworkWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.HomeworkWhereInput | Prisma.HomeworkWhereInput[];
    OR?: Prisma.HomeworkWhereInput[];
    NOT?: Prisma.HomeworkWhereInput | Prisma.HomeworkWhereInput[];
    lessonId?: Prisma.IntFilter<"Homework"> | number;
    teacherId?: Prisma.IntNullableFilter<"Homework"> | number | null;
    userId?: Prisma.IntNullableFilter<"Homework"> | number | null;
    title?: Prisma.StringFilter<"Homework"> | string;
    file?: Prisma.StringNullableFilter<"Homework"> | string | null;
    durationTime?: Prisma.IntFilter<"Homework"> | number;
    created_at?: Prisma.DateTimeFilter<"Homework"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Homework"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    homeworkResponses?: Prisma.HomeworkResponseListRelationFilter;
    homeworkResults?: Prisma.HomeworkResultListRelationFilter;
}, "id">;
export type HomeworkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrderInput | Prisma.SortOrder;
    durationTime?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.HomeworkCountOrderByAggregateInput;
    _avg?: Prisma.HomeworkAvgOrderByAggregateInput;
    _max?: Prisma.HomeworkMaxOrderByAggregateInput;
    _min?: Prisma.HomeworkMinOrderByAggregateInput;
    _sum?: Prisma.HomeworkSumOrderByAggregateInput;
};
export type HomeworkScalarWhereWithAggregatesInput = {
    AND?: Prisma.HomeworkScalarWhereWithAggregatesInput | Prisma.HomeworkScalarWhereWithAggregatesInput[];
    OR?: Prisma.HomeworkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HomeworkScalarWhereWithAggregatesInput | Prisma.HomeworkScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Homework"> | number;
    lessonId?: Prisma.IntWithAggregatesFilter<"Homework"> | number;
    teacherId?: Prisma.IntNullableWithAggregatesFilter<"Homework"> | number | null;
    userId?: Prisma.IntNullableWithAggregatesFilter<"Homework"> | number | null;
    title?: Prisma.StringWithAggregatesFilter<"Homework"> | string;
    file?: Prisma.StringNullableWithAggregatesFilter<"Homework"> | string | null;
    durationTime?: Prisma.IntWithAggregatesFilter<"Homework"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Homework"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Homework"> | Date | string;
};
export type HomeworkCreateInput = {
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutHomeworkInput;
    lesson: Prisma.LessonCreateNestedOneWithoutHomeworkInput;
    user?: Prisma.UserCreateNestedOneWithoutHomeworkInput;
    homeworkResponses?: Prisma.HomeworkResponseCreateNestedManyWithoutHomeworkInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutHomeworkInput;
};
export type HomeworkUncheckedCreateInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    userId?: number | null;
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedCreateNestedManyWithoutHomeworkInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutHomeworkInput;
};
export type HomeworkUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutHomeworkNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutHomeworkNestedInput;
    user?: Prisma.UserUpdateOneWithoutHomeworkNestedInput;
    homeworkResponses?: Prisma.HomeworkResponseUpdateManyWithoutHomeworkNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutHomeworkNestedInput;
};
export type HomeworkUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedUpdateManyWithoutHomeworkNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutHomeworkNestedInput;
};
export type HomeworkCreateManyInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    userId?: number | null;
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkListRelationFilter = {
    every?: Prisma.HomeworkWhereInput;
    some?: Prisma.HomeworkWhereInput;
    none?: Prisma.HomeworkWhereInput;
};
export type HomeworkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HomeworkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    durationTime?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type HomeworkAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    durationTime?: Prisma.SortOrder;
};
export type HomeworkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    durationTime?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type HomeworkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    durationTime?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type HomeworkSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    durationTime?: Prisma.SortOrder;
};
export type HomeworkScalarRelationFilter = {
    is?: Prisma.HomeworkWhereInput;
    isNot?: Prisma.HomeworkWhereInput;
};
export type HomeworkCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutUserInput, Prisma.HomeworkUncheckedCreateWithoutUserInput> | Prisma.HomeworkCreateWithoutUserInput[] | Prisma.HomeworkUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutUserInput | Prisma.HomeworkCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.HomeworkCreateManyUserInputEnvelope;
    connect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
};
export type HomeworkUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutUserInput, Prisma.HomeworkUncheckedCreateWithoutUserInput> | Prisma.HomeworkCreateWithoutUserInput[] | Prisma.HomeworkUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutUserInput | Prisma.HomeworkCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.HomeworkCreateManyUserInputEnvelope;
    connect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
};
export type HomeworkUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutUserInput, Prisma.HomeworkUncheckedCreateWithoutUserInput> | Prisma.HomeworkCreateWithoutUserInput[] | Prisma.HomeworkUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutUserInput | Prisma.HomeworkCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.HomeworkUpsertWithWhereUniqueWithoutUserInput | Prisma.HomeworkUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.HomeworkCreateManyUserInputEnvelope;
    set?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    disconnect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    delete?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    connect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    update?: Prisma.HomeworkUpdateWithWhereUniqueWithoutUserInput | Prisma.HomeworkUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.HomeworkUpdateManyWithWhereWithoutUserInput | Prisma.HomeworkUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.HomeworkScalarWhereInput | Prisma.HomeworkScalarWhereInput[];
};
export type HomeworkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutUserInput, Prisma.HomeworkUncheckedCreateWithoutUserInput> | Prisma.HomeworkCreateWithoutUserInput[] | Prisma.HomeworkUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutUserInput | Prisma.HomeworkCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.HomeworkUpsertWithWhereUniqueWithoutUserInput | Prisma.HomeworkUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.HomeworkCreateManyUserInputEnvelope;
    set?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    disconnect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    delete?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    connect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    update?: Prisma.HomeworkUpdateWithWhereUniqueWithoutUserInput | Prisma.HomeworkUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.HomeworkUpdateManyWithWhereWithoutUserInput | Prisma.HomeworkUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.HomeworkScalarWhereInput | Prisma.HomeworkScalarWhereInput[];
};
export type HomeworkCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutTeacherInput, Prisma.HomeworkUncheckedCreateWithoutTeacherInput> | Prisma.HomeworkCreateWithoutTeacherInput[] | Prisma.HomeworkUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutTeacherInput | Prisma.HomeworkCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.HomeworkCreateManyTeacherInputEnvelope;
    connect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
};
export type HomeworkUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutTeacherInput, Prisma.HomeworkUncheckedCreateWithoutTeacherInput> | Prisma.HomeworkCreateWithoutTeacherInput[] | Prisma.HomeworkUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutTeacherInput | Prisma.HomeworkCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.HomeworkCreateManyTeacherInputEnvelope;
    connect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
};
export type HomeworkUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutTeacherInput, Prisma.HomeworkUncheckedCreateWithoutTeacherInput> | Prisma.HomeworkCreateWithoutTeacherInput[] | Prisma.HomeworkUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutTeacherInput | Prisma.HomeworkCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.HomeworkUpsertWithWhereUniqueWithoutTeacherInput | Prisma.HomeworkUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.HomeworkCreateManyTeacherInputEnvelope;
    set?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    disconnect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    delete?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    connect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    update?: Prisma.HomeworkUpdateWithWhereUniqueWithoutTeacherInput | Prisma.HomeworkUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.HomeworkUpdateManyWithWhereWithoutTeacherInput | Prisma.HomeworkUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.HomeworkScalarWhereInput | Prisma.HomeworkScalarWhereInput[];
};
export type HomeworkUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutTeacherInput, Prisma.HomeworkUncheckedCreateWithoutTeacherInput> | Prisma.HomeworkCreateWithoutTeacherInput[] | Prisma.HomeworkUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutTeacherInput | Prisma.HomeworkCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.HomeworkUpsertWithWhereUniqueWithoutTeacherInput | Prisma.HomeworkUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.HomeworkCreateManyTeacherInputEnvelope;
    set?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    disconnect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    delete?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    connect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    update?: Prisma.HomeworkUpdateWithWhereUniqueWithoutTeacherInput | Prisma.HomeworkUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.HomeworkUpdateManyWithWhereWithoutTeacherInput | Prisma.HomeworkUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.HomeworkScalarWhereInput | Prisma.HomeworkScalarWhereInput[];
};
export type HomeworkCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutLessonInput, Prisma.HomeworkUncheckedCreateWithoutLessonInput> | Prisma.HomeworkCreateWithoutLessonInput[] | Prisma.HomeworkUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutLessonInput | Prisma.HomeworkCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.HomeworkCreateManyLessonInputEnvelope;
    connect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
};
export type HomeworkUncheckedCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutLessonInput, Prisma.HomeworkUncheckedCreateWithoutLessonInput> | Prisma.HomeworkCreateWithoutLessonInput[] | Prisma.HomeworkUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutLessonInput | Prisma.HomeworkCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.HomeworkCreateManyLessonInputEnvelope;
    connect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
};
export type HomeworkUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutLessonInput, Prisma.HomeworkUncheckedCreateWithoutLessonInput> | Prisma.HomeworkCreateWithoutLessonInput[] | Prisma.HomeworkUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutLessonInput | Prisma.HomeworkCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.HomeworkUpsertWithWhereUniqueWithoutLessonInput | Prisma.HomeworkUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.HomeworkCreateManyLessonInputEnvelope;
    set?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    disconnect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    delete?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    connect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    update?: Prisma.HomeworkUpdateWithWhereUniqueWithoutLessonInput | Prisma.HomeworkUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.HomeworkUpdateManyWithWhereWithoutLessonInput | Prisma.HomeworkUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.HomeworkScalarWhereInput | Prisma.HomeworkScalarWhereInput[];
};
export type HomeworkUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutLessonInput, Prisma.HomeworkUncheckedCreateWithoutLessonInput> | Prisma.HomeworkCreateWithoutLessonInput[] | Prisma.HomeworkUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutLessonInput | Prisma.HomeworkCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.HomeworkUpsertWithWhereUniqueWithoutLessonInput | Prisma.HomeworkUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.HomeworkCreateManyLessonInputEnvelope;
    set?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    disconnect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    delete?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    connect?: Prisma.HomeworkWhereUniqueInput | Prisma.HomeworkWhereUniqueInput[];
    update?: Prisma.HomeworkUpdateWithWhereUniqueWithoutLessonInput | Prisma.HomeworkUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.HomeworkUpdateManyWithWhereWithoutLessonInput | Prisma.HomeworkUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.HomeworkScalarWhereInput | Prisma.HomeworkScalarWhereInput[];
};
export type HomeworkCreateNestedOneWithoutHomeworkResponsesInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutHomeworkResponsesInput, Prisma.HomeworkUncheckedCreateWithoutHomeworkResponsesInput>;
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutHomeworkResponsesInput;
    connect?: Prisma.HomeworkWhereUniqueInput;
};
export type HomeworkUpdateOneRequiredWithoutHomeworkResponsesNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutHomeworkResponsesInput, Prisma.HomeworkUncheckedCreateWithoutHomeworkResponsesInput>;
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutHomeworkResponsesInput;
    upsert?: Prisma.HomeworkUpsertWithoutHomeworkResponsesInput;
    connect?: Prisma.HomeworkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HomeworkUpdateToOneWithWhereWithoutHomeworkResponsesInput, Prisma.HomeworkUpdateWithoutHomeworkResponsesInput>, Prisma.HomeworkUncheckedUpdateWithoutHomeworkResponsesInput>;
};
export type HomeworkCreateNestedOneWithoutHomeworkResultsInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutHomeworkResultsInput, Prisma.HomeworkUncheckedCreateWithoutHomeworkResultsInput>;
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutHomeworkResultsInput;
    connect?: Prisma.HomeworkWhereUniqueInput;
};
export type HomeworkUpdateOneRequiredWithoutHomeworkResultsNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkCreateWithoutHomeworkResultsInput, Prisma.HomeworkUncheckedCreateWithoutHomeworkResultsInput>;
    connectOrCreate?: Prisma.HomeworkCreateOrConnectWithoutHomeworkResultsInput;
    upsert?: Prisma.HomeworkUpsertWithoutHomeworkResultsInput;
    connect?: Prisma.HomeworkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HomeworkUpdateToOneWithWhereWithoutHomeworkResultsInput, Prisma.HomeworkUpdateWithoutHomeworkResultsInput>, Prisma.HomeworkUncheckedUpdateWithoutHomeworkResultsInput>;
};
export type HomeworkCreateWithoutUserInput = {
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutHomeworkInput;
    lesson: Prisma.LessonCreateNestedOneWithoutHomeworkInput;
    homeworkResponses?: Prisma.HomeworkResponseCreateNestedManyWithoutHomeworkInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutHomeworkInput;
};
export type HomeworkUncheckedCreateWithoutUserInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedCreateNestedManyWithoutHomeworkInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutHomeworkInput;
};
export type HomeworkCreateOrConnectWithoutUserInput = {
    where: Prisma.HomeworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.HomeworkCreateWithoutUserInput, Prisma.HomeworkUncheckedCreateWithoutUserInput>;
};
export type HomeworkCreateManyUserInputEnvelope = {
    data: Prisma.HomeworkCreateManyUserInput | Prisma.HomeworkCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type HomeworkUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.HomeworkWhereUniqueInput;
    update: Prisma.XOR<Prisma.HomeworkUpdateWithoutUserInput, Prisma.HomeworkUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.HomeworkCreateWithoutUserInput, Prisma.HomeworkUncheckedCreateWithoutUserInput>;
};
export type HomeworkUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.HomeworkWhereUniqueInput;
    data: Prisma.XOR<Prisma.HomeworkUpdateWithoutUserInput, Prisma.HomeworkUncheckedUpdateWithoutUserInput>;
};
export type HomeworkUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.HomeworkScalarWhereInput;
    data: Prisma.XOR<Prisma.HomeworkUpdateManyMutationInput, Prisma.HomeworkUncheckedUpdateManyWithoutUserInput>;
};
export type HomeworkScalarWhereInput = {
    AND?: Prisma.HomeworkScalarWhereInput | Prisma.HomeworkScalarWhereInput[];
    OR?: Prisma.HomeworkScalarWhereInput[];
    NOT?: Prisma.HomeworkScalarWhereInput | Prisma.HomeworkScalarWhereInput[];
    id?: Prisma.IntFilter<"Homework"> | number;
    lessonId?: Prisma.IntFilter<"Homework"> | number;
    teacherId?: Prisma.IntNullableFilter<"Homework"> | number | null;
    userId?: Prisma.IntNullableFilter<"Homework"> | number | null;
    title?: Prisma.StringFilter<"Homework"> | string;
    file?: Prisma.StringNullableFilter<"Homework"> | string | null;
    durationTime?: Prisma.IntFilter<"Homework"> | number;
    created_at?: Prisma.DateTimeFilter<"Homework"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Homework"> | Date | string;
};
export type HomeworkCreateWithoutTeacherInput = {
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    lesson: Prisma.LessonCreateNestedOneWithoutHomeworkInput;
    user?: Prisma.UserCreateNestedOneWithoutHomeworkInput;
    homeworkResponses?: Prisma.HomeworkResponseCreateNestedManyWithoutHomeworkInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutHomeworkInput;
};
export type HomeworkUncheckedCreateWithoutTeacherInput = {
    id?: number;
    lessonId: number;
    userId?: number | null;
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedCreateNestedManyWithoutHomeworkInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutHomeworkInput;
};
export type HomeworkCreateOrConnectWithoutTeacherInput = {
    where: Prisma.HomeworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.HomeworkCreateWithoutTeacherInput, Prisma.HomeworkUncheckedCreateWithoutTeacherInput>;
};
export type HomeworkCreateManyTeacherInputEnvelope = {
    data: Prisma.HomeworkCreateManyTeacherInput | Prisma.HomeworkCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type HomeworkUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.HomeworkWhereUniqueInput;
    update: Prisma.XOR<Prisma.HomeworkUpdateWithoutTeacherInput, Prisma.HomeworkUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.HomeworkCreateWithoutTeacherInput, Prisma.HomeworkUncheckedCreateWithoutTeacherInput>;
};
export type HomeworkUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.HomeworkWhereUniqueInput;
    data: Prisma.XOR<Prisma.HomeworkUpdateWithoutTeacherInput, Prisma.HomeworkUncheckedUpdateWithoutTeacherInput>;
};
export type HomeworkUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.HomeworkScalarWhereInput;
    data: Prisma.XOR<Prisma.HomeworkUpdateManyMutationInput, Prisma.HomeworkUncheckedUpdateManyWithoutTeacherInput>;
};
export type HomeworkCreateWithoutLessonInput = {
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutHomeworkInput;
    user?: Prisma.UserCreateNestedOneWithoutHomeworkInput;
    homeworkResponses?: Prisma.HomeworkResponseCreateNestedManyWithoutHomeworkInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutHomeworkInput;
};
export type HomeworkUncheckedCreateWithoutLessonInput = {
    id?: number;
    teacherId?: number | null;
    userId?: number | null;
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedCreateNestedManyWithoutHomeworkInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutHomeworkInput;
};
export type HomeworkCreateOrConnectWithoutLessonInput = {
    where: Prisma.HomeworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.HomeworkCreateWithoutLessonInput, Prisma.HomeworkUncheckedCreateWithoutLessonInput>;
};
export type HomeworkCreateManyLessonInputEnvelope = {
    data: Prisma.HomeworkCreateManyLessonInput | Prisma.HomeworkCreateManyLessonInput[];
    skipDuplicates?: boolean;
};
export type HomeworkUpsertWithWhereUniqueWithoutLessonInput = {
    where: Prisma.HomeworkWhereUniqueInput;
    update: Prisma.XOR<Prisma.HomeworkUpdateWithoutLessonInput, Prisma.HomeworkUncheckedUpdateWithoutLessonInput>;
    create: Prisma.XOR<Prisma.HomeworkCreateWithoutLessonInput, Prisma.HomeworkUncheckedCreateWithoutLessonInput>;
};
export type HomeworkUpdateWithWhereUniqueWithoutLessonInput = {
    where: Prisma.HomeworkWhereUniqueInput;
    data: Prisma.XOR<Prisma.HomeworkUpdateWithoutLessonInput, Prisma.HomeworkUncheckedUpdateWithoutLessonInput>;
};
export type HomeworkUpdateManyWithWhereWithoutLessonInput = {
    where: Prisma.HomeworkScalarWhereInput;
    data: Prisma.XOR<Prisma.HomeworkUpdateManyMutationInput, Prisma.HomeworkUncheckedUpdateManyWithoutLessonInput>;
};
export type HomeworkCreateWithoutHomeworkResponsesInput = {
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutHomeworkInput;
    lesson: Prisma.LessonCreateNestedOneWithoutHomeworkInput;
    user?: Prisma.UserCreateNestedOneWithoutHomeworkInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutHomeworkInput;
};
export type HomeworkUncheckedCreateWithoutHomeworkResponsesInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    userId?: number | null;
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutHomeworkInput;
};
export type HomeworkCreateOrConnectWithoutHomeworkResponsesInput = {
    where: Prisma.HomeworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.HomeworkCreateWithoutHomeworkResponsesInput, Prisma.HomeworkUncheckedCreateWithoutHomeworkResponsesInput>;
};
export type HomeworkUpsertWithoutHomeworkResponsesInput = {
    update: Prisma.XOR<Prisma.HomeworkUpdateWithoutHomeworkResponsesInput, Prisma.HomeworkUncheckedUpdateWithoutHomeworkResponsesInput>;
    create: Prisma.XOR<Prisma.HomeworkCreateWithoutHomeworkResponsesInput, Prisma.HomeworkUncheckedCreateWithoutHomeworkResponsesInput>;
    where?: Prisma.HomeworkWhereInput;
};
export type HomeworkUpdateToOneWithWhereWithoutHomeworkResponsesInput = {
    where?: Prisma.HomeworkWhereInput;
    data: Prisma.XOR<Prisma.HomeworkUpdateWithoutHomeworkResponsesInput, Prisma.HomeworkUncheckedUpdateWithoutHomeworkResponsesInput>;
};
export type HomeworkUpdateWithoutHomeworkResponsesInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutHomeworkNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutHomeworkNestedInput;
    user?: Prisma.UserUpdateOneWithoutHomeworkNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutHomeworkNestedInput;
};
export type HomeworkUncheckedUpdateWithoutHomeworkResponsesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutHomeworkNestedInput;
};
export type HomeworkCreateWithoutHomeworkResultsInput = {
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutHomeworkInput;
    lesson: Prisma.LessonCreateNestedOneWithoutHomeworkInput;
    user?: Prisma.UserCreateNestedOneWithoutHomeworkInput;
    homeworkResponses?: Prisma.HomeworkResponseCreateNestedManyWithoutHomeworkInput;
};
export type HomeworkUncheckedCreateWithoutHomeworkResultsInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    userId?: number | null;
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedCreateNestedManyWithoutHomeworkInput;
};
export type HomeworkCreateOrConnectWithoutHomeworkResultsInput = {
    where: Prisma.HomeworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.HomeworkCreateWithoutHomeworkResultsInput, Prisma.HomeworkUncheckedCreateWithoutHomeworkResultsInput>;
};
export type HomeworkUpsertWithoutHomeworkResultsInput = {
    update: Prisma.XOR<Prisma.HomeworkUpdateWithoutHomeworkResultsInput, Prisma.HomeworkUncheckedUpdateWithoutHomeworkResultsInput>;
    create: Prisma.XOR<Prisma.HomeworkCreateWithoutHomeworkResultsInput, Prisma.HomeworkUncheckedCreateWithoutHomeworkResultsInput>;
    where?: Prisma.HomeworkWhereInput;
};
export type HomeworkUpdateToOneWithWhereWithoutHomeworkResultsInput = {
    where?: Prisma.HomeworkWhereInput;
    data: Prisma.XOR<Prisma.HomeworkUpdateWithoutHomeworkResultsInput, Prisma.HomeworkUncheckedUpdateWithoutHomeworkResultsInput>;
};
export type HomeworkUpdateWithoutHomeworkResultsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutHomeworkNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutHomeworkNestedInput;
    user?: Prisma.UserUpdateOneWithoutHomeworkNestedInput;
    homeworkResponses?: Prisma.HomeworkResponseUpdateManyWithoutHomeworkNestedInput;
};
export type HomeworkUncheckedUpdateWithoutHomeworkResultsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedUpdateManyWithoutHomeworkNestedInput;
};
export type HomeworkCreateManyUserInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkUpdateWithoutUserInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutHomeworkNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutHomeworkNestedInput;
    homeworkResponses?: Prisma.HomeworkResponseUpdateManyWithoutHomeworkNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutHomeworkNestedInput;
};
export type HomeworkUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedUpdateManyWithoutHomeworkNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutHomeworkNestedInput;
};
export type HomeworkUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkCreateManyTeacherInput = {
    id?: number;
    lessonId: number;
    userId?: number | null;
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkUpdateWithoutTeacherInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutHomeworkNestedInput;
    user?: Prisma.UserUpdateOneWithoutHomeworkNestedInput;
    homeworkResponses?: Prisma.HomeworkResponseUpdateManyWithoutHomeworkNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutHomeworkNestedInput;
};
export type HomeworkUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedUpdateManyWithoutHomeworkNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutHomeworkNestedInput;
};
export type HomeworkUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkCreateManyLessonInput = {
    id?: number;
    teacherId?: number | null;
    userId?: number | null;
    title: string;
    file?: string | null;
    durationTime?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkUpdateWithoutLessonInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutHomeworkNestedInput;
    user?: Prisma.UserUpdateOneWithoutHomeworkNestedInput;
    homeworkResponses?: Prisma.HomeworkResponseUpdateManyWithoutHomeworkNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutHomeworkNestedInput;
};
export type HomeworkUncheckedUpdateWithoutLessonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedUpdateManyWithoutHomeworkNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutHomeworkNestedInput;
};
export type HomeworkUncheckedUpdateManyWithoutLessonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    durationTime?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkCountOutputType = {
    homeworkResponses: number;
    homeworkResults: number;
};
export type HomeworkCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    homeworkResponses?: boolean | HomeworkCountOutputTypeCountHomeworkResponsesArgs;
    homeworkResults?: boolean | HomeworkCountOutputTypeCountHomeworkResultsArgs;
};
export type HomeworkCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkCountOutputTypeSelect<ExtArgs> | null;
};
export type HomeworkCountOutputTypeCountHomeworkResponsesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkResponseWhereInput;
};
export type HomeworkCountOutputTypeCountHomeworkResultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkResultWhereInput;
};
export type HomeworkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    title?: boolean;
    file?: boolean;
    durationTime?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    teacher?: boolean | Prisma.Homework$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Homework$userArgs<ExtArgs>;
    homeworkResponses?: boolean | Prisma.Homework$homeworkResponsesArgs<ExtArgs>;
    homeworkResults?: boolean | Prisma.Homework$homeworkResultsArgs<ExtArgs>;
    _count?: boolean | Prisma.HomeworkCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["homework"]>;
export type HomeworkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    title?: boolean;
    file?: boolean;
    durationTime?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    teacher?: boolean | Prisma.Homework$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Homework$userArgs<ExtArgs>;
}, ExtArgs["result"]["homework"]>;
export type HomeworkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    title?: boolean;
    file?: boolean;
    durationTime?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    teacher?: boolean | Prisma.Homework$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Homework$userArgs<ExtArgs>;
}, ExtArgs["result"]["homework"]>;
export type HomeworkSelectScalar = {
    id?: boolean;
    lessonId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    title?: boolean;
    file?: boolean;
    durationTime?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type HomeworkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lessonId" | "teacherId" | "userId" | "title" | "file" | "durationTime" | "created_at" | "updated_at", ExtArgs["result"]["homework"]>;
export type HomeworkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.Homework$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Homework$userArgs<ExtArgs>;
    homeworkResponses?: boolean | Prisma.Homework$homeworkResponsesArgs<ExtArgs>;
    homeworkResults?: boolean | Prisma.Homework$homeworkResultsArgs<ExtArgs>;
    _count?: boolean | Prisma.HomeworkCountOutputTypeDefaultArgs<ExtArgs>;
};
export type HomeworkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.Homework$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Homework$userArgs<ExtArgs>;
};
export type HomeworkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.Homework$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Homework$userArgs<ExtArgs>;
};
export type $HomeworkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Homework";
    objects: {
        teacher: Prisma.$TeacherPayload<ExtArgs> | null;
        lesson: Prisma.$LessonPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs> | null;
        homeworkResponses: Prisma.$HomeworkResponsePayload<ExtArgs>[];
        homeworkResults: Prisma.$HomeworkResultPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        lessonId: number;
        teacherId: number | null;
        userId: number | null;
        title: string;
        file: string | null;
        durationTime: number;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["homework"]>;
    composites: {};
};
export type HomeworkGetPayload<S extends boolean | null | undefined | HomeworkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HomeworkPayload, S>;
export type HomeworkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HomeworkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HomeworkCountAggregateInputType | true;
};
export interface HomeworkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Homework'];
        meta: {
            name: 'Homework';
        };
    };
    findUnique<T extends HomeworkFindUniqueArgs>(args: Prisma.SelectSubset<T, HomeworkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HomeworkClient<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HomeworkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HomeworkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HomeworkClient<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HomeworkFindFirstArgs>(args?: Prisma.SelectSubset<T, HomeworkFindFirstArgs<ExtArgs>>): Prisma.Prisma__HomeworkClient<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HomeworkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HomeworkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HomeworkClient<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HomeworkFindManyArgs>(args?: Prisma.SelectSubset<T, HomeworkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HomeworkCreateArgs>(args: Prisma.SelectSubset<T, HomeworkCreateArgs<ExtArgs>>): Prisma.Prisma__HomeworkClient<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HomeworkCreateManyArgs>(args?: Prisma.SelectSubset<T, HomeworkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HomeworkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HomeworkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HomeworkDeleteArgs>(args: Prisma.SelectSubset<T, HomeworkDeleteArgs<ExtArgs>>): Prisma.Prisma__HomeworkClient<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HomeworkUpdateArgs>(args: Prisma.SelectSubset<T, HomeworkUpdateArgs<ExtArgs>>): Prisma.Prisma__HomeworkClient<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HomeworkDeleteManyArgs>(args?: Prisma.SelectSubset<T, HomeworkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HomeworkUpdateManyArgs>(args: Prisma.SelectSubset<T, HomeworkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HomeworkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HomeworkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HomeworkUpsertArgs>(args: Prisma.SelectSubset<T, HomeworkUpsertArgs<ExtArgs>>): Prisma.Prisma__HomeworkClient<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HomeworkCountArgs>(args?: Prisma.Subset<T, HomeworkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HomeworkCountAggregateOutputType> : number>;
    aggregate<T extends HomeworkAggregateArgs>(args: Prisma.Subset<T, HomeworkAggregateArgs>): Prisma.PrismaPromise<GetHomeworkAggregateType<T>>;
    groupBy<T extends HomeworkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HomeworkGroupByArgs['orderBy'];
    } : {
        orderBy?: HomeworkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HomeworkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HomeworkFieldRefs;
}
export interface Prisma__HomeworkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    teacher<T extends Prisma.Homework$teacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Homework$teacherArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lesson<T extends Prisma.LessonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonDefaultArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.Homework$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Homework$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    homeworkResponses<T extends Prisma.Homework$homeworkResponsesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Homework$homeworkResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    homeworkResults<T extends Prisma.Homework$homeworkResultsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Homework$homeworkResultsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HomeworkFieldRefs {
    readonly id: Prisma.FieldRef<"Homework", 'Int'>;
    readonly lessonId: Prisma.FieldRef<"Homework", 'Int'>;
    readonly teacherId: Prisma.FieldRef<"Homework", 'Int'>;
    readonly userId: Prisma.FieldRef<"Homework", 'Int'>;
    readonly title: Prisma.FieldRef<"Homework", 'String'>;
    readonly file: Prisma.FieldRef<"Homework", 'String'>;
    readonly durationTime: Prisma.FieldRef<"Homework", 'Int'>;
    readonly created_at: Prisma.FieldRef<"Homework", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Homework", 'DateTime'>;
}
export type HomeworkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkOmit<ExtArgs> | null;
    include?: Prisma.HomeworkInclude<ExtArgs> | null;
    where: Prisma.HomeworkWhereUniqueInput;
};
export type HomeworkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkOmit<ExtArgs> | null;
    include?: Prisma.HomeworkInclude<ExtArgs> | null;
    where: Prisma.HomeworkWhereUniqueInput;
};
export type HomeworkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HomeworkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HomeworkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HomeworkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkOmit<ExtArgs> | null;
    include?: Prisma.HomeworkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HomeworkCreateInput, Prisma.HomeworkUncheckedCreateInput>;
};
export type HomeworkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HomeworkCreateManyInput | Prisma.HomeworkCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HomeworkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HomeworkOmit<ExtArgs> | null;
    data: Prisma.HomeworkCreateManyInput | Prisma.HomeworkCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HomeworkIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HomeworkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkOmit<ExtArgs> | null;
    include?: Prisma.HomeworkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HomeworkUpdateInput, Prisma.HomeworkUncheckedUpdateInput>;
    where: Prisma.HomeworkWhereUniqueInput;
};
export type HomeworkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HomeworkUpdateManyMutationInput, Prisma.HomeworkUncheckedUpdateManyInput>;
    where?: Prisma.HomeworkWhereInput;
    limit?: number;
};
export type HomeworkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HomeworkOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HomeworkUpdateManyMutationInput, Prisma.HomeworkUncheckedUpdateManyInput>;
    where?: Prisma.HomeworkWhereInput;
    limit?: number;
    include?: Prisma.HomeworkIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HomeworkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkOmit<ExtArgs> | null;
    include?: Prisma.HomeworkInclude<ExtArgs> | null;
    where: Prisma.HomeworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.HomeworkCreateInput, Prisma.HomeworkUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HomeworkUpdateInput, Prisma.HomeworkUncheckedUpdateInput>;
};
export type HomeworkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkOmit<ExtArgs> | null;
    include?: Prisma.HomeworkInclude<ExtArgs> | null;
    where: Prisma.HomeworkWhereUniqueInput;
};
export type HomeworkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkWhereInput;
    limit?: number;
};
export type Homework$teacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
};
export type Homework$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Homework$homeworkResponsesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResponseSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResponseOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResponseInclude<ExtArgs> | null;
    where?: Prisma.HomeworkResponseWhereInput;
    orderBy?: Prisma.HomeworkResponseOrderByWithRelationInput | Prisma.HomeworkResponseOrderByWithRelationInput[];
    cursor?: Prisma.HomeworkResponseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HomeworkResponseScalarFieldEnum | Prisma.HomeworkResponseScalarFieldEnum[];
};
export type Homework$homeworkResultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HomeworkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkOmit<ExtArgs> | null;
    include?: Prisma.HomeworkInclude<ExtArgs> | null;
};
export {};
