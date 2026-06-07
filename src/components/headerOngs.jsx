import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";
function HeaderOngs() {
  return (
    <section id="start">
      <div className="flex items-center justify-center p-3 w-full px-4 sm:px-6 md:px-10 py-4 font-dm font-light bg-[#3B9A66]">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="w-28 sm:w-28 md:w-38" />
        </Link>
      </div>
    </section>
  );
}

export default HeaderOngs;
