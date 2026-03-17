import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RatingModel = runtime.Types.Result.DefaultSelection<Prisma.$RatingPayload>;
export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null;
    _avg: RatingAvgAggregateOutputType | null;
    _sum: RatingSumAggregateOutputType | null;
    _min: RatingMinAggregateOutputType | null;
    _max: RatingMaxAggregateOutputType | null;
};
export type RatingAvgAggregateOutputType = {
    id: number | null;
    teacherId: number | null;
    lessonId: number | null;
    score: number | null;
};
export type RatingSumAggregateOutputType = {
    id: number | null;
    teacherId: number | null;
    lessonId: number | null;
    score: number | null;
};
export type RatingMinAggregateOutputType = {
    id: number | null;
    teacherId: number | null;
    lessonId: number | null;
    score: number | null;
    created_at: Date | null;
};
export type RatingMaxAggregateOutputType = {
    id: number | null;
    teacherId: number | null;
    lessonId: number | null;
    score: number | null;
    created_at: Date | null;
};
export type RatingCountAggregateOutputType = {
    id: number;
    teacherId: number;
    lessonId: number;
    score: number;
    created_at: number;
    _all: number;
};
export type RatingAvgAggregateInputType = {
    id?: true;
    teacherId?: true;
    lessonId?: true;
    score?: true;
};
export type RatingSumAggregateInputType = {
    id?: true;
    teacherId?: true;
    lessonId?: true;
    score?: true;
};
export type RatingMinAggregateInputType = {
    id?: true;
    teacherId?: true;
    lessonId?: true;
    score?: true;
    created_at?: true;
};
export type RatingMaxAggregateInputType = {
    id?: true;
    teacherId?: true;
    lessonId?: true;
    score?: true;
    created_at?: true;
};
export type RatingCountAggregateInputType = {
    id?: true;
    teacherId?: true;
    lessonId?: true;
    score?: true;
    created_at?: true;
    _all?: true;
};
export type RatingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatingWhereInput;
    orderBy?: Prisma.RatingOrderByWithRelationInput | Prisma.RatingOrderByWithRelationInput[];
    cursor?: Prisma.RatingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RatingCountAggregateInputType;
    _avg?: RatingAvgAggregateInputType;
    _sum?: RatingSumAggregateInputType;
    _min?: RatingMinAggregateInputType;
    _max?: RatingMaxAggregateInputType;
};
export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
    [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRating[P]> : Prisma.GetScalarType<T[P], AggregateRating[P]>;
};
export type RatingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatingWhereInput;
    orderBy?: Prisma.RatingOrderByWithAggregationInput | Prisma.RatingOrderByWithAggregationInput[];
    by: Prisma.RatingScalarFieldEnum[] | Prisma.RatingScalarFieldEnum;
    having?: Prisma.RatingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RatingCountAggregateInputType | true;
    _avg?: RatingAvgAggregateInputType;
    _sum?: RatingSumAggregateInputType;
    _min?: RatingMinAggregateInputType;
    _max?: RatingMaxAggregateInputType;
};
export type RatingGroupByOutputType = {
    id: number;
    teacherId: number;
    lessonId: number;
    score: number;
    created_at: Date;
    _count: RatingCountAggregateOutputType | null;
    _avg: RatingAvgAggregateOutputType | null;
    _sum: RatingSumAggregateOutputType | null;
    _min: RatingMinAggregateOutputType | null;
    _max: RatingMaxAggregateOutputType | null;
};
type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RatingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RatingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RatingGroupByOutputType[P]>;
}>>;
export type RatingWhereInput = {
    AND?: Prisma.RatingWhereInput | Prisma.RatingWhereInput[];
    OR?: Prisma.RatingWhereInput[];
    NOT?: Prisma.RatingWhereInput | Prisma.RatingWhereInput[];
    id?: Prisma.IntFilter<"Rating"> | number;
    teacherId?: Prisma.IntFilter<"Rating"> | number;
    lessonId?: Prisma.IntFilter<"Rating"> | number;
    score?: Prisma.IntFilter<"Rating"> | number;
    created_at?: Prisma.DateTimeFilter<"Rating"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
};
export type RatingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    lesson?: Prisma.LessonOrderByWithRelationInput;
};
export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.RatingWhereInput | Prisma.RatingWhereInput[];
    OR?: Prisma.RatingWhereInput[];
    NOT?: Prisma.RatingWhereInput | Prisma.RatingWhereInput[];
    teacherId?: Prisma.IntFilter<"Rating"> | number;
    lessonId?: Prisma.IntFilter<"Rating"> | number;
    score?: Prisma.IntFilter<"Rating"> | number;
    created_at?: Prisma.DateTimeFilter<"Rating"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
}, "id">;
export type RatingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.RatingCountOrderByAggregateInput;
    _avg?: Prisma.RatingAvgOrderByAggregateInput;
    _max?: Prisma.RatingMaxOrderByAggregateInput;
    _min?: Prisma.RatingMinOrderByAggregateInput;
    _sum?: Prisma.RatingSumOrderByAggregateInput;
};
export type RatingScalarWhereWithAggregatesInput = {
    AND?: Prisma.RatingScalarWhereWithAggregatesInput | Prisma.RatingScalarWhereWithAggregatesInput[];
    OR?: Prisma.RatingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RatingScalarWhereWithAggregatesInput | Prisma.RatingScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Rating"> | number;
    teacherId?: Prisma.IntWithAggregatesFilter<"Rating"> | number;
    lessonId?: Prisma.IntWithAggregatesFilter<"Rating"> | number;
    score?: Prisma.IntWithAggregatesFilter<"Rating"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Rating"> | Date | string;
};
export type RatingCreateInput = {
    score: number;
    created_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutRatingsInput;
    lesson: Prisma.LessonCreateNestedOneWithoutRatingsInput;
};
export type RatingUncheckedCreateInput = {
    id?: number;
    teacherId: number;
    lessonId: number;
    score: number;
    created_at?: Date | string;
};
export type RatingUpdateInput = {
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutRatingsNestedInput;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutRatingsNestedInput;
};
export type RatingUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingCreateManyInput = {
    id?: number;
    teacherId: number;
    lessonId: number;
    score: number;
    created_at?: Date | string;
};
export type RatingUpdateManyMutationInput = {
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingListRelationFilter = {
    every?: Prisma.RatingWhereInput;
    some?: Prisma.RatingWhereInput;
    none?: Prisma.RatingWhereInput;
};
export type RatingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RatingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type RatingAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type RatingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type RatingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type RatingSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type RatingCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutTeacherInput, Prisma.RatingUncheckedCreateWithoutTeacherInput> | Prisma.RatingCreateWithoutTeacherInput[] | Prisma.RatingUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutTeacherInput | Prisma.RatingCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.RatingCreateManyTeacherInputEnvelope;
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
};
export type RatingUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutTeacherInput, Prisma.RatingUncheckedCreateWithoutTeacherInput> | Prisma.RatingCreateWithoutTeacherInput[] | Prisma.RatingUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutTeacherInput | Prisma.RatingCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.RatingCreateManyTeacherInputEnvelope;
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
};
export type RatingUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutTeacherInput, Prisma.RatingUncheckedCreateWithoutTeacherInput> | Prisma.RatingCreateWithoutTeacherInput[] | Prisma.RatingUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutTeacherInput | Prisma.RatingCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.RatingUpsertWithWhereUniqueWithoutTeacherInput | Prisma.RatingUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.RatingCreateManyTeacherInputEnvelope;
    set?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    disconnect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    delete?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    update?: Prisma.RatingUpdateWithWhereUniqueWithoutTeacherInput | Prisma.RatingUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.RatingUpdateManyWithWhereWithoutTeacherInput | Prisma.RatingUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
};
export type RatingUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutTeacherInput, Prisma.RatingUncheckedCreateWithoutTeacherInput> | Prisma.RatingCreateWithoutTeacherInput[] | Prisma.RatingUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutTeacherInput | Prisma.RatingCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.RatingUpsertWithWhereUniqueWithoutTeacherInput | Prisma.RatingUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.RatingCreateManyTeacherInputEnvelope;
    set?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    disconnect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    delete?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    update?: Prisma.RatingUpdateWithWhereUniqueWithoutTeacherInput | Prisma.RatingUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.RatingUpdateManyWithWhereWithoutTeacherInput | Prisma.RatingUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
};
export type RatingCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutLessonInput, Prisma.RatingUncheckedCreateWithoutLessonInput> | Prisma.RatingCreateWithoutLessonInput[] | Prisma.RatingUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutLessonInput | Prisma.RatingCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.RatingCreateManyLessonInputEnvelope;
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
};
export type RatingUncheckedCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutLessonInput, Prisma.RatingUncheckedCreateWithoutLessonInput> | Prisma.RatingCreateWithoutLessonInput[] | Prisma.RatingUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutLessonInput | Prisma.RatingCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.RatingCreateManyLessonInputEnvelope;
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
};
export type RatingUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutLessonInput, Prisma.RatingUncheckedCreateWithoutLessonInput> | Prisma.RatingCreateWithoutLessonInput[] | Prisma.RatingUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutLessonInput | Prisma.RatingCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.RatingUpsertWithWhereUniqueWithoutLessonInput | Prisma.RatingUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.RatingCreateManyLessonInputEnvelope;
    set?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    disconnect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    delete?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    update?: Prisma.RatingUpdateWithWhereUniqueWithoutLessonInput | Prisma.RatingUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.RatingUpdateManyWithWhereWithoutLessonInput | Prisma.RatingUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
};
export type RatingUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutLessonInput, Prisma.RatingUncheckedCreateWithoutLessonInput> | Prisma.RatingCreateWithoutLessonInput[] | Prisma.RatingUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutLessonInput | Prisma.RatingCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.RatingUpsertWithWhereUniqueWithoutLessonInput | Prisma.RatingUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.RatingCreateManyLessonInputEnvelope;
    set?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    disconnect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    delete?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    update?: Prisma.RatingUpdateWithWhereUniqueWithoutLessonInput | Prisma.RatingUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.RatingUpdateManyWithWhereWithoutLessonInput | Prisma.RatingUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
};
export type RatingCreateWithoutTeacherInput = {
    score: number;
    created_at?: Date | string;
    lesson: Prisma.LessonCreateNestedOneWithoutRatingsInput;
};
export type RatingUncheckedCreateWithoutTeacherInput = {
    id?: number;
    lessonId: number;
    score: number;
    created_at?: Date | string;
};
export type RatingCreateOrConnectWithoutTeacherInput = {
    where: Prisma.RatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.RatingCreateWithoutTeacherInput, Prisma.RatingUncheckedCreateWithoutTeacherInput>;
};
export type RatingCreateManyTeacherInputEnvelope = {
    data: Prisma.RatingCreateManyTeacherInput | Prisma.RatingCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type RatingUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.RatingWhereUniqueInput;
    update: Prisma.XOR<Prisma.RatingUpdateWithoutTeacherInput, Prisma.RatingUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.RatingCreateWithoutTeacherInput, Prisma.RatingUncheckedCreateWithoutTeacherInput>;
};
export type RatingUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.RatingWhereUniqueInput;
    data: Prisma.XOR<Prisma.RatingUpdateWithoutTeacherInput, Prisma.RatingUncheckedUpdateWithoutTeacherInput>;
};
export type RatingUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.RatingScalarWhereInput;
    data: Prisma.XOR<Prisma.RatingUpdateManyMutationInput, Prisma.RatingUncheckedUpdateManyWithoutTeacherInput>;
};
export type RatingScalarWhereInput = {
    AND?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
    OR?: Prisma.RatingScalarWhereInput[];
    NOT?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
    id?: Prisma.IntFilter<"Rating"> | number;
    teacherId?: Prisma.IntFilter<"Rating"> | number;
    lessonId?: Prisma.IntFilter<"Rating"> | number;
    score?: Prisma.IntFilter<"Rating"> | number;
    created_at?: Prisma.DateTimeFilter<"Rating"> | Date | string;
};
export type RatingCreateWithoutLessonInput = {
    score: number;
    created_at?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutRatingsInput;
};
export type RatingUncheckedCreateWithoutLessonInput = {
    id?: number;
    teacherId: number;
    score: number;
    created_at?: Date | string;
};
export type RatingCreateOrConnectWithoutLessonInput = {
    where: Prisma.RatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.RatingCreateWithoutLessonInput, Prisma.RatingUncheckedCreateWithoutLessonInput>;
};
export type RatingCreateManyLessonInputEnvelope = {
    data: Prisma.RatingCreateManyLessonInput | Prisma.RatingCreateManyLessonInput[];
    skipDuplicates?: boolean;
};
export type RatingUpsertWithWhereUniqueWithoutLessonInput = {
    where: Prisma.RatingWhereUniqueInput;
    update: Prisma.XOR<Prisma.RatingUpdateWithoutLessonInput, Prisma.RatingUncheckedUpdateWithoutLessonInput>;
    create: Prisma.XOR<Prisma.RatingCreateWithoutLessonInput, Prisma.RatingUncheckedCreateWithoutLessonInput>;
};
export type RatingUpdateWithWhereUniqueWithoutLessonInput = {
    where: Prisma.RatingWhereUniqueInput;
    data: Prisma.XOR<Prisma.RatingUpdateWithoutLessonInput, Prisma.RatingUncheckedUpdateWithoutLessonInput>;
};
export type RatingUpdateManyWithWhereWithoutLessonInput = {
    where: Prisma.RatingScalarWhereInput;
    data: Prisma.XOR<Prisma.RatingUpdateManyMutationInput, Prisma.RatingUncheckedUpdateManyWithoutLessonInput>;
};
export type RatingCreateManyTeacherInput = {
    id?: number;
    lessonId: number;
    score: number;
    created_at?: Date | string;
};
export type RatingUpdateWithoutTeacherInput = {
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutRatingsNestedInput;
};
export type RatingUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingCreateManyLessonInput = {
    id?: number;
    teacherId: number;
    score: number;
    created_at?: Date | string;
};
export type RatingUpdateWithoutLessonInput = {
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutRatingsNestedInput;
};
export type RatingUncheckedUpdateWithoutLessonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingUncheckedUpdateManyWithoutLessonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacherId?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    lessonId?: boolean;
    score?: boolean;
    created_at?: boolean;
    teacher?: boolean | Prisma.Rating$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rating"]>;
