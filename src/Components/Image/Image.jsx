import { Icons } from "../../Models/Icons";

export function Image({ staticImage = null, type, imgKey = null, className = null, widthIcon = "20px" }) {
  const src = staticImage ? Icons?.[staticImage] : type?.[imgKey];

  return <img className={className} src={src} alt={imgKey} width={widthIcon} />;
}
