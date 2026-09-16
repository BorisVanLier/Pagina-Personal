import Pupue from "../assets/pupue.gif";
import "./hero.css";

function Hero() {
  return (
    <>
      <section className="bg-[#0977D6] flex flex-col justify-top h-screen">
        <h1 className="text-center text-6xl font-grotesk font-extrabold text-white py-0">
          HOLA SOCIEDAD.
        </h1>
        <img src={Pupue} alt="Pupue" className="pupue" />
      </section>
    </>
  );
}

export default Hero;
