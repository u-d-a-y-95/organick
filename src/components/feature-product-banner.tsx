import Button from "./button";
import { Yellowtail } from "next/font/google";
import ProductCard from "./product-card";

const yellowtail = Yellowtail({ weight: "400", subsets: ["latin"] });

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
];

export default function FeatureProductBanner({
  title = "Related Products",
}: {
  title: string;
}) {
  return (
    <div className="">
      <div className="container mx-auto py-20 px-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-primary text-4xl font-extrabold mt-2 capitalize">
              {title}
            </h2>
          </div>
          <div className="mt-6">
            <Button label="View All Products" className="" />
          </div>
        </div>
        <div className="px-5 sm:px-0 container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 sm:gap-7 my-20">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
