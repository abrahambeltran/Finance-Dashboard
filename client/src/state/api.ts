import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "./types";
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"],
    // creates an api call using url/kpi/kpis/
    // basically makes a function that gets
    // key performance indicators for the api call
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>,void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        }),
        getProducts: build.query<Array<GetProductsResponse>,void>({
            query: () => "product/products",
            providesTags: ["Products"]
        }),
        getTransactions: build.query<Array<GetTransactionsResponse>, void>({
            query: () => "transaction/transactions/",
            providesTags: ["Transactions"],
        }),
    })
})

// makes a hook
export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;