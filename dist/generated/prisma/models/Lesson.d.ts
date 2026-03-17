import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LessonModel = runtime.Types.Result.DefaultSelection<Prisma.$LessonPayload>;
export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null;
    _avg: LessonAvgAggregateOutputType | null;
    _sum: LessonSumAggregateOutputType | null;
    _min: LessonMinAggregateOutputType | null;
    _max: LessonMaxAggregateOutputType | null;
};
export type LessonAvgAggregateOutputType = {
    id: number | null;
    groupId: number | null;
    userId: number | null;
    teacherId: number | null;
};
export type LessonSumAggregateOutputType = {
    id: number | null;
    groupId: number | null;
    userId: number | null;
    teacherId: number | null;
};
export type LessonMinAggregateOutputType = {
    id: number | null;
    groupId: number | null;
    userId: number | null;
    teacherId: number | null;
    title: string | null;
    lessonStart: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type LessonMaxAggregateOutputType = {
    id: number | null;
    groupId: number | null;
    userId: number | null;
    teacherId: number | null;
    title: string | null;
    lessonStart: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type LessonCountAggregateOutputType = {
    id: number;
    groupId: number;
    userId: number;
    teacherId: number;
    title: number;
    lessonStart: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type LessonAvgAggregateInputType = {
    id?: true;
    groupId?: true;
    userId?: true;
    teacherId?: true;
};
export type LessonSumAggregateInputType = {
    id?: true;
    groupId?: true;
    userId?: true;
    teacherId?: true;
};
export type LessonMinAggregateInputType = {
    id?: true;
    groupId?: true;
    userId?: true;
    teacherId?: true;
    title?: true;
    lessonStart?: true;
    created_at?: true;
    updated_at?: true;
};
export type LessonMaxAggregateInputType = {
    id?: true;
    groupId?: true;
    userId?: true;
    teacherId?: true;
    title?: true;
    lessonStart?: true;
    created_at?: true;
    updated_at?: true;
};
export type LessonCountAggregateInputType = {
    id?: true;
    groupId?: true;
    userId?: true;
    teacherId?: true;
    title?: true;
    lessonStart?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type LessonAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    cursor?: Prisma.LessonWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LessonCountAggregateInputType;
    _avg?: LessonAvgAggregateInputType;
    _sum?: LessonSumAggregateInputType;
    _min?: LessonMinAggregateInputType;
    _max?: LessonMaxAggregateInputType;
};
export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
    [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLesson[P]> : Prisma.GetScalarType<T[P], AggregateLesson[P]>;
};
export type LessonGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithAggregationInput | Prisma.LessonOrderByWithAggregationInput[];
    by: Prisma.LessonScalarFieldEnum[] | Prisma.LessonScalarFieldEnum;
    having?: Prisma.LessonScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LessonCountAggregateInputType | true;
    _avg?: LessonAvgAggregateInputType;
    _sum?: LessonSumAggregateInputType;
    _min?: LessonMinAggregateInputType;
    _max?: LessonMaxAggregateInputType;
};
export type LessonGroupByOutputType = {
    id: number;
    groupId: number;
    userId: number | null;
    teacherId: number | null;
    title: string;
    lessonStart: Date;
    created_at: Date;
    updated_at: Date;
    _count: LessonCountAggregateOutputType | null;
    _avg: LessonAvgAggregateOutputType | null;
    _sum: LessonSumAggregateOutputType | null;
    _min: LessonMinAggregateOutputType | null;
    _max: LessonMaxAggregateOutputType | null;
};
type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LessonGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LessonGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LessonGroupByOutputType[P]>;
}>>;
export type LessonWhereInput = {
    AND?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    OR?: Prisma.LessonWhereInput[];
    NOT?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    id?: Prisma.IntFilter<"Lesson"> | number;
    groupId?: Prisma.IntFilter<"Lesson"> | number;
    userId?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    teacherId?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    title?: Prisma.StringFilter<"Lesson"> | string;
    lessonStart?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    attendances?: Prisma.AttendanceListRelationFilter;
    homework?: Prisma.HomeworkListRelationFilter;
    lessonVideos?: Prisma.LessonVideoListRelationFilter;
    ratings?: Prisma.RatingListRelationFilter;
};
export type LessonOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    lessonStart?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    group?: Prisma.GroupOrderByWithRelationInput;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    attendances?: Prisma.AttendanceOrderByRelationAggregateInput;
    homework?: Prisma.HomeworkOrderByRelationAggregateInput;
    lessonVideos?: Prisma.LessonVideoOrderByRelationAggregateInput;
    ratings?: Prisma.RatingOrderByRelationAggregateInput;
};
export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    OR?: Prisma.LessonWhereInput[];
    NOT?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    groupId?: Prisma.IntFilter<"Lesson"> | number;
    userId?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    teacherId?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    title?: Prisma.StringFilter<"Lesson"> | string;
    lessonStart?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    attendances?: Prisma.AttendanceListRelationFilter;
    homework?: Prisma.HomeworkListRelationFilter;
    lessonVideos?: Prisma.LessonVideoListRelationFilter;
    ratings?: Prisma.RatingListRelationFilter;
}, "id">;
export type LessonOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    lessonStart?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.LessonCountOrderByAggregateInput;
    _avg?: Prisma.LessonAvgOrderByAggregateInput;
    _max?: Prisma.LessonMaxOrderByAggregateInput;
    _min?: Prisma.LessonMinOrderByAggregateInput;
    _sum?: Prisma.LessonSumOrderByAggregateInput;
};
export type LessonScalarWhereWithAggregatesInput = {
    AND?: Prisma.LessonScalarWhereWithAggregatesInput | Prisma.LessonScalarWhereWithAggregatesInput[];
    OR?: Prisma.LessonScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LessonScalarWhereWithAggregatesInput | Prisma.LessonScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Lesson"> | number;
    groupId?: Prisma.IntWithAggregatesFilter<"Lesson"> | number;
    userId?: Prisma.IntNullableWithAggregatesFilter<"Lesson"> | number | null;
    teacherId?: Prisma.IntNullableWithAggregatesFilter<"Lesson"> | number | null;
    title?: Prisma.StringWithAggregatesFilter<"Lesson"> | string;
    lessonStart?: Prisma.DateTimeWithAggregatesFilter<"Lesson"> | Date | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Lesson"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Lesson"> | Date | string;
};
export type LessonCreateInput = {
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutLessonsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLessonsInput;
    user?: Prisma.UserCreateNestedOneWithoutLessonsInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutLessonInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutLessonInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutLessonInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateInput = {
    id?: number;
    groupId: number;
    userId?: number | null;
    teacherId?: number | null;
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutLessonInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutLessonInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutLessonInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutLessonsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutLessonsNestedInput;
    user?: Prisma.UserUpdateOneWithoutLessonsNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutLessonNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutLessonNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutLessonNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutLessonNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutLessonNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutLessonNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonCreateManyInput = {
    id?: number;
    groupId: number;
    userId?: number | null;
    teacherId?: number | null;
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type LessonUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonListRelationFilter = {
    every?: Prisma.LessonWhereInput;
    some?: Prisma.LessonWhereInput;
    none?: Prisma.LessonWhereInput;
};
export type LessonOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LessonCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    lessonStart?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type LessonAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
};
export type LessonMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    lessonStart?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type LessonMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    lessonStart?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type LessonSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
};
export type LessonScalarRelationFilter = {
    is?: Prisma.LessonWhereInput;
    isNot?: Prisma.LessonWhereInput;
};
export type LessonCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutUserInput, Prisma.LessonUncheckedCreateWithoutUserInput> | Prisma.LessonCreateWithoutUserInput[] | Prisma.LessonUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutUserInput | Prisma.LessonCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LessonCreateManyUserInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutUserInput, Prisma.LessonUncheckedCreateWithoutUserInput> | Prisma.LessonCreateWithoutUserInput[] | Prisma.LessonUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutUserInput | Prisma.LessonCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LessonCreateManyUserInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutUserInput, Prisma.LessonUncheckedCreateWithoutUserInput> | Prisma.LessonCreateWithoutUserInput[] | Prisma.LessonUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutUserInput | Prisma.LessonCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutUserInput | Prisma.LessonUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LessonCreateManyUserInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutUserInput | Prisma.LessonUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutUserInput | Prisma.LessonUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutUserInput, Prisma.LessonUncheckedCreateWithoutUserInput> | Prisma.LessonCreateWithoutUserInput[] | Prisma.LessonUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutUserInput | Prisma.LessonCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutUserInput | Prisma.LessonUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LessonCreateManyUserInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutUserInput | Prisma.LessonUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutUserInput | Prisma.LessonUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutTeacherInput, Prisma.LessonUncheckedCreateWithoutTeacherInput> | Prisma.LessonCreateWithoutTeacherInput[] | Prisma.LessonUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutTeacherInput | Prisma.LessonCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.LessonCreateManyTeacherInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutTeacherInput, Prisma.LessonUncheckedCreateWithoutTeacherInput> | Prisma.LessonCreateWithoutTeacherInput[] | Prisma.LessonUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutTeacherInput | Prisma.LessonCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.LessonCreateManyTeacherInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutTeacherInput, Prisma.LessonUncheckedCreateWithoutTeacherInput> | Prisma.LessonCreateWithoutTeacherInput[] | Prisma.LessonUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutTeacherInput | Prisma.LessonCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutTeacherInput | Prisma.LessonUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.LessonCreateManyTeacherInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutTeacherInput | Prisma.LessonUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutTeacherInput | Prisma.LessonUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutTeacherInput, Prisma.LessonUncheckedCreateWithoutTeacherInput> | Prisma.LessonCreateWithoutTeacherInput[] | Prisma.LessonUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutTeacherInput | Prisma.LessonCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutTeacherInput | Prisma.LessonUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.LessonCreateManyTeacherInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutTeacherInput | Prisma.LessonUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutTeacherInput | Prisma.LessonUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutGroupInput, Prisma.LessonUncheckedCreateWithoutGroupInput> | Prisma.LessonCreateWithoutGroupInput[] | Prisma.LessonUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutGroupInput | Prisma.LessonCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.LessonCreateManyGroupInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUncheckedCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutGroupInput, Prisma.LessonUncheckedCreateWithoutGroupInput> | Prisma.LessonCreateWithoutGroupInput[] | Prisma.LessonUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutGroupInput | Prisma.LessonCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.LessonCreateManyGroupInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutGroupInput, Prisma.LessonUncheckedCreateWithoutGroupInput> | Prisma.LessonCreateWithoutGroupInput[] | Prisma.LessonUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutGroupInput | Prisma.LessonCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutGroupInput | Prisma.LessonUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.LessonCreateManyGroupInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutGroupInput | Prisma.LessonUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutGroupInput | Prisma.LessonUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutGroupInput, Prisma.LessonUncheckedCreateWithoutGroupInput> | Prisma.LessonCreateWithoutGroupInput[] | Prisma.LessonUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutGroupInput | Prisma.LessonCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutGroupInput | Prisma.LessonUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.LessonCreateManyGroupInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutGroupInput | Prisma.LessonUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutGroupInput | Prisma.LessonUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonCreateNestedOneWithoutAttendancesInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutAttendancesInput, Prisma.LessonUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutAttendancesInput;
    connect?: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutAttendancesInput, Prisma.LessonUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutAttendancesInput;
    upsert?: Prisma.LessonUpsertWithoutAttendancesInput;
    connect?: Prisma.LessonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LessonUpdateToOneWithWhereWithoutAttendancesInput, Prisma.LessonUpdateWithoutAttendancesInput>, Prisma.LessonUncheckedUpdateWithoutAttendancesInput>;
};
export type LessonCreateNestedOneWithoutHomeworkInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutHomeworkInput, Prisma.LessonUncheckedCreateWithoutHomeworkInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutHomeworkInput;
    connect?: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateOneRequiredWithoutHomeworkNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutHomeworkInput, Prisma.LessonUncheckedCreateWithoutHomeworkInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutHomeworkInput;
    upsert?: Prisma.LessonUpsertWithoutHomeworkInput;
    connect?: Prisma.LessonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LessonUpdateToOneWithWhereWithoutHomeworkInput, Prisma.LessonUpdateWithoutHomeworkInput>, Prisma.LessonUncheckedUpdateWithoutHomeworkInput>;
};
export type LessonCreateNestedOneWithoutLessonVideosInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutLessonVideosInput, Prisma.LessonUncheckedCreateWithoutLessonVideosInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutLessonVideosInput;
    connect?: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateOneRequiredWithoutLessonVideosNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutLessonVideosInput, Prisma.LessonUncheckedCreateWithoutLessonVideosInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutLessonVideosInput;
    upsert?: Prisma.LessonUpsertWithoutLessonVideosInput;
    connect?: Prisma.LessonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LessonUpdateToOneWithWhereWithoutLessonVideosInput, Prisma.LessonUpdateWithoutLessonVideosInput>, Prisma.LessonUncheckedUpdateWithoutLessonVideosInput>;
};
export type LessonCreateNestedOneWithoutRatingsInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutRatingsInput, Prisma.LessonUncheckedCreateWithoutRatingsInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutRatingsInput;
    connect?: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutRatingsInput, Prisma.LessonUncheckedCreateWithoutRatingsInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutRatingsInput;
    upsert?: Prisma.LessonUpsertWithoutRatingsInput;
    connect?: Prisma.LessonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LessonUpdateToOneWithWhereWithoutRatingsInput, Prisma.LessonUpdateWithoutRatingsInput>, Prisma.LessonUncheckedUpdateWithoutRatingsInput>;
};
export type LessonCreateWithoutUserInput = {
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutLessonsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLessonsInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutLessonInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutLessonInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutLessonInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutUserInput = {
    id?: number;
    groupId: number;
    teacherId?: number | null;
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutLessonInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutLessonInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutLessonInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutUserInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutUserInput, Prisma.LessonUncheckedCreateWithoutUserInput>;
};
export type LessonCreateManyUserInputEnvelope = {
    data: Prisma.LessonCreateManyUserInput | Prisma.LessonCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type LessonUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.LessonWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonUpdateWithoutUserInput, Prisma.LessonUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutUserInput, Prisma.LessonUncheckedCreateWithoutUserInput>;
};
export type LessonUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.LessonWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutUserInput, Prisma.LessonUncheckedUpdateWithoutUserInput>;
};
export type LessonUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.LessonScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyWithoutUserInput>;
};
export type LessonScalarWhereInput = {
    AND?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
    OR?: Prisma.LessonScalarWhereInput[];
    NOT?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
    id?: Prisma.IntFilter<"Lesson"> | number;
    groupId?: Prisma.IntFilter<"Lesson"> | number;
    userId?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    teacherId?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    title?: Prisma.StringFilter<"Lesson"> | string;
    lessonStart?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Lesson"> | Date | string;
};
export type LessonCreateWithoutTeacherInput = {
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutLessonsInput;
    user?: Prisma.UserCreateNestedOneWithoutLessonsInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutLessonInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutLessonInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutLessonInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutTeacherInput = {
    id?: number;
    groupId: number;
    userId?: number | null;
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutLessonInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutLessonInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutLessonInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutTeacherInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutTeacherInput, Prisma.LessonUncheckedCreateWithoutTeacherInput>;
};
export type LessonCreateManyTeacherInputEnvelope = {
    data: Prisma.LessonCreateManyTeacherInput | Prisma.LessonCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type LessonUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.LessonWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonUpdateWithoutTeacherInput, Prisma.LessonUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutTeacherInput, Prisma.LessonUncheckedCreateWithoutTeacherInput>;
};
export type LessonUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.LessonWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutTeacherInput, Prisma.LessonUncheckedUpdateWithoutTeacherInput>;
};
export type LessonUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.LessonScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyWithoutTeacherInput>;
};
export type LessonCreateWithoutGroupInput = {
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLessonsInput;
    user?: Prisma.UserCreateNestedOneWithoutLessonsInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutLessonInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutLessonInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutLessonInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutGroupInput = {
    id?: number;
    userId?: number | null;
    teacherId?: number | null;
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutLessonInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutLessonInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutLessonInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutGroupInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutGroupInput, Prisma.LessonUncheckedCreateWithoutGroupInput>;
};
export type LessonCreateManyGroupInputEnvelope = {
    data: Prisma.LessonCreateManyGroupInput | Prisma.LessonCreateManyGroupInput[];
    skipDuplicates?: boolean;
};
export type LessonUpsertWithWhereUniqueWithoutGroupInput = {
    where: Prisma.LessonWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonUpdateWithoutGroupInput, Prisma.LessonUncheckedUpdateWithoutGroupInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutGroupInput, Prisma.LessonUncheckedCreateWithoutGroupInput>;
};
export type LessonUpdateWithWhereUniqueWithoutGroupInput = {
    where: Prisma.LessonWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutGroupInput, Prisma.LessonUncheckedUpdateWithoutGroupInput>;
};
export type LessonUpdateManyWithWhereWithoutGroupInput = {
    where: Prisma.LessonScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyWithoutGroupInput>;
};
export type LessonCreateWithoutAttendancesInput = {
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutLessonsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLessonsInput;
    user?: Prisma.UserCreateNestedOneWithoutLessonsInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutLessonInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutLessonInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutAttendancesInput = {
    id?: number;
    groupId: number;
    userId?: number | null;
    teacherId?: number | null;
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutLessonInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutLessonInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutAttendancesInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutAttendancesInput, Prisma.LessonUncheckedCreateWithoutAttendancesInput>;
};
export type LessonUpsertWithoutAttendancesInput = {
    update: Prisma.XOR<Prisma.LessonUpdateWithoutAttendancesInput, Prisma.LessonUncheckedUpdateWithoutAttendancesInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutAttendancesInput, Prisma.LessonUncheckedCreateWithoutAttendancesInput>;
    where?: Prisma.LessonWhereInput;
};
export type LessonUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: Prisma.LessonWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutAttendancesInput, Prisma.LessonUncheckedUpdateWithoutAttendancesInput>;
};
export type LessonUpdateWithoutAttendancesInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutLessonsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutLessonsNestedInput;
    user?: Prisma.UserUpdateOneWithoutLessonsNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutLessonNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutLessonNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutAttendancesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutLessonNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutLessonNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonCreateWithoutHomeworkInput = {
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutLessonsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLessonsInput;
    user?: Prisma.UserCreateNestedOneWithoutLessonsInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutLessonInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutLessonInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutHomeworkInput = {
    id?: number;
    groupId: number;
    userId?: number | null;
    teacherId?: number | null;
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutLessonInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutLessonInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutHomeworkInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutHomeworkInput, Prisma.LessonUncheckedCreateWithoutHomeworkInput>;
};
export type LessonUpsertWithoutHomeworkInput = {
    update: Prisma.XOR<Prisma.LessonUpdateWithoutHomeworkInput, Prisma.LessonUncheckedUpdateWithoutHomeworkInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutHomeworkInput, Prisma.LessonUncheckedCreateWithoutHomeworkInput>;
    where?: Prisma.LessonWhereInput;
};
export type LessonUpdateToOneWithWhereWithoutHomeworkInput = {
    where?: Prisma.LessonWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutHomeworkInput, Prisma.LessonUncheckedUpdateWithoutHomeworkInput>;
};
export type LessonUpdateWithoutHomeworkInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutLessonsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutLessonsNestedInput;
    user?: Prisma.UserUpdateOneWithoutLessonsNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutLessonNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutLessonNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutHomeworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutLessonNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutLessonNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonCreateWithoutLessonVideosInput = {
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutLessonsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLessonsInput;
    user?: Prisma.UserCreateNestedOneWithoutLessonsInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutLessonInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutLessonInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutLessonVideosInput = {
    id?: number;
    groupId: number;
    userId?: number | null;
    teacherId?: number | null;
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutLessonInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutLessonInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutLessonVideosInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutLessonVideosInput, Prisma.LessonUncheckedCreateWithoutLessonVideosInput>;
};
export type LessonUpsertWithoutLessonVideosInput = {
    update: Prisma.XOR<Prisma.LessonUpdateWithoutLessonVideosInput, Prisma.LessonUncheckedUpdateWithoutLessonVideosInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutLessonVideosInput, Prisma.LessonUncheckedCreateWithoutLessonVideosInput>;
    where?: Prisma.LessonWhereInput;
};
export type LessonUpdateToOneWithWhereWithoutLessonVideosInput = {
    where?: Prisma.LessonWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutLessonVideosInput, Prisma.LessonUncheckedUpdateWithoutLessonVideosInput>;
};
export type LessonUpdateWithoutLessonVideosInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutLessonsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutLessonsNestedInput;
    user?: Prisma.UserUpdateOneWithoutLessonsNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutLessonNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutLessonNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutLessonVideosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutLessonNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutLessonNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonCreateWithoutRatingsInput = {
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutLessonsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLessonsInput;
    user?: Prisma.UserCreateNestedOneWithoutLessonsInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutLessonInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutLessonInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutRatingsInput = {
    id?: number;
    groupId: number;
    userId?: number | null;
    teacherId?: number | null;
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutLessonInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutLessonInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutRatingsInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutRatingsInput, Prisma.LessonUncheckedCreateWithoutRatingsInput>;
};
export type LessonUpsertWithoutRatingsInput = {
    update: Prisma.XOR<Prisma.LessonUpdateWithoutRatingsInput, Prisma.LessonUncheckedUpdateWithoutRatingsInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutRatingsInput, Prisma.LessonUncheckedCreateWithoutRatingsInput>;
    where?: Prisma.LessonWhereInput;
};
export type LessonUpdateToOneWithWhereWithoutRatingsInput = {
    where?: Prisma.LessonWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutRatingsInput, Prisma.LessonUncheckedUpdateWithoutRatingsInput>;
};
export type LessonUpdateWithoutRatingsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutLessonsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutLessonsNestedInput;
    user?: Prisma.UserUpdateOneWithoutLessonsNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutLessonNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutLessonNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutRatingsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutLessonNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutLessonNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonCreateManyUserInput = {
    id?: number;
    groupId: number;
    teacherId?: number | null;
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type LessonUpdateWithoutUserInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutLessonsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutLessonsNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutLessonNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutLessonNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutLessonNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutLessonNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutLessonNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutLessonNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonCreateManyTeacherInput = {
    id?: number;
    groupId: number;
    userId?: number | null;
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type LessonUpdateWithoutTeacherInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutLessonsNestedInput;
    user?: Prisma.UserUpdateOneWithoutLessonsNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutLessonNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutLessonNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutLessonNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutLessonNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutLessonNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutLessonNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonCreateManyGroupInput = {
    id?: number;
    userId?: number | null;
    teacherId?: number | null;
    title: string;
    lessonStart: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type LessonUpdateWithoutGroupInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutLessonsNestedInput;
    user?: Prisma.UserUpdateOneWithoutLessonsNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutLessonNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutLessonNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutLessonNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutGroupInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutLessonNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutLessonNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutLessonNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateManyWithoutGroupInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonCountOutputType = {
    attendances: number;
    homework: number;
    lessonVideos: number;
    ratings: number;
};
export type LessonCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendances?: boolean | LessonCountOutputTypeCountAttendancesArgs;
    homework?: boolean | LessonCountOutputTypeCountHomeworkArgs;
    lessonVideos?: boolean | LessonCountOutputTypeCountLessonVideosArgs;
    ratings?: boolean | LessonCountOutputTypeCountRatingsArgs;
};
export type LessonCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonCountOutputTypeSelect<ExtArgs> | null;
};
export type LessonCountOutputTypeCountAttendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceWhereInput;
};
export type LessonCountOutputTypeCountHomeworkArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkWhereInput;
};
export type LessonCountOutputTypeCountLessonVideosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonVideoWhereInput;
};
export type LessonCountOutputTypeCountRatingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatingWhereInput;
};
export type LessonSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    userId?: boolean;
    teacherId?: boolean;
    title?: boolean;
    lessonStart?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.Lesson$teacherArgs<ExtArgs>;
    user?: boolean | Prisma.Lesson$userArgs<ExtArgs>;
    attendances?: boolean | Prisma.Lesson$attendancesArgs<ExtArgs>;
    homework?: boolean | Prisma.Lesson$homeworkArgs<ExtArgs>;
    lessonVideos?: boolean | Prisma.Lesson$lessonVideosArgs<ExtArgs>;
    ratings?: boolean | Prisma.Lesson$ratingsArgs<ExtArgs>;
    _count?: boolean | Prisma.LessonCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lesson"]>;
export type LessonSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    userId?: boolean;
    teacherId?: boolean;
    title?: boolean;
    lessonStart?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.Lesson$teacherArgs<ExtArgs>;
    user?: boolean | Prisma.Lesson$userArgs<ExtArgs>;
}, ExtArgs["result"]["lesson"]>;
export type LessonSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    userId?: boolean;
    teacherId?: boolean;
    title?: boolean;
    lessonStart?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.Lesson$teacherArgs<ExtArgs>;
    user?: boolean | Prisma.Lesson$userArgs<ExtArgs>;
}, ExtArgs["result"]["lesson"]>;
export type LessonSelectScalar = {
    id?: boolean;
    groupId?: boolean;
    userId?: boolean;
    teacherId?: boolean;
    title?: boolean;
    lessonStart?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type LessonOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "groupId" | "userId" | "teacherId" | "title" | "lessonStart" | "created_at" | "updated_at", ExtArgs["result"]["lesson"]>;
export type LessonInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.Lesson$teacherArgs<ExtArgs>;
    user?: boolean | Prisma.Lesson$userArgs<ExtArgs>;
    attendances?: boolean | Prisma.Lesson$attendancesArgs<ExtArgs>;
    homework?: boolean | Prisma.Lesson$homeworkArgs<ExtArgs>;
    lessonVideos?: boolean | Prisma.Lesson$lessonVideosArgs<ExtArgs>;
    ratings?: boolean | Prisma.Lesson$ratingsArgs<ExtArgs>;
    _count?: boolean | Prisma.LessonCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LessonIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.Lesson$teacherArgs<ExtArgs>;
    user?: boolean | Prisma.Lesson$userArgs<ExtArgs>;
};
export type LessonIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.Lesson$teacherArgs<ExtArgs>;
    user?: boolean | Prisma.Lesson$userArgs<ExtArgs>;
};
export type $LessonPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Lesson";
    objects: {
        group: Prisma.$GroupPayload<ExtArgs>;
        teacher: Prisma.$TeacherPayload<ExtArgs> | null;
        user: Prisma.$UserPayload<ExtArgs> | null;
        attendances: Prisma.$AttendancePayload<ExtArgs>[];
        homework: Prisma.$HomeworkPayload<ExtArgs>[];
        lessonVideos: Prisma.$LessonVideoPayload<ExtArgs>[];
        ratings: Prisma.$RatingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        groupId: number;
        userId: number | null;
        teacherId: number | null;
        title: string;
        lessonStart: Date;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["lesson"]>;
    composites: {};
};
export type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LessonPayload, S>;
export type LessonCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LessonCountAggregateInputType | true;
};
export interface LessonDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Lesson'];
        meta: {
            name: 'Lesson';
        };
    };
    findUnique<T extends LessonFindUniqueArgs>(args: Prisma.SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LessonFindFirstArgs>(args?: Prisma.SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LessonFindManyArgs>(args?: Prisma.SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LessonCreateArgs>(args: Prisma.SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LessonCreateManyArgs>(args?: Prisma.SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LessonDeleteArgs>(args: Prisma.SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LessonUpdateArgs>(args: Prisma.SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LessonDeleteManyArgs>(args?: Prisma.SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LessonUpdateManyArgs>(args: Prisma.SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LessonUpsertArgs>(args: Prisma.SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LessonCountArgs>(args?: Prisma.Subset<T, LessonCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LessonCountAggregateOutputType> : number>;
    aggregate<T extends LessonAggregateArgs>(args: Prisma.Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>;
    groupBy<T extends LessonGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LessonGroupByArgs['orderBy'];
    } : {
        orderBy?: LessonGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LessonFieldRefs;
}
export interface Prisma__LessonClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    group<T extends Prisma.GroupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GroupDefaultArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    teacher<T extends Prisma.Lesson$teacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lesson$teacherArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.Lesson$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lesson$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    attendances<T extends Prisma.Lesson$attendancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lesson$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    homework<T extends Prisma.Lesson$homeworkArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lesson$homeworkArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lessonVideos<T extends Prisma.Lesson$lessonVideosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lesson$lessonVideosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ratings<T extends Prisma.Lesson$ratingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lesson$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LessonFieldRefs {
    readonly id: Prisma.FieldRef<"Lesson", 'Int'>;
    readonly groupId: Prisma.FieldRef<"Lesson", 'Int'>;
    readonly userId: Prisma.FieldRef<"Lesson", 'Int'>;
    readonly teacherId: Prisma.FieldRef<"Lesson", 'Int'>;
    readonly title: Prisma.FieldRef<"Lesson", 'String'>;
    readonly lessonStart: Prisma.FieldRef<"Lesson", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"Lesson", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Lesson", 'DateTime'>;
}
export type LessonFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonCreateInput, Prisma.LessonUncheckedCreateInput>;
};
export type LessonCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LessonCreateManyInput | Prisma.LessonCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LessonCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    data: Prisma.LessonCreateManyInput | Prisma.LessonCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LessonIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LessonUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonUpdateInput, Prisma.LessonUncheckedUpdateInput>;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyInput>;
    where?: Prisma.LessonWhereInput;
    limit?: number;
};
export type LessonUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyInput>;
    where?: Prisma.LessonWhereInput;
    limit?: number;
    include?: Prisma.LessonIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LessonUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateInput, Prisma.LessonUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LessonUpdateInput, Prisma.LessonUncheckedUpdateInput>;
};
export type LessonDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where: Prisma.LessonWhereUniqueInput;
};
export type LessonDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
    limit?: number;
};
export type Lesson$teacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
};
export type Lesson$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Lesson$attendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Lesson$homeworkArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Lesson$lessonVideosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Lesson$ratingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where?: Prisma.RatingWhereInput;
    orderBy?: Prisma.RatingOrderByWithRelationInput | Prisma.RatingOrderByWithRelationInput[];
    cursor?: Prisma.RatingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RatingScalarFieldEnum | Prisma.RatingScalarFieldEnum[];
};
export type LessonDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonSelect<ExtArgs> | null;
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    include?: Prisma.LessonInclude<ExtArgs> | null;
};
export {};
