import "./NavBar.css";

function NavBar() {
  const islogged = false;
  return (
    <nav className="navBar">
      {islogged ? (
        <ul>
          <li>logout</li>
        </ul>
      ) : (
        <ul className="navBar-list">
          <li className="navBar-listItem">registrarse</li>
          <li className="navBar-listItem">ingresar</li>
        </ul>
      )}
    </nav>
  );
}

export { NavBar };
