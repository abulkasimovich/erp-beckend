import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TeacherModel = runtime.Types.Result.DefaultSelection<Prisma.$TeacherPayload>;
export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null;
    _avg: TeacherAvgAggregateOutputType | null;
    _sum: TeacherSumAggregateOutputType | null;
    _min: TeacherMinAggregateOutputType | null;
    _max: TeacherMaxAggregateOutputType | null;
};
export type TeacherAvgAggregateOutputType = {
    id: number | null;
    exprience: number | null;
};
export type TeacherSumAggregateOutputType = {
    id: number | null;
    exprience: number | null;
};
export type TeacherMinAggregateOutputType = {
    id: number | null;
    fullName: string | null;
    contact: string | null;
    photo: string | null;
    password: string | null;
    position: string | null;
    exprience: number | null;
    status: $Enums.UserStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type TeacherMaxAggregateOutputType = {
    id: number | null;
    fullName: string | null;
    contact: string | null;
    photo: string | null;
    password: string | null;
    position: string | null;
    exprience: number | null;
    status: $Enums.UserStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type TeacherCountAggregateOutputType = {
    id: number;
    fullName: number;
    contact: number;
    photo: number;
    password: number;
    position: number;
    exprience: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type TeacherAvgAggregateInputType = {
    id?: true;
    exprience?: true;
};
export type TeacherSumAggregateInputType = {
    id?: true;
    exprience?: true;
};
export type TeacherMinAggregateInputType = {
    id?: true;
    fullName?: true;
    contact?: true;
    photo?: true;
    password?: true;
    position?: true;
    exprience?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type TeacherMaxAggregateInputType = {
    id?: true;
    fullName?: true;
    contact?: true;
    photo?: true;
    password?: true;
    position?: true;
    exprience?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type TeacherCountAggregateInputType = {
    id?: true;
    fullName?: true;
    contact?: true;
    photo?: true;
    password?: true;
    position?: true;
    exprience?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type TeacherAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherWhereInput;
    orderBy?: Prisma.TeacherOrderByWithRelationInput | Prisma.TeacherOrderByWithRelationInput[];
    cursor?: Prisma.TeacherWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TeacherCountAggregateInputType;
    _avg?: TeacherAvgAggregateInputType;
    _sum?: TeacherSumAggregateInputType;
    _min?: TeacherMinAggregateInputType;
    _max?: TeacherMaxAggregateInputType;
};
export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
    [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTeacher[P]> : Prisma.GetScalarType<T[P], AggregateTeacher[P]>;
};
export type TeacherGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherWhereInput;
    orderBy?: Prisma.TeacherOrderByWithAggregationInput | Prisma.TeacherOrderByWithAggregationInput[];
    by: Prisma.TeacherScalarFieldEnum[] | Prisma.TeacherScalarFieldEnum;
    having?: Prisma.TeacherScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeacherCountAggregateInputType | true;
    _avg?: TeacherAvgAggregateInputType;
    _sum?: TeacherSumAggregateInputType;
    _min?: TeacherMinAggregateInputType;
    _max?: TeacherMaxAggregateInputType;
};
export type TeacherGroupByOutputType = {
    id: number;
    fullName: string;
    contact: string;
    photo: string | null;
    password: string;
    position: string;
    exprience: number;
    status: $Enums.UserStatus;
    created_at: Date;
    updated_at: Date;
    _count: TeacherCountAggregateOutputType | null;
    _avg: TeacherAvgAggregateOutputType | null;
    _sum: TeacherSumAggregateOutputType | null;
    _min: TeacherMinAggregateOutputType | null;
    _max: TeacherMaxAggregateOutputType | null;
};
type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TeacherGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TeacherGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TeacherGroupByOutputType[P]>;
}>>;
export type TeacherWhereInput = {
    AND?: Prisma.TeacherWhereInput | Prisma.TeacherWhereInput[];
    OR?: Prisma.TeacherWhereInput[];
    NOT?: Prisma.TeacherWhereInput | Prisma.TeacherWhereInput[];
    id?: Prisma.IntFilter<"Teacher"> | number;
    fullName?: Prisma.StringFilter<"Teacher"> | string;
    contact?: Prisma.StringFilter<"Teacher"> | string;
    photo?: Prisma.StringNullableFilter<"Teacher"> | string | null;
    password?: Prisma.StringFilter<"Teacher"> | string;
    position?: Prisma.StringFilter<"Teacher"> | string;
    exprience?: Prisma.IntFilter<"Teacher"> | number;
    status?: Prisma.EnumUserStatusFilter<"Teacher"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFilter<"Teacher"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Teacher"> | Date | string;
    groups?: Prisma.GroupListRelationFilter;
    attendances?: Prisma.AttendanceListRelationFilter;
    lessons?: Prisma.LessonListRelationFilter;
    homework?: Prisma.HomeworkListRelationFilter;
    lessonVideos?: Prisma.LessonVideoListRelationFilter;
    homeworkResults?: Prisma.HomeworkResultListRelationFilter;
    ratings?: Prisma.RatingListRelationFilter;
};
export type TeacherOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    exprience?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    groups?: Prisma.GroupOrderByRelationAggregateInput;
    attendances?: Prisma.AttendanceOrderByRelationAggregateInput;
    lessons?: Prisma.LessonOrderByRelationAggregateInput;
    homework?: Prisma.HomeworkOrderByRelationAggregateInput;
    lessonVideos?: Prisma.LessonVideoOrderByRelationAggregateInput;
    homeworkResults?: Prisma.HomeworkResultOrderByRelationAggregateInput;
    ratings?: Prisma.RatingOrderByRelationAggregateInput;
};
export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    contact?: string;
    AND?: Prisma.TeacherWhereInput | Prisma.TeacherWhereInput[];
    OR?: Prisma.TeacherWhereInput[];
    NOT?: Prisma.TeacherWhereInput | Prisma.TeacherWhereInput[];
    fullName?: Prisma.StringFilter<"Teacher"> | string;
    photo?: Prisma.StringNullableFilter<"Teacher"> | string | null;
    password?: Prisma.StringFilter<"Teacher"> | string;
    position?: Prisma.StringFilter<"Teacher"> | string;
    exprience?: Prisma.IntFilter<"Teacher"> | number;
    status?: Prisma.EnumUserStatusFilter<"Teacher"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFilter<"Teacher"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Teacher"> | Date | string;
    groups?: Prisma.GroupListRelationFilter;
    attendances?: Prisma.AttendanceListRelationFilter;
    lessons?: Prisma.LessonListRelationFilter;
    homework?: Prisma.HomeworkListRelationFilter;
    lessonVideos?: Prisma.LessonVideoListRelationFilter;
    homeworkResults?: Prisma.HomeworkResultListRelationFilter;
    ratings?: Prisma.RatingListRelationFilter;
}, "id" | "contact">;
export type TeacherOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    exprience?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.TeacherCountOrderByAggregateInput;
    _avg?: Prisma.TeacherAvgOrderByAggregateInput;
    _max?: Prisma.TeacherMaxOrderByAggregateInput;
    _min?: Prisma.TeacherMinOrderByAggregateInput;
    _sum?: Prisma.TeacherSumOrderByAggregateInput;
};
export type TeacherScalarWhereWithAggregatesInput = {
    AND?: Prisma.TeacherScalarWhereWithAggregatesInput | Prisma.TeacherScalarWhereWithAggregatesInput[];
    OR?: Prisma.TeacherScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TeacherScalarWhereWithAggregatesInput | Prisma.TeacherScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Teacher"> | number;
    fullName?: Prisma.StringWithAggregatesFilter<"Teacher"> | string;
    contact?: Prisma.StringWithAggregatesFilter<"Teacher"> | string;
    photo?: Prisma.StringNullableWithAggregatesFilter<"Teacher"> | string | null;
    password?: Prisma.StringWithAggregatesFilter<"Teacher"> | string;
    position?: Prisma.StringWithAggregatesFilter<"Teacher"> | string;
    exprience?: Prisma.IntWithAggregatesFilter<"Teacher"> | number;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"Teacher"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Teacher"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Teacher"> | Date | string;
};
export type TeacherCreateInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutTeacherInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutTeacherInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutTeacherInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutTeacherInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutTeacherInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutTeacherInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutTeacherInput;
};
export type TeacherUncheckedCreateInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutTeacherInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutTeacherInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutTeacherInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutTeacherInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutTeacherInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutTeacherInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherUpdateInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutTeacherNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutTeacherNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutTeacherNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutTeacherNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutTeacherNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutTeacherNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutTeacherNestedInput;
};
export type TeacherUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutTeacherNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutTeacherNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutTeacherNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutTeacherNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutTeacherNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutTeacherNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherCreateManyInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type TeacherUpdateManyMutationInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    exprience?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type TeacherAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    exprience?: Prisma.SortOrder;
};
export type TeacherMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    exprience?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type TeacherMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    photo?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    exprience?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type TeacherSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    exprience?: Prisma.SortOrder;
};
export type TeacherNullableScalarRelationFilter = {
    is?: Prisma.TeacherWhereInput | null;
    isNot?: Prisma.TeacherWhereInput | null;
};
export type TeacherCreateNestedOneWithoutGroupsInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutGroupsInput, Prisma.TeacherUncheckedCreateWithoutGroupsInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutGroupsInput;
    connect?: Prisma.TeacherWhereUniqueInput;
};
export type TeacherUpdateOneWithoutGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutGroupsInput, Prisma.TeacherUncheckedCreateWithoutGroupsInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutGroupsInput;
    upsert?: Prisma.TeacherUpsertWithoutGroupsInput;
    disconnect?: Prisma.TeacherWhereInput | boolean;
    delete?: Prisma.TeacherWhereInput | boolean;
    connect?: Prisma.TeacherWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherUpdateToOneWithWhereWithoutGroupsInput, Prisma.TeacherUpdateWithoutGroupsInput>, Prisma.TeacherUncheckedUpdateWithoutGroupsInput>;
};
export type TeacherCreateNestedOneWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutLessonsInput, Prisma.TeacherUncheckedCreateWithoutLessonsInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutLessonsInput;
    connect?: Prisma.TeacherWhereUniqueInput;
};
export type TeacherUpdateOneWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutLessonsInput, Prisma.TeacherUncheckedCreateWithoutLessonsInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutLessonsInput;
    upsert?: Prisma.TeacherUpsertWithoutLessonsInput;
    disconnect?: Prisma.TeacherWhereInput | boolean;
    delete?: Prisma.TeacherWhereInput | boolean;
    connect?: Prisma.TeacherWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherUpdateToOneWithWhereWithoutLessonsInput, Prisma.TeacherUpdateWithoutLessonsInput>, Prisma.TeacherUncheckedUpdateWithoutLessonsInput>;
};
export type TeacherCreateNestedOneWithoutAttendancesInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutAttendancesInput, Prisma.TeacherUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutAttendancesInput;
    connect?: Prisma.TeacherWhereUniqueInput;
};
export type TeacherUpdateOneWithoutAttendancesNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutAttendancesInput, Prisma.TeacherUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutAttendancesInput;
    upsert?: Prisma.TeacherUpsertWithoutAttendancesInput;
    disconnect?: Prisma.TeacherWhereInput | boolean;
    delete?: Prisma.TeacherWhereInput | boolean;
    connect?: Prisma.TeacherWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherUpdateToOneWithWhereWithoutAttendancesInput, Prisma.TeacherUpdateWithoutAttendancesInput>, Prisma.TeacherUncheckedUpdateWithoutAttendancesInput>;
};
export type TeacherCreateNestedOneWithoutHomeworkInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutHomeworkInput, Prisma.TeacherUncheckedCreateWithoutHomeworkInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutHomeworkInput;
    connect?: Prisma.TeacherWhereUniqueInput;
};
export type TeacherUpdateOneWithoutHomeworkNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutHomeworkInput, Prisma.TeacherUncheckedCreateWithoutHomeworkInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutHomeworkInput;
    upsert?: Prisma.TeacherUpsertWithoutHomeworkInput;
    disconnect?: Prisma.TeacherWhereInput | boolean;
    delete?: Prisma.TeacherWhereInput | boolean;
    connect?: Prisma.TeacherWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherUpdateToOneWithWhereWithoutHomeworkInput, Prisma.TeacherUpdateWithoutHomeworkInput>, Prisma.TeacherUncheckedUpdateWithoutHomeworkInput>;
};
export type TeacherCreateNestedOneWithoutLessonVideosInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutLessonVideosInput, Prisma.TeacherUncheckedCreateWithoutLessonVideosInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutLessonVideosInput;
    connect?: Prisma.TeacherWhereUniqueInput;
};
export type TeacherUpdateOneWithoutLessonVideosNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutLessonVideosInput, Prisma.TeacherUncheckedCreateWithoutLessonVideosInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutLessonVideosInput;
    upsert?: Prisma.TeacherUpsertWithoutLessonVideosInput;
    disconnect?: Prisma.TeacherWhereInput | boolean;
    delete?: Prisma.TeacherWhereInput | boolean;
    connect?: Prisma.TeacherWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherUpdateToOneWithWhereWithoutLessonVideosInput, Prisma.TeacherUpdateWithoutLessonVideosInput>, Prisma.TeacherUncheckedUpdateWithoutLessonVideosInput>;
};
export type TeacherCreateNestedOneWithoutHomeworkResultsInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutHomeworkResultsInput, Prisma.TeacherUncheckedCreateWithoutHomeworkResultsInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutHomeworkResultsInput;
    connect?: Prisma.TeacherWhereUniqueInput;
};
export type TeacherUpdateOneWithoutHomeworkResultsNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutHomeworkResultsInput, Prisma.TeacherUncheckedCreateWithoutHomeworkResultsInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutHomeworkResultsInput;
    upsert?: Prisma.TeacherUpsertWithoutHomeworkResultsInput;
    disconnect?: Prisma.TeacherWhereInput | boolean;
    delete?: Prisma.TeacherWhereInput | boolean;
    connect?: Prisma.TeacherWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherUpdateToOneWithWhereWithoutHomeworkResultsInput, Prisma.TeacherUpdateWithoutHomeworkResultsInput>, Prisma.TeacherUncheckedUpdateWithoutHomeworkResultsInput>;
};
export type TeacherCreateNestedOneWithoutRatingsInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutRatingsInput, Prisma.TeacherUncheckedCreateWithoutRatingsInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutRatingsInput;
    connect?: Prisma.TeacherWhereUniqueInput;
};
export type TeacherUpdateOneWithoutRatingsNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutRatingsInput, Prisma.TeacherUncheckedCreateWithoutRatingsInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutRatingsInput;
    upsert?: Prisma.TeacherUpsertWithoutRatingsInput;
    disconnect?: Prisma.TeacherWhereInput | boolean;
    delete?: Prisma.TeacherWhereInput | boolean;
    connect?: Prisma.TeacherWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherUpdateToOneWithWhereWithoutRatingsInput, Prisma.TeacherUpdateWithoutRatingsInput>, Prisma.TeacherUncheckedUpdateWithoutRatingsInput>;
};
export type TeacherCreateWithoutGroupsInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutTeacherInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutTeacherInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutTeacherInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutTeacherInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutTeacherInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutTeacherInput;
};
export type TeacherUncheckedCreateWithoutGroupsInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutTeacherInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutTeacherInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutTeacherInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutTeacherInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutTeacherInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherCreateOrConnectWithoutGroupsInput = {
    where: Prisma.TeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutGroupsInput, Prisma.TeacherUncheckedCreateWithoutGroupsInput>;
};
export type TeacherUpsertWithoutGroupsInput = {
    update: Prisma.XOR<Prisma.TeacherUpdateWithoutGroupsInput, Prisma.TeacherUncheckedUpdateWithoutGroupsInput>;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutGroupsInput, Prisma.TeacherUncheckedCreateWithoutGroupsInput>;
    where?: Prisma.TeacherWhereInput;
};
export type TeacherUpdateToOneWithWhereWithoutGroupsInput = {
    where?: Prisma.TeacherWhereInput;
    data: Prisma.XOR<Prisma.TeacherUpdateWithoutGroupsInput, Prisma.TeacherUncheckedUpdateWithoutGroupsInput>;
};
export type TeacherUpdateWithoutGroupsInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUpdateManyWithoutTeacherNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutTeacherNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutTeacherNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutTeacherNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutTeacherNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutTeacherNestedInput;
};
export type TeacherUncheckedUpdateWithoutGroupsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutTeacherNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutTeacherNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutTeacherNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutTeacherNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutTeacherNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherCreateWithoutLessonsInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutTeacherInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutTeacherInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutTeacherInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutTeacherInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutTeacherInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutTeacherInput;
};
export type TeacherUncheckedCreateWithoutLessonsInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutTeacherInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutTeacherInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutTeacherInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutTeacherInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutTeacherInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherCreateOrConnectWithoutLessonsInput = {
    where: Prisma.TeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutLessonsInput, Prisma.TeacherUncheckedCreateWithoutLessonsInput>;
};
export type TeacherUpsertWithoutLessonsInput = {
    update: Prisma.XOR<Prisma.TeacherUpdateWithoutLessonsInput, Prisma.TeacherUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutLessonsInput, Prisma.TeacherUncheckedCreateWithoutLessonsInput>;
    where?: Prisma.TeacherWhereInput;
};
export type TeacherUpdateToOneWithWhereWithoutLessonsInput = {
    where?: Prisma.TeacherWhereInput;
    data: Prisma.XOR<Prisma.TeacherUpdateWithoutLessonsInput, Prisma.TeacherUncheckedUpdateWithoutLessonsInput>;
};
export type TeacherUpdateWithoutLessonsInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutTeacherNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutTeacherNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutTeacherNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutTeacherNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutTeacherNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutTeacherNestedInput;
};
export type TeacherUncheckedUpdateWithoutLessonsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutTeacherNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutTeacherNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutTeacherNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutTeacherNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutTeacherNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherCreateWithoutAttendancesInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutTeacherInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutTeacherInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutTeacherInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutTeacherInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutTeacherInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutTeacherInput;
};
export type TeacherUncheckedCreateWithoutAttendancesInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutTeacherInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutTeacherInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutTeacherInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutTeacherInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutTeacherInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherCreateOrConnectWithoutAttendancesInput = {
    where: Prisma.TeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutAttendancesInput, Prisma.TeacherUncheckedCreateWithoutAttendancesInput>;
};
export type TeacherUpsertWithoutAttendancesInput = {
    update: Prisma.XOR<Prisma.TeacherUpdateWithoutAttendancesInput, Prisma.TeacherUncheckedUpdateWithoutAttendancesInput>;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutAttendancesInput, Prisma.TeacherUncheckedCreateWithoutAttendancesInput>;
    where?: Prisma.TeacherWhereInput;
};
export type TeacherUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: Prisma.TeacherWhereInput;
    data: Prisma.XOR<Prisma.TeacherUpdateWithoutAttendancesInput, Prisma.TeacherUncheckedUpdateWithoutAttendancesInput>;
};
export type TeacherUpdateWithoutAttendancesInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutTeacherNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutTeacherNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutTeacherNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutTeacherNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutTeacherNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutTeacherNestedInput;
};
export type TeacherUncheckedUpdateWithoutAttendancesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutTeacherNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutTeacherNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutTeacherNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutTeacherNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutTeacherNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherCreateWithoutHomeworkInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutTeacherInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutTeacherInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutTeacherInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutTeacherInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutTeacherInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutTeacherInput;
};
export type TeacherUncheckedCreateWithoutHomeworkInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutTeacherInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutTeacherInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutTeacherInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutTeacherInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutTeacherInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherCreateOrConnectWithoutHomeworkInput = {
    where: Prisma.TeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutHomeworkInput, Prisma.TeacherUncheckedCreateWithoutHomeworkInput>;
};
export type TeacherUpsertWithoutHomeworkInput = {
    update: Prisma.XOR<Prisma.TeacherUpdateWithoutHomeworkInput, Prisma.TeacherUncheckedUpdateWithoutHomeworkInput>;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutHomeworkInput, Prisma.TeacherUncheckedCreateWithoutHomeworkInput>;
    where?: Prisma.TeacherWhereInput;
};
export type TeacherUpdateToOneWithWhereWithoutHomeworkInput = {
    where?: Prisma.TeacherWhereInput;
    data: Prisma.XOR<Prisma.TeacherUpdateWithoutHomeworkInput, Prisma.TeacherUncheckedUpdateWithoutHomeworkInput>;
};
export type TeacherUpdateWithoutHomeworkInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutTeacherNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutTeacherNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutTeacherNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutTeacherNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutTeacherNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutTeacherNestedInput;
};
export type TeacherUncheckedUpdateWithoutHomeworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutTeacherNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutTeacherNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutTeacherNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutTeacherNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutTeacherNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherCreateWithoutLessonVideosInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutTeacherInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutTeacherInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutTeacherInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutTeacherInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutTeacherInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutTeacherInput;
};
export type TeacherUncheckedCreateWithoutLessonVideosInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutTeacherInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutTeacherInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutTeacherInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutTeacherInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutTeacherInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherCreateOrConnectWithoutLessonVideosInput = {
    where: Prisma.TeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutLessonVideosInput, Prisma.TeacherUncheckedCreateWithoutLessonVideosInput>;
};
export type TeacherUpsertWithoutLessonVideosInput = {
    update: Prisma.XOR<Prisma.TeacherUpdateWithoutLessonVideosInput, Prisma.TeacherUncheckedUpdateWithoutLessonVideosInput>;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutLessonVideosInput, Prisma.TeacherUncheckedCreateWithoutLessonVideosInput>;
    where?: Prisma.TeacherWhereInput;
};
export type TeacherUpdateToOneWithWhereWithoutLessonVideosInput = {
    where?: Prisma.TeacherWhereInput;
    data: Prisma.XOR<Prisma.TeacherUpdateWithoutLessonVideosInput, Prisma.TeacherUncheckedUpdateWithoutLessonVideosInput>;
};
export type TeacherUpdateWithoutLessonVideosInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutTeacherNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutTeacherNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutTeacherNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutTeacherNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutTeacherNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutTeacherNestedInput;
};
export type TeacherUncheckedUpdateWithoutLessonVideosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutTeacherNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutTeacherNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutTeacherNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutTeacherNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutTeacherNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherCreateWithoutHomeworkResultsInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutTeacherInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutTeacherInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutTeacherInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutTeacherInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutTeacherInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutTeacherInput;
};
export type TeacherUncheckedCreateWithoutHomeworkResultsInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutTeacherInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutTeacherInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutTeacherInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutTeacherInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutTeacherInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherCreateOrConnectWithoutHomeworkResultsInput = {
    where: Prisma.TeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutHomeworkResultsInput, Prisma.TeacherUncheckedCreateWithoutHomeworkResultsInput>;
};
export type TeacherUpsertWithoutHomeworkResultsInput = {
    update: Prisma.XOR<Prisma.TeacherUpdateWithoutHomeworkResultsInput, Prisma.TeacherUncheckedUpdateWithoutHomeworkResultsInput>;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutHomeworkResultsInput, Prisma.TeacherUncheckedCreateWithoutHomeworkResultsInput>;
    where?: Prisma.TeacherWhereInput;
};
export type TeacherUpdateToOneWithWhereWithoutHomeworkResultsInput = {
    where?: Prisma.TeacherWhereInput;
    data: Prisma.XOR<Prisma.TeacherUpdateWithoutHomeworkResultsInput, Prisma.TeacherUncheckedUpdateWithoutHomeworkResultsInput>;
};
export type TeacherUpdateWithoutHomeworkResultsInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutTeacherNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutTeacherNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutTeacherNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutTeacherNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutTeacherNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutTeacherNestedInput;
};
export type TeacherUncheckedUpdateWithoutHomeworkResultsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutTeacherNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutTeacherNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutTeacherNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutTeacherNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutTeacherNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherCreateWithoutRatingsInput = {
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutTeacherInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutTeacherInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutTeacherInput;
    homework?: Prisma.HomeworkCreateNestedManyWithoutTeacherInput;
    lessonVideos?: Prisma.LessonVideoCreateNestedManyWithoutTeacherInput;
    homeworkResults?: Prisma.HomeworkResultCreateNestedManyWithoutTeacherInput;
};
export type TeacherUncheckedCreateWithoutRatingsInput = {
    id?: number;
    fullName: string;
    contact: string;
    photo?: string | null;
    password: string;
    position: string;
    exprience: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutTeacherInput;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutTeacherInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutTeacherInput;
    homework?: Prisma.HomeworkUncheckedCreateNestedManyWithoutTeacherInput;
    lessonVideos?: Prisma.LessonVideoUncheckedCreateNestedManyWithoutTeacherInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherCreateOrConnectWithoutRatingsInput = {
    where: Prisma.TeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutRatingsInput, Prisma.TeacherUncheckedCreateWithoutRatingsInput>;
};
export type TeacherUpsertWithoutRatingsInput = {
    update: Prisma.XOR<Prisma.TeacherUpdateWithoutRatingsInput, Prisma.TeacherUncheckedUpdateWithoutRatingsInput>;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutRatingsInput, Prisma.TeacherUncheckedCreateWithoutRatingsInput>;
    where?: Prisma.TeacherWhereInput;
};
export type TeacherUpdateToOneWithWhereWithoutRatingsInput = {
    where?: Prisma.TeacherWhereInput;
    data: Prisma.XOR<Prisma.TeacherUpdateWithoutRatingsInput, Prisma.TeacherUncheckedUpdateWithoutRatingsInput>;
};
export type TeacherUpdateWithoutRatingsInput = {
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutTeacherNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutTeacherNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutTeacherNestedInput;
    homework?: Prisma.HomeworkUpdateManyWithoutTeacherNestedInput;
    lessonVideos?: Prisma.LessonVideoUpdateManyWithoutTeacherNestedInput;
    homeworkResults?: Prisma.HomeworkResultUpdateManyWithoutTeacherNestedInput;
};
export type TeacherUncheckedUpdateWithoutRatingsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.StringFieldUpdateOperationsInput | string;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.StringFieldUpdateOperationsInput | string;
    exprience?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutTeacherNestedInput;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutTeacherNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutTeacherNestedInput;
    homework?: Prisma.HomeworkUncheckedUpdateManyWithoutTeacherNestedInput;
    lessonVideos?: Prisma.LessonVideoUncheckedUpdateManyWithoutTeacherNestedInput;
    homeworkResults?: Prisma.HomeworkResultUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherCountOutputType = {
    groups: number;
    attendances: number;
    lessons: number;
    homework: number;
    lessonVideos: number;
    homeworkResults: number;
    ratings: number;
};
export type TeacherCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    groups?: boolean | TeacherCountOutputTypeCountGroupsArgs;
    attendances?: boolean | TeacherCountOutputTypeCountAttendancesArgs;
    lessons?: boolean | TeacherCountOutputTypeCountLessonsArgs;
    homework?: boolean | TeacherCountOutputTypeCountHomeworkArgs;
    lessonVideos?: boolean | TeacherCountOutputTypeCountLessonVideosArgs;
    homeworkResults?: boolean | TeacherCountOutputTypeCountHomeworkResultsArgs;
    ratings?: boolean | TeacherCountOutputTypeCountRatingsArgs;
};
export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherCountOutputTypeSelect<ExtArgs> | null;
};
export type TeacherCountOutputTypeCountGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
};
export type TeacherCountOutputTypeCountAttendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceWhereInput;
};
export type TeacherCountOutputTypeCountLessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
};
export type TeacherCountOutputTypeCountHomeworkArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkWhereInput;
};
export type TeacherCountOutputTypeCountLessonVideosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonVideoWhereInput;
};
export type TeacherCountOutputTypeCountHomeworkResultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HomeworkResultWhereInput;
};
export type TeacherCountOutputTypeCountRatingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatingWhereInput;
};
export type TeacherSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    contact?: boolean;
    photo?: boolean;
    password?: boolean;
    position?: boolean;
    exprience?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    groups?: boolean | Prisma.Teacher$groupsArgs<ExtArgs>;
    attendances?: boolean | Prisma.Teacher$attendancesArgs<ExtArgs>;
    lessons?: boolean | Prisma.Teacher$lessonsArgs<ExtArgs>;
    homework?: boolean | Prisma.Teacher$homeworkArgs<ExtArgs>;
    lessonVideos?: boolean | Prisma.Teacher$lessonVideosArgs<ExtArgs>;
    homeworkResults?: boolean | Prisma.Teacher$homeworkResultsArgs<ExtArgs>;
    ratings?: boolean | Prisma.Teacher$ratingsArgs<ExtArgs>;
    _count?: boolean | Prisma.TeacherCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacher"]>;
