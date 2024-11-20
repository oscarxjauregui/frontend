// En app/layout.js

"use client"; // Marcamos este componente como de cliente

import BootstrapInitializer from "./BootstrapInitializer";
import Link from "next/link";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
  };

  return (
    <html lang="en">
      <body>
        <BootstrapInitializer />
        <nav
          className="navbar fixed-top navbar-expand-lg bg-body-secondary"
          data-bs-theme=""
        >
          <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" href="/">
              <img
                src="./img/logo.png"
                alt="Logo"
                height={40}
                className="d-inline-block align-text-top"
              />
              <span className="fs-2 ps-3 fw-bold">Nombre</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="/uploadscooter">
                    Subir Articulo
                  </Link>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <Link href="/cart" className="btn position-relative me-3">
                  <i className="bi bi-cart" style={{ fontSize: "1.5rem" }}></i>
                </Link>
                <div className="dropdown">
                  <button
                    className="btn btn-black dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i
                      className="bi bi-person-circle"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {!isAuthenticated ? (
                      <>
                        <li>
                          <Link className="dropdown-item" href="/login">
                            Iniciar Sesión
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/register">
                            Registrarse
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link className="dropdown-item" href="/profile">
                            Mi Perfil
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={handleLogout}
                          >
                            Cerrar Sesión
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
