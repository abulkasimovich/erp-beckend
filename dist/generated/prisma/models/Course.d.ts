import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CourseModel = runtime.Types.Result.DefaultSelection<Prisma.$CoursePayload>;
export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
};
export type CourseAvgAggregateOutputType = {
    id: number | null;
    durationMonth: number | null;
    durationLesson: number | null;
    price: runtime.Decimal | null;
};
export type CourseSumAggregateOutputType = {
    id: number | null;
    durationMonth: number | null;
    durationLesson: number | null;
    price: runtime.Decimal | null;
};
export type CourseMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    status: $Enums.Status | null;
    durationMonth: number | null;
    durationLesson: number | null;
    level: $Enums.CourseLevel | null;
    price: runtime.Decimal | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CourseMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    status: $Enums.Status | null;
    durationMonth: number | null;
    durationLesson: number | null;
    level: $Enums.CourseLevel | null;
    price: runtime.Decimal | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CourseCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    status: number;
    durationMonth: number;
    durationLesson: number;
    level: number;
    price: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type CourseAvgAggregateInputType = {
    id?: true;
    durationMonth?: true;
    durationLesson?: true;
    price?: true;
};
export type CourseSumAggregateInputType = {
    id?: true;
    durationMonth?: true;
    durationLesson?: true;
    price?: true;
};
export type CourseMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    durationMonth?: true;
    durationLesson?: true;
    level?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
};
export type CourseMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    durationMonth?: true;
    durationLesson?: true;
    level?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
};
export type CourseCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    durationMonth?: true;
    durationLesson?: true;
    level?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type CourseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CourseCountAggregateInputType;
    _avg?: CourseAvgAggregateInputType;
    _sum?: CourseSumAggregateInputType;
    _min?: CourseMinAggregateInputType;
    _max?: CourseMaxAggregateInputType;
};
export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourse[P]> : Prisma.GetScalarType<T[P], AggregateCourse[P]>;
};
export type CourseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithAggregationInput | Prisma.CourseOrderByWithAggregationInput[];
    by: Prisma.CourseScalarFieldEnum[] | Prisma.CourseScalarFieldEnum;
    having?: Prisma.CourseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseCountAggregateInputType | true;
    _avg?: CourseAvgAggregateInputType;
    _sum?: CourseSumAggregateInputType;
    _min?: CourseMinAggregateInputType;
    _max?: CourseMaxAggregateInputType;
};
export type CourseGroupByOutputType = {
    id: number;
    name: string;
    description: string | null;
    status: $Enums.Status;
    durationMonth: number;
    durationLesson: number;
    level: $Enums.CourseLevel | null;
    price: runtime.Decimal;
    created_at: Date;
    updated_at: Date;
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
};
type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CourseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CourseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CourseGroupByOutputType[P]>;
}>>;
export type CourseWhereInput = {
    AND?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    OR?: Prisma.CourseWhereInput[];
    NOT?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    id?: Prisma.IntFilter<"Course"> | number;
    name?: Prisma.StringFilter<"Course"> | string;
    description?: Prisma.StringNullableFilter<"Course"> | string | null;
    status?: Prisma.EnumStatusFilter<"Course"> | $Enums.Status;
    durationMonth?: Prisma.IntFilter<"Course"> | number;
    durationLesson?: Prisma.IntFilter<"Course"> | number;
    level?: Prisma.EnumCourseLevelNullableFilter<"Course"> | $Enums.CourseLevel | null;
    price?: Prisma.DecimalFilter<"Course"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"Course"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Course"> | Date | string;
    groups?: Prisma.GroupListRelationFilter;
};
export type CourseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    durationMonth?: Prisma.SortOrder;
    durationLesson?: Prisma.SortOrder;
    level?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    groups?: Prisma.GroupOrderByRelationAggregateInput;
};
export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    OR?: Prisma.CourseWhereInput[];
    NOT?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    description?: Prisma.StringNullableFilter<"Course"> | string | null;
    status?: Prisma.EnumStatusFilter<"Course"> | $Enums.Status;
    durationMonth?: Prisma.IntFilter<"Course"> | number;
    durationLesson?: Prisma.IntFilter<"Course"> | number;
    level?: Prisma.EnumCourseLevelNullableFilter<"Course"> | $Enums.CourseLevel | null;
    price?: Prisma.DecimalFilter<"Course"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"Course"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Course"> | Date | string;
    groups?: Prisma.GroupListRelationFilter;
}, "id" | "name">;
export type CourseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    durationMonth?: Prisma.SortOrder;
    durationLesson?: Prisma.SortOrder;
    level?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.CourseCountOrderByAggregateInput;
    _avg?: Prisma.CourseAvgOrderByAggregateInput;
    _max?: Prisma.CourseMaxOrderByAggregateInput;
    _min?: Prisma.CourseMinOrderByAggregateInput;
    _sum?: Prisma.CourseSumOrderByAggregateInput;
};
export type CourseScalarWhereWithAggregatesInput = {
    AND?: Prisma.CourseScalarWhereWithAggregatesInput | Prisma.CourseScalarWhereWithAggregatesInput[];
    OR?: Prisma.CourseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CourseScalarWhereWithAggregatesInput | Prisma.CourseScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Course"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Course"> | string | null;
    status?: Prisma.EnumStatusWithAggregatesFilter<"Course"> | $Enums.Status;
    durationMonth?: Prisma.IntWithAggregatesFilter<"Course"> | number;
    durationLesson?: Prisma.IntWithAggregatesFilter<"Course"> | number;
    level?: Prisma.EnumCourseLevelNullableWithAggregatesFilter<"Course"> | $Enums.CourseLevel | null;
    price?: Prisma.DecimalWithAggregatesFilter<"Course"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Course"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Course"> | Date | string;
};
export type CourseCreateInput = {
    name: string;
    description?: string | null;
    status: $Enums.Status;
    durationMonth: number;
    durationLesson: number;
    level?: $Enums.CourseLevel | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateInput = {
    id?: number;
    name: string;
    description?: string | null;
    status: $Enums.Status;
    durationMonth: number;
    durationLesson: number;
    level?: $Enums.CourseLevel | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    durationMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    durationLesson?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.NullableEnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    durationMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    durationLesson?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.NullableEnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseCreateManyInput = {
    id?: number;
    name: string;
    description?: string | null;
    status: $Enums.Status;
    durationMonth: number;
    durationLesson: number;
    level?: $Enums.CourseLevel | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type CourseUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    durationMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    durationLesson?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.NullableEnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    durationMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    durationLesson?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.NullableEnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    durationMonth?: Prisma.SortOrder;
    durationLesson?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type CourseAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    durationMonth?: Prisma.SortOrder;
    durationLesson?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type CourseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    durationMonth?: Prisma.SortOrder;
    durationLesson?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type CourseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    durationMonth?: Prisma.SortOrder;
    durationLesson?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type CourseSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    durationMonth?: Prisma.SortOrder;
    durationLesson?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type CourseScalarRelationFilter = {
    is?: Prisma.CourseWhereInput;
    isNot?: Prisma.CourseWhereInput;
};
export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status;
};
export type NullableEnumCourseLevelFieldUpdateOperationsInput = {
    set?: $Enums.CourseLevel | null;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type CourseCreateNestedOneWithoutGroupsInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutGroupsInput, Prisma.CourseUncheckedCreateWithoutGroupsInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutGroupsInput;
    connect?: Prisma.CourseWhereUniqueInput;
};
export type CourseUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutGroupsInput, Prisma.CourseUncheckedCreateWithoutGroupsInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutGroupsInput;
    upsert?: Prisma.CourseUpsertWithoutGroupsInput;
    connect?: Prisma.CourseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourseUpdateToOneWithWhereWithoutGroupsInput, Prisma.CourseUpdateWithoutGroupsInput>, Prisma.CourseUncheckedUpdateWithoutGroupsInput>;
};
export type CourseCreateWithoutGroupsInput = {
    name: string;
    description?: string | null;
    status: $Enums.Status;
    durationMonth: number;
    durationLesson: number;
    level?: $Enums.CourseLevel | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type CourseUncheckedCreateWithoutGroupsInput = {
    id?: number;
    name: string;
    description?: string | null;
    status: $Enums.Status;
    durationMonth: number;
    durationLesson: number;
    level?: $Enums.CourseLevel | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type CourseCreateOrConnectWithoutGroupsInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutGroupsInput, Prisma.CourseUncheckedCreateWithoutGroupsInput>;
};
export type CourseUpsertWithoutGroupsInput = {
    update: Prisma.XOR<Prisma.CourseUpdateWithoutGroupsInput, Prisma.CourseUncheckedUpdateWithoutGroupsInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutGroupsInput, Prisma.CourseUncheckedCreateWithoutGroupsInput>;
    where?: Prisma.CourseWhereInput;
};
export type CourseUpdateToOneWithWhereWithoutGroupsInput = {
    where?: Prisma.CourseWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutGroupsInput, Prisma.CourseUncheckedUpdateWithoutGroupsInput>;
};
export type CourseUpdateWithoutGroupsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    durationMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    durationLesson?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.NullableEnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseUncheckedUpdateWithoutGroupsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    durationMonth?: Prisma.IntFieldUpdateOperationsInput | number;
    durationLesson?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.NullableEnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseCountOutputType = {
    groups: number;
};
export type CourseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    groups?: boolean | CourseCountOutputTypeCountGroupsArgs;
};
export type CourseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseCountOutputTypeSelect<ExtArgs> | null;
};
export type CourseCountOutputTypeCountGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
};
export type CourseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    durationMonth?: boolean;
    durationLesson?: boolean;
    level?: boolean;
    price?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    groups?: boolean | Prisma.Course$groupsArgs<ExtArgs>;
    _count?: boolean | Prisma.CourseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["course"]>;
