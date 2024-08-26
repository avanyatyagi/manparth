import Breadcrums from "../components/ui/Breadcrums";
import AboutUs from "../components/custom/About/AboutUs";
import Connect from "../components/custom/About/Connect";

function About() {
  return (
    <section className="justify-center items-center xl:pt-24 pt-32 gap-20 flex flex-col">
      <div className="flex flex-col items-center bg-gray-300 p-10 relative " style={{ width: 'calc(100% + 10rem)' }}>
        <h1 className="text-[5rem]">About Us</h1>
        <Breadcrums />
      </div>
      <AboutUs />
      <Connect/>
    </section>
  );
}

export default About;
