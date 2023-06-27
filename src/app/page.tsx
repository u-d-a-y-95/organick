import Button from "@/components/button";
import OfferBanner from "@/components/offer-banner";
import ProductCard from "@/components/product-card";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Yellowtail } from "next/font/google";
import Image from "next/image";

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

export default function Home() {
  return (
    <>
      {/* home page banner */}
      <div
        style={{
          background: "#F1EFF0 url('/img/home-banner-2.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-[500px] flex justify-center items-center"
      >
        <div className="w-[400px]">
          <h3 className={`${yellowtail.className} text-secondary text-xlx`}>
            100% Natural Food
          </h3>
          <h2 className="text-4xl font-extrabold mt-2">
            Choose the best healthier way of life
          </h2>
          <div className="mt-8">
            <Button label="Explore Now" className="" />
          </div>
        </div>
        <div className="w-[600px] h-full relative">
          <Image fill={true} src="/img/home-banner-1.png" alt="banner" />
        </div>
      </div>
      {/* offer banner */}
      <div className="py-10 flex flex-col md:flex-row justify-center items-center gap-10">
        <OfferBanner
          src="/img/offer-banner-1.png"
          title="Get Garden Fresh Fruits"
          subTitle="Natural!!"
          color="white"
        />
        <OfferBanner
          src="/img/offer-banner-2.png"
          title="Get 10% off
on Vegetables"
          subTitle="Offer!!"
        />
      </div>

      {/* products */}
      <div className="text-center">
        <div className="p-5 sm:0 container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 sm:gap-10">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="my-16">
          <button className="bg-primary text-white rounded-lg p-4 px-8 text-sm font-semibold">
            Load More
          </button>
        </div>
      </div>
    </>
  );
}
