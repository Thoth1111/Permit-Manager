import axios from 'axios';
import { logoutUser } from './userRequests';
import { getAllLicenses } from './licenseRequests';
import { addPayment, savePayments } from '../redux/paymentSlice';
// Make a Safaricom Payment
const initiatePayment = async (newPayment, userData, setLoading, dispatch, setUserData, redirectToHome) => {
    await axios.post('https://clm-server.onrender.com/payment/saf/pay', newPayment,
    {
        headers: {
            Authorization: userData.refreshToken
        }
    })
    .then((res) => {
        getAllLicenses(userData, setLoading, dispatch, setUserData)
        dispatch(addPayment(res.data.payment))
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

const getPayments = async (userData, setLoading, dispatch, setUserData) => {
    console.log('Getting payments')
    await axios.get('https://clm-server.onrender.com/payment/receipts',
    {
        headers: {
            Authorization: userData.refreshToken
        }
    })
    .then((res) => {
        console.log(res.status)
        dispatch(savePayments(res.data.payments))
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

export { initiatePayment, getPayments };