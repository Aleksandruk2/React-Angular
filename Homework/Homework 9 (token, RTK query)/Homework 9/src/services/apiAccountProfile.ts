import {createApi} from "@reduxjs/toolkit/query/react";
import {createBaseQuery} from "../utils/createBaseQuery.ts";

interface IProfile {
    id: number;
    email: string;
    firstName: string;
    secondName: string;
    photo: string;
    phone: string;
}

export const apiAccountProfile = createApi({
    reducerPath: "apiAccountProfile",
    baseQuery: createBaseQuery("Account"),
    endpoints: (builder) => ({
        getAccountProfile: builder.query<IProfile, void>({
            query: () => ({
                url: 'profile',
                method: 'GET'
            })
        })
    }),
});

export const {useGetAccountProfileQuery} = apiAccountProfile;