import { Link } from "react-router-dom";

import './Page404.scss';

const Page404 = () => {
    return (
        <div className="error-page">
            <h2 className="error-text">
                Page doesn't exist
            </h2>
            <Link
                to="/"
                className="error-link"
            >
                Back to main page
            </Link>
        </div>
    )
}

export default Page404;