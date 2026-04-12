import { baseApi } from "@/redux/api/baseApi";

const recipeApi = baseApi.injectEndpoints({
    endpoints: (builder) => {
        return {

            appRetention : builder.query({
                query: () => {
                    return {
                        url: '/recipe/app-retention',
                        method: 'GET',
                    }
                }
            }),

            createRecipe: builder.mutation({
                query: (payload) => {
                    return {
                        url: '/recipe/create-recipe',
                        method: 'POST',
                        body: payload
                    }
                }
            }),
            getAllRecipeReviews: builder.query({
                query: (queryData) => {
                    return {
                        url: '/reviews/get-all-review',
                        method: 'GET',
                        params: {
                            ...queryData
                        }
                    }
                }
            }),

            getSingleRecipe: builder.query({
                query: (id) => {
                    return {
                        url: `/recipe/get-single-recipe/${id}`,
                        method: 'GET',
                    }
                }
            }),

            getSingleReviews: builder.query({
                query: (id) => {
                    return {
                        url: `/reviews/get-single-review/${id}`,
                        method: 'GET',
                    }
                }
            }),

            getAllRecipes: builder.query({
                query: (queryData) => {
                    return {
                        url: `/recipe/get-all-recipe`,
                        method: 'GET',
                        params: {
                            ...queryData
                        }
                    }
                }
            }),
            updateRecipes: builder.mutation({
                query: ({ id, data }) => {
                    return {
                        url: `/recipe/update-recipe/${id}`,
                        method: 'PATCH',
                        body: data
                    }
                }
            }),
            deleteRecipe: builder.mutation({
                query: (id) => {
                    return {
                        url: `/recipe/delete-recipe/${id}`,
                        method: 'PATCH',
                    }
                }
            }),
            videoUpload: builder.mutation({
                query: (file) => {
                    return {
                        url: `/recipe/video-upload`,
                        method: 'POST',
                        body: file
                    }
                }
            }),
            singleUpload: builder.mutation({
                query: (file) => {
                    return {
                        url: `/recipe/single-upload`,
                        method: 'POST',
                        body: file
                    }
                }
            }),
            multipleUpload: builder.mutation({
                query: (files) => {
                    return {
                        url: `/recipe/multiple-upload`,
                        method: 'POST',
                        body: files
                    }
                }
            }),
            createSkill: builder.mutation({
                query: (data) => {
                    return {
                        url: `/skill/create-skill`,
                        method: 'POST',
                        body: data
                    }
                }
            }),

            getAllSkill: builder.query({
                query: (queryData) => {
                    return {
                        url: `/skill/get-all-skill`,
                        method: 'GET',
                        params: {
                            ...queryData
                        }
                    }
                }
            }),

            getSingleSkill: builder.query({
                query: (id) => {
                    return {
                        url: `/skill/get-skill/${id}`,
                        method: 'GET',

                    }
                }
            }),
            updateSkill: builder.mutation({
                query: ({ skillsId, skillData }) => {
                    return {
                        url: `/skill/update-skill/${skillsId}`,
                        method: 'PATCH',
                        body: skillData
                    }
                }
            }),

            deleteSkill: builder.mutation({
                query: (id) => {
                    return {
                        url: `/skill/delete-skill/${id}`,
                        method: 'PATCH',
                    }
                }
            }),


        }
    }
})

export const {useAppRetentionQuery, useGetAllRecipeReviewsQuery, useGetSingleReviewsQuery, useGetAllRecipesQuery, useUpdateRecipesMutation, useDeleteRecipeMutation, useCreateRecipeMutation, useGetSingleRecipeQuery, useVideoUploadMutation, useSingleUploadMutation, useMultipleUploadMutation, useCreateSkillMutation, useGetAllSkillQuery, useGetSingleSkillQuery, useDeleteSkillMutation, useUpdateSkillMutation } = recipeApi