export type TeacherSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    contact?: boolean;
    photo?: boolean;
    password?: boolean;
    position?: boolean;
    exprience?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["teacher"]>;
export type TeacherSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    contact?: boolean;
    photo?: boolean;
    password?: boolean;
    position?: boolean;
    exprience?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["teacher"]>;
export type TeacherSelectScalar = {
    id?: boolean;
    fullName?: boolean;
    contact?: boolean;
    photo?: boolean;
    password?: boolean;
    position?: boolean;
    exprience?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type TeacherOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fullName" | "contact" | "photo" | "password" | "position" | "exprience" | "status" | "created_at" | "updated_at", ExtArgs["result"]["teacher"]>;
export type TeacherInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    groups?: boolean | Prisma.Teacher$groupsArgs<ExtArgs>;
    attendances?: boolean | Prisma.Teacher$attendancesArgs<ExtArgs>;
    lessons?: boolean | Prisma.Teacher$lessonsArgs<ExtArgs>;
    homework?: boolean | Prisma.Teacher$homeworkArgs<ExtArgs>;
    lessonVideos?: boolean | Prisma.Teacher$lessonVideosArgs<ExtArgs>;
    homeworkResults?: boolean | Prisma.Teacher$homeworkResultsArgs<ExtArgs>;
    ratings?: boolean | Prisma.Teacher$ratingsArgs<ExtArgs>;
    _count?: boolean | Prisma.TeacherCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TeacherIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TeacherPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Teacher";
    objects: {
        groups: Prisma.$GroupPayload<ExtArgs>[];
        attendances: Prisma.$AttendancePayload<ExtArgs>[];
        lessons: Prisma.$LessonPayload<ExtArgs>[];
        homework: Prisma.$HomeworkPayload<ExtArgs>[];
        lessonVideos: Prisma.$LessonVideoPayload<ExtArgs>[];
        homeworkResults: Prisma.$HomeworkResultPayload<ExtArgs>[];
        ratings: Prisma.$RatingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        fullName: string;
        contact: string;
        photo: string | null;
        password: string;
        position: string;
        exprience: number;
        status: $Enums.UserStatus;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["teacher"]>;
    composites: {};
};
export type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TeacherPayload, S>;
export type TeacherCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TeacherCountAggregateInputType | true;
};
export interface TeacherDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Teacher'];
        meta: {
            name: 'Teacher';
        };
    };
    findUnique<T extends TeacherFindUniqueArgs>(args: Prisma.SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TeacherFindFirstArgs>(args?: Prisma.SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TeacherFindManyArgs>(args?: Prisma.SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TeacherCreateArgs>(args: Prisma.SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TeacherCreateManyArgs>(args?: Prisma.SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TeacherDeleteArgs>(args: Prisma.SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TeacherUpdateArgs>(args: Prisma.SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TeacherDeleteManyArgs>(args?: Prisma.SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TeacherUpdateManyArgs>(args: Prisma.SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TeacherUpsertArgs>(args: Prisma.SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TeacherCountArgs>(args?: Prisma.Subset<T, TeacherCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TeacherCountAggregateOutputType> : number>;
    aggregate<T extends TeacherAggregateArgs>(args: Prisma.Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>;
    groupBy<T extends TeacherGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TeacherGroupByArgs['orderBy'];
    } : {
        orderBy?: TeacherGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TeacherFieldRefs;
}
export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    groups<T extends Prisma.Teacher$groupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Teacher$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attendances<T extends Prisma.Teacher$attendancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Teacher$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lessons<T extends Prisma.Teacher$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Teacher$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    homework<T extends Prisma.Teacher$homeworkArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Teacher$homeworkArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lessonVideos<T extends Prisma.Teacher$lessonVideosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Teacher$lessonVideosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    homeworkResults<T extends Prisma.Teacher$homeworkResultsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Teacher$homeworkResultsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HomeworkResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ratings<T extends Prisma.Teacher$ratingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Teacher$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TeacherFieldRefs {
    readonly id: Prisma.FieldRef<"Teacher", 'Int'>;
    readonly fullName: Prisma.FieldRef<"Teacher", 'String'>;
    readonly contact: Prisma.FieldRef<"Teacher", 'String'>;
    readonly photo: Prisma.FieldRef<"Teacher", 'String'>;
    readonly password: Prisma.FieldRef<"Teacher", 'String'>;
    readonly position: Prisma.FieldRef<"Teacher", 'String'>;
    readonly exprience: Prisma.FieldRef<"Teacher", 'Int'>;
    readonly status: Prisma.FieldRef<"Teacher", 'UserStatus'>;
    readonly created_at: Prisma.FieldRef<"Teacher", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Teacher", 'DateTime'>;
}
export type TeacherFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where: Prisma.TeacherWhereUniqueInput;
};
export type TeacherFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where: Prisma.TeacherWhereUniqueInput;
};
export type TeacherFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
    orderBy?: Prisma.TeacherOrderByWithRelationInput | Prisma.TeacherOrderByWithRelationInput[];
    cursor?: Prisma.TeacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeacherScalarFieldEnum | Prisma.TeacherScalarFieldEnum[];
};
export type TeacherFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
    orderBy?: Prisma.TeacherOrderByWithRelationInput | Prisma.TeacherOrderByWithRelationInput[];
    cursor?: Prisma.TeacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeacherScalarFieldEnum | Prisma.TeacherScalarFieldEnum[];
};
export type TeacherFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
    orderBy?: Prisma.TeacherOrderByWithRelationInput | Prisma.TeacherOrderByWithRelationInput[];
    cursor?: Prisma.TeacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeacherScalarFieldEnum | Prisma.TeacherScalarFieldEnum[];
};
export type TeacherCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeacherCreateInput, Prisma.TeacherUncheckedCreateInput>;
};
export type TeacherCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TeacherCreateManyInput | Prisma.TeacherCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TeacherCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    data: Prisma.TeacherCreateManyInput | Prisma.TeacherCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TeacherUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeacherUpdateInput, Prisma.TeacherUncheckedUpdateInput>;
    where: Prisma.TeacherWhereUniqueInput;
};
export type TeacherUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TeacherUpdateManyMutationInput, Prisma.TeacherUncheckedUpdateManyInput>;
    where?: Prisma.TeacherWhereInput;
    limit?: number;
};
export type TeacherUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeacherUpdateManyMutationInput, Prisma.TeacherUncheckedUpdateManyInput>;
    where?: Prisma.TeacherWhereInput;
    limit?: number;
};
export type TeacherUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where: Prisma.TeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherCreateInput, Prisma.TeacherUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TeacherUpdateInput, Prisma.TeacherUncheckedUpdateInput>;
};
export type TeacherDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where: Prisma.TeacherWhereUniqueInput;
};
export type TeacherDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherWhereInput;
    limit?: number;
};
export type Teacher$groupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Teacher$attendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Teacher$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Teacher$homeworkArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Teacher$lessonVideosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Teacher$homeworkResultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Teacher$ratingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TeacherDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
};
export {};
