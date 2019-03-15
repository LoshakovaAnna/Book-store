import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Каталог</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">Добавить книгу</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorites"> Избранные книги</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;