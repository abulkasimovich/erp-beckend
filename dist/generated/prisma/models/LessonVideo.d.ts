import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LessonVideoModel = runtime.Types.Result.DefaultSelection<Prisma.$LessonVideoPayload>;
export type AggregateLessonVideo = {
    _count: LessonVideoCountAggregateOutputType | null;
    _avg: LessonVideoAvgAggregateOutputType | null;
    _sum: LessonVideoSumAggregateOutputType | null;
    _min: LessonVideoMinAggregateOutputType | null;
    _max: LessonVideoMaxAggregateOutputType | null;
};
export type LessonVideoAvgAggregateOutputType = {
    id: number | null;
    lessonId: number | null;
    teacherId: number | null;
    userId: number | null;
};
export type LessonVideoSumAggregateOutputType = {
    id: number | null;
    lessonId: number | null;
    teacherId: number | null;
    userId: number | null;
};
export type LessonVideoMinAggregateOutputType = {
    id: number | null;
    lessonId: number | null;
    teacherId: number | null;
    userId: number | null;
    file: string | null;
    created_at: Date | null;
};
export type LessonVideoMaxAggregateOutputType = {
    id: number | null;
    lessonId: number | null;
    teacherId: number | null;
    userId: number | null;
    file: string | null;
    created_at: Date | null;
};
export type LessonVideoCountAggregateOutputType = {
    id: number;
    lessonId: number;
    teacherId: number;
    userId: number;
    file: number;
    created_at: number;
    _all: number;
};
export type LessonVideoAvgAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
};
export type LessonVideoSumAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
};
export type LessonVideoMinAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
    file?: true;
    created_at?: true;
};
export type LessonVideoMaxAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
    file?: true;
    created_at?: true;
};
export type LessonVideoCountAggregateInputType = {
    id?: true;
    lessonId?: true;
    teacherId?: true;
    userId?: true;
    file?: true;
    created_at?: true;
    _all?: true;
};
export type LessonVideoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonVideoWhereInput;
    orderBy?: Prisma.LessonVideoOrderByWithRelationInput | Prisma.LessonVideoOrderByWithRelationInput[];
    cursor?: Prisma.LessonVideoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LessonVideoCountAggregateInputType;
    _avg?: LessonVideoAvgAggregateInputType;
    _sum?: LessonVideoSumAggregateInputType;
    _min?: LessonVideoMinAggregateInputType;
    _max?: LessonVideoMaxAggregateInputType;
};
export type GetLessonVideoAggregateType<T extends LessonVideoAggregateArgs> = {
    [P in keyof T & keyof AggregateLessonVideo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLessonVideo[P]> : Prisma.GetScalarType<T[P], AggregateLessonVideo[P]>;
};
export type LessonVideoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonVideoWhereInput;
    orderBy?: Prisma.LessonVideoOrderByWithAggregationInput | Prisma.LessonVideoOrderByWithAggregationInput[];
    by: Prisma.LessonVideoScalarFieldEnum[] | Prisma.LessonVideoScalarFieldEnum;
    having?: Prisma.LessonVideoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LessonVideoCountAggregateInputType | true;
    _avg?: LessonVideoAvgAggregateInputType;
    _sum?: LessonVideoSumAggregateInputType;
    _min?: LessonVideoMinAggregateInputType;
    _max?: LessonVideoMaxAggregateInputType;
};
export type LessonVideoGroupByOutputType = {
    id: number;
    lessonId: number;
    teacherId: number | null;
    userId: number | null;
    file: string;
    created_at: Date;
    _count: LessonVideoCountAggregateOutputType | null;
    _avg: LessonVideoAvgAggregateOutputType | null;
    _sum: LessonVideoSumAggregateOutputType | null;
    _min: LessonVideoMinAggregateOutputType | null;
    _max: LessonVideoMaxAggregateOutputType | null;
};
type GetLessonVideoGroupByPayload<T extends LessonVideoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LessonVideoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LessonVideoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LessonVideoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LessonVideoGroupByOutputType[P]>;
}>>;
export type LessonVideoWhereInput = {
    AND?: Prisma.LessonVideoWhereInput | Prisma.LessonVideoWhereInput[];
    OR?: Prisma.LessonVideoWhereInput[];
    NOT?: Prisma.LessonVideoWhereInput | Prisma.LessonVideoWhereInput[];
    id?: Prisma.IntFilter<"LessonVideo"> | number;
    lessonId?: Prisma.IntFilter<"LessonVideo"> | number;
    teacherId?: Prisma.IntNullableFilter<"LessonVideo"> | number | null;
    userId?: Prisma.IntNullableFilter<"LessonVideo"> | number | null;
    file?: Prisma.StringFilter<"LessonVideo"> | string;
    created_at?: Prisma.DateTimeFilter<"LessonVideo"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type LessonVideoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    file?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    lesson?: Prisma.LessonOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type LessonVideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.LessonVideoWhereInput | Prisma.LessonVideoWhereInput[];
    OR?: Prisma.LessonVideoWhereInput[];
    NOT?: Prisma.LessonVideoWhereInput | Prisma.LessonVideoWhereInput[];
    lessonId?: Prisma.IntFilter<"LessonVideo"> | number;
    teacherId?: Prisma.IntNullableFilter<"LessonVideo"> | number | null;
    userId?: Prisma.IntNullableFilter<"LessonVideo"> | number | null;
    file?: Prisma.StringFilter<"LessonVideo"> | string;
    created_at?: Prisma.DateTimeFilter<"LessonVideo"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type LessonVideoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    file?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.LessonVideoCountOrderByAggregateInput;
    _avg?: Prisma.LessonVideoAvgOrderByAggregateInput;
    _max?: Prisma.LessonVideoMaxOrderByAggregateInput;
    _min?: Prisma.LessonVideoMinOrderByAggregateInput;
    _sum?: Prisma.LessonVideoSumOrderByAggregateInput;
};
export type LessonVideoScalarWhereWithAggregatesInput = {
    AND?: Prisma.LessonVideoScalarWhereWithAggregatesInput | Prisma.LessonVideoScalarWhereWithAggregatesInput[];
    OR?: Prisma.LessonVideoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LessonVideoScalarWhereWithAggregatesInput | Prisma.LessonVideoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"LessonVideo"> | number;
    lessonId?: Prisma.IntWithAggregatesFilter<"LessonVideo"> | number;
    teacherId?: Prisma.IntNullableWithAggregatesFilter<"LessonVideo"> | number | null;
    userId?: Prisma.IntNullableWithAggregatesFilter<"LessonVideo"> | number | null;
    file?: Prisma.StringWithAggregatesFilter<"LessonVideo"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"LessonVideo"> | Date | string;
};
export type LessonVideoCreateInput = {
    file: string;
    created_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLessonVideosInput;
    lesson: Prisma.LessonCreateNestedOneWithoutLessonVideosInput;
    user?: Prisma.UserCreateNestedOneWithoutLessonVideosInput;
};
export type LessonVideoUncheckedCreateInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    userId?: number | null;
    file: string;
    created_at?: Date | string;
};
export type LessonVideoUpdateInput = {
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutLessonVideosNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutLessonVideosNestedInput;
    user?: Prisma.UserUpdateOneWithoutLessonVideosNestedInput;
};
export type LessonVideoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonVideoCreateManyInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    userId?: number | null;
    file: string;
    created_at?: Date | string;
};
export type LessonVideoUpdateManyMutationInput = {
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonVideoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonVideoListRelationFilter = {
    every?: Prisma.LessonVideoWhereInput;
    some?: Prisma.LessonVideoWhereInput;
    none?: Prisma.LessonVideoWhereInput;
};
export type LessonVideoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LessonVideoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type LessonVideoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type LessonVideoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type LessonVideoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type LessonVideoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type LessonVideoCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LessonVideoCreateWithoutUserInput, Prisma.LessonVideoUncheckedCreateWithoutUserInput> | Prisma.LessonVideoCreateWithoutUserInput[] | Prisma.LessonVideoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonVideoCreateOrConnectWithoutUserInput | Prisma.LessonVideoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LessonVideoCreateManyUserInputEnvelope;
    connect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
};
export type LessonVideoUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LessonVideoCreateWithoutUserInput, Prisma.LessonVideoUncheckedCreateWithoutUserInput> | Prisma.LessonVideoCreateWithoutUserInput[] | Prisma.LessonVideoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonVideoCreateOrConnectWithoutUserInput | Prisma.LessonVideoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LessonVideoCreateManyUserInputEnvelope;
    connect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
};
export type LessonVideoUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LessonVideoCreateWithoutUserInput, Prisma.LessonVideoUncheckedCreateWithoutUserInput> | Prisma.LessonVideoCreateWithoutUserInput[] | Prisma.LessonVideoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonVideoCreateOrConnectWithoutUserInput | Prisma.LessonVideoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LessonVideoUpsertWithWhereUniqueWithoutUserInput | Prisma.LessonVideoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LessonVideoCreateManyUserInputEnvelope;
    set?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    disconnect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    delete?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    connect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    update?: Prisma.LessonVideoUpdateWithWhereUniqueWithoutUserInput | Prisma.LessonVideoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LessonVideoUpdateManyWithWhereWithoutUserInput | Prisma.LessonVideoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LessonVideoScalarWhereInput | Prisma.LessonVideoScalarWhereInput[];
};
export type LessonVideoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LessonVideoCreateWithoutUserInput, Prisma.LessonVideoUncheckedCreateWithoutUserInput> | Prisma.LessonVideoCreateWithoutUserInput[] | Prisma.LessonVideoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LessonVideoCreateOrConnectWithoutUserInput | Prisma.LessonVideoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LessonVideoUpsertWithWhereUniqueWithoutUserInput | Prisma.LessonVideoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LessonVideoCreateManyUserInputEnvelope;
    set?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    disconnect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    delete?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    connect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    update?: Prisma.LessonVideoUpdateWithWhereUniqueWithoutUserInput | Prisma.LessonVideoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LessonVideoUpdateManyWithWhereWithoutUserInput | Prisma.LessonVideoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LessonVideoScalarWhereInput | Prisma.LessonVideoScalarWhereInput[];
};
export type LessonVideoCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.LessonVideoCreateWithoutTeacherInput, Prisma.LessonVideoUncheckedCreateWithoutTeacherInput> | Prisma.LessonVideoCreateWithoutTeacherInput[] | Prisma.LessonVideoUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonVideoCreateOrConnectWithoutTeacherInput | Prisma.LessonVideoCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.LessonVideoCreateManyTeacherInputEnvelope;
    connect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
};
export type LessonVideoUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.LessonVideoCreateWithoutTeacherInput, Prisma.LessonVideoUncheckedCreateWithoutTeacherInput> | Prisma.LessonVideoCreateWithoutTeacherInput[] | Prisma.LessonVideoUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonVideoCreateOrConnectWithoutTeacherInput | Prisma.LessonVideoCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.LessonVideoCreateManyTeacherInputEnvelope;
    connect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
};
export type LessonVideoUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.LessonVideoCreateWithoutTeacherInput, Prisma.LessonVideoUncheckedCreateWithoutTeacherInput> | Prisma.LessonVideoCreateWithoutTeacherInput[] | Prisma.LessonVideoUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonVideoCreateOrConnectWithoutTeacherInput | Prisma.LessonVideoCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.LessonVideoUpsertWithWhereUniqueWithoutTeacherInput | Prisma.LessonVideoUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.LessonVideoCreateManyTeacherInputEnvelope;
    set?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    disconnect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    delete?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    connect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    update?: Prisma.LessonVideoUpdateWithWhereUniqueWithoutTeacherInput | Prisma.LessonVideoUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.LessonVideoUpdateManyWithWhereWithoutTeacherInput | Prisma.LessonVideoUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.LessonVideoScalarWhereInput | Prisma.LessonVideoScalarWhereInput[];
};
export type LessonVideoUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.LessonVideoCreateWithoutTeacherInput, Prisma.LessonVideoUncheckedCreateWithoutTeacherInput> | Prisma.LessonVideoCreateWithoutTeacherInput[] | Prisma.LessonVideoUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonVideoCreateOrConnectWithoutTeacherInput | Prisma.LessonVideoCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.LessonVideoUpsertWithWhereUniqueWithoutTeacherInput | Prisma.LessonVideoUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.LessonVideoCreateManyTeacherInputEnvelope;
    set?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    disconnect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    delete?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    connect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    update?: Prisma.LessonVideoUpdateWithWhereUniqueWithoutTeacherInput | Prisma.LessonVideoUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.LessonVideoUpdateManyWithWhereWithoutTeacherInput | Prisma.LessonVideoUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.LessonVideoScalarWhereInput | Prisma.LessonVideoScalarWhereInput[];
};
export type LessonVideoCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.LessonVideoCreateWithoutLessonInput, Prisma.LessonVideoUncheckedCreateWithoutLessonInput> | Prisma.LessonVideoCreateWithoutLessonInput[] | Prisma.LessonVideoUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonVideoCreateOrConnectWithoutLessonInput | Prisma.LessonVideoCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.LessonVideoCreateManyLessonInputEnvelope;
    connect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
};
export type LessonVideoUncheckedCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.LessonVideoCreateWithoutLessonInput, Prisma.LessonVideoUncheckedCreateWithoutLessonInput> | Prisma.LessonVideoCreateWithoutLessonInput[] | Prisma.LessonVideoUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonVideoCreateOrConnectWithoutLessonInput | Prisma.LessonVideoCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.LessonVideoCreateManyLessonInputEnvelope;
    connect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
};
export type LessonVideoUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.LessonVideoCreateWithoutLessonInput, Prisma.LessonVideoUncheckedCreateWithoutLessonInput> | Prisma.LessonVideoCreateWithoutLessonInput[] | Prisma.LessonVideoUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonVideoCreateOrConnectWithoutLessonInput | Prisma.LessonVideoCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.LessonVideoUpsertWithWhereUniqueWithoutLessonInput | Prisma.LessonVideoUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.LessonVideoCreateManyLessonInputEnvelope;
    set?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    disconnect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    delete?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    connect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    update?: Prisma.LessonVideoUpdateWithWhereUniqueWithoutLessonInput | Prisma.LessonVideoUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.LessonVideoUpdateManyWithWhereWithoutLessonInput | Prisma.LessonVideoUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.LessonVideoScalarWhereInput | Prisma.LessonVideoScalarWhereInput[];
};
export type LessonVideoUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.LessonVideoCreateWithoutLessonInput, Prisma.LessonVideoUncheckedCreateWithoutLessonInput> | Prisma.LessonVideoCreateWithoutLessonInput[] | Prisma.LessonVideoUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonVideoCreateOrConnectWithoutLessonInput | Prisma.LessonVideoCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.LessonVideoUpsertWithWhereUniqueWithoutLessonInput | Prisma.LessonVideoUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.LessonVideoCreateManyLessonInputEnvelope;
    set?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    disconnect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    delete?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    connect?: Prisma.LessonVideoWhereUniqueInput | Prisma.LessonVideoWhereUniqueInput[];
    update?: Prisma.LessonVideoUpdateWithWhereUniqueWithoutLessonInput | Prisma.LessonVideoUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.LessonVideoUpdateManyWithWhereWithoutLessonInput | Prisma.LessonVideoUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.LessonVideoScalarWhereInput | Prisma.LessonVideoScalarWhereInput[];
};
export type LessonVideoCreateWithoutUserInput = {
    file: string;
    created_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLessonVideosInput;
    lesson: Prisma.LessonCreateNestedOneWithoutLessonVideosInput;
};
export type LessonVideoUncheckedCreateWithoutUserInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    file: string;
    created_at?: Date | string;
};
export type LessonVideoCreateOrConnectWithoutUserInput = {
    where: Prisma.LessonVideoWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonVideoCreateWithoutUserInput, Prisma.LessonVideoUncheckedCreateWithoutUserInput>;
};
export type LessonVideoCreateManyUserInputEnvelope = {
    data: Prisma.LessonVideoCreateManyUserInput | Prisma.LessonVideoCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type LessonVideoUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.LessonVideoWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonVideoUpdateWithoutUserInput, Prisma.LessonVideoUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LessonVideoCreateWithoutUserInput, Prisma.LessonVideoUncheckedCreateWithoutUserInput>;
};
export type LessonVideoUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.LessonVideoWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonVideoUpdateWithoutUserInput, Prisma.LessonVideoUncheckedUpdateWithoutUserInput>;
};
export type LessonVideoUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.LessonVideoScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonVideoUpdateManyMutationInput, Prisma.LessonVideoUncheckedUpdateManyWithoutUserInput>;
};
export type LessonVideoScalarWhereInput = {
    AND?: Prisma.LessonVideoScalarWhereInput | Prisma.LessonVideoScalarWhereInput[];
    OR?: Prisma.LessonVideoScalarWhereInput[];
    NOT?: Prisma.LessonVideoScalarWhereInput | Prisma.LessonVideoScalarWhereInput[];
    id?: Prisma.IntFilter<"LessonVideo"> | number;
    lessonId?: Prisma.IntFilter<"LessonVideo"> | number;
    teacherId?: Prisma.IntNullableFilter<"LessonVideo"> | number | null;
    userId?: Prisma.IntNullableFilter<"LessonVideo"> | number | null;
    file?: Prisma.StringFilter<"LessonVideo"> | string;
    created_at?: Prisma.DateTimeFilter<"LessonVideo"> | Date | string;
};
export type LessonVideoCreateWithoutTeacherInput = {
    file: string;
    created_at?: Date | string;
    lesson: Prisma.LessonCreateNestedOneWithoutLessonVideosInput;
    user?: Prisma.UserCreateNestedOneWithoutLessonVideosInput;
};
export type LessonVideoUncheckedCreateWithoutTeacherInput = {
    id?: number;
    lessonId: number;
    userId?: number | null;
    file: string;
    created_at?: Date | string;
};
export type LessonVideoCreateOrConnectWithoutTeacherInput = {
    where: Prisma.LessonVideoWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonVideoCreateWithoutTeacherInput, Prisma.LessonVideoUncheckedCreateWithoutTeacherInput>;
};
export type LessonVideoCreateManyTeacherInputEnvelope = {
    data: Prisma.LessonVideoCreateManyTeacherInput | Prisma.LessonVideoCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type LessonVideoUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.LessonVideoWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonVideoUpdateWithoutTeacherInput, Prisma.LessonVideoUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.LessonVideoCreateWithoutTeacherInput, Prisma.LessonVideoUncheckedCreateWithoutTeacherInput>;
};
export type LessonVideoUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.LessonVideoWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonVideoUpdateWithoutTeacherInput, Prisma.LessonVideoUncheckedUpdateWithoutTeacherInput>;
};
export type LessonVideoUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.LessonVideoScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonVideoUpdateManyMutationInput, Prisma.LessonVideoUncheckedUpdateManyWithoutTeacherInput>;
};
export type LessonVideoCreateWithoutLessonInput = {
    file: string;
    created_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLessonVideosInput;
    user?: Prisma.UserCreateNestedOneWithoutLessonVideosInput;
};
export type LessonVideoUncheckedCreateWithoutLessonInput = {
    id?: number;
    teacherId?: number | null;
    userId?: number | null;
    file: string;
    created_at?: Date | string;
};
export type LessonVideoCreateOrConnectWithoutLessonInput = {
    where: Prisma.LessonVideoWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonVideoCreateWithoutLessonInput, Prisma.LessonVideoUncheckedCreateWithoutLessonInput>;
};
export type LessonVideoCreateManyLessonInputEnvelope = {
    data: Prisma.LessonVideoCreateManyLessonInput | Prisma.LessonVideoCreateManyLessonInput[];
    skipDuplicates?: boolean;
};
export type LessonVideoUpsertWithWhereUniqueWithoutLessonInput = {
    where: Prisma.LessonVideoWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonVideoUpdateWithoutLessonInput, Prisma.LessonVideoUncheckedUpdateWithoutLessonInput>;
    create: Prisma.XOR<Prisma.LessonVideoCreateWithoutLessonInput, Prisma.LessonVideoUncheckedCreateWithoutLessonInput>;
};
export type LessonVideoUpdateWithWhereUniqueWithoutLessonInput = {
    where: Prisma.LessonVideoWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonVideoUpdateWithoutLessonInput, Prisma.LessonVideoUncheckedUpdateWithoutLessonInput>;
};
export type LessonVideoUpdateManyWithWhereWithoutLessonInput = {
    where: Prisma.LessonVideoScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonVideoUpdateManyMutationInput, Prisma.LessonVideoUncheckedUpdateManyWithoutLessonInput>;
};
export type LessonVideoCreateManyUserInput = {
    id?: number;
    lessonId: number;
    teacherId?: number | null;
    file: string;
    created_at?: Date | string;
};
export type LessonVideoUpdateWithoutUserInput = {
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutLessonVideosNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutLessonVideosNestedInput;
};
export type LessonVideoUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonVideoUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonVideoCreateManyTeacherInput = {
    id?: number;
    lessonId: number;
    userId?: number | null;
    file: string;
    created_at?: Date | string;
};
export type LessonVideoUpdateWithoutTeacherInput = {
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutLessonVideosNestedInput;
    user?: Prisma.UserUpdateOneWithoutLessonVideosNestedInput;
};
export type LessonVideoUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonVideoUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonVideoCreateManyLessonInput = {
    id?: number;
    teacherId?: number | null;
    userId?: number | null;
    file: string;
    created_at?: Date | string;
};
export type LessonVideoUpdateWithoutLessonInput = {
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutLessonVideosNestedInput;
    user?: Prisma.UserUpdateOneWithoutLessonVideosNestedInput;
};
export type LessonVideoUncheckedUpdateWithoutLessonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonVideoUncheckedUpdateManyWithoutLessonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonVideoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    file?: boolean;
    created_at?: boolean;
    teacher?: boolean | Prisma.LessonVideo$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.LessonVideo$userArgs<ExtArgs>;
}, ExtArgs["result"]["lessonVideo"]>;
export type LessonVideoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    file?: boolean;
    created_at?: boolean;
    teacher?: boolean | Prisma.LessonVideo$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.LessonVideo$userArgs<ExtArgs>;
}, ExtArgs["result"]["lessonVideo"]>;
export type LessonVideoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    file?: boolean;
    created_at?: boolean;
    teacher?: boolean | Prisma.LessonVideo$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.LessonVideo$userArgs<ExtArgs>;
}, ExtArgs["result"]["lessonVideo"]>;
export type LessonVideoSelectScalar = {
    id?: boolean;
    lessonId?: boolean;
    teacherId?: boolean;
    userId?: boolean;
    file?: boolean;
    created_at?: boolean;
};
export type LessonVideoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lessonId" | "teacherId" | "userId" | "file" | "created_at", ExtArgs["result"]["lessonVideo"]>;
export type LessonVideoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.LessonVideo$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.LessonVideo$userArgs<ExtArgs>;
};
export type LessonVideoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.LessonVideo$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.LessonVideo$userArgs<ExtArgs>;
};
export type LessonVideoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.LessonVideo$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.LessonVideo$userArgs<ExtArgs>;
};
export type $LessonVideoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LessonVideo";
    objects: {
        teacher: Prisma.$TeacherPayload<ExtArgs> | null;
        lesson: Prisma.$LessonPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        lessonId: number;
        teacherId: number | null;
        userId: number | null;
        file: string;
        created_at: Date;
    }, ExtArgs["result"]["lessonVideo"]>;
    composites: {};
};
export type LessonVideoGetPayload<S extends boolean | null | undefined | LessonVideoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload, S>;
export type LessonVideoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LessonVideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LessonVideoCountAggregateInputType | true;
};
export interface LessonVideoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LessonVideo'];
        meta: {
            name: 'LessonVideo';
        };
    };
    findUnique<T extends LessonVideoFindUniqueArgs>(args: Prisma.SelectSubset<T, LessonVideoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LessonVideoClient<runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LessonVideoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LessonVideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonVideoClient<runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LessonVideoFindFirstArgs>(args?: Prisma.SelectSubset<T, LessonVideoFindFirstArgs<ExtArgs>>): Prisma.Prisma__LessonVideoClient<runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LessonVideoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LessonVideoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonVideoClient<runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LessonVideoFindManyArgs>(args?: Prisma.SelectSubset<T, LessonVideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LessonVideoCreateArgs>(args: Prisma.SelectSubset<T, LessonVideoCreateArgs<ExtArgs>>): Prisma.Prisma__LessonVideoClient<runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LessonVideoCreateManyArgs>(args?: Prisma.SelectSubset<T, LessonVideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LessonVideoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LessonVideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LessonVideoDeleteArgs>(args: Prisma.SelectSubset<T, LessonVideoDeleteArgs<ExtArgs>>): Prisma.Prisma__LessonVideoClient<runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LessonVideoUpdateArgs>(args: Prisma.SelectSubset<T, LessonVideoUpdateArgs<ExtArgs>>): Prisma.Prisma__LessonVideoClient<runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LessonVideoDeleteManyArgs>(args?: Prisma.SelectSubset<T, LessonVideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LessonVideoUpdateManyArgs>(args: Prisma.SelectSubset<T, LessonVideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LessonVideoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LessonVideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LessonVideoUpsertArgs>(args: Prisma.SelectSubset<T, LessonVideoUpsertArgs<ExtArgs>>): Prisma.Prisma__LessonVideoClient<runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LessonVideoCountArgs>(args?: Prisma.Subset<T, LessonVideoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LessonVideoCountAggregateOutputType> : number>;
    aggregate<T extends LessonVideoAggregateArgs>(args: Prisma.Subset<T, LessonVideoAggregateArgs>): Prisma.PrismaPromise<GetLessonVideoAggregateType<T>>;
    groupBy<T extends LessonVideoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LessonVideoGroupByArgs['orderBy'];
    } : {
        orderBy?: LessonVideoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LessonVideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LessonVideoFieldRefs;
}
export interface Prisma__LessonVideoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    teacher<T extends Prisma.LessonVideo$teacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonVideo$teacherArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lesson<T extends Prisma.LessonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonDefaultArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.LessonVideo$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonVideo$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LessonVideoFieldRefs {
    readonly id: Prisma.FieldRef<"LessonVideo", 'Int'>;
    readonly lessonId: Prisma.FieldRef<"LessonVideo", 'Int'>;
    readonly teacherId: Prisma.FieldRef<"LessonVideo", 'Int'>;
    readonly userId: Prisma.FieldRef<"LessonVideo", 'Int'>;
    readonly file: Prisma.FieldRef<"LessonVideo", 'String'>;
    readonly created_at: Prisma.FieldRef<"LessonVideo", 'DateTime'>;
}
export type LessonVideoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonVideoSelect<ExtArgs> | null;
    omit?: Prisma.LessonVideoOmit<ExtArgs> | null;
    include?: Prisma.LessonVideoInclude<ExtArgs> | null;
    where: Prisma.LessonVideoWhereUniqueInput;
};
export type LessonVideoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonVideoSelect<ExtArgs> | null;
    omit?: Prisma.LessonVideoOmit<ExtArgs> | null;
    include?: Prisma.LessonVideoInclude<ExtArgs> | null;
    where: Prisma.LessonVideoWhereUniqueInput;
};
export type LessonVideoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonVideoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonVideoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LessonVideoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonVideoSelect<ExtArgs> | null;
    omit?: Prisma.LessonVideoOmit<ExtArgs> | null;
    include?: Prisma.LessonVideoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonVideoCreateInput, Prisma.LessonVideoUncheckedCreateInput>;
};
export type LessonVideoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LessonVideoCreateManyInput | Prisma.LessonVideoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LessonVideoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonVideoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonVideoOmit<ExtArgs> | null;
    data: Prisma.LessonVideoCreateManyInput | Prisma.LessonVideoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LessonVideoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LessonVideoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonVideoSelect<ExtArgs> | null;
    omit?: Prisma.LessonVideoOmit<ExtArgs> | null;
    include?: Prisma.LessonVideoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonVideoUpdateInput, Prisma.LessonVideoUncheckedUpdateInput>;
    where: Prisma.LessonVideoWhereUniqueInput;
};
export type LessonVideoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LessonVideoUpdateManyMutationInput, Prisma.LessonVideoUncheckedUpdateManyInput>;
    where?: Prisma.LessonVideoWhereInput;
    limit?: number;
};
export type LessonVideoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonVideoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonVideoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonVideoUpdateManyMutationInput, Prisma.LessonVideoUncheckedUpdateManyInput>;
    where?: Prisma.LessonVideoWhereInput;
    limit?: number;
    include?: Prisma.LessonVideoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LessonVideoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonVideoSelect<ExtArgs> | null;
    omit?: Prisma.LessonVideoOmit<ExtArgs> | null;
    include?: Prisma.LessonVideoInclude<ExtArgs> | null;
    where: Prisma.LessonVideoWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonVideoCreateInput, Prisma.LessonVideoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LessonVideoUpdateInput, Prisma.LessonVideoUncheckedUpdateInput>;
};
export type LessonVideoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonVideoSelect<ExtArgs> | null;
    omit?: Prisma.LessonVideoOmit<ExtArgs> | null;
    include?: Prisma.LessonVideoInclude<ExtArgs> | null;
    where: Prisma.LessonVideoWhereUniqueInput;
};
export type LessonVideoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonVideoWhereInput;
    limit?: number;
};
export type LessonVideo$teacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
};
export type LessonVideo$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type LessonVideoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonVideoSelect<ExtArgs> | null;
    omit?: Prisma.LessonVideoOmit<ExtArgs> | null;
    include?: Prisma.LessonVideoInclude<ExtArgs> | null;
};
export {};
