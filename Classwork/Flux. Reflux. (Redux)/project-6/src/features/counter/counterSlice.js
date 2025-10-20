import {createSlice} from "@reduxjs/toolkit";

//Ця змінна задає початкове значення State - глобальний
const initState = {
    value: 12
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    //Певні методи, які уміють змінювати значення у state - своєму
    reducers: {
        increment: (state) => {
            state.value += 1; // Значення збільшуємо на 1
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByValue: (state, action)=> {
            state.value += action.payload;
        }
    }
});

export const {increment, decrement, incrementByValue} = counterSlice.actions;

//Експортуємо reducer
export default  counterSlice.reducer;