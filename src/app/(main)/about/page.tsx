import Button from "@/components/button";
import NewsLetter from "@/components/news-letter";
import OfferBanner from "@/components/offer-banner";
import Image from "next/image";
import { Yellowtail } from "next/font/google";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { title } from "process";

const yellowtail = Yellowtail({ weight: "400", subsets: ["latin"] });

const Card = ({ Icon, title, description }: any) => {
  return (
    <div className="flex flex-col items-center max-w-[150px]">
      <div className="bg-[#ECECEC] w-fit p-4 rounded ">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-bold my-1">{title}</h3>
      <p className="text-center text-xs font-thin">{description}</p>
    </div>
  );
};

const cardList = [
  {
    icon: ShoppingBagIcon,
    title: "Return Policy",
    description: "Simply dummy text of the print into pesetting industry",
  },
  {
    icon: ShoppingBagIcon,
    title: "100% Fresh",
    description: "Simply dummy text of the print into pesetting industry",
  },
  {
    icon: ShoppingBagIcon,
    title: "Support 24/7",
    description: "Simply dummy text of the print into pesetting industry",
  },
  {
    icon: ShoppingBagIcon,
    title: "Secured Payment",
    description: "Simply dummy text of the print into pesetting industry",
  },
];

export default function About() {
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
        <h2 className="text-4xl font-bold">About Us</h2>
      </div>
      <div className="h-[600px] flex justify-center items-center">
        <div className="hidden md:block w-[600px] h-full relative">
          <Image fill={true} src="/img/about-banner-2.png" alt="banner" />
        </div>
        <div className="w-[400px]">
          <h3 className={`${yellowtail.className} text-secondary text-xlx`}>
            About Us
          </h3>
          <h2 className="text-4xl font-extrabold mt-2">
            We do Creative Things for Success
          </h2>
          <p className="text-primary-dark text-sm font-thin my-3">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <p className="text-primary-dark text-sm font-thin my-3">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="my-5 flex flex-col sm:flex-row gap-4">
            <div className="flex gap-3 items-center">
              <div className="relative h-16 w-24">
                <Image src="/img/card-1.png" fill={true} alt="card" />
              </div>
              <div className="flex justify-between flex-col">
                <h5 className="font-semibold">Organic Foods Only</h5>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="relative h-16 w-24">
                <Image src="/img/card-2.png" fill={true} alt="card" />
              </div>
              <div className="flex justify-between flex-col">
                <h5 className="font-semibold">Quality Standards</h5>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Button label="Shop Now" className="bg-primary text-white" />
          </div>
        </div>
      </div>
      <div className="bg-secondary-accent-light">
        <div className="container mx-auto p-10">
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex-1">
              <h3
                className={`${yellowtail.className} text-secondary text-2xl font-thin`}
              >
                Why Choose us?
              </h3>
              <h2 className="text-3xl font-bold">
                We do not buy from the open market & traders.
              </h2>
              <p className="text-sm font-thin">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industrys standard the 1500s, when
                an unknown
              </p>

              <div className="mt-5">
                <div>
                  <div className="flex gap-2 items-center bg-[#ECECEC] p-5 rounded-full w-72">
                    <div className="border-4 border-secondary rounded-full w-5 h-5"></div>
                    <h1>100% Natural Product</h1>
                  </div>
                  <p className="text-sm font-thin mt-2 ml-10">
                    Simply dummy text of the printing and typesetting industry
                    Lorem Ipsum
                  </p>
                </div>
                <div className="mt-5">
                  <div className="flex gap-2 items-center bg-[#ECECEC] p-5 rounded-full w-72">
                    <div className="border-4 border-secondary rounded-full w-5 h-5"></div>
                    <h1>100% Natural Product</h1>
                  </div>
                  <p className="text-sm font-thin mt-2 ml-10">
                    Simply dummy text of the printing and typesetting industry
                    Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[250px] sm:flex-1 w-full sm:w-1/2">
              <Image src="/img/about-banner-3.png" alt="banner" fill={true} />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 my-24 gap-10 justify-items-center">
            {cardList.map((card, index) => (
              <Card key={index} Icon={card.icon} {...card} />
            ))}
          </div>
        </div>
      </div>
      <OfferBanner />
      <div className="container mx-auto my-20">
        <NewsLetter />
      </div>
    </div>
  );
}
