// import logo from "../../assets/logo.png";
import team from "../../assets/team.png";

function Team() {
  return (
    <section className="w-full max-h-screen flex xl:flex-row flex-col justify-between items-center xl:gap-10 gap-5">
      <div className="xl:w-[30%] gap-5 flex flex-col">
        <h1 className="2xl:text-[9rem] xl:text-[7rem] lg:tet-[6rem] md:text-[5rem] text-[3.2rem] text-center xl:text-left leading-none font-bold">
          Team Behind Our Vision
        </h1>
        <span className="text-[1rem] text-center font-medium ">
          Explore the dedicated individuals steering Manparth Bharat. Our team
          combines expertise and commitment to blend ancient knowledge with
          modern education, working towards a unified and enlightened Bharat.
        </span>
      </div>
      <div className="flex flex-col xl:gap-10 xl:w-[60%] justify-end items-end md:block">
        <img src={team} alt="" className="w-[40rem] xl:ml-auto" />
        {/* <div className="flex flex-row gap-10 items-end w-full xl:ml-20">
          <img src={logo} alt="" className="w-[20rem]" />
          <img src={logo} alt="" className="w-[20rem]" />
        </div>
        <div className="flex flex-row gap-10  w-full xl:mr-20">
          <img src={logo} alt="" className="w-[20rem]" />
          <img src={logo} alt="" className="w-[20rem]" />
        </div> */}
      </div>
    </section>
  );
}

export default Team;