export type RatingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    lessonId?: boolean;
    score?: boolean;
    created_at?: boolean;
    teacher?: boolean | Prisma.Rating$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rating"]>;
export type RatingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    lessonId?: boolean;
    score?: boolean;
    created_at?: boolean;
    teacher?: boolean | Prisma.Rating$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rating"]>;
export type RatingSelectScalar = {
    id?: boolean;
    teacherId?: boolean;
    lessonId?: boolean;
    score?: boolean;
    created_at?: boolean;
};
export type RatingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "teacherId" | "lessonId" | "score" | "created_at", ExtArgs["result"]["rating"]>;
export type RatingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.Rating$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type RatingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.Rating$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type RatingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.Rating$teacherArgs<ExtArgs>;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
};
export type $RatingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Rating";
    objects: {
        teacher: Prisma.$TeacherPayload<ExtArgs> | null;
        lesson: Prisma.$LessonPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        teacherId: number;
        lessonId: number;
        score: number;
        created_at: Date;
    }, ExtArgs["result"]["rating"]>;
    composites: {};
};
export type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RatingPayload, S>;
export type RatingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RatingCountAggregateInputType | true;
};
export interface RatingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Rating'];
        meta: {
            name: 'Rating';
        };
    };
    findUnique<T extends RatingFindUniqueArgs>(args: Prisma.SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RatingFindFirstArgs>(args?: Prisma.SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RatingFindManyArgs>(args?: Prisma.SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RatingCreateArgs>(args: Prisma.SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RatingCreateManyArgs>(args?: Prisma.SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RatingDeleteArgs>(args: Prisma.SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RatingUpdateArgs>(args: Prisma.SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RatingDeleteManyArgs>(args?: Prisma.SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RatingUpdateManyArgs>(args: Prisma.SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RatingUpsertArgs>(args: Prisma.SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RatingCountArgs>(args?: Prisma.Subset<T, RatingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RatingCountAggregateOutputType> : number>;
    aggregate<T extends RatingAggregateArgs>(args: Prisma.Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>;
    groupBy<T extends RatingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RatingGroupByArgs['orderBy'];
    } : {
        orderBy?: RatingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RatingFieldRefs;
}
export interface Prisma__RatingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    teacher<T extends Prisma.Rating$teacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Rating$teacherArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lesson<T extends Prisma.LessonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonDefaultArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RatingFieldRefs {
    readonly id: Prisma.FieldRef<"Rating", 'Int'>;
    readonly teacherId: Prisma.FieldRef<"Rating", 'Int'>;
    readonly lessonId: Prisma.FieldRef<"Rating", 'Int'>;
    readonly score: Prisma.FieldRef<"Rating", 'Int'>;
    readonly created_at: Prisma.FieldRef<"Rating", 'DateTime'>;
}
export type RatingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where: Prisma.RatingWhereUniqueInput;
};
export type RatingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where: Prisma.RatingWhereUniqueInput;
};
export type RatingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RatingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RatingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RatingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RatingCreateInput, Prisma.RatingUncheckedCreateInput>;
};
export type RatingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RatingCreateManyInput | Prisma.RatingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RatingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    data: Prisma.RatingCreateManyInput | Prisma.RatingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RatingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RatingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RatingUpdateInput, Prisma.RatingUncheckedUpdateInput>;
    where: Prisma.RatingWhereUniqueInput;
};
export type RatingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RatingUpdateManyMutationInput, Prisma.RatingUncheckedUpdateManyInput>;
    where?: Prisma.RatingWhereInput;
    limit?: number;
};
export type RatingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RatingUpdateManyMutationInput, Prisma.RatingUncheckedUpdateManyInput>;
    where?: Prisma.RatingWhereInput;
    limit?: number;
    include?: Prisma.RatingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RatingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where: Prisma.RatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.RatingCreateInput, Prisma.RatingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RatingUpdateInput, Prisma.RatingUncheckedUpdateInput>;
};
export type RatingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where: Prisma.RatingWhereUniqueInput;
};
export type RatingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatingWhereInput;
    limit?: number;
};
export type Rating$teacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
};
export type RatingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
};
export {};
