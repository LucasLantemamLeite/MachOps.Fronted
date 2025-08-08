import AppLogo from "../../../Assets/Images/Icons/AppLogo.svg";
import AddIcon from "../../../Assets/Images/Icons/AddIcon.svg";
import SearchIcon from "../../../Assets/Images/Icons/SearchIcon.svg";
import "./NavBarStyle.scss";

export function NavBarComponent() {
  return (
    <>
      <nav>
        <div>
          <img src={AppLogo} alt="Logo da aplicação" width="150px" />
        </div>
        <div className="search-box">
          <div className="icon-wrapper">
            <img src={SearchIcon} alt="Icone de Busca" width="25px" />
          </div>
          <input type="text" placeholder="Busque uma máquina..." />
        </div>
        <div>
          <button>
            <img src={AddIcon} alt="Icone de adicionar" width="20px" />
            Adicionar
          </button>
        </div>
      </nav>
    </>
  );
}
