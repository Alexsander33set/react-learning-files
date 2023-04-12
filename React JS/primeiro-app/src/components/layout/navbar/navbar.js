import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="leftContent">LOGO</div>
        <div className="centerContent">Mid Content</div>
        <ul className="rightContent">
          <li>
            <a className="App-link">Link1</a>
          </li>
          <li>
            <a className="App-link">Link2</a>
          </li>
          <li>
            <a className="App-link">Link3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
