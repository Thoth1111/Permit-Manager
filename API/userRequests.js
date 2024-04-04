import axios from 'axios';
const URL = process.env.CLM_API_URL;

// Register a user
const createAccount = async (values, setLoading, sessionPersist) => {
    await axios.post(`${URL}/user/register`, values)
        .then((res) => {
            console.log(`${res.status}: ${res.message}`);
            sessionPersist({id_number: res.data.id_number, refreshToken: res.data.refreshToken});
                // navigateCallback('Login');
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
            console.log(`${res.status}: ${res.data.message}`);
            sessionPersist({id_number: res.data.id_number, refreshToken: res.data.refreshToken});
                // navigateCallback('Home');
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
}

// Logout a user
const logoutUser = async (id_number, clearUserData, setLoading) => {
    await axios.delete(`https://clm-server.onrender.com/user/logout/${id_number}`)
    .then((res) => {
        console.log(`${res.status}: ${res.data.message}`);
        clearUserData();
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        setLoading(false);
    });
}

export { createAccount, loginUser, logoutUser };
