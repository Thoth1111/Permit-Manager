const axios = require('axios');
require('dotenv').config();
const URL = process.env.CLM_API_URL;

// Register a user
const createAccount = async (values) => {
    await axios.post(`${URL}/user/register`, values)
        .then((res) => {
            console.log(res);
            // if (response.status === 201) {
            //     setLoading(false);
            //     console.log(response.status);
            //     navigation.navigate('Home');
            // } else {
                setLoading(false);
            //     alert('Error logging in. Check server logs')
            // }
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
}

// Login a user
const loginUser = async (values) => {
    await axios.post(`${URL}/user/login`, values)
                .then((res) => {
                    console.log(res);
                    // if (response.status === 200) {
                    //     setLoading(false);
                    //     console.log(response.status);
                    //     navigation.navigate('Home');
                    // } else {
                        setLoading(false);
                    //     alert('Error logging in. Check server logs')
                    // }
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
}

export { createAccount, loginUser };
