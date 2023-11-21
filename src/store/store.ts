import {configureStore} from '@reduxjs/toolkit'
import registroSlice from './modules/registro/registroSlice';

export const store = configureStore ({
    reducer: {
        registros: registroSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;