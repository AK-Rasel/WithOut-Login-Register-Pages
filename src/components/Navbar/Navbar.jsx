import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-300 justify-between">
            <Link to="/" className="btn btn-ghost normal-case text-xl">Login UI</Link>
            <div>
                <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;