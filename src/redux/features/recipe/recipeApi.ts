import { baseApi } from "@/redux/api/baseApi";

const recipeApi = baseApi.injectEndpoints({
    endpoints: (builder) => {
        return {
            getAllRecipeReviews: builder.query({
                query: (queryData) => {
                    return {
                        url: '/reviews/get-all-review',
                        method: 'GET',
                        params : {
                            ...queryData
                        }
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
                        params : {
                            ...queryData
                        }
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
                        params:{
                            ...queryData
                        }
                         
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

export const {useGetAllRecipeReviewsQuery, useGetSingleReviewsQuery, useGetAllRecipesQuery,useVideoUploadMutation, useSingleUploadMutation, useCreateSkillMutation,useGetAllSkillQuery,useDeleteSkillMutation} = recipeApi