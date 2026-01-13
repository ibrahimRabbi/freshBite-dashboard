import { baseApi } from "@/redux/api/baseApi";
import build from "next/dist/build";

const shopApi = baseApi.injectEndpoints({
    endpoints: (builder) => {
        return {
            getProduct: builder.query({
                query: ({ productId }) => {
                    return {
                        url: `shop/get-single-product/${productId}`,
                        method: 'GET'
                    }
                }
            }),

            getAllProduct: builder.query({
                query: (payload) => {
                    return {
                        url: '/shop/get-all-products',
                        method: 'GET',
                        params: payload
                    }
                },
                providesTags:['shop']
            }),

            addProductReview: builder.mutation({
                query: (payload) => {
                    return {
                        url: `/shop/add-review/${payload.id}`,
                        method: 'PATCH',
                        body: payload.data
                    }
                }
            })
        }
    }
})

export const { useGetProductQuery, useGetAllProductQuery, useAddProductReviewMutation } = shopApi