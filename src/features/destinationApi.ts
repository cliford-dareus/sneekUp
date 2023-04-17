import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const destinationApi = createApi({
    reducerPath: 'destinationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ''
    }),
    endpoints: (builder) => ({
        getDestination: builder.query({
            query: () => ``
        }),
    }),
})

export const { useGetDestinationQuery } = destinationApi;