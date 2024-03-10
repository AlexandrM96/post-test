import { IPost } from './../../interfaces/post.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IPost[] = [];

export const postElement = createSlice({
    name: 'postElement',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<IPost>) => {
            state.pop();
            state.push(action.payload)
        }
    },
})

export const postElementReducer = postElement.reducer;
export const postElementActions = postElement.actions;
