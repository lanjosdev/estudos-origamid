// Hooks / Libs:
import { NavLink } from "react-router-dom"

// Style:
import './header.css';

export const Header = () => {
  return (
    <header className="Header">
      <nav>
        <ul className="nav_links">
          <li>
            <NavLink to='/' className='link'>
              Produtos
            </NavLink>
          </li>

          <li>
            <NavLink to='/contato' className='link'>
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}