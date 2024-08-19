// import curve from "../../assets/curve.svg";
import manparth from "../../assets/logo.png"
import { mission } from "../../constants";

function Mission() {
  return (
    <section className="xl:h-screen h-full">
      <div className="flex flex-col items-center justify-center text-center pb-12 w-full">
        <h2 className="xl:text-[5rem] text-[2.5rem] font-semibold text-custom-dark leading-none">
          Our Mission to Foster Unity and Enlightenment Across Bharat
        </h2>
        {/* <div className="mt-[-60rem] mx-auto mr-20  ">
          <img
            src={curve}
            alt="Curve underline"
            className="w-[100rem]"
            width={20}
          />
        </div> */}
      </div>
      <div className="text-center xl:text-[2rem] text-[1.2rem] ">
        Manparth Bharat blends ancient wisdom with modern education to promote
        unity and holistic growth, aiming to make Bharat a Vishwa Guru through
        visionary Gurukuls.
      </div>

      <div className="flex xl:flex-row flex-col items-center justify-between gap-20 py-12">
        { mission.map((item) => (
            
     
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full bg-n-5 ">
            <img src={manparth} alt="" width={100} height={100}/>
          </div>
          <div className="flex flex-col items-center justify-center text-center font-semibold">
            <h2 className="text-[2rem] ">{item.title}</h2>
            <span className="text-[1.2rem] font-normal">{item.description}</span>
          </div>
        </div>
       ))}
      </div>
    </section>
  );
}

export default Mission;