import { useNavigate } from 'react-router-dom';

interface NavBarProps {
    showLogout?: boolean;
}

function NavBar({ showLogout = false }: NavBarProps) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand ps-2 fw-bold fs-3" href="#">RMS</a>
                {showLogout && (
                    <button
                        onClick={handleLogout}
                        className="btn btn-outline-danger ms-auto"
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    )
}

export default NavBar;