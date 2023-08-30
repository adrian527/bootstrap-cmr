import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Page not found. Select page from menu at the to of the page</p>
        </div>
    );
}

export default Error;