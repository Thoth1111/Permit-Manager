import axios from 'axios';
import { logoutUser } from './userRequests';

// Make a Safaricom Payment
const initiatePayment = async (newPayment, userData, setLoading, dispatch, setUserData) => {
    const reqBody = {
        license_id: newPayment.license_id,
        phone_number: newPayment.phone_number,
        extension_plan: newPayment.extension_plan,
    }
    await axios.post('https://clm-server.onrender.com/payment/saf/pay', reqBody,
    {
        headers: {
            Authorization: userData.refreshToken
        }
    })
    .then((res) => {
        console.log('Payment initiated')
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