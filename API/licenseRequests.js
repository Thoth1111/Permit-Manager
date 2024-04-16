import axios from 'axios';
import { logoutUser } from './userRequests';
import { saveLicenses } from '../redux/licenseSlice';

// Get all user licenses
const getAllLicenses = async (userData, setLoading, dispatch, setUserData) => {
    await axios.get('https://clm-server.onrender.com/license/saved',
    {
        headers: {
            Authorization: userData.refreshToken
        }
    })
    .then ((res) => {
        dispatch(saveLicenses(res.data.licenses))
    })
    .catch((err) => {
        if(err.response.status === 401 || err.response.status === 403) {
            logoutUser(userData.id_number, setLoading, dispatch, setUserData)
        }
        console.log(err)
    })
    .finally(() => {
        setLoading(false)
    })
}

// Get a single license
const getLicense = async (license_id, userData, setLoading, dispatch, setUserData) => {
    await axios.get(`https://clm-server.onrender.com/license/${license_id}`, 
    {
        headers: {
            Authorization: userData.refreshToken
        }
    })
    .then ((res) => {
        console.log(res.data.license)
    })
    .catch ((err) => {
        if(err.response.status === 401 || err.response.status === 403) {
            logoutUser(userData.id_number, setLoading, dispatch, setUserData)
        }
        console.log(err)
    })
    .finally(() => {
        setLoading(false)
    })
}

// Add a license
const addLicense = async (values, userData, setLoading, dispatch, closeForm, setUserData) => {
    await axios.post('https://clm-server.onrender.com/license/new', values,
    {
        headers: {
            Authorization: userData.refreshToken
        }
    })
    .then((res) => {
        alert('License saved')
        console.log(res.status)
        closeForm(res.data.newLicense)
    })
    .catch((err) => {
        if(err.response.status === 401 || err.response.status === 403) {
            logoutUser(userData.id_number, setLoading, dispatch, setUserData)
        }
        console.log(err)
    })
    .finally(() => {
        setLoading(false)
    })
}

// Remove a license
const deleteLicense = async (license_id, userData, setLoading, setUserData) => {
    await axios.delete(`https://clm-server.onrender.com/license/${license_id}`,
    {
        headers: {
            Authorization: userData.refreshToken
        }
    })
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        if(err.response.status === 401 || err.response.status === 403) {
            logoutUser(userData.id_number, setLoading, dispatch, setUserData)
        }
        console.log(err)
    })
    .finally (() => {
        setLoading(false)
    })
}

export { getAllLicenses, getLicense, addLicense, deleteLicense };