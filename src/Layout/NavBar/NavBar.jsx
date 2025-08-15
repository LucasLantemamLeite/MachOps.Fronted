import { Image } from "../../Components/Image/Image";
import "./NavBarStyle.scss";

export function NavBar() {
  return (
    <>
      <nav>
        <div className="navbar__div-applogo">
          <Image staticImage={"AppLogoIcon"} widthIcon="150px" />
        </div>
        <div className="navbar__div-searchbox">Caixa de busca</div>
        <div className="navbar__div-addbtn">Botão adicionar</div>
      </nav>
    </>
  );
}
