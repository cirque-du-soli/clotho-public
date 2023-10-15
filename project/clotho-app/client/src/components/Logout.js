import { useRef, useState, useEffect } from 'react';
import useAxiosJWT from '../hooks/useAxiosJWT';

const Logout = () => {

    const errRef = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const axiosJWT = useAxiosJWT();


    useEffect(() => {
        setErrorMessage('');
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosJWT.delete('/auth/logout');
            console.log(response?.data);
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrorMessage('No Server Response');
            } else if (err.response?.data?.message) {
                console.log(err);
                setErrorMessage(err.response.data.message);
            } else {
                console.log(err);
                setErrorMessage("Logout failed");
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You have been successfully logged out</h1>
                </section>
            ) : (
                <section>

                    <span ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</span>
                    <button onClick={handleSubmit}>Logout</button>
                </section>

            )}
        </>
    )
}

export default Logout