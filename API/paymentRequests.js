import axios from 'axios';
import { logoutUser } from './userRequests';
import { getAllLicenses } from './licenseRequests';
// Make a Safaricom Payment
const initiatePayment = async (newPayment, userData, setLoading, dispatch, setUserData, redirectToHome) => {
    await axios.post('https://clm-server.onrender.com/payment/saf/pay', newPayment,
    {
        headers: {
            Authorization: userData.refreshToken
        }
    })
    .then((res) => {
        console.log(res.data)
        getAllLicenses(userData, setLoading, dispatch, setUserData)
        alert('Payment successful')
        redirectToHome()
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

export { initiatePayment };