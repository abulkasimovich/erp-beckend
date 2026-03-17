import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentPayload>;
export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
export type StudentAvgAggregateOutputType = {
    id: number | null;
};
export type StudentSumAggregateOutputType = {
    id: number | null;
};
export type StudentMinAggregateOutputType = {
    id: number | null;
    fullName: string | null;
    contact: string | null;
    photo: string | null;
    password: string | null;
    birth_date: Date | null;
    status: $Enums.UserStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type StudentMaxAggregateOutputType = {
    id: number | null;
    fullName: string | null;
    contact: string | null;
    photo: string | null;
    password: string | null;
    birth_date: Date | null;
    status: $Enums.UserStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type StudentCountAggregateOutputType = {
    id: number;
    fullName: number;
    contact: number;
    photo: number;
    password: number;
    birth_date: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type StudentAvgAggregateInputType = {
    id?: true;
};
export type StudentSumAggregateInputType = {
    id?: true;
};
export type StudentMinAggregateInputType = {
    id?: true;
    fullName?: true;
    contact?: true;
    photo?: true;
    password?: true;
    birth_date?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type StudentMaxAggregateInputType = {
    id?: true;
    fullName?: true;
    contact?: true;
    photo?: true;
    password?: true;
    birth_date?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type StudentCountAggregateInputType = {
    id?: true;
    fullName?: true;
    contact?: true;
    photo?: true;
    password?: true;
    birth_date?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type StudentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentCountAggregateInputType;
    _avg?: StudentAvgAggregateInputType;
    _sum?: StudentSumAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudent[P]> : Prisma.GetScalarType<T[P], AggregateStudent[P]>;
};
export type StudentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithAggregationInput | Prisma.StudentOrderByWithAggregationInput[];
    by: Prisma.StudentScalarFieldEnum[] | Prisma.StudentScalarFieldEnum;
    having?: Prisma.StudentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentCountAggregateInputType | true;
    _avg?: StudentAvgAggregateInputType;
    _sum?: StudentSumAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type StudentGroupByOutputType = {
    id: number;
    fullName: string;
    contact: string;
    photo: string | null;
    password: string;
    birth_date: Date;
    status: $Enums.UserStatus;
    created_at: Date;
    updated_at: Date;
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]>;
}>>;
export type StudentWhereInput = {
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    id?: Prisma.IntFilter<"Student"> | number;
    fullName?: Prisma.StringFilter<"Student"> | string;
    contact?: Prisma.StringFilter<"Student"> | string;
    photo?: Prisma.StringNullableFilter<"Student"> | string | null;
    password?: Prisma.StringFilter<"Student"> | string;
    birth_date?: Prisma.DateTimeFilter<"Student"> | Date | string;
    status?: Prisma.EnumUserStatusFilter<"Student"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFilter<"Student"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Student"> | Date | string;
    studentGroups?: Prisma.StudentGroupListRelationFilter;
    attendances?: Prisma.AttendanceListRelationFilter;
    homeworkResponses?: Prisma.HomeworkResponseListRelationFilter;
    homeworkResults?: Prisma.HomeworkResultListRelationFilter;
};
export type StudentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    birth_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    studentGroups?: Prisma.StudentGroupOrderByRelationAggregateInput;
    attendances?: Prisma.AttendanceOrderByRelationAggregateInput;
    homeworkResponses?: Prisma.HomeworkResponseOrderByRelationAggregateInput;
    homeworkResults?: Prisma.HomeworkResultOrderByRelationAggregateInput;
};
export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    contact?: string;
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    fullName?: Prisma.StringFilter<"Student"> | string;
    photo?: Prisma.StringNullableFilter<"Student"> | string | null;
    password?: Prisma.StringFilter<"Student"> | string;
    birth_date?: Prisma.DateTimeFilter<"Student"> | Date | string;
    status?: Prisma.EnumUserStatusFilter<"Student"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFilter<"Student"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Student"> | Date | string;
    studentGroups?: Prisma.StudentGroupListRelationFilter;
    attendances?: Prisma.AttendanceListRelationFilter;
    homeworkResponses?: Prisma.HomeworkResponseListRelationFilter;
    homeworkResults?: Prisma.HomeworkResultListRelationFilter;
}, "id" | "contact">;
export type StudentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    birth_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.StudentCountOrderByAggregateInput;
    _avg?: Prisma.StudentAvgOrderByAggregateInput;
    _max?: Prisma.StudentMaxOrderByAggregateInput;
    _min?: Prisma.StudentMinOrderByAggregateInput;
    _sum?: Prisma.StudentSumOrderByAggregateInput;
};
export type StudentScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Student"> | number;
    fullName?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    contact?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    photo?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    password?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    birth_date?: Prisma.DateTimeWithAggregatesFilter<"Student"> | Date | string;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"Student"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Student"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Student"> | Date | string;
};
export type StudentCreateInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    birth_date: Date | string;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupCreateNestedManyWithoutStudentInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutStudentInput;
    homeworkResponses?: Prisma.HomeworkResponseCreateNestedManyWithoutStudentInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    birth_date: Date | string;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedCreateNestedManyWithoutStudentInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutStudentInput;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedCreateNestedManyWithoutStudentInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentUpdateInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    birth_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUpdateManyWithoutStudentNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutStudentNestedInput;
    homeworkResponses?: Prisma.HomeworkResponseUpdateManyWithoutStudentNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    birth_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedUpdateManyWithoutStudentNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutStudentNestedInput;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedUpdateManyWithoutStudentNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateManyInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    birth_date: Date | string;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type StudentUpdateManyMutationInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    birth_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    birth_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    birth_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type StudentAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type StudentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    birth_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type StudentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    birth_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type StudentSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type StudentScalarRelationFilter = {
    is?: Prisma.StudentWhereInput;
    isNot?: Prisma.StudentWhereInput;
};
export type StudentCreateNestedOneWithoutStudentGroupsInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutStudentGroupsInput, Prisma.StudentUncheckedCreateWithoutStudentGroupsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutStudentGroupsInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutStudentGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutStudentGroupsInput, Prisma.StudentUncheckedCreateWithoutStudentGroupsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutStudentGroupsInput;
    upsert?: Prisma.StudentUpsertWithoutStudentGroupsInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutStudentGroupsInput, Prisma.StudentUpdateWithoutStudentGroupsInput>, Prisma.StudentUncheckedUpdateWithoutStudentGroupsInput>;
};
export type StudentCreateNestedOneWithoutAttendancesInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutAttendancesInput, Prisma.StudentUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutAttendancesInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutAttendancesInput, Prisma.StudentUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutAttendancesInput;
    upsert?: Prisma.StudentUpsertWithoutAttendancesInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutAttendancesInput, Prisma.StudentUpdateWithoutAttendancesInput>, Prisma.StudentUncheckedUpdateWithoutAttendancesInput>;
};
export type StudentCreateNestedOneWithoutHomeworkResponsesInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutHomeworkResponsesInput, Prisma.StudentUncheckedCreateWithoutHomeworkResponsesInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutHomeworkResponsesInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutHomeworkResponsesNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutHomeworkResponsesInput, Prisma.StudentUncheckedCreateWithoutHomeworkResponsesInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutHomeworkResponsesInput;
    upsert?: Prisma.StudentUpsertWithoutHomeworkResponsesInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutHomeworkResponsesInput, Prisma.StudentUpdateWithoutHomeworkResponsesInput>, Prisma.StudentUncheckedUpdateWithoutHomeworkResponsesInput>;
};
export type StudentCreateNestedOneWithoutHomeworkResultsInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutHomeworkResultsInput, Prisma.StudentUncheckedCreateWithoutHomeworkResultsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutHomeworkResultsInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutHomeworkResultsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutHomeworkResultsInput, Prisma.StudentUncheckedCreateWithoutHomeworkResultsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutHomeworkResultsInput;
    upsert?: Prisma.StudentUpsertWithoutHomeworkResultsInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutHomeworkResultsInput, Prisma.StudentUpdateWithoutHomeworkResultsInput>, Prisma.StudentUncheckedUpdateWithoutHomeworkResultsInput>;
};
export type StudentCreateWithoutStudentGroupsInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    birth_date: Date | string;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutStudentInput;
    homeworkResponses?: Prisma.HomeworkResponseCreateNestedManyWithoutStudentInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutStudentGroupsInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    birth_date: Date | string;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutStudentInput;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedCreateNestedManyWithoutStudentInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutStudentGroupsInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutStudentGroupsInput, Prisma.StudentUncheckedCreateWithoutStudentGroupsInput>;
};
export type StudentUpsertWithoutStudentGroupsInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutStudentGroupsInput, Prisma.StudentUncheckedUpdateWithoutStudentGroupsInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutStudentGroupsInput, Prisma.StudentUncheckedCreateWithoutStudentGroupsInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutStudentGroupsInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutStudentGroupsInput, Prisma.StudentUncheckedUpdateWithoutStudentGroupsInput>;
};
export type StudentUpdateWithoutStudentGroupsInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    birth_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUpdateManyWithoutStudentNestedInput;
    homeworkResponses?: Prisma.HomeworkResponseUpdateManyWithoutStudentNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutStudentGroupsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    birth_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutStudentNestedInput;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedUpdateManyWithoutStudentNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateWithoutAttendancesInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    birth_date: Date | string;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupCreateNestedManyWithoutStudentInput;
    homeworkResponses?: Prisma.HomeworkResponseCreateNestedManyWithoutStudentInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutAttendancesInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    birth_date: Date | string;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedCreateNestedManyWithoutStudentInput;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedCreateNestedManyWithoutStudentInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutAttendancesInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutAttendancesInput, Prisma.StudentUncheckedCreateWithoutAttendancesInput>;
};
export type StudentUpsertWithoutAttendancesInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutAttendancesInput, Prisma.StudentUncheckedUpdateWithoutAttendancesInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutAttendancesInput, Prisma.StudentUncheckedCreateWithoutAttendancesInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutAttendancesInput, Prisma.StudentUncheckedUpdateWithoutAttendancesInput>;
};
export type StudentUpdateWithoutAttendancesInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    birth_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUpdateManyWithoutStudentNestedInput;
    homeworkResponses?: Prisma.HomeworkResponseUpdateManyWithoutStudentNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutAttendancesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    birth_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedUpdateManyWithoutStudentNestedInput;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedUpdateManyWithoutStudentNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateWithoutHomeworkResponsesInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    birth_date: Date | string;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupCreateNestedManyWithoutStudentInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutStudentInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutHomeworkResponsesInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    birth_date: Date | string;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedCreateNestedManyWithoutStudentInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutStudentInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutHomeworkResponsesInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutHomeworkResponsesInput, Prisma.StudentUncheckedCreateWithoutHomeworkResponsesInput>;
};
export type StudentUpsertWithoutHomeworkResponsesInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutHomeworkResponsesInput, Prisma.StudentUncheckedUpdateWithoutHomeworkResponsesInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutHomeworkResponsesInput, Prisma.StudentUncheckedCreateWithoutHomeworkResponsesInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutHomeworkResponsesInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutHomeworkResponsesInput, Prisma.StudentUncheckedUpdateWithoutHomeworkResponsesInput>;
};
export type StudentUpdateWithoutHomeworkResponsesInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    birth_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUpdateManyWithoutStudentNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutStudentNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutHomeworkResponsesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    birth_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedUpdateManyWithoutStudentNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutStudentNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateWithoutHomeworkResultsInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    birth_date: Date | string;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupCreateNestedManyWithoutStudentInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutStudentInput;
    homeworkResponses?: Prisma.HomeworkResponseCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutHomeworkResultsInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    birth_date: Date | string;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedCreateNestedManyWithoutStudentInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutStudentInput;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutHomeworkResultsInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutHomeworkResultsInput, Prisma.StudentUncheckedCreateWithoutHomeworkResultsInput>;
};
export type StudentUpsertWithoutHomeworkResultsInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutHomeworkResultsInput, Prisma.StudentUncheckedUpdateWithoutHomeworkResultsInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutHomeworkResultsInput, Prisma.StudentUncheckedCreateWithoutHomeworkResultsInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutHomeworkResultsInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutHomeworkResultsInput, Prisma.StudentUncheckedUpdateWithoutHomeworkResultsInput>;
};
export type StudentUpdateWithoutHomeworkResultsInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    birth_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUpdateManyWithoutStudentNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutStudentNestedInput;
    homeworkResponses?: Prisma.HomeworkResponseUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutHomeworkResultsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    birth_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentGroups?: Prisma.StudentGroupUncheckedUpdateManyWithoutStudentNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutStudentNestedInput;
    homeworkResponses?: Prisma.HomeworkResponseUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCountOutputType = {
    studentGroups: number;
    attendances: number;
    homeworkResponses: number;
    homeworkResults: number;
};
export type StudentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    studentGroups?: boolean | StudentCountOutputTypeCountStudentGroupsArgs;
    attendances?: boolean | StudentCountOutputTypeCountAttendancesArgs;
    homeworkResponses?: boolean | StudentCountOutputTypeCountHomeworkResponsesArgs;
    homeworkResults?: boolean | StudentCountOutputTypeCountHomeworkResultsArgs;
};
export type StudentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentCountOutputTypeSelect<ExtArgs> | null;
};
export type StudentCountOutputTypeCountStudentGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentGroupWhereInput;
};
export type StudentCountOutputTypeCountAttendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceWhereInput;
};
export type StudentCountOutputTypeCountHomeworkResponsesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkResponseWhereInput;
};
export type StudentCountOutputTypeCountHomeworkResultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkResultWhereInput;
};
export type StudentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    contact?: boolean;
    photo?: boolean;
    password?: boolean;
    birth_date?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    studentGroups?: boolean | Prisma.Student$studentGroupsArgs<ExtArgs>;
    attendances?: boolean | Prisma.Student$attendancesArgs<ExtArgs>;
    homeworkResponses?: boolean | Prisma.Student$homeworkResponsesArgs<ExtArgs>;
    homeworkResults?: boolean | Prisma.Student$homeworkResultsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    contact?: boolean;
    photo?: boolean;
    password?: boolean;
    birth_date?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["student"]>;
