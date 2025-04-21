
import React from "react";
import { ProductCard } from "../ui/ProductCard";

export const ProductCatalog: React.FC = () => {
  const products = [
    {
      id: 1,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/64f952fd2a1707f38b17770dd866524a02bc9efd?placeholderIfAbsent=true",
      title: "Victoria F1",
      description: "Premium celery seedling with crisp, fresh leaves.",
      price: "KES 120",
    },
    {
      id: 2,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f211ad1383b5467306f0a66d1bb9fb1f9725c9df?placeholderIfAbsent=true",
      title: "Gloria F1",
      description: "Robust cabbage seedling known for its healthy growth.",
      price: "KES 150",
    },
    {
      id: 3,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0208cdbfe13f900e3b591878f618612112f8c55?placeholderIfAbsent=true",
      title: "Pretoria F1",
      description: "Reliable seedling for vibrant growth and high yield.",
      price: "KES 130",
    },
    {
      id: 4,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5e113bf08861574496ba168f7f78d24f86df5fc?placeholderIfAbsent=true",
      title: "Baraka F1",
      description: "Seedling with excellent flavor and texture.",
      price: "KES 140",
    },
    {
      id: 5,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/be0e388bd237e6edc83336f9b84f60bb1030e6d7?placeholderIfAbsent=true",
      title: "Ansal (Tomato)",
      description: "Vigorous tomato seedling ideal for organic farming.",
      price: "KES 110",
    },
    {
      id: 6,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4bf87e01c4e1ba286db89d919d62b2ecf06ba013?placeholderIfAbsent=true",
      title: "Terminator F1",
      description: "Robust seedling designed for high resistance and yield.",
      price: "KES 160",
    },
    {
      id: 7,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e880bb975299795e90ef53e910fe8c441436ac32?placeholderIfAbsent=true",
      title: "Managu",
      description: "Nutritious leafy green seedling for sustainable diets.",
      showLearnMore: true,
      price: "KES 100",
    },
    {
      id: 8,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/36103e72c8a7f7690a6b73b43ce904a79bfda050?placeholderIfAbsent=true",
      title: "Sukumawiki Tausi F1",
      description: "Durable kale seedling for sustained production.",
      price: "KES 130",
    },
    {
      id: 9,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2727010d1860ececded87e0c6bc362a4a9f8647?placeholderIfAbsent=true",
      title: "Sukumawiki Spiner F1",
      description: "Premium kale variety with robust nutritional value.",
      price: "KES 140",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Products Catalog
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Browse our selection of premium seedlings, all grown with care for maximum yield and quality
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              title={product.title}
              description={product.description}
              price={product.price}
              showLearnMore={product.showLearnMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
