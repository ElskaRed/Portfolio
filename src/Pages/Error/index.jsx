import './Error.scss';
import { Link } from "react-router-dom";

// Page 404

function Error() {
    return (
        <div className="error">
            <h1 className="error__h1">404</h1>
            <h2 className="error__h2">The cake was a lie.</h2>
            <Link to="/" className="error__retour">Run !</Link>
        </div>
    )
}
 
export default Error