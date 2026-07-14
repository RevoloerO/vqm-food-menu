import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
        Meal Log
      </NavLink>
      <NavLink to="/recipes" className={({ isActive }) => (isActive ? 'active' : '')}>
        Recipes
      </NavLink>
    </nav>
  );
}
