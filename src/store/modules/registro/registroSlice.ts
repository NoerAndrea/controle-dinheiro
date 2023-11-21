import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface RegistroType {
    id: string;    
    valor: number;
    descricao: string;
    type: "entrada" | "saída";
}

const initialState: RegistroType[] = [];

const registroSlice = createSlice({
    name: 'registro',    
    initialState,

    reducers:{
        addRegistro:(
            state, action: PayloadAction<RegistroType>) => {
                state.push(action.payload);

                return state;
            }
    }
});

export const {addRegistro} = registroSlice.actions;

export default registroSlice.reducer;