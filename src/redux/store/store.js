import { configureStore } from '@reduxjs/toolkit'
import modeReducer from '../slice/modeSlice'

export const store = configureStore({
    reducer: {
        mode: modeReducer,
    },
});
