import Button from "@/components/button";
import OfferBanner from "@/components/offerBanner";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

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
          <h3 className="text-secondary italic">100% Natural Food</h3>
          <h2 className="text-4xl font-extrabold mt-2">
            Choose the best healthier way of life
          </h2>
          <div className="mt-8">
            <Button />
          </div>
        </div>
        <div className="w-[600px] h-full relative">
          <Image fill={true} src="/img/home-banner-1.png" alt="banner" />
        </div>
      </div>
      {/* offer banner */}
      <div className=" h-[350px] flex justify-center items-center gap-10">
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
    </>
  );
}
