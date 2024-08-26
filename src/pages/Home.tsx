import Hero from "../components/custom/Hero"
import Mission from "../components/custom/Mission"
import Team from "../components/custom/Team"
import Benefits from "../components/custom/Testimonial"

function Home() {
  return (
    <main className="justify-center items-center">
          <Hero />
          <Mission />
          <Team />
          <Benefits />
        </main>
  )
}

export default Home
