import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div className="header">
        <div className="logo">
          <img src="votre-logo.png" alt="Logo de l'entreprise" />
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a href="/signin">Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
    );
}