import {createApi} from "@reduxjs/toolkit/query/react";
import {createBaseQuery} from "../utils/createBaseQuery.ts";


export interface ICategoryItem {
    id: number;
    title: string;
}



export const apiCategory = createApi({
    reducerPath: "apiCategory",
    baseQuery: createBaseQuery("categories"),
    endpoints: (builder) => ({
        getCategories: builder.query<ICategoryItem[], void>({
            query: () => ({
                url: 'list',
                method: 'GET'
            })
        })
    }),
});

export const {useGetCategoriesQuery} = apiCategory;