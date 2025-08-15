import { Button } from "../../Ui/Button/Button";
import { Image } from "../../Ui/Image/Image";
import { Input } from "../../Ui/Input/Input";
import "./NavBarStyle.scss";

export function NavBar() {
  return (
    <>
      <nav>
        <div>
          <Image staticImage={"AppLogoIcon"} widthIcon="170px" />
        </div>
        <div className="navbar__div-searchbox">
          <div className="navbar__div-icon-wrapper">
            <Image staticImage={"SearchIcon"} widthIcon={"25px"} />
          </div>
          <Input placeholder={"Busque uma máquina aqui..."} />
        </div>
        <div className="navbar__div-addbtn">
          <Button icon={"AddIcon"} widthIcon="20px">
            Adicionar
          </Button>
        </div>
      </nav>
    </>
  );
}
