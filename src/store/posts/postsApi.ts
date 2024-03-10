import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../../interfaces/post.interface';

export const postsApi = createApi({
    reducerPath: 'api/posts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: build => ({
        getPosts: build.query<IPost[], string>({
            query: (name: string) => `/${name}`
        }),
    }),
});

export const { useGetPostsQuery } = postsApi;
