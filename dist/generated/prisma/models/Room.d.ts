import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RoomModel = runtime.Types.Result.DefaultSelection<Prisma.$RoomPayload>;
export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null;
    _avg: RoomAvgAggregateOutputType | null;
    _sum: RoomSumAggregateOutputType | null;
    _min: RoomMinAggregateOutputType | null;
    _max: RoomMaxAggregateOutputType | null;
};
export type RoomAvgAggregateOutputType = {
    id: number | null;
    capacity: number | null;
};
export type RoomSumAggregateOutputType = {
    id: number | null;
    capacity: number | null;
};
export type RoomMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    capacity: number | null;
    status: $Enums.UserStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type RoomMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    capacity: number | null;
    status: $Enums.UserStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type RoomCountAggregateOutputType = {
    id: number;
    name: number;
    capacity: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type RoomAvgAggregateInputType = {
    id?: true;
    capacity?: true;
};
export type RoomSumAggregateInputType = {
    id?: true;
    capacity?: true;
};
export type RoomMinAggregateInputType = {
    id?: true;
    name?: true;
    capacity?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type RoomMaxAggregateInputType = {
    id?: true;
    name?: true;
    capacity?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type RoomCountAggregateInputType = {
    id?: true;
    name?: true;
    capacity?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type RoomAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RoomCountAggregateInputType;
    _avg?: RoomAvgAggregateInputType;
    _sum?: RoomSumAggregateInputType;
    _min?: RoomMinAggregateInputType;
    _max?: RoomMaxAggregateInputType;
};
export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
    [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRoom[P]> : Prisma.GetScalarType<T[P], AggregateRoom[P]>;
};
export type RoomGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithAggregationInput | Prisma.RoomOrderByWithAggregationInput[];
    by: Prisma.RoomScalarFieldEnum[] | Prisma.RoomScalarFieldEnum;
    having?: Prisma.RoomScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoomCountAggregateInputType | true;
    _avg?: RoomAvgAggregateInputType;
    _sum?: RoomSumAggregateInputType;
    _min?: RoomMinAggregateInputType;
    _max?: RoomMaxAggregateInputType;
};
export type RoomGroupByOutputType = {
    id: number;
    name: string;
    capacity: number;
    status: $Enums.UserStatus;
    created_at: Date;
    updated_at: Date;
    _count: RoomCountAggregateOutputType | null;
    _avg: RoomAvgAggregateOutputType | null;
    _sum: RoomSumAggregateOutputType | null;
    _min: RoomMinAggregateOutputType | null;
    _max: RoomMaxAggregateOutputType | null;
};
type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RoomGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RoomGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RoomGroupByOutputType[P]>;
}>>;
export type RoomWhereInput = {
    AND?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    OR?: Prisma.RoomWhereInput[];
    NOT?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    id?: Prisma.IntFilter<"Room"> | number;
    name?: Prisma.StringFilter<"Room"> | string;
    capacity?: Prisma.IntFilter<"Room"> | number;
    status?: Prisma.EnumUserStatusFilter<"Room"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFilter<"Room"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Room"> | Date | string;
    groups?: Prisma.GroupListRelationFilter;
};
export type RoomOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    groups?: Prisma.GroupOrderByRelationAggregateInput;
};
export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    OR?: Prisma.RoomWhereInput[];
    NOT?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    capacity?: Prisma.IntFilter<"Room"> | number;
    status?: Prisma.EnumUserStatusFilter<"Room"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFilter<"Room"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Room"> | Date | string;
    groups?: Prisma.GroupListRelationFilter;
}, "id" | "name">;
export type RoomOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.RoomCountOrderByAggregateInput;
    _avg?: Prisma.RoomAvgOrderByAggregateInput;
    _max?: Prisma.RoomMaxOrderByAggregateInput;
    _min?: Prisma.RoomMinOrderByAggregateInput;
    _sum?: Prisma.RoomSumOrderByAggregateInput;
};
export type RoomScalarWhereWithAggregatesInput = {
    AND?: Prisma.RoomScalarWhereWithAggregatesInput | Prisma.RoomScalarWhereWithAggregatesInput[];
    OR?: Prisma.RoomScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RoomScalarWhereWithAggregatesInput | Prisma.RoomScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Room"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Room"> | string;
    capacity?: Prisma.IntWithAggregatesFilter<"Room"> | number;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"Room"> | $Enums.UserStatus;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Room"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Room"> | Date | string;
};
export type RoomCreateInput = {
    name: string;
    capacity: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupCreateNestedManyWithoutRoomInput;
};
export type RoomUncheckedCreateInput = {
    id?: number;
    name: string;
    capacity: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutRoomInput;
};
export type RoomUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUpdateManyWithoutRoomNestedInput;
};
export type RoomUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutRoomNestedInput;
};
export type RoomCreateManyInput = {
    id?: number;
    name: string;
    capacity: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RoomUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RoomAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
};
export type RoomMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RoomMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type RoomSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
};
export type RoomScalarRelationFilter = {
    is?: Prisma.RoomWhereInput;
    isNot?: Prisma.RoomWhereInput;
};
export type RoomCreateNestedOneWithoutGroupsInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutGroupsInput, Prisma.RoomUncheckedCreateWithoutGroupsInput>;
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutGroupsInput;
    connect?: Prisma.RoomWhereUniqueInput;
};
export type RoomUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutGroupsInput, Prisma.RoomUncheckedCreateWithoutGroupsInput>;
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutGroupsInput;
    upsert?: Prisma.RoomUpsertWithoutGroupsInput;
    connect?: Prisma.RoomWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RoomUpdateToOneWithWhereWithoutGroupsInput, Prisma.RoomUpdateWithoutGroupsInput>, Prisma.RoomUncheckedUpdateWithoutGroupsInput>;
};
export type RoomCreateWithoutGroupsInput = {
    name: string;
    capacity: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RoomUncheckedCreateWithoutGroupsInput = {
    id?: number;
    name: string;
    capacity: number;
    status?: $Enums.UserStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type RoomCreateOrConnectWithoutGroupsInput = {
    where: Prisma.RoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoomCreateWithoutGroupsInput, Prisma.RoomUncheckedCreateWithoutGroupsInput>;
};
export type RoomUpsertWithoutGroupsInput = {
    update: Prisma.XOR<Prisma.RoomUpdateWithoutGroupsInput, Prisma.RoomUncheckedUpdateWithoutGroupsInput>;
    create: Prisma.XOR<Prisma.RoomCreateWithoutGroupsInput, Prisma.RoomUncheckedCreateWithoutGroupsInput>;
    where?: Prisma.RoomWhereInput;
};
export type RoomUpdateToOneWithWhereWithoutGroupsInput = {
    where?: Prisma.RoomWhereInput;
    data: Prisma.XOR<Prisma.RoomUpdateWithoutGroupsInput, Prisma.RoomUncheckedUpdateWithoutGroupsInput>;
};
export type RoomUpdateWithoutGroupsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomUncheckedUpdateWithoutGroupsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomCountOutputType = {
    groups: number;
};
export type RoomCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    groups?: boolean | RoomCountOutputTypeCountGroupsArgs;
};
export type RoomCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomCountOutputTypeSelect<ExtArgs> | null;
};
export type RoomCountOutputTypeCountGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
};
export type RoomSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    capacity?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    groups?: boolean | Prisma.Room$groupsArgs<ExtArgs>;
    _count?: boolean | Prisma.RoomCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["room"]>;
