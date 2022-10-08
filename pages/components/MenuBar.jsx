import Link from "next/link";

export default function MenuBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand p-2 mx-5" href="index.html">
          <img
            src="/logos/profireiniger-text-logo.svg"
            alt="Profireiniger"
            className="img-fluid my-1"
            width="200px"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="/">
                    <a className="dropdown-item" aria-current="page">
                      All Services
                    </a>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link href="/content">
                    <a className="dropdown-item">Apartment Cleaning</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Price Calculator</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
