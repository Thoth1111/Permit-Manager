import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const paymentSlice = createSlice({
    name: 'payments',
    initialState,
    reducers: {
        savePayments: (state, action) => {
            return [...action.payload];
        },
        addPayment: (state, action) => {
            state.push(action.payload)
        },
        clearPayments: (state) => {
            return []
        }
    },
});

export const { savePayments, addPayment, clearPayments } = paymentSlice.actions;
export default paymentSlice.reducer;