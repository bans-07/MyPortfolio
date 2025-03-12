import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-4">
        {["About Me", "Portfolio", "Contact", "Resume"].map((item) => (
          <li key={item}>
            <NavLink
              to={item === "About Me" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? "bg-blue-500" : "text-white"}`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
