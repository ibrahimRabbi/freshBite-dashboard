import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next/client";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://ibrahim8000.sobhoy.com/api/v1",
        credentials: "include",
        prepareHeaders: (headers) => {
            const token = getCookie('token');
            headers.set("authorization", `Bearer ${token}`);
            // headers.set("Content-Type", "application/json");
        },
    }),
    tagTypes: ["auth",'shop'],
    endpoints: (builder) => {
        return {}
    },
})