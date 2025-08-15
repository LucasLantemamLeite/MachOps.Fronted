import { Image } from "../Image/Image";

export function Button({ className = null, children, icon = null, type = "submit", widthIcon = "20px", command = null }) {
  return (
    <button className={className} type={type} onClick={command ? command : undefined}>
      {icon && <Image staticImage={icon} widthIcon={widthIcon} />}
      {children}
    </button>
  );
}
