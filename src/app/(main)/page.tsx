import Button from "@/components/button";
import NewsLetter from "@/components/news-letter";
import OfferBanner from "@/components/offer-banner";
import OfferCard from "@/components/offer-card";
import ProductCard from "@/components/product-card";
import TestimonialRoundCard from "@/components/testimonial-round-card";
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
      <div className="container mx-auto flex gap-8 my-8">
        <div className="min-w-[250px] font-semibold">
          <div className="bg-primary text-white p-3 py-4">All departments</div>
          <div className="bg-gray-100">
            <div className="p-3 border-b border-dashed border-primary">
              Fresh Meats
            </div>
            <div className="p-3 border-b border-dashed border-primary">
              Vegetables
            </div>
            <div className="p-3 last:border-0 border-b border-dashed border-primary">
              Fruits Nuts
            </div>
            <div className="p-3 border-b border-dashed border-primary">
              Fresh Meats
            </div>
            <div className="p-3 border-b border-dashed border-primary">
              Vegetables
            </div>
            <div className="p-3 last:border-0 border-b border-dashed border-primary">
              Fruits Nuts
            </div>
            <div className="p-3 border-b border-dashed border-primary">
              Fresh Meats
            </div>
            <div className="p-3 border-b border-dashed border-primary">
              Vegetables
            </div>
            <div className="p-3 last:border-0 border-b border-dashed border-primary">
              Fruits Nuts
            </div>
            <div className="p-3 last:border-0 border-b border-dashed border-primary">
              Fruits Nuts
            </div>
          </div>
        </div>
        <div className="flex-1 h-[550px] flex flex-col gap-8 ">
          <div className="flex items-center">
            <select className="border p-3 w-52">
              <option>Vegetables</option>
            </select>
            <input className="flex-1 outline-none border p-3" />
            <button className="bg-primary text-white px-4 py-3 min-w-[200px]">
              seacrh
            </button>
          </div>
          <div
            style={{
              background: "#F1EFF0 url('/img/home-banner-2.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="flex-1 flex p-10 items-center relative"
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
            <div className="absolute bottom-0 right-0">
              <Image
                width={500}
                height={500}
                src="/img/home-banner-1.png"
                alt="banner"
              />
            </div>
          </div>
        </div>
      </div>

      {/* offer banner */}
      <div className="my-16 py-10 flex flex-col md:flex-row justify-center items-center gap-10">
        <OfferCard
          src="/img/offer-banner-1.png"
          title="Get Garden Fresh Fruits"
          subTitle="Natural!!"
          color="white"
        />
        <OfferCard
          src="/img/offer-banner-2.png"
          title="Get 10% off
on Vegetables"
          subTitle="Offer!!"
        />
      </div>

      {/* products */}
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold my-5 border-b-2 border-primary py-2">
          Featured Products
        </h3>
        <div
          className="container mx-auto
        mt-8 
        grid 
        grid-cols-2 
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4 
        justify-items-center 
        gap-4 
        sm:gap-7"
        >
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

      {/* testimonial */}
      <div
        style={{
          background: "#F1EFF0 url('/img/testimonial-1.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center mt-20">
          <h3 className={`${yellowtail.className} text-secondary text-xlx`}>
            Testimonial
          </h3>
          <h2 className="text-4xl font-extrabold mt-2 text-center">
            What Our Customer Saying?
          </h2>
          <div className="my-10">
            <div className="w-96 text-center">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
              </div>

              <p className="text-sm font-thin my-2">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>

              <div className="leading-tight mt-3">
                <h5 className="">Sara Tylor</h5>
                <span className="text-[12px] font-thin">Consumer</span>
              </div>
            </div>
          </div>
          <div className="border w-full mb-10"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-20">
          <TestimonialRoundCard title="100%" subtitle="Organic" />
          <TestimonialRoundCard title="285" subtitle="Active product" />
          <TestimonialRoundCard title="350+" subtitle="Organic Orchads" />
          <TestimonialRoundCard title="25+" subtitle="Years of Farming" />
        </div>
      </div>

      <OfferBanner />
      <div className="flex w-full h-[600px]">
        <div className="hidden sm:block relative flex-1">
          <Image src="/img/home-bg-2.png" alt="banner" fill={true} />
        </div>
        <div className="flex-1 relative self-center md:self-auto">
          <div className="w-full rounded-lg p-10 bg-white md:absolute md:-left-12 md:top-1/2 md:-translate-y-1/2 md:w-3/4 xl:w-1/2">
            <span className={`${yellowtail.className} text-secondary text-2xl`}>
              Eco Friendly
            </span>
            <h4 className="text-3xl font-extrabold">
              Econis is a Friendly Organic Store
            </h4>
            <div className="flex flex-col gap-5 my-5">
              <div>
                <h5 className="text-sm font-semibold">
                  Start with Our Company First
                </h5>
                <p className="text-[10px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
              <div>
                <h5 className="text-sm font-semibold">
                  Learn How to Grow Yourself
                </h5>
                <p className="text-[10px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium
                </p>
              </div>
              <div>
                <h5 className="text-sm font-semibold">
                  Farming Strategies of Today
                </h5>
                <p className="text-[10px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F1F8F4] h-[500px]"></div>
      {/* news letter */}
      <div className="container mx-auto my-20">
        <NewsLetter />
      </div>
    </>
  );
}
