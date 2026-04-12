import { baseApi } from "@/redux/api/baseApi";

export const subscriptionApi = baseApi.injectEndpoints({
    endpoints: (builder) => {
        return {
            getAllSubscription: builder.query({
                query: () => {
                    return {
                        url: '/subscription',
                        method: 'GET',
                    }
                }
            }),
            getSingleSubscription: builder.query({
                query: (id) => {
                    return {
                        url: `/subscription/${id}`,
                        method: 'GET',
                    }
                }
            }),
            createSubscription: builder.mutation({
                query: (payload) => {
                    return {
                        url: `/subscription`,
                        method: 'POST',
                        body: payload
                    }
                }
            }),
            removeSubscription: builder.mutation({
                query: (id) => {
                    return {
                        url: `/subscription/${id}`,
                        method: 'DELETE',
                    }
                }
            }),
           updateSubscription: builder.mutation({
                query: ({subId, values}) => {
                    return {
                        url: `/subscription/${subId}`,
                        method: 'PATCH',
                        body : values
                    }
                }
            })
        }
    }
})

export const { useGetAllSubscriptionQuery, useGetSingleSubscriptionQuery, useCreateSubscriptionMutation, useRemoveSubscriptionMutation, useUpdateSubscriptionMutation } = subscriptionApi