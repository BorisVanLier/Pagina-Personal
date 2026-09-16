import { useState } from "react";
import BotonNavbar from "./components/BotonNavbar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="h-20 flex items-center justify-between px-10 bg-[#0936D6] texto">
        
        <h1
          className="text-4xl text-white "
        >
          PAGINA WEB
        </h1>

        <div className="hidden md:flex gap-8">
          <button className="text-2xl font-extrabold ">
            Inicio
          </button>

          <button className="text-2xl font-extrabold">
            Sobre mí
          </button>

          <button className="text-2xl font-extrabold">
            Contacto
          </button>
        </div>

        <BotonNavbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#0936D6] flex flex-col items-center gap-4 py-4 text-white text-xl border-[#1E09D6] border-b-2 border-t-2">
          <button className="text-2xl font-extrabold">
            Inicio
          </button>
          <button className="text-2xl font-extrabold">
            Sobre mí
          </button>
          <button className="text-2xl font-extrabold">
            Contacto
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;