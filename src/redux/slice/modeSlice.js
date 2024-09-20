import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode: false,
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        changeMode: (state, action) => {
            console.log("inside redux", state.darkMode);
            state.darkMode = !state.darkMode
        },
    },
})

export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;