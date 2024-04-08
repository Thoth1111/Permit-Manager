import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clearLicenses } from  '../redux/licenseSlice';

// Register a user
const createAccount = async (values, setLoading, sessionPersist) => {
    await axios.post('https://clm-server.onrender.com/user/register', values)
        .then((res) => {
            sessionPersist({id_number: res.data.id_number, refreshToken: res.data.refreshToken});
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        })
}

// Login a user
const loginUser = async (values, setLoading, sessionPersist) => {
    await axios.post('https://clm-server.onrender.com/user/login', values)
        .then((res) => {
            sessionPersist({id_number: res.data.id_number, refreshToken: res.data.refreshToken});
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
}

clearUserData = async (dispatch, setUserData) => {
    await AsyncStorage.removeItem('userSessionData')
        .then(() => {
            dispatch(clearLicenses())
            setUserData(null)
        })
        .catch((err) => {
            console.log(err)
        })
}

// Logout a user
const logoutUser = async (id_number, setLoading, dispatch, setUserData) => {
    await axios.delete(`https://clm-server.onrender.com/user/logout/${id_number}`)
    .then(() => {
        clearUserData(dispatch, setUserData);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        setLoading(false);
    });
}

export { createAccount, loginUser, logoutUser };
