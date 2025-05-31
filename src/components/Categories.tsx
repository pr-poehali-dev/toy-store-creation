const Categories = () => {
  const categories = [
    { name: "Конструкторы", icon: "🧱", color: "bg-red-100 text-red-600" },
    { name: "Куклы", icon: "👧", color: "bg-pink-100 text-pink-600" },
    { name: "Машинки", icon: "🚗", color: "bg-blue-100 text-blue-600" },
    { name: "Развивающие", icon: "🧩", color: "bg-green-100 text-green-600" },
    { name: "Спорт", icon: "⚽", color: "bg-orange-100 text-orange-600" },
    { name: "Творчество", icon: "🎨", color: "bg-purple-100 text-purple-600" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-montserrat font-bold text-center text-gray-900 mb-12">
          Популярные категории
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div
                className={`${category.color} p-6 rounded-2xl text-center transition-transform group-hover:scale-105 group-hover:shadow-lg`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-open-sans font-semibold">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
