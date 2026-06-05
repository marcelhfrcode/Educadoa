import { ongs } from "../../data/ongs";
import DonateCard from "../../components/DonateCard";
import { useState, useEffect } from "react";

function OngCards() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const ongsFeatured = ongs.filter((ong) => ong.featured);

  return (
    <section id="possibilidades" className="scroll-mt-28">
      <div>
        <h2 className="text-3xl text-center p-15 pt-35 font-potta">
          Como você pode fazer parte:
        </h2>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <h3 className="text-2xl font-semibold text-black animate-pulse col-span-full text-center">
              Carregando ONGs...
            </h3>
          ) : (
            ongsFeatured.map((ong) => <DonateCard key={ong.id} ong={ong} />)
          )}
        </div>
      </div>
    </section>
  );
}

export default OngCards;
