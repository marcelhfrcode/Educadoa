import { ongs } from "../../data/ongs";
import DonateCard from "../../components/DonateCard";
import { useState } from "react";
import CreateOngForm from "./Dashboard/CreateOngForm";
import EditOngs from "./Dashboard/EditOngs";
import CategoriesForm from "./Dashboard/CategoriesForm";

function Dashboard() {
  const ongsLength = ongs.length;
  const ongsFeatured = ongs.filter((ong) => ong.featured);
  const categories = new Set(ongs.flatMap((ong) => ong.category)).size;

  const [activeForm, setActiveForm] = useState(null);

  return (
    <section className="p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-6xl text-center pt-10 text-black font-potta">
            Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 pt-20 ">
          <div className="bg-[#F8F8F2] shadow-lg rounded-2xl shadow-sm p-6 transition-all duration-300 hover:translate-y-1 hover:scale-[1.01] hover:shadow-md">
            <h3 className="text-bgreen text-1xl font-dm text-center font-bold">
              Total de ONGs
            </h3>

            <p className="text-4xl text-green font-bold mt-2 text-center">
              {ongsLength}
            </p>
          </div>

          <div className="bg-[#F8F8F2] shadow-lg rounded-2xl shadow-sm p-6 transition-all duration-300 hover:translate-y-1 hover:scale-[1.01] hover:shadow-md">
            <h3 className="text-bgreen text-1xl font-dm text-center font-bold">
              ONGs em Destaque
            </h3>

            <p className="text-4xl text-green font-bold mt-2 text-center">
              {ongsFeatured.length}
            </p>
          </div>

          <div className="bg-[#F8F8F2] shadow-lg rounded-2xl shadow-sm p-6 transition-all duration-300 hover:translate-y-1 hover:scale-[1.01] hover:shadow-md">
            <h3 className="text-bgreen text-1xl font-dm text-center font-bold">
              Categorias
            </h3>

            <p className="text-4xl text-green font-bold mt-2 text-center">
              {categories}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-3xl font-semibold p-6 font-dm text-center">
            Ações rápidas
          </h2>

          <div className="grid grid-cols-3 gap-4 text-center font-dm font-bold text-lg text-white">
            <button
              onClick={() =>
                setActiveForm(activeForm === "create" ? null : "create")
              }
              className={`cursor-pointer bg-bgreen rounded-lg p-2 transition-colors duration-300 ${
                activeForm === "create" ? "bg-green" : "bg-bgreen"
              }`}
            >
              Nova ONG
            </button>

            <button
              onClick={() =>
                setActiveForm(activeForm === "manage" ? null : "manage")
              }
              className={`cursor-pointer bg-bgreen rounded-lg p-2 transition-colors duration-300 ${
                activeForm === "manage" ? "bg-green" : "bg-bgreen"
              }`}
            >
              Gerenciar ONGs
            </button>

            <button
              onClick={() =>
                setActiveForm(activeForm === "categories" ? null : "categories")
              }
              className={`cursor-pointer bg-bgreen rounded-lg p-2 transition-colors duration-300 ${
                activeForm === "categories" ? "bg-green" : "bg-bgreen"
              }`}
            >
              Categorias
            </button>
          </div>

          <div className="flex">
            {activeForm === "create" && <CreateOngForm />}
            {activeForm === "manage" && <EditOngs />}
            {activeForm === "categories" && <CategoriesForm />}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-20">
          <div className="bg-[#F8F8F2] shadow-lg rounded-2xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold p-6 font-dm text-center">
              ONGs em destaque
            </h2>

            {ongsFeatured.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-black-500">
                  Nenhuma ONG em destaque encontrada.
                </p>
              </div>
            ) : (
              <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {ongsFeatured.map((ong) => (
                  <DonateCard key={ong.id} ong={ong} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
