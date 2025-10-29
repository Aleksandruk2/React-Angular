import {createApi} from "@reduxjs/toolkit/query/react";
import {createBaseQuery} from "../utils/createBaseQuery.ts";

export interface IAccountRegister {
    email: string;
    firstName: string;
    secondName: string;
    photo: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export interface IAccountRegisterResult {
    token: string;
}

export const apiAccountRegister = createApi({
    reducerPath: "apiAccountRegister",
    baseQuery: createBaseQuery("Account"),
    endpoints: (builder) => ({
        postAccountRegister: builder.mutation<IAccountRegisterResult, IAccountRegister>({
            query: (body) => ({
                url: 'register',
                method: 'POST',
                body,
            })
        })
    })
});

export const {usePostAccountRegisterMutation} = apiAccountRegister;
