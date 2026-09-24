
function Footer() {
  return (
    <footer className="bg-[#292522] text-white">

      <div className="px-10 py-16">

        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row justify-between gap-16">

          {/* LINKS */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase mb-4">
              Links
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Hay que mover el cacharro
            </h2>

            <div className="flex flex-col gap-4 text-xl">

              <a
                href="https://github.com/BorisVanLier"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.youtube.com/@boroselcrack7u7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition"
              >
                Youtube ↗
              </a>

              <a
                href="https://steamcommunity.com/id/217837749203/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition"
              >
                Steam ↗
              </a>

            </div>
          </div>


          <div className="md:text-right">

            <p className="text-sm tracking-[0.3em] uppercase mb-4">
              Contacto
            </p>

            <div className="flex flex-col gap-3 text-lg">

              <p>
                +54 9 11 6113-9604
              </p>

              <a>
                vanlier.boris@gmail.com
              </a>

              <p>
                CABA, Argentina.
              </p>

            </div>

          </div>

        </div>


        <div className="border-t border-[#F2EDE3]/40 mt-16 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm">

          <p>
            © 2026 Proyecto de: Boris
          </p>

          <p>
            Todo vibecodeado con chatgipiti, grok, gemini y claude sonnet
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
