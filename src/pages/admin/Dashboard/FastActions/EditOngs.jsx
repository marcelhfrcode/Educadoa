function EditOngs({ ongsData, setOngsData }) {
  const handleDeleteOng = (id) => {
    setOngsData((prevOngs) => prevOngs.filter((ong) => ong.id !== id));
  };

  return (
    <div className="bg-[#F8F8F2] rounded-3xl p-8 mt-10 border border-gray-100">
      <h1 className="text-3xl font-bold text-center font-dm text-bgreen mb-8">
        Gerenciar ONGs
      </h1>

      <div className="flex flex-col gap-5">
        {ongsData.map((ong) => (
          <div key={ong.id} className="bg-white p-4 rounded-lg shadow">
            <div>
              <h2 className="text-xl font-bold text-bgreen">{ong.name}</h2>
              <p className="text-gray-600">{ong.description}</p>
            </div>

            <button
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 mt-2 px-4 rounded"
              onClick={() => handleDeleteOng(ong.id)}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditOngs;