export type StudentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    contact?: boolean;
    photo?: boolean;
    password?: boolean;
    birth_date?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["student"]>;
export type StudentSelectScalar = {
    id?: boolean;
    fullName?: boolean;
    contact?: boolean;
    photo?: boolean;
    password?: boolean;
    birth_date?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type StudentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fullName" | "contact" | "photo" | "password" | "birth_date" | "status" | "created_at" | "updated_at", ExtArgs["result"]["student"]>;
export type StudentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    studentGroups?: boolean | Prisma.Student$studentGroupsArgs<ExtArgs>;
    attendances?: boolean | Prisma.Student$attendancesArgs<ExtArgs>;
    homeworkResponses?: boolean | Prisma.Student$homeworkResponsesArgs<ExtArgs>;
    homeworkResults?: boolean | Prisma.Student$homeworkResultsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StudentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type StudentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $StudentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Student";
    objects: {
        studentGroups: Prisma.$StudentGroupPayload<ExtArgs>[];
        attendances: Prisma.$AttendancePayload<ExtArgs>[];
        homeworkResponses: Prisma.$HomeworkResponsePayload<ExtArgs>[];
        homeworkResults: Prisma.$HomeworkResultPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        fullName: string;
        contact: string;
        photo: string | null;
        password: string;
        birth_date: Date;
        status: $Enums.UserStatus;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["student"]>;
    composites: {};
};
export type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentPayload, S>;
export type StudentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentCountAggregateInputType | true;
};
export interface StudentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Student'];
        meta: {
            name: 'Student';
        };
    };
    findUnique<T extends StudentFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentFindManyArgs>(args?: Prisma.SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentCreateArgs>(args: Prisma.SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentDeleteArgs>(args: Prisma.SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentUpdateArgs>(args: Prisma.SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentUpsertArgs>(args: Prisma.SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentCountArgs>(args?: Prisma.Subset<T, StudentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentCountAggregateOutputType> : number>;
    aggregate<T extends StudentAggregateArgs>(args: Prisma.Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>;
    groupBy<T extends StudentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentFieldRefs;
}
export interface Prisma__StudentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    studentGroups<T extends Prisma.Student$studentGroupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$studentGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attendances<T extends Prisma.Student$attendancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    homeworkResponses<T extends Prisma.Student$homeworkResponsesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$homeworkResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    homeworkResults<T extends Prisma.Student$homeworkResultsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$homeworkResultsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentFieldRefs {
    readonly id: Prisma.FieldRef<"Student", 'Int'>;
    readonly fullName: Prisma.FieldRef<"Student", 'String'>;
    readonly contact: Prisma.FieldRef<"Student", 'String'>;
    readonly photo: Prisma.FieldRef<"Student", 'String'>;
    readonly password: Prisma.FieldRef<"Student", 'String'>;
    readonly birth_date: Prisma.FieldRef<"Student", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Student", 'UserStatus'>;
    readonly created_at: Prisma.FieldRef<"Student", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Student", 'DateTime'>;
}
export type StudentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
};
export type StudentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type StudentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type StudentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
};
export type StudentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type Student$studentGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Student$attendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Student$homeworkResponsesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Student$homeworkResultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
};
export {};
