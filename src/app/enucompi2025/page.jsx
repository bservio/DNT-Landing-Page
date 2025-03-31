const { default: Link } = require("next/link");
const { default: Navbar } = require("../components/Header");

const EnucompiPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1000px] m-auto">
        <div className="mt-4">
          <h1 className="font-bold text-3xl">O ENUCOMPI 2025 será no DNT!</h1>
          <h2 className="font-semibold text-xl mt-4">Chamadas:</h2>
          <ul className="list-disc p-8 ml-10 text-justify">
            <li>
              <Link
                className="cursor-pointer text-teal-400 underline"
                href="/chamadas/artigos"
              >
                Artigos
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer text-teal-400 underline"
                href="/chamadas/minicursos"
              >
                Minicursos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default EnucompiPage;
