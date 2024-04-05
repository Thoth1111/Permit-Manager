import axios from 'axios';

// Get all user licenses
const getAllLicenses = async (refreshToken, setLoading) => {
    await axios.get('https://clm-server.onrender.com/license/saved',
    {
        headers: {
            Authorization: refreshToken
        }
    })
    .then ((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        setLoading(false)
    })
}

// Get a single license
const getLicense = async (license_id, refreshToken, setLoading) => {
    await axios.get(`https://clm-server.onrender.com/license/${license_id}`, 
    {
        headers: {
            Authorization: refreshToken
        }
    })
    .then ((res) => {
        console.log(res.data)
    })
    .catch ((err) => {
        console.log(err)
    })
    .finally(() => {
        setLoading(false)
    })
}

// Add a license
const addLicense = async (values, refreshToken, setLoading, closeForm) => {
    await axios.post('https://clm-server.onrender.com/license/new', values,
    {
        headers: {
            Authorization: refreshToken
        }
    })
    .then((res) => {
        console.log(res.data)
        alert('License saved')
        closeForm()
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        setLoading(false)
    })
}

// Remove a license
const deleteLicense = async (license_id, refreshToken, setLoading) => {
    await axios.delete(`https://clm-server.onrender.com/license/${license_id}`,
    {
        headers: {
            Authorization: refreshToken
        }
    })
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally (() => {
        setLoading(false)
    })
}

export { getAllLicenses, getLicense, addLicense, deleteLicense };