import Pupue from "../assets/pupue.gif";
import "./hero.css";
    {/* <img src={Pupue} alt="Pupue" className="pupue" /> */}
function Hero() {
  return (
    <>
      <section className="bg-[#F2EDE3] flex flex-col justify-top h-screen text-[#1C1917]">
        <h1 className="text-center text-6xl font-grotesk font-extrabold py-0">
          HOLA SOCIEDAD.
        </h1>
        <p className="text-4xl text-center font-bold font-grotesk">
          Soy Boris, un pibe que le gusta jugar videojuegos y aprender muchas cosas relacionadas con tecnología.
          <br />
          El pepe
        </p>
      </section>
    </>
  );
}

export default Hero;
