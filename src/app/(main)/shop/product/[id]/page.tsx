import FeatureProductBanner from "@/components/feature-product-banner";
import NewsLetter from "@/components/news-letter";
import OfferBanner from "@/components/offer-banner";
import Image from "next/image";

export default function Product() {
  return (
    <div>
      <div
        style={{
          background: "#F1EFF0 url('/img/about-banner.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="flex justify-center items-center min-h-[350px]"
      ></div>
      <div className="container mx-auto mt-24">
        <div className="flex flex-col md:flex-row p-10 sm:p-0 justify-center gap-10">
          <div className="relative  w-[400px] h-[400px]">
            <Image src="/img/dummy-product.png" fill={true} alt="product" />
          </div>
          <div className="flex-1 max-w-[600px] self-center">
            <h4 className="text-primary text-4xl font-bold">
              Health Pistachios
            </h4>
            <p>
              <span className="text-gray-500 line-through text-sm">200</span>{" "}
              130
            </p>
            <div className="mt-10 text-gray-600">
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <p className="font-bold text-primary">
                Stock :
                <span className="border p-2 text-center ml-5 rounded w-24 inline-block border-primary">
                  {" "}
                  10
                </span>
              </p>
              <button className="bg-primary text-white border-0 p-2 px-6 capitalize rounded">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-20">
        <FeatureProductBanner title="Related Products" />
      </div>
      <OfferBanner />
      <div className="container mx-auto my-20">
        <NewsLetter />
      </div>
    </div>
  );
}
