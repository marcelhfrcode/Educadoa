import { ongs } from "../../data/ongs";
import DonateCard from "../../components/DonateCard";
import { useEffect, useState } from "react";

function DonateList() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const filteredOngs = ongs.filter((ong) =>
    `${ong.name} ${ong.city} ${ong.category}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <section className="w-full flex flex-col items-center gap-12 fade-up px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-potta">ONGs disponíveis</h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Escolha uma instituição e entre em contato diretamente para descobrir
          como contribuir.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Pesquisar ONG, cidade ou categoria..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-3xl px-5 py-3 rounded-2xl border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {loading ? (
        <div className="py-20">
          <h3 className="text-2xl font-semibold text-black animate-pulse">
            Carregando ONGs...
          </h3>
        </div>
      ) : filteredOngs.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-2xl font-semibold text-gray-700 ">
            Nenhuma ONG encontrada
          </h3>

          <p className="text-gray-500 mt-3">
            Não existem ONGs para o filtro selecionado.
          </p>
        </div>
      ) : (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOngs.map((ong) => (
            <DonateCard key={ong.id} ong={ong} />
          ))}
        </div>
      )}
    </section>
  );
}

export default DonateList;
