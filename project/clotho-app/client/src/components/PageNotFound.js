import { useNavigate } from "react-router-dom"


const PageNotFound = () => {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const goHome = () => navigate('/');

    return (
        <article>
            <h1>Oops!</h1>
            <p>Page Not Found</p>
            <div>
            <button onClick={goBack}>Go Back</button>
            </div>
            <div>
                <button onClick={goHome}>Go to Home</button>
            </div>
        </article>
    )
};

export default PageNotFound;