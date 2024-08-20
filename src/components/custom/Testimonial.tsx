import { useState } from "react";
// import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "../ui/Gradient";
import Marquee from "react-fast-marquee";
import { FaLinkedin } from "react-icons/fa";
import useDeviceType from "../../hooks/useDeviceType";
import { benefits } from "../../constants";

const Benefits = () => {
  const isMobile = useDeviceType();
  return (
    <section id="testimonial" className="py-20">
      <GradientLight />
        <h2 className="text-center xl:text-[5rem] text-[3rem] font-semibold leading-none">
        Voices of Support and <br />    Satisfaction
        </h2>
      <div className=" relative z-2">
        <Marquee speed={30} pauseOnHover={!isMobile} pauseOnClick={isMobile}>
          <div className="flex xl:gap-10 gap-4 mb-10 xl:mr-10 mr-4">
            {benefits.map((item) => (
              <BenefitCard item={item} key={item.id} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BenefitCard = ({ item }: { item: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="block relative p-0.5 bg-custom-dark  rounded-[2rem] h-[11.5rem] xl:w-[20rem] w-[17rem]">
      <div className="relative bg-custom-bg z-2 flex flex-col p-[1.25rem] h-[10.5rem] bg-n-8 rounded-[2rem] overflow-hidden pointer-events-auto text-custom-dark">
        <p
          className={`text-xs text-justify text-n-3 mb-5 select-none ${
            isExpanded ? "" : "line-clamp"
          } cursor-pointer`}
          onClick={toggleExpand}
        >
          {item.text}
        </p>

        <div className="mt-auto flex flex-row xl:gap-6 gap-4 items-center">
          <div className="flex flex-col">
            <div className="mt-auto flex flex-row gap-1 items-center">
              <h5 className="text-sm font-bold select-none">{item.title}</h5>
              <a href={item.linkedin}>
                <FaLinkedin />
              </a>
            </div>
            <span className="text-xs font-thin select-none">{item.pos}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
