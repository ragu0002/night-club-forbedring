import { BannerText } from "../../typography";
import Image from "next/image";

export default function eventCard({ imgUrl }) {
  const eventImg = (
    <>
      <Image
        src={`/assets/content-img/${imgUrl}`}
        width={500}
        height={500}
        alt="Event image 1"
        className="w-auto z-10 m"
      />
    </>
  );

  const eventLabel = (
    <>
      <div className="w-auto  h-10 bg-accent flex items-center justify-start gap-7 px-6">
        <BannerText
          color="white"
          text="DD./MM."
        />
        <BannerText
          color="white"
          text="00:00 PM"
        />
        <BannerText
          color="white"
          text="Location, City"
        />
      </div>
    </>
  );

  return (
    <div className="h-full w-full *:w-full ">
      {eventImg}
      {eventLabel}
    </div>
  );
}
