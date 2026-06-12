import { useState } from "react";
import { ongs as initialOngs } from "../../../data/ongs";

function FeaturedOngs() {
  const [ongsData] = useState(initialOngs);

  const ongsFeatured = ongsData.filter((ong) => ong.featured);
  return (
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
  );
}
export default FeaturedOngs;
