import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Конструктор ЛЕГО Замок",
      price: "3 990 ₽",
      oldPrice: "4 990 ₽",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      badge: "Хит продаж",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Кукла Барби Принцесса",
      price: "1 290 ₽",
      image:
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=300&fit=crop",
      badge: "Новинка",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Радиоуправляемая машина",
      price: "2 590 ₽",
      image:
        "https://images.unsplash.com/photo-1558060370-d633c0e82097?w=300&h=300&fit=crop",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Пазл 1000 деталей",
      price: "890 ₽",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=300&fit=crop",
      badge: "Скидка",
      rating: 4.6,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-montserrat font-bold text-center text-gray-900 mb-12">
          Популярные товары
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge
                      className="absolute top-3 left-3"
                      variant={
                        product.badge === "Скидка" ? "destructive" : "default"
                      }
                    >
                      {product.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <CardTitle className="text-lg font-open-sans mb-2 line-clamp-2">
                  {product.name}
                </CardTitle>

                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  В корзину
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Посмотреть все товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
