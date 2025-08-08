import ConfirmIcon from "../../../Assets/Images/Icons/AppIcon/ConfirmIcon.svg";
import CancelIcon from "../../../Assets/Images/Icons/AppIcon/CancelIcon.svg";
import "./CreateMachineStyle.scss";
import { useState } from "react";
import { MachType } from "../../Models/MachType";
import { Status } from "../../Models/Status";

export function CreateMachineComponent({ onClose }) {
  const [selectMachType, setSelectMachType] = useState(
    Object.keys(MachType)[0]
  );

  const [selectStatus, setSelectStatus] = useState(Object.keys(Status)[0]);

  function handlerMachTypeChange(e) {
    setSelectMachType(e.target.value);
  }

  function handlerStatusChange(e) {
    setSelectStatus(e.target.value);
  }

  function cancelBox(e) {
    e.preventDefault();
    onClose(false);
  }

  function createMachine(e) {
    e.preventDefault();
  }

  return (
    <>
      <div onClick={cancelBox} className="create-machine-backgroud">
        <div
          onClick={(e) => e.stopPropagation()}
          className="create-machine-box"
        >
          <form action="" className="create-form">
            <div className="form-div-input">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nome da Máquina"
              />
              <hr />
            </div>

            <div>
              <img
                src={MachType[selectMachType].icon}
                alt={MachType[selectMachType].label}
                width="150px"
              />
            </div>

            <div className="div-flag-status">
              <img
                src={Status[selectStatus].icon}
                alt={Status[selectStatus].label}
              />
            </div>

            <div className="form-div-label-select">
              <label htmlFor="machtype">Tipo de Máquina:</label>
              <select
                name="machtype"
                id="machtype"
                value={selectMachType}
                onChange={handlerMachTypeChange}
              >
                {Object.entries(MachType).map(([key, { label }]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-div-label-select">
              <label htmlFor="status">Status:</label>
              <select
                name="status"
                id="status"
                value={selectStatus}
                onChange={handlerStatusChange}
              >
                {Object.entries(Status).map(([key, { label }]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-div-label-input">
              <label htmlFor="location">Localização:</label>
              <input name="location" id="location" type="text" />
            </div>

            <div className="form-div-label-date">
              <div>
                <label htmlFor="start">Baixa:</label>
                <input id="start" name="start" type="date" />
              </div>
              <div>
                <label htmlFor="return">Saída(Prev.):</label>
                <input id="return" name="return" type="date" />
              </div>
            </div>

            <div className="form-div-label-input">
              <label htmlFor="description">Descrição</label>
              <textarea name="description" id="description"></textarea>
            </div>

            <div className="form-div-button">
              <button className="btn-save" onClick={createMachine}>
                <img
                  type="submit"
                  src={ConfirmIcon}
                  alt="Icone de Confirmação"
                  width="30px"
                />
                Criar
              </button>
              <button className="btn-cancel" onClick={cancelBox}>
                <img
                  type="submit"
                  src={CancelIcon}
                  alt="Icone de Cancelamento"
                  width="30px"
                />
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
