import { useRef, useState, useEffect } from 'react';

import axios from '../../api/axios';
const LOGIN_URL = '/auth/login';

const Login = ({ props }) => {

    const userRef = useRef();
    const errRef = useRef();
    const [username, setUsername] = useState(props.uname ? props.uname : '');
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

            props.onSubmitProp(true, "Logged in successfully!");

        } catch (err) {
            if (!err?.response) {
                props.onSubmitProp(false, 'No Server Response');
            } else if (err.response?.data?.message) {
                console.log(err);
                props.onSubmitProp(false, err.response.data.message);
            } else {
                console.log(err);
                props.onSubmitProp(false, "Login failed");
            }
            errRef.current.focus();
        }
    }

    return (
        <>

            <section>
                <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>

                <form onSubmit={handleSubmit}>
                    <div className='row m-1'>
                        <label htmlFor="username">Username:</label>
                    </div>

                    <div className='row m-1'>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />
                    </div>

                    <div className='row m-1'>

                        <label htmlFor="password">Password:</label>
                    </div>

                    <div className='row m-1'>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                    <div className='row m-3 text-center'>

                        <button className='btn btn-dark fs-4'>Log In</button>
                    </div>
                </form>
                <div className='row m-1 text-center'>

                    <p>
                        Don't have an account?<br />
                        <span className="line">
                            {/* FIXME sign up link */}
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </div>
            </section>

        </>
    )
}

export default Login;