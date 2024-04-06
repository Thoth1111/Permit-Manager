import { createSelector } from '@reduxjs/toolkit';

export const filteredLicenses = createSelector(
    state => state.licenses,
    licenses => {
        const currentDate = new Date();
        const oneMonthFromNow = new Date(currentDate.setMonth(currentDate.getMonth() + 1));

        return licenses.filter(license => {
            const expiry_date = new Date(license.expiry_date);
            return expiry_date <= oneMonthFromNow;
        }).sort((a, b) => new Date(a.expiry_date) - new Date(b.expiry_date));
    }
);