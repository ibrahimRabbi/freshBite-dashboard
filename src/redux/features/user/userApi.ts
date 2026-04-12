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

            updateProfile: builder.mutation({
                query: (payload) => {
                    return {
                        url: `/auth/update-profile`,
                        method: 'PATCH',
                        body: payload
                    }
                },
                invalidatesTags: ['auth']
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

            forgetPassword: builder.mutation({
                query: (payload) => {
                    return {
                        url: '/auth/forget-password',
                        method: 'POST',
                        body: payload
                    }
                },
                invalidatesTags: ['auth']
            }),

            verifyOtp: builder.mutation({
                query: (payload) => {
                    return {
                        url: `/auth/verify-otp`,
                        method: 'POST',
                        body: payload
                    }
                },
                invalidatesTags: ['auth']
            }),

            resetPassword: builder.mutation({
                query: (payload) => {
                    return {
                        url: `/auth/reset-password`,
                        method: 'PATCH',
                        body: payload
                    }
                },
                invalidatesTags: ['auth']
            }),

            changePassword: builder.mutation({
                query: (payload) => {
                    return {
                        url: `/auth/change-password`,
                        method: 'PATCH',
                        body: payload
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

            singleImageUpload: builder.mutation({
                query: (payload) => {
                    return {
                        url: `/recipe/single-upload`,
                        method: 'POST',
                        body: payload
                    }
                },
            }),

        }
    }
})

export const { useGetSingleUserQuery, useGetMyProfileQuery, useGetAllUserQuery, useSignInMutation, useForgetPasswordMutation, useVerifyOtpMutation, useResetPasswordMutation, useChangePasswordMutation, useRemoveUserMutation, useUpdateProfileMutation, useSingleImageUploadMutation } = userApi