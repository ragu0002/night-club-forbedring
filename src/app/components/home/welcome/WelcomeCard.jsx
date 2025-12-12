import Image from "next/image";
import WelcomeOverlay from "./WelcomeOverlay";

export default function WelcomeCard({
  imgUrl,
  altText,
  title,
  description,
  icon,
}) {
  const welcome = { title, description, icon };

  return (
    <div className="relative w-full">
      <Image
        src={`/assets/content-img/${imgUrl}`}
        width={1000}
        height={1000}
        alt={altText}
        className="w-full object-cover"
      />

      <WelcomeOverlay welcome={welcome} />
    </div>
  );
}
