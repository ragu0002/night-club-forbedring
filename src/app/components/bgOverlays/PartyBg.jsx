import Image from "next/image";

const PartyBg = ({ children }) => {
  return (
    <div
      className={`col-(--full-col) grid grid-cols-subgrid relative w-full h-full`}>
      <Image
        src="/assets/bg/footerbg.jpg"
        alt="Party background overlay"
        fill
        className="object-cover opacity-10"
      />

      <div className="relative z-10 col-(--content-col)">{children}</div>
    </div>
  );
};

export default PartyBg;
