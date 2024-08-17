import logo from "../../assets/logo.png";
function Team() {
  return (
    <section className="w-full max-h-screen flex xl:flex-row flex-col justify-between items-center xl:gap-10">
      <div className="xl:w-[30%] ">
        <h1 className="2xl:text-[9rem] xl:text-[7rem] lg:tet-[6rem] md:text-[5rem] text-[3.2rem] leading-none font-bold">
          Team Behind Our Vision
        </h1>
        <span>
          Explore the dedicated individuals steering Manparth Bharat. Our team
          combines expertise and commitment to blend ancient knowledge with
          modern education, working towards a unified and enlightened Bharat.
        </span>
      </div>
      <div className="flex flex-col xl:gap-10 xl:w-[40%] justify-end items-end  ">
        <div className="flex flex-row gap-10 items-end justify-end  w-full xl:ml-20">
          <img src={logo} alt="" className="w-full"/>
          <img src={logo} alt=""  className="w-full"/>
        </div>
        <div className="flex flex-row gap-10  w-full xl:mr-20">
          <img src={logo} alt=""  className="w-full" />
          <img src={logo} alt="" className="w-full"/>
        </div>
      </div>
    </section>
  );
}

export default Team;
