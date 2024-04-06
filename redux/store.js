import { configureStore } from '@reduxjs/toolkit';
import licenseReducer from './licenseSlice.js';

const store = configureStore({
    reducer: {
        licenses: licenseReducer,
        // notificationState: notificationReducer
    },
});

export default store;