import { baseApi } from "@/redux/api/baseApi";

const settingApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({

        getSettingData: builder.query({
            query: (query) => {
                
                return {
                    url: `/settings/get-setting/${query}`,
                    method: 'GET',
                }
            },
            providesTags: ['settings'],
        }),

        updateSetting: builder.mutation({
            query: ({value, queryField }) => ({
                url: `/settings/update-setting?queryField=${queryField}`,
                method: 'PATCH',
                body: { value },
            }),
            invalidatesTags: ['settings'],
        }),
    }),
});

export const {
    useGetSettingDataQuery,
    useUpdateSettingMutation,
} = settingApi;