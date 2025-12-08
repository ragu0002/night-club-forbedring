import Image from "next/image";

const gradientOverlay = ({ children }) => {
  return (
    <div className="col-(--full-col) grid grid-cols-subgrid relative w-full h-full">
      <Image
        src="/assets/bg/pattern_bg.jpg"
        alt="Main pattern background"
        fill
        className="bg-gray-900 object-cover"
      />
      <div className="relative z-10 col-(--content-col)">{children}</div>
    </div>
  );
};

export default gradientOverlay;
