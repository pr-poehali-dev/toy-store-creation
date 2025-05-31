import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-500 via-blue-200 to-orange-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-6">
            Мир детских грез
          </h1>
          <p className="text-xl text-white/90 mb-8 font-open-sans">
            Откройте магический мир игрушек, где каждая покупка приносит радость
            и улыбки детям
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
            >
              Смотреть каталог
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
            >
              Популярные товары
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
