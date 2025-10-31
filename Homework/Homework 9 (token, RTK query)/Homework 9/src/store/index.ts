import {configureStore} from "@reduxjs/toolkit";
import {apiAccountRegister} from "../services/apiAccountRegister.ts";
import {apiAccountProfile} from "../services/apiAccountProfile.ts";

export const store = configureStore({
    reducer: {
        [apiAccountRegister.reducerPath]: apiAccountRegister.reducer,
        [apiAccountProfile.reducerPath]: apiAccountProfile.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(apiAccountRegister.middleware)
            .concat(apiAccountProfile.middleware),
});