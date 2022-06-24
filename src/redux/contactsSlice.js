import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const contactsApi = createApi({
  reduserPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62b4307da36f3a973d2e0d58.mockapi.io/api/v1/',
    tagTypes: ['Contacts'],
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),

    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),

    addContacts: builder.mutation({
      query: body => ({
        url: `contacts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  useAddContactsMutation,
} = contactsApi;
