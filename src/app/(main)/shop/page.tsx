import NewsLetter from "@/components/news-letter";
import ProductCard from "@/components/product-card";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const products = [
  {
    name: "Calabrese Broccoli",
    categoryName: "Vegetables",
    url: "/img/category-1.png",
    price: 20,
  },
  {
    name: "Calabrese Broccoli",
    categoryName: "Vegetables",
    url: "/img/category-1.png",
    price: 20,
  },
  {
    name: "Calabrese Broccoli",
    categoryName: "Vegetables",
    url: "/img/category-1.png",
    price: 20,
  },
  {
    name: "Calabrese Broccoli",
    categoryName: "Vegetables",
    url: "/img/category-1.png",
    price: 20,
  },
  {
    name: "Calabrese Broccoli",
    categoryName: "Vegetables",
    url: "/img/category-1.png",
    price: 20,
  },
  {
    name: "Calabrese Broccoli",
    categoryName: "Vegetables",
    url: "/img/category-1.png",
    price: 20,
  },
  {
    name: "Calabrese Broccoli",
    categoryName: "Vegetables",
    url: "/img/category-1.png",
    price: 20,
  },
  {
    name: "Calabrese Broccoli",
    categoryName: "Vegetables",
    url: "/img/category-1.png",
    price: 20,
  },
];

export default function Shop() {
  return (
    <div>
      <div
        style={{
          background: "#F1EFF0 url('/img/about-banner.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="flex justify-center items-center min-h-[350px]"
      >
        <h2 className="text-4xl font-bold">Shop</h2>
      </div>
      <div className="flex flex-col sm:flex-row container mx-auto py-10">
        <div className="min-w-[250px] border-r px-10">
          <div className="text-xl font-semibold ">Filter</div>

          <div className="mt-10 flex flex-col gap-6">
            <div>
              <p className="font-semibold mb-2">Price</p>
              <input className="border p-2" placeholder="enter price" />
            </div>
            <div className="font-semibold mb-2">
              <p className="font-semibold mb-2">Categpries</p>
              <div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className=" w-4 h-4 checked:bg-secondary text-white checked:text-white"
                    id="fruits"
                  />
                  <label className="ml-2 font-medium" htmlFor="fruits">
                    Fruits
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className=" w-4 h-4 checked:bg-secondary text-white checked:text-white"
                    id="vegetables"
                  />
                  <label className="ml-2 font-medium" htmlFor="vegetables">
                    Vegetables
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className=" w-4 h-4 checked:bg-secondary text-white checked:text-white"
                    id="nuts"
                  />
                  <label className="ml-2 font-medium" htmlFor="nuts">
                    Nuts
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 pl-10">
          <div>
            <div className="flex items-stretch">
              <input
                placeholder="search"
                className="border p-2 min-w-[300px]"
              />
              <button className=" bg-secondary px-4 text-white rounded-e">
                <MagnifyingGlassIcon className="w-5 h-5" />{" "}
              </button>
            </div>
            <div></div>
          </div>
          <div className="my-5">
            <div className="sm:0 container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center gap-4 sm:gap-7">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-20">
        <NewsLetter />
      </div>
    </div>
  );
}
