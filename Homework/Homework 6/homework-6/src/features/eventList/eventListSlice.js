import {createSlice} from "@reduxjs/toolkit";

//Ця змінна задає початкове значення State - глобальний

const initEventState = {
    value: []
};


export const eventListSlice = createSlice({
    name: 'eventList',
    initialState: initEventState,
    //Певні методи, які уміють змінювати значення у state - своєму
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
        },
        removeById: (state, action) => {
            state.value.splice(action.payload, 1);
        }
    }
});


export const {add, removeById} = eventListSlice.actions;

//Експортуємо reducer
export default eventListSlice.reducer;
