import { useRef, useState, useEffect } from 'react';

import axios from '../../api/axios';
const LOGIN_URL = '/auth/login';

const Login = () => {

    const userRef = useRef();
    const errRef = useRef();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorMessage('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
               { username, password }
            );
            console.log(JSON.stringify(response?.data));

            const token = response?.data?.token;
            const refreshToken = response?.data?.refreshToken;
            const isAdmin = response?.data?.isAdmin;
            const userId = response?.data?.userId;
            const uname = response?.data?.username;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('refreshToken', refreshToken);
            sessionStorage.setItem('isAdmin', isAdmin);
            sessionStorage.setItem('userId', userId);
            sessionStorage.setItem('username', uname);
            console.log(sessionStorage.getItem('token'));

            setUsername('');
            setPassword('');

            setSuccess(true);
        } catch (err) {
            if (!err?.response) {

                setErrorMessage('No Server Response');
            } else if (err.response?.data?.message) {
                console.log(err);
                setErrorMessage(err.response.data.message);
            } else {
                console.log(err);
                setErrorMessage("Login failed");
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Don't have an account?<br />
                        <span className="line">
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login