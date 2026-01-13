import { baseApi } from "@/redux/api/baseApi";

export const subscriptionApi = baseApi.injectEndpoints({
    endpoints : (builder)=>{
         return {
            getSubscription : builder.query({
                query: ()=>{
                    return {
                        url: '/subscription/all-subcription',
                        method: 'GET',
                    }
                }
            }),
            purchesSubscription : builder.mutation({
                query: (payload)=>{
                    return {
                        url: `user/update-userSubcription-feild/${payload.userId}`,
                        method: 'PATCH',
                        body : payload.data
                    }
                }
            })
         }
    }
})

export const {useGetSubscriptionQuery, usePurchesSubscriptionMutation } = subscriptionApi