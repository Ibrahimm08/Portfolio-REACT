import "./NavBar.css";

const NavBar = ({ setPage }) => {
  return (
    <div className="navbar">
      <ul>
        <p>
          <a data-text="Home" onClick={() => setPage(0)}>
            Home
          </a>
        </p>
        <p>
          <a data-text="Projects" onClick={() => setPage(1)}>
            Projects
          </a>
        </p>
        <p>
          <a data-text="About">About</a>
        </p>
        <p>
          <a data-text="Contact">Contact</a>
        </p>
      </ul>
    </div>
  );
};

export default NavBar;
