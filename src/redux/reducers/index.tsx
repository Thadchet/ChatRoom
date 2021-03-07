import { combineReducers } from "redux";
import { feedReducer } from "./feed.reducer";
import { storiesReducer } from "./stories.reducer";
import { userReducer } from "./user.reducer";
import { chatReducer } from "./chat.reducer";

export const rootReducer = combineReducers({
    feed: feedReducer,
    stories: storiesReducer,
    user: userReducer,
    chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
