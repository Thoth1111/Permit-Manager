export const validateNationalId = (national_id_number) => {
    const nationalIdRegex = /^[0-9]{8}$/;
    if (nationalIdRegex.test(national_id_number)) {
        return true;
    } else {
        console.log('National Id Number must be 8 numeric characters long');
        return false;
    };
}

export const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email)) {
        return true;
    } else {
        console.log('Invalid email address');
        return false;
    };
}

export const validatePhoneNumber = (phone_number) => {
    const phoneRegex = /^0\d{9}$/;
    if (phoneRegex.test(phone_number)) {
        return true;
    } else {
        console.log('Phone number must be 10 numeric characters long and start with 0');
        return false;
    };
}

export const validatePassword = (password, confirm_password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    if (password !== confirm_password) {
        console.log('Passwords do not match');
        return false;
    } else if (!passwordRegex.test(password)) {
        console.log('Password must be at least 8 characters long and contain at least one uppercase letter, one number and one special character');
        return false;
    }
    return true;
}