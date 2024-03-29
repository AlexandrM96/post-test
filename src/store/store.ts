import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './posts/postsApi';
import { postElementReducer } from './post/post.slice';

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        postElement: postElementReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(postsApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)

export type TypeRootState = ReturnType<typeof store.getState>
