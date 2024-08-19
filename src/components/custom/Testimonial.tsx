import { useState } from "react";
// import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "../ui/Gradient";
import Marquee from "react-fast-marquee";
import { FaLinkedin } from "react-icons/fa";
import useDeviceType from "../../hooks/useDeviceType";

const Benefits = () => {
const isMobile = useDeviceType();
  return (
    <section id="testimonial">
      <GradientLight />
      <div className="container relative z-2">
     

        <Marquee speed={50} pauseOnHover={!isMobile} pauseOnClick={isMobile}>
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
    <div
      className="block relative p-0.5 bg-conic-gradient rounded-[2rem] h-[11.5rem] xl:w-[20rem] w-[17rem]"
    >
      <div className="relative z-2 flex flex-col p-[1.25rem] h-[10.5rem] bg-n-8 rounded-[2rem] overflow-hidden pointer-events-auto">
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

export const benefits = [
  {
    id: "0",
    title: "Rishabh Jain",
    text: "Working with Nishant has been an absolute pleasure. His expertise in the Web Technology and attention to detail have significantly improved our project's performance.",
    backgroundUrl: " ../../public/benefits/card-1.svg",
    iconUrl: "",
    imageUrl: "",
    pos:'Full Stack Developer',
    linkedin:""
  },
  // {
  //   id: "1",
  //   title: "",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: " ../../public/benefits/card-2.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  //   light: true,
  //   pos:'SDE-II Google',
  //   linkedin:""
  // },
  {
    id: "2",
    title: "Karan Mashru",
    text: "Nishant's technical articles are well-researched and engaging. His work has significantly increased our audience engagement and provided valuable insights into emerging technologies.",
    backgroundUrl: " ../../public/benefits/card-3.svg",
    iconUrl: "",
    imageUrl: "",
    pos:'Ex - Mentor GeeksforGeeks',
    linkedin:""
  },
  // {
  //   id: "3",
  //   title: "Fast responding",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: " ../../public/benefits/card-4.svg",
  //   iconUrl: benefitIcon4,
  //   imageUrl: benefitImage2,
  //   light: true,
  //   pos:'SDE-II Google',
  //   linkedin:""
  // },
  {
    id: "4",
    title: "Rahul Kapoor",
    text: "Nishant is an innovative developer who proposed the idea for a self-learning platform for small vendors. His creativity and technical skills significantly impacted our projects. ",
    backgroundUrl: " ../../public/benefits/card-5.svg",
    pos:'Joint Secretary, MoHUA',
    linkedin:""
  },
  {
    id: "5",
    title: "Dr. Deep Chandra",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: " ../../public/benefits/card-6.svg",
    pos:'As. Professor at VIT Bhopal',
    linkedin:""
  },
];