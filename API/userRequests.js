import axios from 'axios';
const URL = process.env.CLM_API_URL;

// Register a user
const createAccount = async (values) => {
    await axios.post(`${URL}/user/register`, values)
        .then((res) => {
            console.log(res);
            if (response.status === 201) {
                // setLoading(false);
                alert(`Success! ${response.refreshtoken}`)
            //     console.log(response.status);
            //     navigation.navigate('Home');
            // } else {
                // setLoading(false);
            //     alert('Error logging in. Check server logs')
            }
            alert(res.status)
        })
        .catch((err) => {
            console.log(err);
            // setLoading(false);
        });
}

// Login a user
const loginUser = async (values) => {
    await axios.post(`${URL}/user/login`, values)
                .then((res) => {
                    console.log(res);
                    if (response.status === 200) {
                    //     setLoading(false);
                    //     console.log(response.status);
                    //     navigation.navigate('Home');
                    // } else {
                        alert(`Success! ${response.refreshtoken}`)
                        // setLoading(false);
                    //     alert('Error logging in. Check server logs')
                    }
                    alert(res.status)
                })
                .catch((err) => {
                    console.log(err);
                    // setLoading(false);
                });
}

export { createAccount, loginUser };
