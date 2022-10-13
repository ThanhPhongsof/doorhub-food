import { Button } from "components/button";
import { Sidebar } from "components/sidebar";
import LayoutContainer from "./LayoutContainer";
import "../../modules/header/styles/index.scss";

const Header = () => {
  return (
    <header id="#header">
      <LayoutContainer>
        <div className="header-main">
          <a href="#!">
            <img srcSet="/logo.png 2x" alt="Doorhub Food" />
          </a>
          <Sidebar />
          <Button>Contact Us</Button>
        </div>
      </LayoutContainer>
    </header>
  );
};

export default Header;
