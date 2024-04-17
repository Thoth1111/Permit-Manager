import { configureStore } from '@reduxjs/toolkit';
import licenseReducer from './licenseSlice.js';
import paymentReducer from './paymentSlice.js';

const store = configureStore({
    reducer: {
        licenses: licenseReducer,
        payments: paymentReducer
        // notificationState: notificationReducer
    },
});

export default store;