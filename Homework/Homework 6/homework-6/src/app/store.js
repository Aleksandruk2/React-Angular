import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import eventListReducer from "../features/eventList/eventListSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export const storeEvent = configureStore({
    reducer: {
        eventList: eventListReducer
    }
});
