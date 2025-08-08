import OnlineIcon from "../../Assets/Images/Icons/Flags/OnlineIcon.svg";
import OfflineIcon from "../../Assets/Images/Icons/Flags/OfflineIcon.svg";
import MaintenanceIcon from "../../Assets/Images/Icons/Flags/MaintenanceIcon.svg";

export const Status = {
  online: { label: "Operante", icon: OnlineIcon, value: 1 },
  offline: { label: "Inoperante", icon: OfflineIcon, value: 2 },
  manutencao: { label: "Manutenção", icon: MaintenanceIcon, value: 3 },
};
