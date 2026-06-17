function Dashboard({ ongsData }) {
  const ongsLength = ongsData.length;
  const ongsFeatured = ongsData.filter((ong) => ong.featured);
  const categoriesLength = new Set(ongsData.flatMap((ong) => ong.category))
    .size;

  return (
    <section className="px-4 py-8 md:p-8">
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
              {categoriesLength}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
