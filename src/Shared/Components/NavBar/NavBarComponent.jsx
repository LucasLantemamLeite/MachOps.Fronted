import { useState } from "react";
import AppLogo from "../../../Assets/Images/Icons/AppIcon/AppLogo.svg";
import AddIcon from "../../../Assets/Images/Icons/AppIcon/AddIcon.svg";
import SearchIcon from "../../../Assets/Images/Icons/AppIcon/SearchIcon.svg";
import { CreateMachineComponent } from "../CreateMachine/CreateMachineComponent";
import "./NavBarStyle.scss";

export function NavBarComponent() {
  const [isOpen, setIsOpen] = useState(false);

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
          <button onClick={() => setIsOpen(true)}>
            <img src={AddIcon} alt="Icone de adicionar" width="20px" />
            Adicionar
          </button>
        </div>
      </nav>

      {isOpen && <CreateMachineComponent onClose={setIsOpen} />}
    </>
  );
}
