import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

function HeaderAdm({ tab, setTab }) {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-10 py-4 font-dm">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo Educadoa"
            className="w-28 sm:w-28 md:w-38"
          />
        </Link>
        <nav>
          <ul className="hidden md:flex gap-6 lg:gap-10 text-base lg:text-2xl">
            <li
              className="cursor-pointer opacity-75 transition-all duration-300 hover:opacity-100"
              onClick={() => setTab("dashboard")}
            >
              Dashboard
            </li>
            <li
              className="cursor-pointer opacity-75 transition-all duration-300 hover:opacity-100"
              onClick={() => setTab("ongs")}
            >
              ONGs
            </li>
            <li
              className="cursor-pointer opacity-75 transition-all duration-300 hover:opacity-100"
              onClick={() => setTab("doacoes")}
            >
              Doações
            </li>
            <li
              className="cursor-pointer opacity-75 transition-all duration-300 hover:opacity-100"
              onClick={() => setTab("usuarios")}
            >
              Usuários
            </li>
          </ul>
        </nav>

        <Link
          to="/"
          className="px-4 py-2 rounded-xl border border-red-500 bg-red-500 text-white hover:text-red-500 hover:bg-white hover:text-red transition-all duration-300"
        >
          Sair
        </Link>
      </div>
    </header>
  );
}

export default HeaderAdm;
