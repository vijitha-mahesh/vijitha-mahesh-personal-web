import "./topbar.scss";
import { Person, Mail, Pages } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {

  return (
    <div className={"topbar " + (menuOpen && "active")} id="topBar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            .VMM{" "}
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+94 77 560 7334</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>vijithamaheshp@gmail.com</span>
          </div>
          <div className="itemContainer">
            <a href="assets/VijithaMahesh_CV.pdf" download>
              download my CV
            </a>
          </div>
        </div>
        <div className="right">
          <div class="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
