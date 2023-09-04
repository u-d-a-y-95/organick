import {
  EyeIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

interface IProductCard {
  name: string;
  categoryName: string;
  price: number;
  url: string;
}

export default function ProductCard({
  categoryName,
  name,
  price,
  url,
}: IProductCard) {
  return (
    <div className="flex flex-col h-[280px] sm:h-[300px] md:h-[350px] w-[200px] sm:w-full   border rounded p-4 sm:p-8 text-left hover:bg-white hover:scale-y-105 origin-top hover:shadow transition duration-200 group relative">
      <div>
        <span className="bg-primary p-2 text-white rounded-lg">
          {categoryName}
        </span>
      </div>
      <div className="relative w-full flex-1">
        <Image src={url} fill={true} alt="category" />
      </div>
      <div className="">
        <div className="text-primary-dark">{name}</div>
        <div className="w-full border my-1"></div>
        <div>
          <span className="">${price}</span>
          <div></div>
        </div>
      </div>
      <div className="hidden group-hover:block absolute bottom-0 top-0 right-0  bg-secondary-light">
        <div className="h-full flex flex-col justify-end gap-3 p-2">
          <div className=" p-2 rounded-full bg-secondary hover:bg-primary text-white">
            <HeartIcon className="w-4 aspect-square" />
          </div>
          <div className="bg-gray-200 p-2 rounded-full hover:bg-primary hover:text-white">
            <ShoppingBagIcon className="w-4 aspect-square" />
          </div>
          <div className="bg-gray-200 p-2 rounded-full hover:bg-primary hover:text-white">
            <EyeIcon className="w-4 aspect-square" />
          </div>
        </div>
      </div>
    </div>
  );
}
