import PartyBg from "../bgOverlays/PartyBg";
import Slider from "../slider/Slider";
import TestimonialCard from "./TetimonialCard";

const testimonials = () => {
  return (
    <div className="col-(--full-col) grid grid-cols-subgrid h-full">
      <PartyBg>
        <TestimonialCard />
        <Slider />
      </PartyBg>
    </div>
  );
};

export default testimonials;
