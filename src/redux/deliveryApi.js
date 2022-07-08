import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deliveryApi = createApi({
 reducerPath: "delivery",
 baseQuery: fetchBaseQuery({
  baseUrl: "https://6298a13ade3d7eea3c6c6089.mockapi.io/api/delivery",
 }),
 tagTypes: ["Delivery"],
 endpoints: (builder) => ({
  getDelivery: builder.query({
   query: () => `/delivery`,
   providesTags: ["Delivery"],
  }),
  getDeliveryById: builder.query({
   query: (id) => `delivery/${id}`,
   providesTags: ["Delivery"],
  }),

  addDelivery: builder.mutation({
   query: (delivery) => ({
    url: "delivery",
    method: "POST",
    body: delivery,
   }),
   invalidatesTags: ["Delivery"],
  }),
  deleteDelivery: builder.mutation({
   query: (id) => ({
    url: `delivery/${id}`,
    method: "DELETE",
   }),
   invalidatesTags: ["Delivery"],
  }),
  updateDelivery: builder.mutation({
   query: (fields) => ({
    url: `delivery/${fields.id}`,
    method: "PUT",
    body: fields,
   }),
   invalidatesTags: ["Delivery"],
  }),
 }),
});

export const {
 useGetDeliveryQuery,
 useAddDeliveryMutation,
 useDeleteDeliveryMutation,
 useGetDeliveryByIdQuery,
 useUpdateDeliveryMutation,
} = deliveryApi;
