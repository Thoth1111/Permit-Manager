import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const licenseSlice = createSlice({
    name: 'licenses',
    initialState,
    reducers: {
        saveLicenses: (state, action) => {
            return [...action.payload];
        },
        addLicense: (state, action) => {
            state.push(action.payload)
        },
        // updateLicense: (state, action) => {
        //     const { _id } = action.payload
        //     const licenseIndex = state.findIndex(license => license._id === _id)
        //     if (licenseIndex !== -1) {
        //         state[licenseIndex] = action.payload
        //     }
        // },
        // deleteLicense: (state, action) => {
        //     return state.filter(license => license._id !== action.payload)
        // },
        clearLicenses: (state) => {
            return []
        }
    },
});

export const { saveLicenses, addLicense, clearLicenses } = licenseSlice.actions;
export default licenseSlice.reducer;