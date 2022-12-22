import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const studentApi = createApi({
    reducerPath: "studentApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ['contactList'],
    endpoints: (builder) => ({
        fetchStudents: builder.query({
            query: () => 'students',
        }),
        fetchContact: builder.query({
            query: () => 'contactList',
            providesTags: ['contactList'],
        }),
        loginStatus: builder.mutation({
            query: (paylode) => {
                return {
                    url: "students",
                    method: "PUT",
                    body: paylode
                }
            }
        }),
        createContact: builder.mutation({
            query: (paylode) => {
                return {
                    url: 'contactList',
                    method: 'POST',
                    body: paylode
                }
            },
            invalidatesTags: ['contactList']
        })

    })
})
export const { useFetchContactQuery, useFetchStudentsQuery, useLoginStatusMutation, useCreateContactMutation } = studentApi