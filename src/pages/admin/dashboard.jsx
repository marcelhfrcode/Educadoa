import { ongs } from "../../data/ongs";
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
    <section className="px-4 py-8 md:p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center pt-10 text-black font-potta">
            Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 pt-20 ">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center font-dm font-bold text-lg text-white">
            <button
              onClick={() =>
                setActiveForm(activeForm === "create" ? null : "create")
              }
              className={`cursor-pointer bg-bgreen rounded-lg p-2 transition-colors duration-300 ${
                activeForm === "create"
                  ? "bg-green scale-105 shadow-lg"
                  : "bg-bgreen"
              }`}
            >
              Nova ONG
            </button>

            <button
              onClick={() =>
                setActiveForm(activeForm === "manage" ? null : "manage")
              }
              className={`cursor-pointer bg-bgreen rounded-lg p-2 transition-colors duration-300 ${
                activeForm === "manage"
                  ? "bg-green scale-105 shadow-lg"
                  : "bg-bgreen"
              }`}
            >
              Gerenciar ONGs
            </button>

            <button
              onClick={() =>
                setActiveForm(activeForm === "categories" ? null : "categories")
              }
              className={`cursor-pointer bg-bgreen rounded-lg p-2 transition-colors duration-300 ${
                activeForm === "categories"
                  ? "bg-green scale-105 shadow-lg"
                  : "bg-bgreen"
              }`}
            >
              Categorias
            </button>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeForm ? "max-h-[1000px] mt-6" : "max-h-0"
            }`}
          >
            {activeForm === "create" && <CreateOngForm />}
            {activeForm === "manage" && <EditOngs />}
            {activeForm === "categories" && <CategoriesForm />}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 mt-15">
          <h2 className="text-3xl font-semibold p-6 font-dm text-center">
            Ongs em destaque:
          </h2>

          <div className="flex flex-col gap-6 p-4">
            {ongsFeatured.map((ong) => (
              <div
                key={ong.id}
                className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-800">
                        {ong.name}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-500 mt-1">
                      {Array.isArray(ong.category)
                        ? ong.category.join(", ")
                        : ong.category}
                    </p>

                    <p className="text-gray-600 mt-3 line-clamp-2">
                      {ong.description}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-lg bg-green text-white hover:opacity-90 transition">
                      Editar
                    </button>

                    <button className="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">
                      Remover destaque
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