export type RoomSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    capacity?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["room"]>;
export type RoomSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    capacity?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["room"]>;
export type RoomSelectScalar = {
    id?: boolean;
    name?: boolean;
    capacity?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type RoomOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "capacity" | "status" | "created_at" | "updated_at", ExtArgs["result"]["room"]>;
export type RoomInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    groups?: boolean | Prisma.Room$groupsArgs<ExtArgs>;
    _count?: boolean | Prisma.RoomCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RoomIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RoomIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RoomPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Room";
    objects: {
        groups: Prisma.$GroupPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        capacity: number;
        status: $Enums.UserStatus;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["room"]>;
    composites: {};
};
export type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RoomPayload, S>;
export type RoomCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoomCountAggregateInputType | true;
};
export interface RoomDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Room'];
        meta: {
            name: 'Room';
        };
    };
    findUnique<T extends RoomFindUniqueArgs>(args: Prisma.SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RoomFindFirstArgs>(args?: Prisma.SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RoomFindManyArgs>(args?: Prisma.SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RoomCreateArgs>(args: Prisma.SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RoomCreateManyArgs>(args?: Prisma.SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RoomDeleteArgs>(args: Prisma.SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RoomUpdateArgs>(args: Prisma.SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RoomDeleteManyArgs>(args?: Prisma.SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RoomUpdateManyArgs>(args: Prisma.SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RoomUpsertArgs>(args: Prisma.SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RoomCountArgs>(args?: Prisma.Subset<T, RoomCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RoomCountAggregateOutputType> : number>;
    aggregate<T extends RoomAggregateArgs>(args: Prisma.Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>;
    groupBy<T extends RoomGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RoomGroupByArgs['orderBy'];
    } : {
        orderBy?: RoomGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RoomFieldRefs;
}
export interface Prisma__RoomClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    groups<T extends Prisma.Room$groupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Room$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RoomFieldRefs {
    readonly id: Prisma.FieldRef<"Room", 'Int'>;
    readonly name: Prisma.FieldRef<"Room", 'String'>;
    readonly capacity: Prisma.FieldRef<"Room", 'Int'>;
    readonly status: Prisma.FieldRef<"Room", 'UserStatus'>;
    readonly created_at: Prisma.FieldRef<"Room", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Room", 'DateTime'>;
}
export type RoomFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomScalarFieldEnum | Prisma.RoomScalarFieldEnum[];
};
export type RoomFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomScalarFieldEnum | Prisma.RoomScalarFieldEnum[];
};
export type RoomFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomScalarFieldEnum | Prisma.RoomScalarFieldEnum[];
};
export type RoomCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoomCreateInput, Prisma.RoomUncheckedCreateInput>;
};
export type RoomCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RoomCreateManyInput | Prisma.RoomCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RoomCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    data: Prisma.RoomCreateManyInput | Prisma.RoomCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RoomUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoomUpdateInput, Prisma.RoomUncheckedUpdateInput>;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RoomUpdateManyMutationInput, Prisma.RoomUncheckedUpdateManyInput>;
    where?: Prisma.RoomWhereInput;
    limit?: number;
};
export type RoomUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoomUpdateManyMutationInput, Prisma.RoomUncheckedUpdateManyInput>;
    where?: Prisma.RoomWhereInput;
    limit?: number;
};
export type RoomUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoomCreateInput, Prisma.RoomUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RoomUpdateInput, Prisma.RoomUncheckedUpdateInput>;
};
export type RoomDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoomWhereInput;
    limit?: number;
};
export type Room$groupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RoomDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
};
export {};
