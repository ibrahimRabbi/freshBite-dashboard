import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => {
        return {
            getSingleUser: builder.query({
                query: (id) => {
                    return {
                        url: `/user/get-single-user/${id}`,
                        method: 'GET',
                    }
                },
                providesTags: ['auth']
            }),

            getMyProfile: builder.query({
                query: () => {
                    return {
                        url: '/auth/get-my-profile',
                        method: 'GET',
                    }
                },
                providesTags: ['auth']
            }),

            getAllUser: builder.query({
                query: (query) => {
                    return {
                        url: '/user/get-all-user',
                        method: 'GET',
                        params: {
                            ...query
                        }
                    }
                },
                providesTags: ['auth']
            }),

            signIn: builder.mutation({
                query: (payload) => {
                    return {
                        url: '/auth/sign-in',
                        method: 'POST',
                        body: payload
                    }
                },
                invalidatesTags: ['auth']
            }),

            sendOtp: builder.mutation({
                query: (payload) => {
                    return {
                        url: '/otp/send-otp',
                        method: 'POST',
                        body: payload
                    }
                },
                invalidatesTags: ['auth']
            }),

            verifyOtp: builder.mutation({
                query: (payload) => {
                    return {
                        url: `/otp/verify-otp`,
                        method: 'POST',
                        body: payload
                    }
                },
                invalidatesTags: ['auth']
            }),

            resetPassword: builder.mutation({
                query: (payload) => {
                    return {
                        url: `/auth/reset-password?email=${payload?.email}`,
                        method: 'PATCH',
                        body: payload?.data
                    }
                },
                invalidatesTags: ['auth']
            }),
            removeUser: builder.mutation({
                query: (id) => {
                    return {
                        url: `/user/delete-user/${id}`,
                        method: 'PATCH',
                    }
                },
                invalidatesTags: ['auth']
            }),

        }
    }
})

export const { useGetSingleUserQuery, useGetMyProfileQuery, useGetAllUserQuery, useSignInMutation, useSendOtpMutation, useVerifyOtpMutation, useResetPasswordMutation, useRemoveUserMutation } = userApi