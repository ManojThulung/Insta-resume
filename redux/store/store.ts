import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../slice/resumeSlice";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
