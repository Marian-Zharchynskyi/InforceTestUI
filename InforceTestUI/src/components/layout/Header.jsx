import "./layout.css";
import { Link, useNavigate } from "react-router-dom";
import useActions from "../../hooks/useActions";
import { useSelector } from "react-redux";

const Header = () => {
  const currentUser = useSelector((store) => store.user.currentUser);
  const isAuthenticated = useSelector((store) => store.user.isAuthenticated);
  const logoutUser = useActions().logoutUser;
  const navigate = useNavigate();

  const logoutHandler = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container header-container">
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="d-flex align-items-center">
        
            {(Array.isArray(currentUser?.role)
              ? currentUser?.role.includes("Administrator")
              : currentUser?.role === "Administrator") && (
              <div className="dropdown mx-2">
                <a
                  className="text-reset dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="badge rounded-pill badge-notification bg-danger">
                    Admin
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {adminPages.map((page) => (
                    <li key={page.path}>
                      <Link className="dropdown-item" to={page.path}>
                        {page.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {isAuthenticated ? (
              
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></a>

                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  {(Array.isArray(currentUser?.role)
                    ? currentUser?.role.includes("User")
                    : currentUser?.role === "User")
                  }

                  <li>
                    <Link className="dropdown-item" to="/urls">
                      Manage URLs
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logoutHandler}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="d-flex gap-3">
                <Link to="/login" className="btn btn-outline-primary">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary text-white">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
