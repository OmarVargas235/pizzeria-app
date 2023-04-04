import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IInitState {
    isActive:boolean;
    isAlertSuccess: boolean;
    messageAlert: string;
}

const initialState: IInitState = {
    isActive: false,
    isAlertSuccess: false,
    messageAlert: '',
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setIsActiveAlert: (state, { payload }: PayloadAction<boolean>) => ({
            ...state,
            isActive: payload,
        }),
        setIsAlertSuccess: (state, { payload }: PayloadAction<boolean>) => ({
            ...state,
            isAlertSuccess: payload,
        }),
        setMessageAlert: (state, { payload }: PayloadAction<string>) => ({
            ...state,
            messageAlert: payload,
        }),
    },
})

// Action creators are generated for each case reducer function
export const { setIsActiveAlert, setIsAlertSuccess, setMessageAlert } = alertSlice.actions;

export default alertSlice.reducer;