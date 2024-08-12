import hero from '../../assets/hero.png';
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  return (
    <div>
      <div
        id="hero"
        className="relative xl:pt-16 pt-32 flex xl:flex-row flex-col text-center xl:text-left items-center gap-10 xl:justify-between h-screen"
      >
        <div className="flex flex-col items-left xl:w-[60%] gap-5">
          <div className="xl:text-[5rem] text-[2.5rem] font-semibold text-custom-dark leading-none">
            Bridging Tradition and Innovation in Education <br />
            with{' '}
            <span className="text-custom-light xl:text-[4.5rem] text-[2rem]">
              <Typewriter
                words={['Manparth', 'मनपार्थ']}
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
        <div className="xl:w-auto items-center justify-center text-center">
          <div className="flex items-center justify-center">
            <img src={hero} alt="" width={400} height={400} className="w-[30rem]" />
          </div>
        </div>
        {/* <div className="xl:w-auto items-center justify-center text-center">
          <img src={hero} alt="" width={400} height={400} className="w-[30rem]" />
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
