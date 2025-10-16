import {configureStore} from "@reduxjs/toolkit";
import eventListReducer from "../features/eventList/eventListSlice";

export const storeEvent = configureStore({
    reducer: {
        eventList: eventListReducer
    }
});