export type CourseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    durationMonth?: boolean;
    durationLesson?: boolean;
    level?: boolean;
    price?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["course"]>;
export type CourseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    durationMonth?: boolean;
    durationLesson?: boolean;
    level?: boolean;
    price?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["course"]>;
export type CourseSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    durationMonth?: boolean;
    durationLesson?: boolean;
    level?: boolean;
    price?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type CourseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "status" | "durationMonth" | "durationLesson" | "level" | "price" | "created_at" | "updated_at", ExtArgs["result"]["course"]>;
export type CourseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    groups?: boolean | Prisma.Course$groupsArgs<ExtArgs>;
    _count?: boolean | Prisma.CourseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CourseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CourseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CoursePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Course";
    objects: {
        groups: Prisma.$GroupPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        description: string | null;
        status: $Enums.Status;
        durationMonth: number;
        durationLesson: number;
        level: $Enums.CourseLevel | null;
        price: runtime.Decimal;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["course"]>;
    composites: {};
};
export type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CoursePayload, S>;
export type CourseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CourseCountAggregateInputType | true;
};
export interface CourseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Course'];
        meta: {
            name: 'Course';
        };
    };
    findUnique<T extends CourseFindUniqueArgs>(args: Prisma.SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CourseFindFirstArgs>(args?: Prisma.SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CourseFindManyArgs>(args?: Prisma.SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CourseCreateArgs>(args: Prisma.SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CourseCreateManyArgs>(args?: Prisma.SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CourseDeleteArgs>(args: Prisma.SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CourseUpdateArgs>(args: Prisma.SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CourseDeleteManyArgs>(args?: Prisma.SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CourseUpdateManyArgs>(args: Prisma.SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CourseUpsertArgs>(args: Prisma.SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CourseCountArgs>(args?: Prisma.Subset<T, CourseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CourseCountAggregateOutputType> : number>;
    aggregate<T extends CourseAggregateArgs>(args: Prisma.Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>;
    groupBy<T extends CourseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CourseGroupByArgs['orderBy'];
    } : {
        orderBy?: CourseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CourseFieldRefs;
}
export interface Prisma__CourseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    groups<T extends Prisma.Course$groupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Course$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CourseFieldRefs {
    readonly id: Prisma.FieldRef<"Course", 'Int'>;
    readonly name: Prisma.FieldRef<"Course", 'String'>;
    readonly description: Prisma.FieldRef<"Course", 'String'>;
    readonly status: Prisma.FieldRef<"Course", 'Status'>;
    readonly durationMonth: Prisma.FieldRef<"Course", 'Int'>;
    readonly durationLesson: Prisma.FieldRef<"Course", 'Int'>;
    readonly level: Prisma.FieldRef<"Course", 'CourseLevel'>;
    readonly price: Prisma.FieldRef<"Course", 'Decimal'>;
    readonly created_at: Prisma.FieldRef<"Course", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Course", 'DateTime'>;
}
export type CourseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where: Prisma.CourseWhereUniqueInput;
};
export type CourseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where: Prisma.CourseWhereUniqueInput;
};
export type CourseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
export type CourseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
export type CourseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
export type CourseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseCreateInput, Prisma.CourseUncheckedCreateInput>;
};
export type CourseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CourseCreateManyInput | Prisma.CourseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CourseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    data: Prisma.CourseCreateManyInput | Prisma.CourseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CourseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseUpdateInput, Prisma.CourseUncheckedUpdateInput>;
    where: Prisma.CourseWhereUniqueInput;
};
export type CourseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CourseUpdateManyMutationInput, Prisma.CourseUncheckedUpdateManyInput>;
    where?: Prisma.CourseWhereInput;
    limit?: number;
};
export type CourseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseUpdateManyMutationInput, Prisma.CourseUncheckedUpdateManyInput>;
    where?: Prisma.CourseWhereInput;
    limit?: number;
};
export type CourseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateInput, Prisma.CourseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CourseUpdateInput, Prisma.CourseUncheckedUpdateInput>;
};
export type CourseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where: Prisma.CourseWhereUniqueInput;
};
export type CourseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
    limit?: number;
};
export type Course$groupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CourseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
};
export {};
