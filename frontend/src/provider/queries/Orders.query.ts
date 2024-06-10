import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const OrdersApi = createApi({
    reducerPath: 'OrdersApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
    endpoints: (builder) => ({
        CreateOrder: builder.mutation<any, any>({
            query: (obj) => ({
                url: '/orders/create-order',
                method: 'POST',
                body: obj,
                 headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            })
        }),
         
    }),
})


export const { useCreateOrderMutation } = OrdersApi