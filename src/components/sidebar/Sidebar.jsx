import { v4 } from "uuid";
import "./styles/index.scss";

const menuLinks = ["Home", "About Us", "Features", "Contact", "Blog"];

const Sidebar = () => {
  return (
    <ul className="menu">
      {menuLinks?.map((item) => (
        <li key={v4()} className="menu-item">
          <a href="#!">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
