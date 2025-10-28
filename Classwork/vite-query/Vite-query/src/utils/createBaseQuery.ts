import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const createBaseQuery = (endpoint: string) => {
    return fetchBaseQuery({
        baseUrl: `https://lohika.itstep.click/api/${endpoint}`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            //headers.set('Content-Type', 'application/json');
            return headers;
        },
    });
}