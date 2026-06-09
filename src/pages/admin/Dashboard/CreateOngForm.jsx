import { use, useState } from "react";

function CreateOngForm({ onCreate, categories }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [returnGravarOng, setReturnGravarOng] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !city.trim() ||
      !description.trim() ||
      !category.trim() ||
      !contact.trim()
    ) {
      setReturnGravarOng("Por favor, preencha todos os campos.");
      return;
    }

    onCreate({
      name,
      city,
      description,
      category: [category],
      logo: "",
      contact,
      featured: false,
    });

    setCity("");
    setName("");
    setCategory("");
    setDescription("");
    setContact("");
    setReturnGravarOng("");
  };

  return (
    <div className="bg-[#F8F8F2] rounded-3xl p-8 mt-10 border border-gray-100">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center font-dm text-bgreen mb-8">
          Criar Nova ONG
        </h1>

        <div className="flex flex-col gap-5">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome da ONG"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green bg-white"
          />

          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Cidade da ONG"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green bg-white"
          />

          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Link de contato"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green bg-white"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green  bg-white"
          >
            <option value="">Selecione uma categoria</option>

            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição da ONG"
            rows={5}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none resize-none focus:border-green bg-white"
          />

          <h3 className="text-lg font-semibold text-red-500 text-center">
            {returnGravarOng}
          </h3>

          <button
            type="submit"
            className="bg-bgreen text-white font-bold py-3 rounded-xl hover:bg-green transition-all duration-300 hover:scale-[1.02]"
          >
            Criar ONG
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateOngForm;
