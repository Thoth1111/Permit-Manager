import axios from 'axios';
const URL = process.env.CLM_API_URL;

// Register a user
const createAccount = async (values, navigateCallback, setLoading) => {
    await axios.post(`${URL}/user/register`, values)
        .then((res) => {
            console.log(`${res.status}: ${res.message}`);
            if (res.status === 201) {
                // setLoading(false);
                setLoading(false);
                navigateCallback('Login');                
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
    await axios.post('https://clm-server.onrender.com/user/login', values)
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                    //     setLoading(false);
                    //     console.log(response.status);
                    //     navigation.navigate('Home');
                    // } else {
                        alert(`Success! ${res.refreshtoken}`)
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
