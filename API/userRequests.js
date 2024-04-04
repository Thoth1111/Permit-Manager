import axios from 'axios';

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

// Logout a user
const logoutUser = async (id_number, clearUserData, setLoading) => {
    console.log(`Logging out user with id number ${id_number}`)
    await axios.delete(`https://clm-server.onrender.com/user/logout/${id_number}`)
    .then(() => {
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
