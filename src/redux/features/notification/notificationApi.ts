import { baseApi } from "@/redux/api/baseApi";

export const notificationApi = baseApi.injectEndpoints({
    endpoints : (builder)=>{
         return {
            getAllNotification : builder.query({
                query : ()=>{
                    return {
                        url : '/notification/get-notification',
                        method:'GET'
                    }
                }
            })
         }
    }
})

export const {useGetAllNotificationQuery} = notificationApi