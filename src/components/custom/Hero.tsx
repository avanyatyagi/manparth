import hero from "../../assets/hero.png";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    
      <div
        id="hero"
        className="xl:pt-16 pt-32 mx-auto flex xl:flex-row flex-col text-center xl:text-left items-center h-screen gap-10"
      >
        <div className="flex flex-col items-left xl:w-[60%] w-full gap-5">
          <div className="xl:text-[5.5rem] lg:text-[4.5rem] md:text-[3.5rem] text-[2.5rem] font-semibold text-custom-dark leading-none">
            Bridging Tradition and Innovation in Education <br />
            with{" "}
            <span className="text-custom-light xl:text-[5.5rem] lg:text-[4.5rem] md:text-[3.5rem] text-[2.5rem]">
              <Typewriter
                words={["Manparth"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </div>
        </div>
        <div className=" items-center justify-between xl:ml-auto text-center w-[40%]">
          <div className="flex items-center justify-center">
            <img
              src={hero}
              alt=""
           
            
              className="xl:min-w-[25rem] xl:max-w-[80rem] min-w-[20rem] max-w-[80rem]"
            />
          </div>
        </div>
        {/* <div className="xl:w-auto items-center justify-center text-center">
          <img src={hero} alt="" width={400} height={400} className="w-[30rem]" />
        </div> */}
      </div>
  );
}

export default Hero;
