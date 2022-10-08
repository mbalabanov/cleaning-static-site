import Image from 'next/image'
import Link from 'next/link'

export default function Test() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-light border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand p-2 mx-5" href="index.html"><Image src="/logos/profireiniger-text-logo.svg"
                    alt="Profireiniger" height="40px" width="200px"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dienstleistungen
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="index.html#services">Alle Dienstleistungen</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="unterhaltsreinigung.html">Apartmentreinigung</a></li>
                                <li><a className="dropdown-item" href="aussenreinigung.html">Außenreinigung</a></li>
                                <li><a className="dropdown-item" href="bauendreinigung.html">Bauendreinigung</a></li>
                                <li><a className="dropdown-item" href="bueroreinigung.html">Büroreinigung</a></li>
                                <li><a className="dropdown-item" href="fensterreinigung.html">Fensterreinigung</a></li>
                                <li><a className="dropdown-item" href="gastronomiereinigung.html">Gastronomiereinigung</a></li>
                                <li><a className="dropdown-item" href="grundreinigung.html">Grundreinigung</a></li>
                                <li><a className="dropdown-item" href="hausbetreuung.html">Hausbetreuung</a></li>
                                <li><a className="dropdown-item" href="hotelreinigung.html">Hotelreinigung</a></li>
                                <li><a className="dropdown-item" href="ordinationsreinigung.html">Ordinationsreinigung</a></li>
                                <li><a className="dropdown-item" href="stiegenhausreinigung.html">Stiegenhausreinigung</a></li>
                                <li><a className="dropdown-item" href="unterhaltsreinigung.html">Unterhaltsreinigung</a></li>
                                <li><a className="dropdown-item" href="winterdienst.html">Winterdienst</a></li>
                                <li><a className="dropdown-item" href="unterhaltsreinigung.html">Wohnungsreinigung</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="index.html#pricecalculator">Preisrechner</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="index.html#video">Video</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="index.html#kontakt">Kontakt</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="index.html#impressum">Impressum</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="agb.html">AGB</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
