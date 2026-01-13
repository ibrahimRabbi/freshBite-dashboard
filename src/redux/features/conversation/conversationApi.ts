import { baseApi } from "@/redux/api/baseApi";

export const conversationApi = baseApi.injectEndpoints({
    endpoints : (builder)=>{
         return {
            getConversation : builder.query({
                query: ({id})=>{
                    return {
                        url: `/conversation/get-conversation?userId=${id}`,
                        method: 'GET'
                    }
                }
            }),
            getAllActiveUser : builder.query({
                query: ()=>{
                    return {
                        url: `/conversation/get-active-user`,
                        method: 'GET'
                    }
                }
            }),
           
         }
    }
})

export const {useGetConversationQuery, useGetAllActiveUserQuery} = conversationApi