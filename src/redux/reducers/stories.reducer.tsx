import {
    StoryInterface,
    UPDATE_STORIES,
    WATCH_STORY,
    UPDATE_MY_STORY,
    StoriesActionTypes,
    WATCH_NAME
} from "../types";

interface StoriesState {
    stories: StoryInterface[];
    myStory: StoryInterface[];
    // For Test Redux
    name: string;
}

const initialState: StoriesState = {
    stories: [],
    myStory: [],
    name: "Bosskung",
};

export function storiesReducer(
    state: StoriesState = initialState,
    action: StoriesActionTypes
): StoriesState {
    switch (action.type) {
        case UPDATE_STORIES:
        case WATCH_STORY: {
            return {
                ...state,
                stories: action.payload,
            };
        }
        case UPDATE_MY_STORY: {
            return {
                ...state,
                myStory: action.payload,
            };
        }
        case WATCH_NAME: {
            return {
                ...state,
                name: action.payload,
            };
        }
        default:
            return state;
    }
}
