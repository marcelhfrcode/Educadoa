import CreateOngForm from "./FastActions/CreateOngForm";
import EditOngs from "./FastActions/EditOngs";
import CategoriesForm from "./FastActions/CategoriesForm";
import { useState } from "react";

function FastActions({ ongsData, setOngsData }) {
  const [activeForm, setActiveForm] = useState(null);

  const categories = [...new Set(ongsData.flatMap((ong) => ong.category))];

  const handleCreateOng = (newOng) => {
    setOngsData((prev) => [
      ...prev,
      {
        ...newOng,
        id: Date.now(),
      },
    ]);
  };

  return (
    <div>
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
          {activeForm === "create" && (
            <CreateOngForm onCreate={handleCreateOng} categories={categories} />
          )}
          {activeForm === "manage" && (
            <EditOngs ongsData={ongsData} setOngsData={setOngsData} />
          )}
          {activeForm === "categories" && (
            <CategoriesForm categories={categories} />
          )}
        </div>
      </div>
    </div>
  );
}
export default FastActions;
