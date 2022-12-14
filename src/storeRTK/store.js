import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { configureStore } from "@reduxjs/toolkit";

export const listApi = createApi({
    reducerPath: 'listApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    tagTypes: ['contact'],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => 'contact',
            providesTags: ['contact'],
        }),

        deleteList: builder.mutation({
            query: (paylode) => {
                return {
                    url: `contact/${paylode}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ['contact']
        }),

        updateList: builder.mutation({
            query: (value) => {
                console.log(value);
                return {
                    url: `contact/${value.id}`,
                    method: "PUT",
                    body: value
                }
            },
            invalidatesTags: ['contact']
        })

    })
})
export const { useFetchContactsQuery, useDeleteListMutation, useUpdateListMutation } = listApi;

export const rtkStoreList = configureStore({
    reducer: {
        [listApi.reducerPath]: listApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(listApi.middleware)
    }
})