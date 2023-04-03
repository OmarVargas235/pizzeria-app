import { createSlice } from '@reduxjs/toolkit';

export interface IInitState {
    isOpen:boolean;
}

const initialState: IInitState = {
    isOpen: false,
}

export const openNavbarSlice = createSlice({
    name: 'openNavbar',
    initialState,
    reducers: {
        setActiveNavbar: () => ({
            isOpen: true,
        }),
        setDesactiveNavbar: () => ({
            isOpen: false,
        })
    },
})

// Action creators are generated for each case reducer function
export const { setActiveNavbar, setDesactiveNavbar } = openNavbarSlice.actions;

export default openNavbarSlice.reducer;