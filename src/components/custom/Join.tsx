import { joinUs } from "../../constants/index";
function Join() {
  return (
    <section className="w-full h-screen flex xl:flex-row flex-col xl:justify-between items-center xl:gap-10 gap-20">
      <div className="xl:w-[40%] gap-5 flex flex-col">
        <h1 className="2xl:text-[7rem] xl:text-[5rem] lg:tet-[4rem] md:text-[3rem] text-[3.2rem] text-center xl:text-left leading-none font-bold">
          Why Join Us
        </h1>
        <span className="xl:text-[1.5rem] text-[1.2rem] text-left font-medium ">
          Join us in our journey to create a brighter future for India and the
          world. Together, let's transcend boundaries, bridge divides, and build
          a more enlightened and compassionate society. With Manparth, the
          journey towards realizing Bharat as a Vishwa Guru begins today.
        </span>
      </div>
      <div className="flex flex-col xl:gap-10 justify-end items-end md:block">
        {/* <img src={team} alt="" className="w-[40rem] xl:ml-auto" draggable="false"onContextMenu={(e) => e.preventDefault()}
      /> */}

<div className="flex flex-col justify-between xl:gap-20 gap-10 ">
      {joinUs.map((item) => (
        <div className="flex flex-row gap-5 items-center" key={item.id} >
          <div>
            <img src={item.logo} alt="" width={40}/>
          </div>
          <div>
            <span className="xl:text-[1.5rem] text-[1.2rem] font-semibold">{item.text}</span>
          </div>
        </div>
      ))}
    </div>
        
      </div>
    </section>
  );
}

export default Join;
