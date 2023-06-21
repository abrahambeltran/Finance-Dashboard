import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse } from "./types";
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis"],
    // creates an api call using url/kpi/kpis/
    // basically makes a function that gets
    // key performance indicators for the api call
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>,void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        })
    })
})

// makes a hook
export const { useGetKpisQuery } = api;