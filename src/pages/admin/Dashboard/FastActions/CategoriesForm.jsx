function CategoriesForm({ categories }) {
  return (
    <div className="bg-[#F8F8F2] rounded-3xl p-8 mt-10 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center text-center gap-6">
        {categories.map((category) => (
          <p
            className="bg-green opacity-90 text-white font-bold rounded-2xl p-2 transition-all duration-300 hover:opacity-100 hover:translate-y-1"
            key={category}
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
}

export default CategoriesForm;
