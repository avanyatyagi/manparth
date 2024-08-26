import Hero from "../components/custom/Hero";
import Join from "../components/custom/Join";
import Mission from "../components/custom/Mission";
// import Projects from "../components/custom/Projects";
import Team from "../components/custom/Team";
import Benefits from "../components/custom/Testimonial";

function Home() {
  return (
    <main className="justify-center items-center xl:pt-16 pt-32">
      <Hero />
      <Mission />
      <Team />
      <Benefits />
      {/* <Projects /> */}
      <Join/>
    </main>
  );
}

export default Home;
