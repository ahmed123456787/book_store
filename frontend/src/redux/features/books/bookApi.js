import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import getbaseUrl from "../../../utils/baseUrl";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api/books",
  credentials: "include",
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      Headers.set("Authorization", `Bearer ${token}`);
    }
    return Headers;
  },
});

const booksApi = createApi({
  reducerPath: "bookApi",
  baseQuery,
  endpoints: (builder) => ({
    fetchAllBooks: builder.query({
      query: () => "/",
      providesTags: ["Books"],
    }),
    fetBookById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (results, error, id) => [{ type: "Books", id }],
    }),
    addBook: builder.mutation({
      query: (newBook) => ({
        url: "/book",
        body: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: "/book",
        body: "PUT",
        body: rest,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useFetchAllBooksQuery,
  useFetBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
export default booksApi;
