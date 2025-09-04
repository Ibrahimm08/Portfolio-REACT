import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <p>
          <a data-text="Home" href="">
            Home
          </a>
        </p>
        <p>
          <a data-text="Projects" href="">
            Projects
          </a>
        </p>
        <p>
          <a data-text="About" href="">
            About
          </a>
        </p>
        <p>
          <a data-text="Contact" href="">
            Contact
          </a>
        </p>
      </ul>
    </div>
  );
};

export default NavBar;
