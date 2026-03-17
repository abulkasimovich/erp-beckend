import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HomeworkResponseModel = runtime.Types.Result.DefaultSelection<Prisma.$HomeworkResponsePayload>;
export type AggregateHomeworkResponse = {
    _count: HomeworkResponseCountAggregateOutputType | null;
    _avg: HomeworkResponseAvgAggregateOutputType | null;
    _sum: HomeworkResponseSumAggregateOutputType | null;
    _min: HomeworkResponseMinAggregateOutputType | null;
    _max: HomeworkResponseMaxAggregateOutputType | null;
};
export type HomeworkResponseAvgAggregateOutputType = {
    id: number | null;
    homeworkId: number | null;
    studentId: number | null;
};
export type HomeworkResponseSumAggregateOutputType = {
    id: number | null;
    homeworkId: number | null;
    studentId: number | null;
};
export type HomeworkResponseMinAggregateOutputType = {
    id: number | null;
    homeworkId: number | null;
    studentId: number | null;
    title: string | null;
    file: string | null;
    status: $Enums.HomeworkStatusStudent | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type HomeworkResponseMaxAggregateOutputType = {
    id: number | null;
    homeworkId: number | null;
    studentId: number | null;
    title: string | null;
    file: string | null;
    status: $Enums.HomeworkStatusStudent | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type HomeworkResponseCountAggregateOutputType = {
    id: number;
    homeworkId: number;
    studentId: number;
    title: number;
    file: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type HomeworkResponseAvgAggregateInputType = {
    id?: true;
    homeworkId?: true;
    studentId?: true;
};
export type HomeworkResponseSumAggregateInputType = {
    id?: true;
    homeworkId?: true;
    studentId?: true;
};
export type HomeworkResponseMinAggregateInputType = {
    id?: true;
    homeworkId?: true;
    studentId?: true;
    title?: true;
    file?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type HomeworkResponseMaxAggregateInputType = {
    id?: true;
    homeworkId?: true;
    studentId?: true;
    title?: true;
    file?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type HomeworkResponseCountAggregateInputType = {
    id?: true;
    homeworkId?: true;
    studentId?: true;
    title?: true;
    file?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type HomeworkResponseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkResponseWhereInput;
    orderBy?: Prisma.HomeworkResponseOrderByWithRelationInput | Prisma.HomeworkResponseOrderByWithRelationInput[];
    cursor?: Prisma.HomeworkResponseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HomeworkResponseCountAggregateInputType;
    _avg?: HomeworkResponseAvgAggregateInputType;
    _sum?: HomeworkResponseSumAggregateInputType;
    _min?: HomeworkResponseMinAggregateInputType;
    _max?: HomeworkResponseMaxAggregateInputType;
};
export type GetHomeworkResponseAggregateType<T extends HomeworkResponseAggregateArgs> = {
    [P in keyof T & keyof AggregateHomeworkResponse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHomeworkResponse[P]> : Prisma.GetScalarType<T[P], AggregateHomeworkResponse[P]>;
};
export type HomeworkResponseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkResponseWhereInput;
    orderBy?: Prisma.HomeworkResponseOrderByWithAggregationInput | Prisma.HomeworkResponseOrderByWithAggregationInput[];
    by: Prisma.HomeworkResponseScalarFieldEnum[] | Prisma.HomeworkResponseScalarFieldEnum;
    having?: Prisma.HomeworkResponseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HomeworkResponseCountAggregateInputType | true;
    _avg?: HomeworkResponseAvgAggregateInputType;
    _sum?: HomeworkResponseSumAggregateInputType;
    _min?: HomeworkResponseMinAggregateInputType;
    _max?: HomeworkResponseMaxAggregateInputType;
};
export type HomeworkResponseGroupByOutputType = {
    id: number;
    homeworkId: number;
    studentId: number;
    title: string;
    file: string | null;
    status: $Enums.HomeworkStatusStudent;
    created_at: Date;
    updated_at: Date;
    _count: HomeworkResponseCountAggregateOutputType | null;
    _avg: HomeworkResponseAvgAggregateOutputType | null;
    _sum: HomeworkResponseSumAggregateOutputType | null;
    _min: HomeworkResponseMinAggregateOutputType | null;
    _max: HomeworkResponseMaxAggregateOutputType | null;
};
type GetHomeworkResponseGroupByPayload<T extends HomeworkResponseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HomeworkResponseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HomeworkResponseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HomeworkResponseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HomeworkResponseGroupByOutputType[P]>;
}>>;
export type HomeworkResponseWhereInput = {
    AND?: Prisma.HomeworkResponseWhereInput | Prisma.HomeworkResponseWhereInput[];
    OR?: Prisma.HomeworkResponseWhereInput[];
    NOT?: Prisma.HomeworkResponseWhereInput | Prisma.HomeworkResponseWhereInput[];
    id?: Prisma.IntFilter<"HomeworkResponse"> | number;
    homeworkId?: Prisma.IntFilter<"HomeworkResponse"> | number;
    studentId?: Prisma.IntFilter<"HomeworkResponse"> | number;
    title?: Prisma.StringFilter<"HomeworkResponse"> | string;
    file?: Prisma.StringNullableFilter<"HomeworkResponse"> | string | null;
    status?: Prisma.EnumHomeworkStatusStudentFilter<"HomeworkResponse"> | $Enums.HomeworkStatusStudent;
    created_at?: Prisma.DateTimeFilter<"HomeworkResponse"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"HomeworkResponse"> | Date | string;
    homework?: Prisma.XOR<Prisma.HomeworkScalarRelationFilter, Prisma.HomeworkWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
};
export type HomeworkResponseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    homeworkId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    homework?: Prisma.HomeworkOrderByWithRelationInput;
    student?: Prisma.StudentOrderByWithRelationInput;
};
export type HomeworkResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.HomeworkResponseWhereInput | Prisma.HomeworkResponseWhereInput[];
    OR?: Prisma.HomeworkResponseWhereInput[];
    NOT?: Prisma.HomeworkResponseWhereInput | Prisma.HomeworkResponseWhereInput[];
    homeworkId?: Prisma.IntFilter<"HomeworkResponse"> | number;
    studentId?: Prisma.IntFilter<"HomeworkResponse"> | number;
    title?: Prisma.StringFilter<"HomeworkResponse"> | string;
    file?: Prisma.StringNullableFilter<"HomeworkResponse"> | string | null;
    status?: Prisma.EnumHomeworkStatusStudentFilter<"HomeworkResponse"> | $Enums.HomeworkStatusStudent;
    created_at?: Prisma.DateTimeFilter<"HomeworkResponse"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"HomeworkResponse"> | Date | string;
    homework?: Prisma.XOR<Prisma.HomeworkScalarRelationFilter, Prisma.HomeworkWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
}, "id">;
export type HomeworkResponseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    homeworkId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.HomeworkResponseCountOrderByAggregateInput;
    _avg?: Prisma.HomeworkResponseAvgOrderByAggregateInput;
    _max?: Prisma.HomeworkResponseMaxOrderByAggregateInput;
    _min?: Prisma.HomeworkResponseMinOrderByAggregateInput;
    _sum?: Prisma.HomeworkResponseSumOrderByAggregateInput;
};
export type HomeworkResponseScalarWhereWithAggregatesInput = {
    AND?: Prisma.HomeworkResponseScalarWhereWithAggregatesInput | Prisma.HomeworkResponseScalarWhereWithAggregatesInput[];
    OR?: Prisma.HomeworkResponseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HomeworkResponseScalarWhereWithAggregatesInput | Prisma.HomeworkResponseScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"HomeworkResponse"> | number;
    homeworkId?: Prisma.IntWithAggregatesFilter<"HomeworkResponse"> | number;
    studentId?: Prisma.IntWithAggregatesFilter<"HomeworkResponse"> | number;
    title?: Prisma.StringWithAggregatesFilter<"HomeworkResponse"> | string;
    file?: Prisma.StringNullableWithAggregatesFilter<"HomeworkResponse"> | string | null;
    status?: Prisma.EnumHomeworkStatusStudentWithAggregatesFilter<"HomeworkResponse"> | $Enums.HomeworkStatusStudent;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"HomeworkResponse"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"HomeworkResponse"> | Date | string;
};
export type HomeworkResponseCreateInput = {
    title: string;
    file?: string | null;
    status: $Enums.HomeworkStatusStudent;
    created_at?: Date | string;
    updated_at?: Date | string;
    homework: Prisma.HomeworkCreateNestedOneWithoutHomeworkResponsesInput;
    student: Prisma.StudentCreateNestedOneWithoutHomeworkResponsesInput;
};
export type HomeworkResponseUncheckedCreateInput = {
    id?: number;
    homeworkId: number;
    studentId: number;
    title: string;
    file?: string | null;
    status: $Enums.HomeworkStatusStudent;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResponseUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHomeworkStatusStudentFieldUpdateOperationsInput | $Enums.HomeworkStatusStudent;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homework?: Prisma.HomeworkUpdateOneRequiredWithoutHomeworkResponsesNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutHomeworkResponsesNestedInput;
};
export type HomeworkResponseUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    homeworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHomeworkStatusStudentFieldUpdateOperationsInput | $Enums.HomeworkStatusStudent;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResponseCreateManyInput = {
    id?: number;
    homeworkId: number;
    studentId: number;
    title: string;
    file?: string | null;
    status: $Enums.HomeworkStatusStudent;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResponseUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHomeworkStatusStudentFieldUpdateOperationsInput | $Enums.HomeworkStatusStudent;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResponseUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    homeworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHomeworkStatusStudentFieldUpdateOperationsInput | $Enums.HomeworkStatusStudent;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResponseListRelationFilter = {
    every?: Prisma.HomeworkResponseWhereInput;
    some?: Prisma.HomeworkResponseWhereInput;
    none?: Prisma.HomeworkResponseWhereInput;
};
export type HomeworkResponseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HomeworkResponseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    homeworkId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type HomeworkResponseAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    homeworkId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
};
export type HomeworkResponseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    homeworkId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type HomeworkResponseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    homeworkId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type HomeworkResponseSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    homeworkId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
};
export type HomeworkResponseCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.HomeworkResponseCreateWithoutStudentInput, Prisma.HomeworkResponseUncheckedCreateWithoutStudentInput> | Prisma.HomeworkResponseCreateWithoutStudentInput[] | Prisma.HomeworkResponseUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.HomeworkResponseCreateOrConnectWithoutStudentInput | Prisma.HomeworkResponseCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.HomeworkResponseCreateManyStudentInputEnvelope;
    connect?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
};
export type HomeworkResponseUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.HomeworkResponseCreateWithoutStudentInput, Prisma.HomeworkResponseUncheckedCreateWithoutStudentInput> | Prisma.HomeworkResponseCreateWithoutStudentInput[] | Prisma.HomeworkResponseUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.HomeworkResponseCreateOrConnectWithoutStudentInput | Prisma.HomeworkResponseCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.HomeworkResponseCreateManyStudentInputEnvelope;
    connect?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
};
export type HomeworkResponseUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkResponseCreateWithoutStudentInput, Prisma.HomeworkResponseUncheckedCreateWithoutStudentInput> | Prisma.HomeworkResponseCreateWithoutStudentInput[] | Prisma.HomeworkResponseUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.HomeworkResponseCreateOrConnectWithoutStudentInput | Prisma.HomeworkResponseCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.HomeworkResponseUpsertWithWhereUniqueWithoutStudentInput | Prisma.HomeworkResponseUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.HomeworkResponseCreateManyStudentInputEnvelope;
    set?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    disconnect?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    delete?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    connect?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    update?: Prisma.HomeworkResponseUpdateWithWhereUniqueWithoutStudentInput | Prisma.HomeworkResponseUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.HomeworkResponseUpdateManyWithWhereWithoutStudentInput | Prisma.HomeworkResponseUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.HomeworkResponseScalarWhereInput | Prisma.HomeworkResponseScalarWhereInput[];
};
export type HomeworkResponseUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkResponseCreateWithoutStudentInput, Prisma.HomeworkResponseUncheckedCreateWithoutStudentInput> | Prisma.HomeworkResponseCreateWithoutStudentInput[] | Prisma.HomeworkResponseUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.HomeworkResponseCreateOrConnectWithoutStudentInput | Prisma.HomeworkResponseCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.HomeworkResponseUpsertWithWhereUniqueWithoutStudentInput | Prisma.HomeworkResponseUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.HomeworkResponseCreateManyStudentInputEnvelope;
    set?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    disconnect?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    delete?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    connect?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    update?: Prisma.HomeworkResponseUpdateWithWhereUniqueWithoutStudentInput | Prisma.HomeworkResponseUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.HomeworkResponseUpdateManyWithWhereWithoutStudentInput | Prisma.HomeworkResponseUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.HomeworkResponseScalarWhereInput | Prisma.HomeworkResponseScalarWhereInput[];
};
export type HomeworkResponseCreateNestedManyWithoutHomeworkInput = {
    create?: Prisma.XOR<Prisma.HomeworkResponseCreateWithoutHomeworkInput, Prisma.HomeworkResponseUncheckedCreateWithoutHomeworkInput> | Prisma.HomeworkResponseCreateWithoutHomeworkInput[] | Prisma.HomeworkResponseUncheckedCreateWithoutHomeworkInput[];
    connectOrCreate?: Prisma.HomeworkResponseCreateOrConnectWithoutHomeworkInput | Prisma.HomeworkResponseCreateOrConnectWithoutHomeworkInput[];
    createMany?: Prisma.HomeworkResponseCreateManyHomeworkInputEnvelope;
    connect?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
};
export type HomeworkResponseUncheckedCreateNestedManyWithoutHomeworkInput = {
    create?: Prisma.XOR<Prisma.HomeworkResponseCreateWithoutHomeworkInput, Prisma.HomeworkResponseUncheckedCreateWithoutHomeworkInput> | Prisma.HomeworkResponseCreateWithoutHomeworkInput[] | Prisma.HomeworkResponseUncheckedCreateWithoutHomeworkInput[];
    connectOrCreate?: Prisma.HomeworkResponseCreateOrConnectWithoutHomeworkInput | Prisma.HomeworkResponseCreateOrConnectWithoutHomeworkInput[];
    createMany?: Prisma.HomeworkResponseCreateManyHomeworkInputEnvelope;
    connect?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
};
export type HomeworkResponseUpdateManyWithoutHomeworkNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkResponseCreateWithoutHomeworkInput, Prisma.HomeworkResponseUncheckedCreateWithoutHomeworkInput> | Prisma.HomeworkResponseCreateWithoutHomeworkInput[] | Prisma.HomeworkResponseUncheckedCreateWithoutHomeworkInput[];
    connectOrCreate?: Prisma.HomeworkResponseCreateOrConnectWithoutHomeworkInput | Prisma.HomeworkResponseCreateOrConnectWithoutHomeworkInput[];
    upsert?: Prisma.HomeworkResponseUpsertWithWhereUniqueWithoutHomeworkInput | Prisma.HomeworkResponseUpsertWithWhereUniqueWithoutHomeworkInput[];
    createMany?: Prisma.HomeworkResponseCreateManyHomeworkInputEnvelope;
    set?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    disconnect?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    delete?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    connect?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    update?: Prisma.HomeworkResponseUpdateWithWhereUniqueWithoutHomeworkInput | Prisma.HomeworkResponseUpdateWithWhereUniqueWithoutHomeworkInput[];
    updateMany?: Prisma.HomeworkResponseUpdateManyWithWhereWithoutHomeworkInput | Prisma.HomeworkResponseUpdateManyWithWhereWithoutHomeworkInput[];
    deleteMany?: Prisma.HomeworkResponseScalarWhereInput | Prisma.HomeworkResponseScalarWhereInput[];
};
export type HomeworkResponseUncheckedUpdateManyWithoutHomeworkNestedInput = {
    create?: Prisma.XOR<Prisma.HomeworkResponseCreateWithoutHomeworkInput, Prisma.HomeworkResponseUncheckedCreateWithoutHomeworkInput> | Prisma.HomeworkResponseCreateWithoutHomeworkInput[] | Prisma.HomeworkResponseUncheckedCreateWithoutHomeworkInput[];
    connectOrCreate?: Prisma.HomeworkResponseCreateOrConnectWithoutHomeworkInput | Prisma.HomeworkResponseCreateOrConnectWithoutHomeworkInput[];
    upsert?: Prisma.HomeworkResponseUpsertWithWhereUniqueWithoutHomeworkInput | Prisma.HomeworkResponseUpsertWithWhereUniqueWithoutHomeworkInput[];
    createMany?: Prisma.HomeworkResponseCreateManyHomeworkInputEnvelope;
    set?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    disconnect?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    delete?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    connect?: Prisma.HomeworkResponseWhereUniqueInput | Prisma.HomeworkResponseWhereUniqueInput[];
    update?: Prisma.HomeworkResponseUpdateWithWhereUniqueWithoutHomeworkInput | Prisma.HomeworkResponseUpdateWithWhereUniqueWithoutHomeworkInput[];
    updateMany?: Prisma.HomeworkResponseUpdateManyWithWhereWithoutHomeworkInput | Prisma.HomeworkResponseUpdateManyWithWhereWithoutHomeworkInput[];
    deleteMany?: Prisma.HomeworkResponseScalarWhereInput | Prisma.HomeworkResponseScalarWhereInput[];
};
export type EnumHomeworkStatusStudentFieldUpdateOperationsInput = {
    set?: $Enums.HomeworkStatusStudent;
};
export type HomeworkResponseCreateWithoutStudentInput = {
    title: string;
    file?: string | null;
    status: $Enums.HomeworkStatusStudent;
    created_at?: Date | string;
    updated_at?: Date | string;
    homework: Prisma.HomeworkCreateNestedOneWithoutHomeworkResponsesInput;
};
export type HomeworkResponseUncheckedCreateWithoutStudentInput = {
    id?: number;
    homeworkId: number;
    title: string;
    file?: string | null;
    status: $Enums.HomeworkStatusStudent;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResponseCreateOrConnectWithoutStudentInput = {
    where: Prisma.HomeworkResponseWhereUniqueInput;
    create: Prisma.XOR<Prisma.HomeworkResponseCreateWithoutStudentInput, Prisma.HomeworkResponseUncheckedCreateWithoutStudentInput>;
};
export type HomeworkResponseCreateManyStudentInputEnvelope = {
    data: Prisma.HomeworkResponseCreateManyStudentInput | Prisma.HomeworkResponseCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type HomeworkResponseUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.HomeworkResponseWhereUniqueInput;
    update: Prisma.XOR<Prisma.HomeworkResponseUpdateWithoutStudentInput, Prisma.HomeworkResponseUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.HomeworkResponseCreateWithoutStudentInput, Prisma.HomeworkResponseUncheckedCreateWithoutStudentInput>;
};
export type HomeworkResponseUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.HomeworkResponseWhereUniqueInput;
    data: Prisma.XOR<Prisma.HomeworkResponseUpdateWithoutStudentInput, Prisma.HomeworkResponseUncheckedUpdateWithoutStudentInput>;
};
export type HomeworkResponseUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.HomeworkResponseScalarWhereInput;
    data: Prisma.XOR<Prisma.HomeworkResponseUpdateManyMutationInput, Prisma.HomeworkResponseUncheckedUpdateManyWithoutStudentInput>;
};
export type HomeworkResponseScalarWhereInput = {
    AND?: Prisma.HomeworkResponseScalarWhereInput | Prisma.HomeworkResponseScalarWhereInput[];
    OR?: Prisma.HomeworkResponseScalarWhereInput[];
    NOT?: Prisma.HomeworkResponseScalarWhereInput | Prisma.HomeworkResponseScalarWhereInput[];
    id?: Prisma.IntFilter<"HomeworkResponse"> | number;
    homeworkId?: Prisma.IntFilter<"HomeworkResponse"> | number;
    studentId?: Prisma.IntFilter<"HomeworkResponse"> | number;
    title?: Prisma.StringFilter<"HomeworkResponse"> | string;
    file?: Prisma.StringNullableFilter<"HomeworkResponse"> | string | null;
    status?: Prisma.EnumHomeworkStatusStudentFilter<"HomeworkResponse"> | $Enums.HomeworkStatusStudent;
    created_at?: Prisma.DateTimeFilter<"HomeworkResponse"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"HomeworkResponse"> | Date | string;
};
export type HomeworkResponseCreateWithoutHomeworkInput = {
    title: string;
    file?: string | null;
    status: $Enums.HomeworkStatusStudent;
    created_at?: Date | string;
    updated_at?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutHomeworkResponsesInput;
};
export type HomeworkResponseUncheckedCreateWithoutHomeworkInput = {
    id?: number;
    studentId: number;
    title: string;
    file?: string | null;
    status: $Enums.HomeworkStatusStudent;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResponseCreateOrConnectWithoutHomeworkInput = {
    where: Prisma.HomeworkResponseWhereUniqueInput;
    create: Prisma.XOR<Prisma.HomeworkResponseCreateWithoutHomeworkInput, Prisma.HomeworkResponseUncheckedCreateWithoutHomeworkInput>;
};
export type HomeworkResponseCreateManyHomeworkInputEnvelope = {
    data: Prisma.HomeworkResponseCreateManyHomeworkInput | Prisma.HomeworkResponseCreateManyHomeworkInput[];
    skipDuplicates?: boolean;
};
export type HomeworkResponseUpsertWithWhereUniqueWithoutHomeworkInput = {
    where: Prisma.HomeworkResponseWhereUniqueInput;
    update: Prisma.XOR<Prisma.HomeworkResponseUpdateWithoutHomeworkInput, Prisma.HomeworkResponseUncheckedUpdateWithoutHomeworkInput>;
    create: Prisma.XOR<Prisma.HomeworkResponseCreateWithoutHomeworkInput, Prisma.HomeworkResponseUncheckedCreateWithoutHomeworkInput>;
};
export type HomeworkResponseUpdateWithWhereUniqueWithoutHomeworkInput = {
    where: Prisma.HomeworkResponseWhereUniqueInput;
    data: Prisma.XOR<Prisma.HomeworkResponseUpdateWithoutHomeworkInput, Prisma.HomeworkResponseUncheckedUpdateWithoutHomeworkInput>;
};
export type HomeworkResponseUpdateManyWithWhereWithoutHomeworkInput = {
    where: Prisma.HomeworkResponseScalarWhereInput;
    data: Prisma.XOR<Prisma.HomeworkResponseUpdateManyMutationInput, Prisma.HomeworkResponseUncheckedUpdateManyWithoutHomeworkInput>;
};
export type HomeworkResponseCreateManyStudentInput = {
    id?: number;
    homeworkId: number;
    title: string;
    file?: string | null;
    status: $Enums.HomeworkStatusStudent;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResponseUpdateWithoutStudentInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHomeworkStatusStudentFieldUpdateOperationsInput | $Enums.HomeworkStatusStudent;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homework?: Prisma.HomeworkUpdateOneRequiredWithoutHomeworkResponsesNestedInput;
};
export type HomeworkResponseUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    homeworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHomeworkStatusStudentFieldUpdateOperationsInput | $Enums.HomeworkStatusStudent;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResponseUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    homeworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHomeworkStatusStudentFieldUpdateOperationsInput | $Enums.HomeworkStatusStudent;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResponseCreateManyHomeworkInput = {
    id?: number;
    studentId: number;
    title: string;
    file?: string | null;
    status: $Enums.HomeworkStatusStudent;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type HomeworkResponseUpdateWithoutHomeworkInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHomeworkStatusStudentFieldUpdateOperationsInput | $Enums.HomeworkStatusStudent;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutHomeworkResponsesNestedInput;
};
export type HomeworkResponseUncheckedUpdateWithoutHomeworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHomeworkStatusStudentFieldUpdateOperationsInput | $Enums.HomeworkStatusStudent;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResponseUncheckedUpdateManyWithoutHomeworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHomeworkStatusStudentFieldUpdateOperationsInput | $Enums.HomeworkStatusStudent;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HomeworkResponseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    homeworkId?: boolean;
    studentId?: boolean;
    title?: boolean;
    file?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    homework?: boolean | Prisma.HomeworkDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["homeworkResponse"]>;
export type HomeworkResponseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    homeworkId?: boolean;
    studentId?: boolean;
    title?: boolean;
    file?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    homework?: boolean | Prisma.HomeworkDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["homeworkResponse"]>;
export type HomeworkResponseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    homeworkId?: boolean;
    studentId?: boolean;
    title?: boolean;
    file?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    homework?: boolean | Prisma.HomeworkDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["homeworkResponse"]>;
export type HomeworkResponseSelectScalar = {
    id?: boolean;
    homeworkId?: boolean;
    studentId?: boolean;
    title?: boolean;
    file?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type HomeworkResponseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "homeworkId" | "studentId" | "title" | "file" | "status" | "created_at" | "updated_at", ExtArgs["result"]["homeworkResponse"]>;
export type HomeworkResponseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    homework?: boolean | Prisma.HomeworkDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type HomeworkResponseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    homework?: boolean | Prisma.HomeworkDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type HomeworkResponseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    homework?: boolean | Prisma.HomeworkDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type $HomeworkResponsePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HomeworkResponse";
    objects: {
        homework: Prisma.$HomeworkPayload<ExtArgs>;
        student: Prisma.$StudentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        homeworkId: number;
        studentId: number;
        title: string;
        file: string | null;
        status: $Enums.HomeworkStatusStudent;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["homeworkResponse"]>;
    composites: {};
};
export type HomeworkResponseGetPayload<S extends boolean | null | undefined | HomeworkResponseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HomeworkResponsePayload, S>;
export type HomeworkResponseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HomeworkResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HomeworkResponseCountAggregateInputType | true;
};
export interface HomeworkResponseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HomeworkResponse'];
        meta: {
            name: 'HomeworkResponse';
        };
    };
    findUnique<T extends HomeworkResponseFindUniqueArgs>(args: Prisma.SelectSubset<T, HomeworkResponseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HomeworkResponseClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HomeworkResponseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HomeworkResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HomeworkResponseClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HomeworkResponseFindFirstArgs>(args?: Prisma.SelectSubset<T, HomeworkResponseFindFirstArgs<ExtArgs>>): Prisma.Prisma__HomeworkResponseClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HomeworkResponseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HomeworkResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HomeworkResponseClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HomeworkResponseFindManyArgs>(args?: Prisma.SelectSubset<T, HomeworkResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HomeworkResponseCreateArgs>(args: Prisma.SelectSubset<T, HomeworkResponseCreateArgs<ExtArgs>>): Prisma.Prisma__HomeworkResponseClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HomeworkResponseCreateManyArgs>(args?: Prisma.SelectSubset<T, HomeworkResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HomeworkResponseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HomeworkResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HomeworkResponseDeleteArgs>(args: Prisma.SelectSubset<T, HomeworkResponseDeleteArgs<ExtArgs>>): Prisma.Prisma__HomeworkResponseClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HomeworkResponseUpdateArgs>(args: Prisma.SelectSubset<T, HomeworkResponseUpdateArgs<ExtArgs>>): Prisma.Prisma__HomeworkResponseClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HomeworkResponseDeleteManyArgs>(args?: Prisma.SelectSubset<T, HomeworkResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HomeworkResponseUpdateManyArgs>(args: Prisma.SelectSubset<T, HomeworkResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HomeworkResponseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HomeworkResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HomeworkResponseUpsertArgs>(args: Prisma.SelectSubset<T, HomeworkResponseUpsertArgs<ExtArgs>>): Prisma.Prisma__HomeworkResponseClient<runtime.Types.Result.GetResult<Prisma.$HomeworkResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HomeworkResponseCountArgs>(args?: Prisma.Subset<T, HomeworkResponseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HomeworkResponseCountAggregateOutputType> : number>;
    aggregate<T extends HomeworkResponseAggregateArgs>(args: Prisma.Subset<T, HomeworkResponseAggregateArgs>): Prisma.PrismaPromise<GetHomeworkResponseAggregateType<T>>;
    groupBy<T extends HomeworkResponseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HomeworkResponseGroupByArgs['orderBy'];
    } : {
        orderBy?: HomeworkResponseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HomeworkResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeworkResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HomeworkResponseFieldRefs;
}
export interface Prisma__HomeworkResponseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    homework<T extends Prisma.HomeworkDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HomeworkDefaultArgs<ExtArgs>>): Prisma.Prisma__HomeworkClient<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HomeworkResponseFieldRefs {
    readonly id: Prisma.FieldRef<"HomeworkResponse", 'Int'>;
    readonly homeworkId: Prisma.FieldRef<"HomeworkResponse", 'Int'>;
    readonly studentId: Prisma.FieldRef<"HomeworkResponse", 'Int'>;
    readonly title: Prisma.FieldRef<"HomeworkResponse", 'String'>;
    readonly file: Prisma.FieldRef<"HomeworkResponse", 'String'>;
    readonly status: Prisma.FieldRef<"HomeworkResponse", 'HomeworkStatusStudent'>;
    readonly created_at: Prisma.FieldRef<"HomeworkResponse", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"HomeworkResponse", 'DateTime'>;
}
export type HomeworkResponseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResponseSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResponseOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResponseInclude<ExtArgs> | null;
    where: Prisma.HomeworkResponseWhereUniqueInput;
};
export type HomeworkResponseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResponseSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResponseOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResponseInclude<ExtArgs> | null;
    where: Prisma.HomeworkResponseWhereUniqueInput;
};
export type HomeworkResponseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HomeworkResponseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HomeworkResponseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HomeworkResponseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResponseSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResponseOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResponseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HomeworkResponseCreateInput, Prisma.HomeworkResponseUncheckedCreateInput>;
};
export type HomeworkResponseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HomeworkResponseCreateManyInput | Prisma.HomeworkResponseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HomeworkResponseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResponseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HomeworkResponseOmit<ExtArgs> | null;
    data: Prisma.HomeworkResponseCreateManyInput | Prisma.HomeworkResponseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HomeworkResponseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HomeworkResponseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResponseSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResponseOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResponseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HomeworkResponseUpdateInput, Prisma.HomeworkResponseUncheckedUpdateInput>;
    where: Prisma.HomeworkResponseWhereUniqueInput;
};
export type HomeworkResponseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HomeworkResponseUpdateManyMutationInput, Prisma.HomeworkResponseUncheckedUpdateManyInput>;
    where?: Prisma.HomeworkResponseWhereInput;
    limit?: number;
};
export type HomeworkResponseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResponseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HomeworkResponseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HomeworkResponseUpdateManyMutationInput, Prisma.HomeworkResponseUncheckedUpdateManyInput>;
    where?: Prisma.HomeworkResponseWhereInput;
    limit?: number;
    include?: Prisma.HomeworkResponseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HomeworkResponseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResponseSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResponseOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResponseInclude<ExtArgs> | null;
    where: Prisma.HomeworkResponseWhereUniqueInput;
    create: Prisma.XOR<Prisma.HomeworkResponseCreateInput, Prisma.HomeworkResponseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HomeworkResponseUpdateInput, Prisma.HomeworkResponseUncheckedUpdateInput>;
};
export type HomeworkResponseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResponseSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResponseOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResponseInclude<ExtArgs> | null;
    where: Prisma.HomeworkResponseWhereUniqueInput;
};
export type HomeworkResponseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkResponseWhereInput;
    limit?: number;
};
export type HomeworkResponseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HomeworkResponseSelect<ExtArgs> | null;
    omit?: Prisma.HomeworkResponseOmit<ExtArgs> | null;
    include?: Prisma.HomeworkResponseInclude<ExtArgs> | null;
};
export {};
