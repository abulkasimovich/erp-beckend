import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentGroupModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentGroupPayload>;
export type AggregateStudentGroup = {
    _count: StudentGroupCountAggregateOutputType | null;
    _avg: StudentGroupAvgAggregateOutputType | null;
    _sum: StudentGroupSumAggregateOutputType | null;
    _min: StudentGroupMinAggregateOutputType | null;
    _max: StudentGroupMaxAggregateOutputType | null;
};
export type StudentGroupAvgAggregateOutputType = {
    id: number | null;
    groupId: number | null;
    studentId: number | null;
};
export type StudentGroupSumAggregateOutputType = {
    id: number | null;
    groupId: number | null;
    studentId: number | null;
};
export type StudentGroupMinAggregateOutputType = {
    id: number | null;
    groupId: number | null;
    studentId: number | null;
    status: $Enums.UserStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type StudentGroupMaxAggregateOutputType = {
    id: number | null;
    groupId: number | null;
    studentId: number | null;
    status: $Enums.UserStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type StudentGroupCountAggregateOutputType = {
    id: number;
    groupId: number;
    studentId: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type StudentGroupAvgAggregateInputType = {
    id?: true;
    groupId?: true;
    studentId?: true;
};
export type StudentGroupSumAggregateInputType = {
    id?: true;
    groupId?: true;
    studentId?: true;
};
export type StudentGroupMinAggregateInputType = {
    id?: true;
    groupId?: true;
    studentId?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type StudentGroupMaxAggregateInputType = {
    id?: true;
    groupId?: true;
    studentId?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type StudentGroupCountAggregateInputType = {
    id?: true;
    groupId?: true;
    studentId?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type StudentGroupAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentGroupWhereInput;
    orderBy?: Prisma.StudentGroupOrderByWithRelationInput | Prisma.StudentGroupOrderByWithRelationInput[];
    cursor?: Prisma.StudentGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentGroupCountAggregateInputType;
    _avg?: StudentGroupAvgAggregateInputType;
    _sum?: StudentGroupSumAggregateInputType;
    _min?: StudentGroupMinAggregateInputType;
    _max?: StudentGroupMaxAggregateInputType;
};
export type GetStudentGroupAggregateType<T extends StudentGroupAggregateArgs> = {
    [P in keyof T & keyof AggregateStudentGroup]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudentGroup[P]> : Prisma.GetScalarType<T[P], AggregateStudentGroup[P]>;
};
export type StudentGroupGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentGroupWhereInput;
    orderBy?: Prisma.StudentGroupOrderByWithAggregationInput | Prisma.StudentGroupOrderByWithAggregationInput[];
    by: Prisma.StudentGroupScalarFieldEnum[] | Prisma.StudentGroupScalarFieldEnum;
    having?: Prisma.StudentGroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentGroupCountAggregateInputType | true;
    _avg?: StudentGroupAvgAggregateInputType;
    _sum?: StudentGroupSumAggregateInputType;
    _min?: StudentGroupMinAggregateInputType;
    _max?: StudentGroupMaxAggregateInputType;
};
export type StudentGroupGroupByOutputType = {
    id: number;
    groupId: number;
    studentId: number;
    status: $Enums.UserStatus;
    created_at: Date;
    updated_at: Date;
    _count: StudentGroupCountAggregateOutputType | null;
    _avg: StudentGroupAvgAggregateOutputType | null;
    _sum: StudentGroupSumAggregateOutputType | null;
    _min: StudentGroupMinAggregateOutputType | null;
    _max: StudentGroupMaxAggregateOutputType | null;
};
type GetStudentGroupGroupByPayload<T extends StudentGroupGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentGroupGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentGroupGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentGroupGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentGroupGroupByOutputType[P]>;
}>>;
export type StudentGroupWhereInput = {
    AND?: Prisma.StudentGroupWhereInput | Prisma.StudentGroupWhereInput[];
    OR?: Prisma.StudentGroupWhereInput[];
    NOT?: Prisma.StudentGroupWhereInput | Prisma.StudentGroupWhereInput[];
    id?: Prisma.IntFilter<"StudentGroup"> | number;
    groupId?: Prisma.IntFilter<"StudentGroup"> | number;
    studentId?: Prisma.IntFilter<"StudentGroup"> | number;
    status?: Prisma.EnumUserStatusFilter<"StudentGroup"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFilter<"StudentGroup"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"StudentGroup"> | Date | string;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
};
export type StudentGroupOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    group?: Prisma.GroupOrderByWithRelationInput;
    student?: Prisma.StudentOrderByWithRelationInput;
};
export type StudentGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    groupId_studentId?: Prisma.StudentGroupGroupIdStudentIdCompoundUniqueInput;
    AND?: Prisma.StudentGroupWhereInput | Prisma.StudentGroupWhereInput[];
    OR?: Prisma.StudentGroupWhereInput[];
    NOT?: Prisma.StudentGroupWhereInput | Prisma.StudentGroupWhereInput[];
    groupId?: Prisma.IntFilter<"StudentGroup"> | number;
    studentId?: Prisma.IntFilter<"StudentGroup"> | number;
    status?: Prisma.EnumUserStatusFilter<"StudentGroup"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFilter<"StudentGroup"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"StudentGroup"> | Date | string;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
}, "id" | "groupId_studentId">;
export type StudentGroupOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.StudentGroupCountOrderByAggregateInput;
    _avg?: Prisma.StudentGroupAvgOrderByAggregateInput;
    _max?: Prisma.StudentGroupMaxOrderByAggregateInput;
    _min?: Prisma.StudentGroupMinOrderByAggregateInput;
    _sum?: Prisma.StudentGroupSumOrderByAggregateInput;
};
export type StudentGroupScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentGroupScalarWhereWithAggregatesInput | Prisma.StudentGroupScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentGroupScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentGroupScalarWhereWithAggregatesInput | Prisma.StudentGroupScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"StudentGroup"> | number;
    groupId?: Prisma.IntWithAggregatesFilter<"StudentGroup"> | number;
    studentId?: Prisma.IntWithAggregatesFilter<"StudentGroup"> | number;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"StudentGroup"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"StudentGroup"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"StudentGroup"> | Date | string;
};
export type StudentGroupCreateInput = {
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutStudentGroupsInput;
    student: Prisma.StudentCreateNestedOneWithoutStudentGroupsInput;
};
export type StudentGroupUncheckedCreateInput = {
    id?: number;
    groupId: number;
    studentId: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type StudentGroupUpdateInput = {
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutStudentGroupsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutStudentGroupsNestedInput;
};
export type StudentGroupUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentGroupCreateManyInput = {
    id?: number;
    groupId: number;
    studentId: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type StudentGroupUpdateManyMutationInput = {
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentGroupUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentGroupListRelationFilter = {
    every?: Prisma.StudentGroupWhereInput;
    some?: Prisma.StudentGroupWhereInput;
    none?: Prisma.StudentGroupWhereInput;
};
export type StudentGroupOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentGroupGroupIdStudentIdCompoundUniqueInput = {
    groupId: number;
    studentId: number;
};
export type StudentGroupCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type StudentGroupAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
};
export type StudentGroupMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type StudentGroupMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type StudentGroupSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
};
export type StudentGroupCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentGroupCreateWithoutStudentInput, Prisma.StudentGroupUncheckedCreateWithoutStudentInput> | Prisma.StudentGroupCreateWithoutStudentInput[] | Prisma.StudentGroupUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentGroupCreateOrConnectWithoutStudentInput | Prisma.StudentGroupCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentGroupCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
};
export type StudentGroupUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentGroupCreateWithoutStudentInput, Prisma.StudentGroupUncheckedCreateWithoutStudentInput> | Prisma.StudentGroupCreateWithoutStudentInput[] | Prisma.StudentGroupUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentGroupCreateOrConnectWithoutStudentInput | Prisma.StudentGroupCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentGroupCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
};
export type StudentGroupUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentGroupCreateWithoutStudentInput, Prisma.StudentGroupUncheckedCreateWithoutStudentInput> | Prisma.StudentGroupCreateWithoutStudentInput[] | Prisma.StudentGroupUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentGroupCreateOrConnectWithoutStudentInput | Prisma.StudentGroupCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentGroupUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentGroupUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentGroupCreateManyStudentInputEnvelope;
    set?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    disconnect?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    delete?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    connect?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    update?: Prisma.StudentGroupUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentGroupUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentGroupUpdateManyWithWhereWithoutStudentInput | Prisma.StudentGroupUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentGroupScalarWhereInput | Prisma.StudentGroupScalarWhereInput[];
};
export type StudentGroupUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentGroupCreateWithoutStudentInput, Prisma.StudentGroupUncheckedCreateWithoutStudentInput> | Prisma.StudentGroupCreateWithoutStudentInput[] | Prisma.StudentGroupUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentGroupCreateOrConnectWithoutStudentInput | Prisma.StudentGroupCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentGroupUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentGroupUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentGroupCreateManyStudentInputEnvelope;
    set?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    disconnect?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    delete?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    connect?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    update?: Prisma.StudentGroupUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentGroupUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentGroupUpdateManyWithWhereWithoutStudentInput | Prisma.StudentGroupUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentGroupScalarWhereInput | Prisma.StudentGroupScalarWhereInput[];
};
export type StudentGroupCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.StudentGroupCreateWithoutGroupInput, Prisma.StudentGroupUncheckedCreateWithoutGroupInput> | Prisma.StudentGroupCreateWithoutGroupInput[] | Prisma.StudentGroupUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.StudentGroupCreateOrConnectWithoutGroupInput | Prisma.StudentGroupCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.StudentGroupCreateManyGroupInputEnvelope;
    connect?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
};
export type StudentGroupUncheckedCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.StudentGroupCreateWithoutGroupInput, Prisma.StudentGroupUncheckedCreateWithoutGroupInput> | Prisma.StudentGroupCreateWithoutGroupInput[] | Prisma.StudentGroupUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.StudentGroupCreateOrConnectWithoutGroupInput | Prisma.StudentGroupCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.StudentGroupCreateManyGroupInputEnvelope;
    connect?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
};
export type StudentGroupUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.StudentGroupCreateWithoutGroupInput, Prisma.StudentGroupUncheckedCreateWithoutGroupInput> | Prisma.StudentGroupCreateWithoutGroupInput[] | Prisma.StudentGroupUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.StudentGroupCreateOrConnectWithoutGroupInput | Prisma.StudentGroupCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.StudentGroupUpsertWithWhereUniqueWithoutGroupInput | Prisma.StudentGroupUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.StudentGroupCreateManyGroupInputEnvelope;
    set?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    disconnect?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    delete?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    connect?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    update?: Prisma.StudentGroupUpdateWithWhereUniqueWithoutGroupInput | Prisma.StudentGroupUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.StudentGroupUpdateManyWithWhereWithoutGroupInput | Prisma.StudentGroupUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.StudentGroupScalarWhereInput | Prisma.StudentGroupScalarWhereInput[];
};
export type StudentGroupUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.StudentGroupCreateWithoutGroupInput, Prisma.StudentGroupUncheckedCreateWithoutGroupInput> | Prisma.StudentGroupCreateWithoutGroupInput[] | Prisma.StudentGroupUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.StudentGroupCreateOrConnectWithoutGroupInput | Prisma.StudentGroupCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.StudentGroupUpsertWithWhereUniqueWithoutGroupInput | Prisma.StudentGroupUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.StudentGroupCreateManyGroupInputEnvelope;
    set?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    disconnect?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    delete?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    connect?: Prisma.StudentGroupWhereUniqueInput | Prisma.StudentGroupWhereUniqueInput[];
    update?: Prisma.StudentGroupUpdateWithWhereUniqueWithoutGroupInput | Prisma.StudentGroupUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.StudentGroupUpdateManyWithWhereWithoutGroupInput | Prisma.StudentGroupUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.StudentGroupScalarWhereInput | Prisma.StudentGroupScalarWhereInput[];
};
export type StudentGroupCreateWithoutStudentInput = {
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutStudentGroupsInput;
};
export type StudentGroupUncheckedCreateWithoutStudentInput = {
    id?: number;
    groupId: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type StudentGroupCreateOrConnectWithoutStudentInput = {
    where: Prisma.StudentGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentGroupCreateWithoutStudentInput, Prisma.StudentGroupUncheckedCreateWithoutStudentInput>;
};
export type StudentGroupCreateManyStudentInputEnvelope = {
    data: Prisma.StudentGroupCreateManyStudentInput | Prisma.StudentGroupCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type StudentGroupUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentGroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentGroupUpdateWithoutStudentInput, Prisma.StudentGroupUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.StudentGroupCreateWithoutStudentInput, Prisma.StudentGroupUncheckedCreateWithoutStudentInput>;
};
export type StudentGroupUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentGroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentGroupUpdateWithoutStudentInput, Prisma.StudentGroupUncheckedUpdateWithoutStudentInput>;
};
export type StudentGroupUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.StudentGroupScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentGroupUpdateManyMutationInput, Prisma.StudentGroupUncheckedUpdateManyWithoutStudentInput>;
};
export type StudentGroupScalarWhereInput = {
    AND?: Prisma.StudentGroupScalarWhereInput | Prisma.StudentGroupScalarWhereInput[];
    OR?: Prisma.StudentGroupScalarWhereInput[];
    NOT?: Prisma.StudentGroupScalarWhereInput | Prisma.StudentGroupScalarWhereInput[];
    id?: Prisma.IntFilter<"StudentGroup"> | number;
    groupId?: Prisma.IntFilter<"StudentGroup"> | number;
    studentId?: Prisma.IntFilter<"StudentGroup"> | number;
    status?: Prisma.EnumUserStatusFilter<"StudentGroup"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFilter<"StudentGroup"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"StudentGroup"> | Date | string;
};
export type StudentGroupCreateWithoutGroupInput = {
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutStudentGroupsInput;
};
export type StudentGroupUncheckedCreateWithoutGroupInput = {
    id?: number;
    studentId: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type StudentGroupCreateOrConnectWithoutGroupInput = {
    where: Prisma.StudentGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentGroupCreateWithoutGroupInput, Prisma.StudentGroupUncheckedCreateWithoutGroupInput>;
};
export type StudentGroupCreateManyGroupInputEnvelope = {
    data: Prisma.StudentGroupCreateManyGroupInput | Prisma.StudentGroupCreateManyGroupInput[];
    skipDuplicates?: boolean;
};
export type StudentGroupUpsertWithWhereUniqueWithoutGroupInput = {
    where: Prisma.StudentGroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentGroupUpdateWithoutGroupInput, Prisma.StudentGroupUncheckedUpdateWithoutGroupInput>;
    create: Prisma.XOR<Prisma.StudentGroupCreateWithoutGroupInput, Prisma.StudentGroupUncheckedCreateWithoutGroupInput>;
};
export type StudentGroupUpdateWithWhereUniqueWithoutGroupInput = {
    where: Prisma.StudentGroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentGroupUpdateWithoutGroupInput, Prisma.StudentGroupUncheckedUpdateWithoutGroupInput>;
};
export type StudentGroupUpdateManyWithWhereWithoutGroupInput = {
    where: Prisma.StudentGroupScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentGroupUpdateManyMutationInput, Prisma.StudentGroupUncheckedUpdateManyWithoutGroupInput>;
};
export type StudentGroupCreateManyStudentInput = {
    id?: number;
    groupId: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type StudentGroupUpdateWithoutStudentInput = {
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutStudentGroupsNestedInput;
};
export type StudentGroupUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentGroupUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentGroupCreateManyGroupInput = {
    id?: number;
    studentId: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type StudentGroupUpdateWithoutGroupInput = {
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutStudentGroupsNestedInput;
};
export type StudentGroupUncheckedUpdateWithoutGroupInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentGroupUncheckedUpdateManyWithoutGroupInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentGroupSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    studentId?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentGroup"]>;
export type StudentGroupSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    studentId?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentGroup"]>;
export type StudentGroupSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    studentId?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentGroup"]>;
export type StudentGroupSelectScalar = {
    id?: boolean;
    groupId?: boolean;
    studentId?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type StudentGroupOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "groupId" | "studentId" | "status" | "created_at" | "updated_at", ExtArgs["result"]["studentGroup"]>;
export type StudentGroupInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type StudentGroupIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type StudentGroupIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type $StudentGroupPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StudentGroup";
    objects: {
        group: Prisma.$GroupPayload<ExtArgs>;
        student: Prisma.$StudentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        groupId: number;
        studentId: number;
        status: $Enums.UserStatus;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["studentGroup"]>;
    composites: {};
};
export type StudentGroupGetPayload<S extends boolean | null | undefined | StudentGroupDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentGroupPayload, S>;
export type StudentGroupCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentGroupCountAggregateInputType | true;
};
export interface StudentGroupDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StudentGroup'];
        meta: {
            name: 'StudentGroup';
        };
    };
    findUnique<T extends StudentGroupFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentGroupFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentGroupClient<runtime.Types.Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentGroupFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentGroupClient<runtime.Types.Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentGroupFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentGroupFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentGroupClient<runtime.Types.Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentGroupFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentGroupClient<runtime.Types.Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentGroupFindManyArgs>(args?: Prisma.SelectSubset<T, StudentGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentGroupCreateArgs>(args: Prisma.SelectSubset<T, StudentGroupCreateArgs<ExtArgs>>): Prisma.Prisma__StudentGroupClient<runtime.Types.Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentGroupCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentGroupCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentGroupDeleteArgs>(args: Prisma.SelectSubset<T, StudentGroupDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentGroupClient<runtime.Types.Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentGroupUpdateArgs>(args: Prisma.SelectSubset<T, StudentGroupUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentGroupClient<runtime.Types.Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentGroupDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentGroupUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentGroupUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentGroupUpsertArgs>(args: Prisma.SelectSubset<T, StudentGroupUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentGroupClient<runtime.Types.Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentGroupCountArgs>(args?: Prisma.Subset<T, StudentGroupCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentGroupCountAggregateOutputType> : number>;
    aggregate<T extends StudentGroupAggregateArgs>(args: Prisma.Subset<T, StudentGroupAggregateArgs>): Prisma.PrismaPromise<GetStudentGroupAggregateType<T>>;
    groupBy<T extends StudentGroupGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentGroupGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentGroupGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentGroupFieldRefs;
}
export interface Prisma__StudentGroupClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    group<T extends Prisma.GroupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GroupDefaultArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentGroupFieldRefs {
    readonly id: Prisma.FieldRef<"StudentGroup", 'Int'>;
    readonly groupId: Prisma.FieldRef<"StudentGroup", 'Int'>;
    readonly studentId: Prisma.FieldRef<"StudentGroup", 'Int'>;
    readonly status: Prisma.FieldRef<"StudentGroup", 'UserStatus'>;
    readonly created_at: Prisma.FieldRef<"StudentGroup", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"StudentGroup", 'DateTime'>;
}
export type StudentGroupFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGroupSelect<ExtArgs> | null;
    omit?: Prisma.StudentGroupOmit<ExtArgs> | null;
    include?: Prisma.StudentGroupInclude<ExtArgs> | null;
    where: Prisma.StudentGroupWhereUniqueInput;
};
export type StudentGroupFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGroupSelect<ExtArgs> | null;
    omit?: Prisma.StudentGroupOmit<ExtArgs> | null;
    include?: Prisma.StudentGroupInclude<ExtArgs> | null;
    where: Prisma.StudentGroupWhereUniqueInput;
};
export type StudentGroupFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentGroupFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentGroupFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentGroupCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGroupSelect<ExtArgs> | null;
    omit?: Prisma.StudentGroupOmit<ExtArgs> | null;
    include?: Prisma.StudentGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentGroupCreateInput, Prisma.StudentGroupUncheckedCreateInput>;
};
export type StudentGroupCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentGroupCreateManyInput | Prisma.StudentGroupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentGroupCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGroupSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentGroupOmit<ExtArgs> | null;
    data: Prisma.StudentGroupCreateManyInput | Prisma.StudentGroupCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StudentGroupIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StudentGroupUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGroupSelect<ExtArgs> | null;
    omit?: Prisma.StudentGroupOmit<ExtArgs> | null;
    include?: Prisma.StudentGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentGroupUpdateInput, Prisma.StudentGroupUncheckedUpdateInput>;
    where: Prisma.StudentGroupWhereUniqueInput;
};
export type StudentGroupUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentGroupUpdateManyMutationInput, Prisma.StudentGroupUncheckedUpdateManyInput>;
    where?: Prisma.StudentGroupWhereInput;
    limit?: number;
};
export type StudentGroupUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGroupSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentGroupOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentGroupUpdateManyMutationInput, Prisma.StudentGroupUncheckedUpdateManyInput>;
    where?: Prisma.StudentGroupWhereInput;
    limit?: number;
    include?: Prisma.StudentGroupIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StudentGroupUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGroupSelect<ExtArgs> | null;
    omit?: Prisma.StudentGroupOmit<ExtArgs> | null;
    include?: Prisma.StudentGroupInclude<ExtArgs> | null;
    where: Prisma.StudentGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentGroupCreateInput, Prisma.StudentGroupUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentGroupUpdateInput, Prisma.StudentGroupUncheckedUpdateInput>;
};
export type StudentGroupDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGroupSelect<ExtArgs> | null;
    omit?: Prisma.StudentGroupOmit<ExtArgs> | null;
    include?: Prisma.StudentGroupInclude<ExtArgs> | null;
    where: Prisma.StudentGroupWhereUniqueInput;
};
export type StudentGroupDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentGroupWhereInput;
    limit?: number;
};
export type StudentGroupDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGroupSelect<ExtArgs> | null;
    omit?: Prisma.StudentGroupOmit<ExtArgs> | null;
    include?: Prisma.StudentGroupInclude<ExtArgs> | null;
};
export {};
